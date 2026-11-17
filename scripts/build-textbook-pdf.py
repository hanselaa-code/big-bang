#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Genererer den komplette, rikt illustrerte Vg1 Naturfag-læreboken
«UNIVERSET – Fra Big Bang til det kosmiske nettverket» som PDF
ved å kombinere all fagteori og alle illustrasjoner fra nettsiden
med utfyllende pedagogisk lærebokstoff, formler, ordliste, øvingsoppgaver og fasit.

Kjør: python3 scripts/build-textbook-pdf.py
Output: public/Universet-Laerebok-Vg1.pdf
"""

import base64
import html as html_lib
import io
import json
import os
import subprocess
import tempfile
from PIL import Image

from textbook_enrichment import CHAPTER_ENRICHMENTS, GLOSSARY

ROOT = "/home/antigravity"
IMG_DIR = os.path.join(ROOT, "public", "images", "bigbang")
OUT_PDF = os.path.join(ROOT, "public", "Universet-Laerebok-Vg1.pdf")


def esc(text: str) -> str:
    return html_lib.escape(str(text), quote=True)


def load_curriculum_json() -> dict:
    js_code = """
const { createJiti } = require('jiti');
const jiti = createJiti(process.cwd() + '/package.json');
const { THEME_LIST } = jiti('./src/data/themes.ts');
const { UNIVERSE_CENTER_NODE, UNIVERSE_HUB_NODES } = jiti('./src/data/universeHubData.ts');
console.log(JSON.stringify({
  themes: THEME_LIST,
  center: UNIVERSE_CENTER_NODE,
  hubNodes: UNIVERSE_HUB_NODES
}));
"""
    res = subprocess.run(
        ["node", "-e", js_code],
        cwd=ROOT,
        capture_output=True,
        text=True,
        check=True,
    )
    return json.loads(res.stdout)


def encode_img_data_uri(image_url: str, cache: dict, max_w: int = 860, quality: int = 80) -> str:
    fname = os.path.basename(image_url)
    key = (fname, max_w, quality)
    if key in cache:
        return cache[key]
    path = os.path.join(IMG_DIR, fname)
    if not os.path.exists(path):
        return ""
    with Image.open(path) as im:
        im = im.convert("RGB")
        if im.width > max_w:
            new_h = max(1, round(im.height * (max_w / im.width)))
            im = im.resize((max_w, new_h), Image.Resampling.LANCZOS)
        buf = io.BytesIO()
        im.save(buf, format="JPEG", quality=quality, optimize=True)
        b64 = base64.b64encode(buf.getvalue()).decode("ascii")
        uri = f"data:image/jpeg;base64,{b64}"
        cache[key] = uri
        return uri


def render_table_html(table: dict) -> str:
    headers = table.get("headers", [])
    rows = table.get("rows", [])
    th = "".join(f"<th>{esc(h)}</th>" for h in headers)
    trs = []
    for row in rows:
        tds = "".join(f"<td>{esc(cell)}</td>" for cell in row)
        trs.append(f"<tr>{tds}</tr>")
    return f"""
    <table class="data-table">
      <thead><tr>{th}</tr></thead>
      <tbody>{''.join(trs)}</tbody>
    </table>
    """


def build_html(data: dict) -> str:
    img_cache: dict = {}
    themes = data["themes"]
    center = data["center"]
    hub_nodes = data["hubNodes"]

    cover_uri = encode_img_data_uri(center["imageUrl"], img_cache, max_w=1200, quality=84)

    # Cover badges for the 6 themes
    cover_thumbs = []
    for hub in hub_nodes:
        t_uri = encode_img_data_uri(hub["imageUrl"], img_cache, max_w=320, quality=80)
        cover_thumbs.append(
            f"""
            <div class="cover-topic">
              <img src="{t_uri}" alt="{esc(hub['title'])}" />
              <span>{esc(hub['title'])}</span>
            </div>
            """
        )

    # Overview table on Page 2
    overview_rows = []
    for theme in themes:
        enr = CHAPTER_ENRICHMENTS[theme["id"]]
        overview_rows.append(
            f"""
            <tr>
              <td><strong>Kap. {enr['chapter_num']}</strong></td>
              <td><span class="dot" style="background:{enr['accent']}"></span> <strong>{esc(theme['dropdownTitle'].split(' – ')[0])}</strong></td>
              <td>{esc(theme['dropdownBadge'])}</td>
              <td>{esc(theme['dropdownDescription'])}</td>
            </tr>
            """
        )

    # Table of Contents
    toc_blocks = []
    for theme in themes:
        enr = CHAPTER_ENRICHMENTS[theme["id"]]
        ch_num = enr["chapter_num"]
        ch_title = theme["title"]
        sub_items = []
        for idx, node in enumerate(theme["allNodes"], start=1):
            sub_items.append(
                f"<li><span class='toc-num'>{ch_num}.{idx}</span> {esc(node['title'])}</li>"
            )
        toc_blocks.append(
            f"""
            <div class="toc-chapter">
              <div class="toc-ch-head" style="border-left-color:{enr['accent']}">
                <span class="toc-badge" style="background:{enr['accent']}">Kapittel {ch_num}</span>
                <strong>{esc(ch_title)}</strong>
              </div>
              <ul class="toc-list">
                {''.join(sub_items)}
                <li><span class="toc-num">{ch_num}.11</span> Oppsummering &amp; kontrollspørsmål</li>
              </ul>
            </div>
            """
        )

    # Chapters 1-6
    chapters_html = []
    for theme in themes:
        enr = CHAPTER_ENRICHMENTS[theme["id"]]
        ch_num = enr["chapter_num"]
        accent = enr["accent"]
        accent_soft = enr["accent_soft"]
        accent_border = enr["accent_border"]
        ch_img_uri = encode_img_data_uri(enr["cover_image"], img_cache, max_w=960, quality=82)

        goals_li = "".join(f"<li>{esc(g)}</li>" for g in enr["learning_goals"])

        sections_html = []
        for idx, node in enumerate(theme["allNodes"]):
            sec_num = idx + 1
            node_img_uri = encode_img_data_uri(node["image"], img_cache, max_w=860, quality=80)

            traits_li = "".join(
                f"<li><strong>{esc(tr['title'])}:</strong> {esc(tr['description'])}</li>"
                for tr in node.get("keyTraits", [])
            )
            examples_pills = "".join(
                f"<span class='term-pill'>{esc(ex)}</span>"
                for ex in node.get("examples", [])
            )

            deep_dive_html = ""
            if idx in enr.get("deep_dives", {}):
                dd = enr["deep_dives"][idx]
                deep_dive_html = f"""
                <div class="deep-dive-box" style="border-left-color:{accent}; background:{accent_soft};">
                  <div class="box-title" style="color:{accent}">🔬 {esc(dd['title'])}</div>
                  <p>{dd['body']}</p>
                </div>
                """

            analogy_html = ""
            if node.get("classroomTest"):
                analogy_html = f"""
                <div class="analogy-box">
                  <div class="box-title">💡 Klasseromstriks &amp; tankeeksperiment</div>
                  <p>{esc(node['classroomTest'])}</p>
                </div>
                """

            did_you_know_html = ""
            if node.get("didYouKnow"):
                did_you_know_html = f"""
                <p class="summary-p"><strong>Visste du at?</strong> {esc(node['didYouKnow'])}</p>
                """

            sections_html.append(
                f"""
                <section class="book-section">
                  <div class="sec-header">
                    <span class="sec-num" style="background:{accent}">{ch_num}.{sec_num}</span>
                    <div class="sec-titles">
                      <h3>{esc(node['title'])}</h3>
                      <div class="sec-meta">
                        <span class="meta-chip">{esc(node.get('timeAfterBB', ''))}</span>
                        <span class="meta-chip">{esc(node.get('temperatureLabel', ''))}</span>
                        <span class="meta-chip">{esc(node.get('eraLabel', ''))}</span>
                      </div>
                    </div>
                  </div>

                  <p class="sec-lead">{esc(node.get('subtitleTag', ''))} — {esc(node.get('summaryTitle', ''))}</p>

                  <figure class="sec-figure">
                    <img src="{node_img_uri}" alt="{esc(node['title'])}" />
                    <figcaption>
                      <strong>Figur {ch_num}.{sec_num}:</strong> {esc(node.get('imageCaption', ''))}
                      <em>({esc(node.get('cosmicTag', ''))})</em>
                    </figcaption>
                  </figure>

                  <div class="sec-body">
                    <p class="story-p">{esc(node['whatHappens'])}</p>
                    {did_you_know_html}

                    <div class="traits-wrap">
                      <div class="traits-heading">{esc(theme['traitsHeading'])}</div>
                      <ul class="traits-list">{traits_li}</ul>
                    </div>

                    {deep_dive_html}
                    {analogy_html}

                    <div class="terms-row">
                      <span class="terms-label">Nøkkelbegreper:</span>
                      {examples_pills}
                    </div>
                  </div>
                </section>
                """
            )

        # Chapter summary + Control questions
        sum_li = "".join(f"<li>{esc(s)}</li>" for s in enr["summary_points"])
        cq_blocks = []
        for q_idx, cq in enumerate(theme["controlQuestions"], start=1):
            cq_blocks.append(
                f"""
                <div class="cq-item">
                  <div class="cq-q"><strong>Oppgave {ch_num}.{q_idx}:</strong> {esc(cq['question'])}</div>
                  <div class="cq-hint"><em>Hint:</em> {esc(cq.get('contextHint', ''))}</div>
                </div>
                """
            )

        chapters_html.append(
            f"""
            <article class="chapter">
              <div class="chapter-hero" style="border-top: 6px solid {accent};">
                <div class="chapter-hero-text">
                  <div class="ch-kicker" style="color:{accent}">KAPITTEL {ch_num} • VG1 NATURFAG</div>
                  <h2>{esc(theme['title'])}</h2>
                  <p class="ch-intro">{esc(enr['intro'])}</p>
                </div>
                <div class="chapter-hero-img">
                  <img src="{ch_img_uri}" alt="{esc(theme['title'])}" />
                </div>
              </div>

              <div class="goals-box" style="border-color:{accent_border}; background:{accent_soft};">
                <div class="box-title" style="color:{accent}">🎯 Læringsmål i kapittel {ch_num} (LK20)</div>
                <ul>{goals_li}</ul>
              </div>

              {''.join(sections_html)}

              <div class="chapter-end">
                <div class="summary-box" style="border-left-color:{accent}">
                  <h3>{ch_num}.11 Oppsummering av kapittel {ch_num}</h3>
                  <ul>{sum_li}</ul>
                </div>

                <div class="cq-box">
                  <h3>Kontrollspørsmål til kapittel {ch_num}</h3>
                  <p class="cq-sub">Diskuter muntlig i par eller skriv ned svarene før du sjekker fasiten bakerst i boka.</p>
                  {''.join(cq_blocks)}
                </div>
              </div>
            </article>
            """
        )

    # Chapter 7: Glossary, 60 MCQs, and Full Answer Key
    glossary_items = []
    for term, definition in GLOSSARY:
        glossary_items.append(
            f"""
            <div class="glossary-entry">
              <dt>{esc(term)}</dt>
              <dd>{esc(definition)}</dd>
            </div>
            """
        )

    mcq_sections = []
    mcq_answer_rows = []
    letters = ["A", "B", "C", "D"]
    for theme in themes:
        enr = CHAPTER_ENRICHMENTS[theme["id"]]
        ch_num = enr["chapter_num"]
        ch_short = theme["dropdownTitle"].split(" – ")[0]
        q_items = []
        ans_cells = []
        for q_idx, mcq in enumerate(theme["mcqQuestions"], start=1):
            opts_html = "".join(
                f"<li><strong>{letters[i]}.</strong> {esc(opt)}</li>"
                for i, opt in enumerate(mcq["options"])
            )
            q_items.append(
                f"""
                <div class="mcq-card">
                  <div class="mcq-q"><strong>{ch_num}.{q_idx}</strong> {esc(mcq['question'])}</div>
                  <ul class="mcq-opts">{opts_html}</ul>
                </div>
                """
            )
            correct_letter = letters[mcq["correctIndex"]]
            ans_cells.append(
                f"<li><strong>{ch_num}.{q_idx}: {correct_letter}</strong> – {esc(mcq['explanation'])}</li>"
            )
        mcq_sections.append(
            f"""
            <div class="mcq-group">
              <h3 style="color:{enr['accent']}">Kapittel {ch_num}: {esc(ch_short)}</h3>
              <div class="mcq-grid">{''.join(q_items)}</div>
            </div>
            """
        )
        mcq_answer_rows.append(
            f"""
            <div class="ans-group">
              <h4 style="color:{enr['accent']}">Flervalg Kapittel {ch_num}: {esc(ch_short)}</h4>
              <ol class="ans-list">{''.join(ans_cells)}</ol>
            </div>
            """
        )

    # Full answers for the 24 Control Questions (with comparison tables!)
    cq_answers_html = []
    for theme in themes:
        enr = CHAPTER_ENRICHMENTS[theme["id"]]
        ch_num = enr["chapter_num"]
        ch_short = theme["dropdownTitle"].split(" – ")[0]
        items = []
        for q_idx, cq in enumerate(theme["controlQuestions"], start=1):
            tbl = render_table_html(cq["comparisonTable"]) if cq.get("comparisonTable") else ""
            pts_li = "".join(
                f"<li><strong>{esc(pt['heading'])}:</strong> {esc(pt['detail'])}</li>"
                for pt in cq.get("points", [])
            )
            items.append(
                f"""
                <div class="cq-ans-item">
                  <div class="cq-ans-q"><strong>Oppgave {ch_num}.{q_idx}:</strong> {esc(cq['question'])}</div>
                  <ul class="traits-list" style="margin-top:3pt;">{pts_li}</ul>
                  {tbl}
                </div>
                """
            )
        cq_answers_html.append(
            f"""
            <div class="cq-ans-chapter">
              <h4 style="color:{enr['accent']}">Kontrollspørsmål – Kapittel {ch_num}: {esc(ch_short)}</h4>
              {''.join(items)}
            </div>
            """
        )

    return f"""<!DOCTYPE html>
