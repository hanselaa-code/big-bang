# Big Bang – Universets historie (De store linjene)

🌐 **Live klasseromspresentasjon (GitHub Pages):** https://hanselaa-code.github.io/big-bang/

En moderne, interaktiv klasseromspresentasjon bygget med **React, TypeScript, Vite og Tailwind CSS** for undervisning i **Vg1 naturfag** (samme struktur og klasseromsflyt som [`hanselaa-code/livets-tre`](https://github.com/hanselaa-code/livets-tre)). Applikasjonen tar elevene steg for steg gjennom 13,8 milliarder års kosmisk historie – fra **Big Bang og kosmisk inflasjon** via de første atomkjernene, **den kosmiske bakgrunnsstrålingen (CMB)**, de første stjernene og supernovaene frem til **Solsystemet, Jorda og vårt akselererende univers i dag**.

---

## Hurtigguide for lærere og elever i klasserommet

| Tast / Handling | Funksjon |
| :--- | :--- |
| `Space` / `→` / `↓` eller **«Neste steg →»** | Går ett steg fremover langs tidslinjen |
| `←` / `↑` eller **«← Forrige»** | Går ett steg tilbake (eller lukker kontrollspørsmål-visningen) |
| `F` | Aktiverer / avslutter **fullskjermmodus** for storskjerm i klasserommet |
| `Q` | Åpner eller lukker **Kontrollspørsmål & Multiple Choice-testen (10 spm)** |
| `K` | Viser **QR-kode** for enkel deling til elevenes mobiltelefoner |
| `Esc` | Lukker bildeforstørrer, QR-vindu eller kontrollspørsmål |
| **Dra / Scroll i tidslinjen** | Panorer fritt langs utvidelsestrakten og zoom inn/ut (klikk **«Følg steg»** eller **«Hele tidslinjen»**) |
| **Klikk på bildet i fagkortet** | Åpner storskjerms bildeforstørrer for detaljstudier på projektor |

---

## Pedagogisk oppbygning – De store linjene (10 hovedsteg)

Hele datasettet ligger i [`src/data/bigBangData.ts`](./src/data/bigBangData.ts):

1. **Big Bang & Kosmisk inflasjon (`t = 0 → 10⁻³² s`)** — Tid, rom og energi oppstår; utvidelse *av* selve rommet (ballong-modellen)
2. **Ur-suppen: Kvarker, protoner & nøytroner (`10⁻¹² s → 1 s`)** — Energi blir til materie ($E = mc^2$) og bygger atomkjernenes brikker
3. **De første 3 minuttene: Hydrogen & helium (`3–20 min`)** — Ur-nukleosyntesen gir ~75 % hydrogen og ~25 % helium (*Hovedbevis #1*)
4. **Universet blir gjennomsiktig: Bakgrunnsstrålingen (`380 000 år`)** — Første hele atomer ved 3000 K og kosmisk mikrobølge-bakgrunnsstråling CMB (*Hovedbevis #2*)
5. **Den mørke tidsalderen & Mørk materie (`380 000 – 150 mill. år`)** — Stjerneløst mørke der tyngdekraften og mørk materie samler gasskyene
6. **Kosmisk daggry: De første stjernene (`~100–200 mill. år`)** — Kjernefysisk fusjon tennes i gigantiske Populasjon III-stjerner
7. **Stjernesmia & Supernovaer (`~200–500 mill. år`)** — Karbon, oksygen, silisium, jern og gull smis («vi er lagd av stjernestøv»)
8. **Galaksene vokser frem & Melkeveien (`~400 mill. – 4 mrd. år`)** — Ur-galakser smelter sammen til store spiralgalakser (James Webb-epoken)
9. **Solsystemet & Jorda oppstår (`9,2 mrd. år` / `4,6 mrd. år siden`)** — Resirkulert stjernestøv danner Sola og steinplanetene – broen til livets opprinnelse
10. **Universet i dag (`13,8 mrd. år`)** — Kosmologisk rødforskyvning og Hubbles lov (*Hovedbevis #3*), mørk energi (68 %) og akselererende utvidelse

---

## Utvikling og bygging

```bash
npm install
npm run dev
```

Bygg statisk produksjonspakke (`dist/`) og selvstendig enkeltfil (`dist/Big-Bang-Presentasjon.html`):

```bash
npm run deploy:standalone
```