<html lang="nb">
<head>
<meta charset="UTF-8" />
<title>UNIVERSET – Komplett lærebok for Vg1 Naturfag</title>
<style>
  @page {{
    size: A4 portrait;
    margin: 18mm 16mm 19mm 16mm;
    @top-left {{
      content: "UNIVERSET • Vg1 Naturfag";
      font-family: 'Inter', 'DejaVu Sans', Arial, sans-serif;
      font-size: 8pt;
      color: #64748B;
      border-bottom: 0.5pt solid #CBD5E1;
      padding-bottom: 3pt;
    }}
    @top-right {{
      content: "Kosmologi & Astrofysikk";
      font-family: 'Inter', 'DejaVu Sans', Arial, sans-serif;
      font-size: 8pt;
      color: #64748B;
      border-bottom: 0.5pt solid #CBD5E1;
      padding-bottom: 3pt;
    }}
    @bottom-left {{
      content: "hanselaa-code.github.io/big-bang/";
      font-family: 'Inter', 'DejaVu Sans', Arial, sans-serif;
      font-size: 8pt;
      color: #64748B;
    }}
    @bottom-right {{
      content: "Side " counter(page) " av " counter(pages);
      font-family: 'Inter', 'DejaVu Sans', Arial, sans-serif;
      font-size: 8pt;
      font-weight: 700;
      color: #334155;
    }}
  }}

  @page :first {{
    margin: 0;
    @top-left {{ content: none; }}
    @top-right {{ content: none; }}
    @bottom-left {{ content: none; }}
    @bottom-right {{ content: none; }}
  }}

  * {{
    box-sizing: border-box;
  }}

  body {{
    margin: 0;
    padding: 0;
    font-family: 'Inter', 'DejaVu Sans', 'Liberation Sans', Arial, sans-serif;
    font-size: 10pt;
    line-height: 1.52;
    color: #1E293B;
    background: #FFFFFF;
  }}

  /* COVER PAGE */
  .cover-page {{
    width: 210mm;
    height: 297mm;
    background: radial-gradient(circle at 50% 35%, #162244 0%, #070B16 78%);
    color: #F8FAFC;
    padding: 20mm 18mm 16mm 18mm;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    page-break-after: always;
    position: relative;
    overflow: hidden;
  }}

  .cover-top-badge {{
    display: inline-block;
    padding: 5pt 12pt;
    border-radius: 999px;
    background: rgba(245, 158, 11, 0.16);
    border: 1pt solid rgba(251, 191, 36, 0.55);
    color: #FCD34D;
    font-size: 9pt;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }}

  .cover-title {{
    margin: 10mm 0 4mm 0;
    font-size: 38pt;
    line-height: 1.06;
    font-weight: 900;
    letter-spacing: -0.02em;
    color: #FFFFFF;
  }}

  .cover-title span {{
    color: #FBBF24;
  }}

  .cover-subtitle {{
    font-size: 13.5pt;
    line-height: 1.45;
    color: #CBD5E1;
    max-width: 165mm;
    margin: 0;
  }}

  .cover-hero-wrap {{
    margin: 8mm auto;
    width: 100%;
    border-radius: 12pt;
    overflow: hidden;
    border: 1.5pt solid rgba(251, 191, 36, 0.45);
    box-shadow: 0 12pt 30pt rgba(0, 0, 0, 0.5);
  }}

  .cover-hero-wrap img {{
    display: block;
    width: 100%;
    height: 82mm;
    object-fit: cover;
  }}

  .cover-topics-grid {{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 6pt;
    margin-top: 4mm;
  }}

  .cover-topic {{
    background: rgba(15, 23, 42, 0.85);
    border: 0.75pt solid rgba(56, 189, 248, 0.35);
    border-radius: 8pt;
    padding: 5pt;
    text-align: center;
  }}

  .cover-topic img {{
    width: 100%;
    height: 17mm;
    object-fit: cover;
    border-radius: 5pt;
    margin-bottom: 4pt;
  }}

  .cover-topic span {{
    display: block;
    font-size: 8pt;
    font-weight: 700;
    color: #E2E8F0;
  }}

  .cover-footer {{
    border-top: 0.75pt solid rgba(148, 163, 184, 0.25);
    padding-top: 5mm;
    display: flex;
    justify-content: space-between;
    font-size: 8.5pt;
    color: #94A3B8;
  }}

  /* FRONT MATTER */
  .front-page {{
    page-break-after: always;
  }}

  h1.page-title {{
    font-size: 20pt;
    font-weight: 800;
    color: #0F172A;
    margin: 0 0 4mm 0;
    border-bottom: 2pt solid #F59E0B;
    padding-bottom: 2.5mm;
  }}

  .lead-p {{
    font-size: 10.5pt;
    color: #334155;
    margin: 0 0 4mm 0;
  }}

  .mindmap-banner {{
    display: flex;
    gap: 10pt;
    align-items: center;
    background: #F8FAFC;
    border: 1pt solid #CBD5E1;
    border-radius: 8pt;
    padding: 8pt;
    margin-bottom: 5mm;
  }}

  .mindmap-banner img {{
    width: 58mm;
    height: 36mm;
    object-fit: cover;
    border-radius: 6pt;
    flex-shrink: 0;
  }}

  .dot {{
    display: inline-block;
    width: 7pt;
    height: 7pt;
    border-radius: 50%;
    margin-right: 3pt;
    vertical-align: middle;
  }}

  /* DATA TABLES */
  table.data-table {{
    width: 100%;
    border-collapse: collapse;
    margin: 3mm 0 5mm 0;
    font-size: 8.8pt;
    break-inside: avoid;
  }}

  table.data-table th {{
    background: #0F172A;
    color: #F8FAFC;
    text-align: left;
    padding: 5pt 7pt;
    font-weight: 700;
  }}

  table.data-table td {{
    padding: 5pt 7pt;
    border-bottom: 0.6pt solid #CBD5E1;
    vertical-align: top;
  }}

  table.data-table tr:nth-child(even) td {{
    background: #F8FAFC;
  }}

  /* TOC */
  .toc-grid {{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8pt;
  }}

  .toc-chapter {{
    border: 0.75pt solid #E2E8F0;
    border-radius: 6pt;
    padding: 6pt 8pt;
    background: #FAFAFA;
    break-inside: avoid;
  }}

  .toc-ch-head {{
    border-left: 3.5pt solid #0284C7;
    padding-left: 6pt;
    margin-bottom: 4pt;
    font-size: 9pt;
    color: #0F172A;
  }}

  .toc-badge {{
    display: inline-block;
    color: #FFFFFF;
    font-size: 7pt;
    font-weight: 700;
    padding: 1pt 5pt;
    border-radius: 3pt;
    margin-right: 4pt;
    text-transform: uppercase;
  }}

  .toc-list {{
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 8pt;
    line-height: 1.42;
    color: #334155;
  }}

  .toc-num {{
    font-weight: 700;
    color: #0F172A;
    margin-right: 3pt;
  }}

  /* CHAPTERS */
  article.chapter {{
    page-break-before: always;
  }}

  .chapter-hero {{
    display: flex;
    gap: 12pt;
    align-items: stretch;
    background: #F8FAFC;
    border: 0.75pt solid #CBD5E1;
    border-radius: 8pt;
    padding: 10pt;
    margin-bottom: 5mm;
    break-inside: avoid;
  }}

  .chapter-hero-text {{
    flex: 1.35;
  }}

  .ch-kicker {{
    font-size: 8pt;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 2pt;
  }}

  .chapter-hero h2 {{
    font-size: 16pt;
    line-height: 1.18;
    margin: 0 0 4pt 0;
    color: #0F172A;
  }}

  .ch-intro {{
    font-size: 9.4pt;
    line-height: 1.48;
    color: #334155;
    margin: 0;
  }}

  .chapter-hero-img {{
    flex: 0.85;
    display: flex;
  }}

  .chapter-hero-img img {{
    width: 100%;
    height: 100%;
    max-height: 46mm;
    object-fit: cover;
    border-radius: 6pt;
  }}

  .goals-box {{
    border: 1pt solid #CBD5E1;
    border-radius: 7pt;
    padding: 7pt 10pt;
    margin-bottom: 6mm;
    break-inside: avoid;
  }}

  .goals-box ul {{
    margin: 3pt 0 0 0;
    padding-left: 14pt;
    font-size: 9.2pt;
  }}

  .goals-box li {{
    margin-bottom: 2pt;
  }}

  .box-title {{
    font-size: 9.2pt;
    font-weight: 800;
    margin-bottom: 2pt;
  }}

  /* SECTIONS */
  section.book-section {{
    margin-bottom: 7mm;
    padding-bottom: 5mm;
    border-bottom: 0.75pt solid #E2E8F0;
  }}

  .sec-header {{
    display: flex;
    align-items: flex-start;
    gap: 8pt;
    margin-bottom: 2mm;
    break-after: avoid;
  }}

  .sec-num {{
    color: #FFFFFF;
    font-weight: 800;
    font-size: 10pt;
    padding: 3pt 7pt;
    border-radius: 5pt;
    flex-shrink: 0;
    margin-top: 1pt;
  }}

  .sec-titles h3 {{
    margin: 0;
    font-size: 13pt;
    line-height: 1.22;
    color: #0F172A;
  }}

  .sec-meta {{
    display: flex;
    flex-wrap: wrap;
    gap: 4pt;
    margin-top: 2.5pt;
  }}

  .meta-chip {{
    font-size: 7.6pt;
    font-weight: 600;
    background: #F1F5F9;
    color: #334155;
    border: 0.5pt solid #CBD5E1;
    padding: 1pt 5pt;
    border-radius: 4pt;
  }}

  .sec-lead {{
    font-size: 10pt;
    font-style: italic;
    color: #475569;
    margin: 0 0 3mm 0;
    break-after: avoid;
  }}

  figure.sec-figure {{
    margin: 0 0 3.5mm 0;
    background: #0B1120;
    border-radius: 7pt;
    overflow: hidden;
    border: 0.75pt solid #1E293B;
    break-inside: avoid;
  }}

  figure.sec-figure img {{
    display: block;
    width: 100%;
    max-height: 62mm;
    object-fit: cover;
  }}

  figure.sec-figure figcaption {{
    padding: 5pt 8pt;
    font-size: 8.3pt;
    line-height: 1.38;
    color: #E2E8F0;
    background: #0F172A;
  }}

  .story-p {{
    margin: 0 0 2.5mm 0;
    font-size: 9.8pt;
    color: #1E293B;
  }}

  .summary-p {{
    margin: 0 0 3mm 0;
    font-size: 9.6pt;
    color: #0F172A;
    background: #F8FAFC;
    padding: 5pt 8pt;
    border-radius: 5pt;
    border-left: 2.5pt solid #64748B;
  }}

  .traits-wrap {{
    margin: 2mm 0 3mm 0;
    break-inside: avoid;
  }}

  .traits-heading {{
    font-size: 9pt;
    font-weight: 700;
    color: #0F172A;
    margin-bottom: 2pt;
  }}

  .traits-list {{
    margin: 0;
    padding-left: 14pt;
    font-size: 9.2pt;
  }}

  .traits-list li {{
    margin-bottom: 1.5pt;
  }}

  .deep-dive-box {{
    border-left: 3.5pt solid #0284C7;
    border-radius: 5pt;
    padding: 6pt 9pt;
    margin: 3mm 0;
    font-size: 9.1pt;
    break-inside: avoid;
  }}

  .deep-dive-box p {{
    margin: 0;
  }}

  .analogy-box {{
    background: #FFFBEB;
    border: 0.75pt solid #FCD34D;
    border-left: 3.5pt solid #F59E0B;
    border-radius: 5pt;
    padding: 6pt 9pt;
    margin: 3mm 0;
    font-size: 9.1pt;
    color: #451A03;
    break-inside: avoid;
  }}

  .analogy-box p {{
    margin: 0;
  }}

  .terms-row {{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4pt;
    margin-top: 2.5mm;
    break-inside: avoid;
  }}

  .terms-label {{
    font-size: 8pt;
    font-weight: 700;
    color: #475569;
  }}

  .term-pill {{
    font-size: 7.8pt;
    background: #EFF6FF;
    color: #1E40AF;
    border: 0.5pt solid #BFDBFE;
    padding: 1pt 6pt;
    border-radius: 999px;
    font-weight: 600;
  }}

  /* CHAPTER END */
  .chapter-end {{
    break-inside: avoid;
    margin-top: 4mm;
  }}

  .summary-box {{
    background: #F8FAFC;
    border: 0.75pt solid #CBD5E1;
    border-left: 4pt solid #0F172A;
    border-radius: 6pt;
    padding: 7pt 10pt;
    margin-bottom: 4mm;
  }}

  .summary-box h3, .cq-box h3 {{
    margin: 0 0 3pt 0;
    font-size: 11pt;
    color: #0F172A;
  }}

  .summary-box ul {{
    margin: 0;
    padding-left: 14pt;
    font-size: 9.2pt;
  }}

  .cq-box {{
    background: #F1F5F9;
    border: 0.75pt solid #CBD5E1;
    border-radius: 6pt;
    padding: 7pt 10pt;
  }}

  .cq-sub {{
    margin: 0 0 4pt 0;
    font-size: 8.6pt;
    color: #475569;
  }}

  .cq-item {{
    background: #FFFFFF;
    border: 0.6pt solid #CBD5E1;
    border-radius: 5pt;
    padding: 5pt 8pt;
    margin-bottom: 3pt;
    font-size: 9pt;
  }}

  .cq-hint {{
    font-size: 8.3pt;
    color: #475569;
    margin-top: 2pt;
  }}

  /* GLOSSARY & QUIZZES & ANSWERS */
  .back-chapter {{
    page-break-before: always;
  }}

  .glossary-grid {{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6pt 10pt;
    margin-top: 4mm;
  }}

  .glossary-entry {{
    border-bottom: 0.5pt solid #E2E8F0;
    padding-bottom: 3.5pt;
    break-inside: avoid;
  }}

  .glossary-entry dt {{
    font-weight: 800;
    font-size: 9pt;
    color: #0F172A;
  }}

  .glossary-entry dd {{
    margin: 1pt 0 0 0;
    font-size: 8.4pt;
    color: #334155;
    line-height: 1.38;
  }}

  .mcq-group {{
    margin-bottom: 6mm;
  }}

  .mcq-group h3 {{
    font-size: 11.5pt;
    margin: 0 0 3pt 0;
    border-bottom: 1pt solid #CBD5E1;
    padding-bottom: 2pt;
    break-after: avoid;
  }}

  .mcq-grid {{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6pt;
  }}

  .mcq-card {{
    border: 0.6pt solid #CBD5E1;
    border-radius: 5pt;
    padding: 5pt 7pt;
    background: #FAFAFA;
    font-size: 8.3pt;
    break-inside: avoid;
  }}

  .mcq-q {{
    margin-bottom: 3pt;
    color: #0F172A;
  }}

  .mcq-opts {{
    list-style: none;
    margin: 0;
    padding: 0;
    line-height: 1.35;
    color: #334155;
  }}

  .cq-ans-chapter {{
    margin-bottom: 5mm;
  }}

  .cq-ans-chapter h4, .ans-group h4 {{
    font-size: 10.5pt;
    margin: 4mm 0 2mm 0;
    break-after: avoid;
  }}

  .cq-ans-item {{
    border: 0.6pt solid #CBD5E1;
    border-radius: 5pt;
    padding: 5pt 8pt;
    margin-bottom: 3pt;
    font-size: 8.7pt;
    break-inside: avoid;
  }}

  .cq-ans-a {{
    margin: 2pt 0;
    color: #1E293B;
  }}

  .ans-list {{
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 8.3pt;
    column-count: 2;
    column-gap: 10pt;
  }}

  .ans-list li {{
    margin-bottom: 2.5pt;
    break-inside: avoid;
  }}
</style>
</head>
<body>

  <!-- COVER PAGE -->
  <section class="cover-page">
    <div>
      <span class="cover-top-badge">Komplett lærebok • Vg1 Naturfag (LK20)</span>
      <h1 class="cover-title"><span>UNIVERSET</span><br/>Fra Big Bang til det kosmiske nettverket</h1>
      <p class="cover-subtitle">
        Hele pensumet om universets opprinnelse, stjernenes livsløp, grunnstoffenes kosmiske smier,
        elektromagnetisk stråling, galakser, mørk materie og krummet romtid – samlet i én rikt illustrert lærebok med oppgaver og fasit.
      </p>
    </div>

    <div class="cover-hero-wrap">
      <img src="{cover_uri}" alt="Universet" />
    </div>

    <div>
      <div class="cover-topics-grid">
        {''.join(cover_thumbs)}
      </div>
      <div class="cover-footer">
        <span>Interaktiv nettutgave: https://hanselaa-code.github.io/big-bang/</span>
        <span>6 kapitler • 60 illustrerte deler • Ordliste • 84 oppgaver med fasit</span>
      </div>
    </div>
  </section>

  <!-- FRONT MATTER: FORORD & TANKEKART -->
  <section class="front-page">
    <h1 class="page-title">Forord: Slik henger hele universet sammen</h1>
    <p class="lead-p">
      Velkommen til den komplette læreboken for kosmologi- og astrofysikkdelen i <strong>Vg1 Naturfag</strong>.
      Boken dekker hele teorien fra den interaktive klasseromspresentasjonen <em>Universet – Tankekart</em> og utdyper hvert tema med
      fysiske forklaringer, formler, tankeeksperimenter, sammendrag, begrepsordliste og øvingsoppgaver med komplett fasit.
    </p>

    <div class="mindmap-banner">
      <img src="{cover_uri}" alt="Tankekartet over Universet" />
      <div>
        <strong>De seks sirklene i tankekartet</strong>
        <p style="margin:3pt 0 0 0; font-size:9pt; color:#334155;">
          I naturfag er ikke temaene adskilte øyer: <strong>Big Bang</strong> skapte romtiden, de første atomene og bakgrunnsstrålingen.
          Tyngdekraft i <strong>romtiden</strong> samlet gassen til <strong>stjerner</strong> og <strong>galakser</strong>.
          Stjernene smidde nye <strong>grunnstoffer</strong> og sendte ut <strong>stråling</strong> som avslører hele historien for oss på Jorda.
        </p>
      </div>
    </div>

    <table class="data-table">
      <thead>
        <tr>
          <th style="width:12%">Kapittel</th>
          <th style="width:18%">Tema</th>
          <th style="width:26%">Kjerneperspektiv</th>
          <th style="width:44%">Hva du lærer</th>
        </tr>
      </thead>
      <tbody>
        {''.join(overview_rows)}
      </tbody>
    </table>

    <div class="deep-dive-box" style="border-left-color:#0F172A; background:#F8FAFC;">
      <div class="box-title" style="color:#0F172A">📚 Slik bruker du boken effektivt til prøver og eksamen</div>
      <p>
        Les kapittelinnledningen og læringsmålene først, studer bildene og figurene aktivt, og test deg selv med
        <strong>kontrollspørsmålene</strong> på slutten av hvert kapittel. Bruk <strong>ordlisten</strong> og de
        <strong>60 flervalgsoppgavene</strong> bakerst som repetisjon før vurdering.
      </p>
    </div>
  </section>

  <!-- TABLE OF CONTENTS -->
  <section class="front-page">
    <h1 class="page-title">Innholdsfortegnelse</h1>
    <div class="toc-grid">
      {''.join(toc_blocks)}
    </div>
    <div class="toc-chapter" style="margin-top:8pt;">
      <div class="toc-ch-head" style="border-left-color:#0F172A">
        <span class="toc-badge" style="background:#0F172A">Kapittel 7</span>
        <strong>Repetisjon, begrepsordliste, øvingsprøve &amp; komplett fasit</strong>
      </div>
      <ul class="toc-list" style="display:grid; grid-template-columns:1fr 1fr; gap:2pt 12pt;">
        <li><span class="toc-num">7.1</span> Begrepsordliste (A–Å)</li>
        <li><span class="toc-num">7.2</span> Komplett øvingsprøve (60 flervalgsoppgaver)</li>
        <li><span class="toc-num">7.3</span> Fasit: Kontrollspørsmål (24 oppgaver + tabeller)</li>
        <li><span class="toc-num">7.4</span> Fasit: Flervalgsoppgaver (60 oppgaver)</li>
      </ul>
    </div>
  </section>

  <!-- CHAPTERS 1-6 -->
  {''.join(chapters_html)}

  <!-- CHAPTER 7: GLOSSARY -->
  <article class="back-chapter">
    <h1 class="page-title">7.1 Begrepsordliste (A–Å)</h1>
    <p class="lead-p">De viktigste fagbegrepene du må kunne forklare med egne ord i Vg1 Naturfag.</p>
    <dl class="glossary-grid">
      {''.join(glossary_items)}
    </dl>
  </article>

  <!-- CHAPTER 7.2: 60 MCQ TEST -->
  <article class="back-chapter">
    <h1 class="page-title">7.2 Komplett øvingsprøve (60 flervalgsoppgaver)</h1>
    <p class="lead-p">Test hele pensumet kapittel for kapittel. Fasit med forklaringer finner du i del 7.4.</p>
    {''.join(mcq_sections)}
  </article>

  <!-- CHAPTER 7.3 & 7.4: ANSWER KEY -->
  <article class="back-chapter">
    <h1 class="page-title">7.3 Fasit: Kontrollspørsmål &amp; sammenligningstabeller</h1>
    {''.join(cq_answers_html)}
  </article>

  <article class="back-chapter">
    <h1 class="page-title">7.4 Fasit: Flervalgsoppgaver (60 oppgaver)</h1>
    {''.join(mcq_answer_rows)}
  </article>

</body>
</html>
"""


def main() -> None:
    print("Laster fagdata fra src/data/ via jiti...")
    data = load_curriculum_json()
    print("Genererer lærebok-HTML og pakker inn illustrasjoner...")
    html_str = build_html(data)

    with tempfile.NamedTemporaryFile("w", suffix=".html", encoding="utf-8", delete=False) as tf:
        tf.write(html_str)
        tmp_html = tf.name

    try:
        chrome = "/usr/bin/google-chrome"
        if not os.path.exists(chrome):
            chrome = "/usr/bin/chromium"
        print(f"Konverterer til PDF med {chrome}...")
        subprocess.run(
            [
                chrome,
                "--headless",
                "--no-sandbox",
                "--disable-gpu",
                "--print-to-pdf=" + OUT_PDF,
                "--no-pdf-header-footer",
                "file://" + tmp_html,
            ],
            check=True,
            capture_output=True,
        )
    finally:
        if os.path.exists(tmp_html):
            os.remove(tmp_html)

    size_mb = os.path.getsize(OUT_PDF) / (1024 * 1024)
    print(f"Ferdig! Bygget {OUT_PDF} ({size_mb:.2f} MB)")


if __name__ == "__main__":
    main()
