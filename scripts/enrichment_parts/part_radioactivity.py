# -*- coding: utf-8 -*-
"""
Delkapittel 3.11: Radioaktivitet, α-, β- og γ-stråling og halveringstid.
"""

PART_DATA = {
    "target_chapter": "grunnstoffer",
    "extra_learning_goals": [
        "Forklare hva som gjør en atomkjerne ustabil, og beskrive egenskapene og gjennomtrengningsevnen til alfa-, beta- og gammastråling.",
        "Gjøre rede for begrepet halveringstid, beregne gjenværende mengde radioaktivt stoff over tid og vurdere strålevern ved hjelp av enhetene becquerel (Bq) og sievert (Sv).",
    ],
    "extra_summary_points": [
        "Ustabile atomkjerner (radioaktive isotoper) omdannes spontant til mer stabile kjerner ved å sende ut alfapartikler (⁴He-kjerner), betapartikler (raske elektroner) eller gammastråling (høyenergetiske fotoner).",
        "Halveringstiden (T½) er tiden det tar før halvparten av atomkjernene i en prøve har henfalt; aktiviteten måles i becquerel (Bq), mens helserisikoen måles i sievert (Sv).",
    ],
    "sections": [
        {
            "title": "Radioaktivitet – Når ustabile atomkjerner sender ut α-, β- og γ-stråling",
            "timeAfterBB": "Kjernefysikk • Ustabile isotoper",
            "temperatureLabel": "α, β, γ & halveringstid",
            "eraLabel": "Kapittel 3 • Atomkjerner",
            "subtitleTag": "Hva skjer når en atomkjerne har for mange eller for få nøytroner?",
            "summaryTitle": "Slik omdannes ustabile kjerner og slik skjermer vi oss mot strålingen",
            "image": "rad_extra_alpha_beta_gamma.jpg",
            "imageCaption": (
                "Gjennomtrengningsevnen til α-, β- og γ-stråling: Alfastråling stoppes av et papirark, "
                "betastråling av en tynn aluminiumsplate, mens gammastråling krever tykt bly eller betong."
            ),
            "cosmicTag": "NAT01-05 • Ioniserende stråling",
            "whatHappens": (
                "I de fleste atomer holder den sterke kjernekraften protonene og nøytronene stabilt sammen. "
                "Men noen isotoper har for mange eller for få nøytroner i forhold til protoner, og kjernen blir ustabil. "
                "For å oppnå en mer stabil tilstand kvitter kjernen seg med overskuddsenergi eller partikler – dette kalles radioaktivt henfall. "
                "Ved alfahenfall (α) skytes en hel heliumkjerne (⁴He, to protoner og to nøytroner) ut. "
                "Ved betahenfall (β⁻) omdannes et nøytron i kjernen til et proton, samtidig som et raskt elektron (e⁻) sendes ut. "
                "Ofte sitter den nye kjernen igjen med litt ekstra energi som frigjøres som gammastråling (γ) – høyenergetiske fotoner uten masse eller ladning. "
                "Vi kan aldri forutsi når én enkelt kjerne vil henfalle, men for mange atomer følger prosessen en fast halveringstid (T½): tiden det tar før halvparten av kjernene er omdannet. "
                "Antall henfall per sekund måles i enheten becquerel (Bq), der 1 Bq tilsvarer ett henfall per sekund."
            ),
            "didYouKnow": (
                "Visste du at du selv er svakt radioaktiv? Kroppen din inneholder rundt 4000–5000 Bq fra naturlige isotoper "
                "som kalium-40 (⁴⁰K) og karbon-14 (¹⁴C). Også bananer inneholder litt kalium-40 – omtrent 15 Bq per banan. "
                "I tillegg har de fleste norske hjem en ørsmå mengde americium-241 (²⁴¹Am) trygt innkapslet i ioniske røykvarslere, "
                "der alfastråling brukes til å oppdage røykpartikler i lufta."
            ),
            "traitsHeading": "De tre typene radioaktiv stråling",
            "keyTraits": [
                {
                    "title": "Alfastråling (α)",
                    "description": (
                        "Består av tunge heliumkjerner (⁴He) med ladning +2. Den store massen og ladningen gir svært høy ioniserende evne, "
                        "men partiklene bremses raskt og stoppes av et vanlig papirark eller det ytterste laget av død hud."
                    ),
                },
                {
                    "title": "Betastråling (β)",
                    "description": (
                        "Består av raske elektroner (e⁻) med ladning −1 som dannes når et nøytron blir til et proton. "
                        "Betapartikler trenger gjennom papir og hudoverflaten, men stoppes effektivt av noen millimeter aluminium eller pleksiglass."
                    ),
                },
                {
                    "title": "Gammastråling (γ)",
                    "description": (
                        "Er elektromagnetiske bølger (fotoner) med ekstremt høy energi, uten masse og elektrisk ladning. "
                        "Gammastråling har lavest ioniserende evne per centimeter, men trenger dypt inn i kroppen og krever tykke lag med bly eller betong for å dempes."
                    ),
                },
                {
                    "title": "Halveringstid & Becquerel",
                    "description": (
                        "Halveringstiden (T½) varierer fra brøkdeler av et sekund til milliarder av år (for eksempel 5730 år for ¹⁴C og 4,5 milliarder år for ²³⁸U). "
                        "Aktiviteten måles i becquerel (Bq), som forteller hvor mange kjerner som henfaller hvert sekund."
                    ),
                },
            ],
            "deep_dive": {
                "title": "Fysikk i fokus: Halveringstid, stråledoser (Bq, Gy, Sv) og radon i Norge",
                "body": (
                    "<p>Når en radioaktiv prøve henfaller, synker antall gjenværende ustabile kjerner eksponentielt etter formelen "
                    "<strong>N(t) = N₀ · (1/2)<sup>(t / T½)</sup></strong>, der <em>N₀</em> er startmengden, <em>t</em> er tiden som har gått, "
                    "og <em>T½</em> er halveringstiden. Etter én halveringstid gjenstår 50 %, etter to gjenstår 25 %, og etter tre gjenstår 12,5 %.</p>"
                    "<p>I strålevern skiller vi nøye mellom tre størrelser: <strong>Aktivitet</strong> måles i <em>becquerel (Bq)</em> og angir bare hvor mange henfall "
                    "som skjer per sekund i kilden. <strong>Absorbert dose</strong> måles i <em>gray (Gy)</em> og forteller hvor mange joule strålingsenergi som tas opp per kilogram vev (1 Gy = 1 J/kg). "
                    "<strong>Effektiv dose</strong> måles i <em>sievert (Sv)</em> og tar hensyn til både strålingstypen (alfastråling skader celler omtrent 20 ganger mer enn gamma per gray) "
                    "og hvor følsomt ulike organer er.</p>"
                    "<p>I Norge mottar vi i gjennomsnitt rundt <strong>3–4 mSv per år</strong> i naturlig bakgrunnsstråling. "
                    "Den største enkeltkilden er radioaktiv <strong>radongass (²²²Rn)</strong> som siver opp fra uranrik berggrunn som granitt og alunskifer. "
                    "Siden radon sender ut alfastråling, er den ufarlig utenpå huden, men svært skadelig når den pustes inn i lungene.</p>"
                ),
            },
            "table": {
                "headers": [
                    "Strålingstype",
                    "Hva er det?",
                    "Ladning",
                    "Stoppes av",
                    "Ioniserende evne",
                ],
                "rows": [
                    [
                        "Alfastråling (α)",
                        "Heliumkjerne (2 protoner + 2 nøytroner)",
                        "+2",
                        "Papirark, noen cm luft, ytre hudlag",
                        "Svært høy",
                    ],
                    [
                        "Betastråling (β⁻)",
                        "Raskt elektron fra omdannet nøytron",
                        "−1",
                        "Tynn aluminiumsplate (ca. 3–5 mm) eller pleksiglass",
                        "Middels",
                    ],
                    [
                        "Gammastråling (γ)",
                        "Høyenergetisk foton (elektromagnetisk stråling)",
                        "0 (nøytral)",
                        "Tykt bly (flere cm) eller tykk betongvegg",
                        "Lav (men stor rekkevidde)",
                    ],
                ],
            },
            "classroomTest": (
                "Klassekampen om halveringstid med 100 terninger: Kast 100 vanlige sekssidede terninger på et bord. "
                "Alle terninger som viser 6 «henfaller» og fjernes fra prøven (dette tilsvarer ett tidssteg). "
                "Tell hvor mange terninger som er igjen, noter tallet, og kast de gjenværende på nytt. "
                "Gjenta prosessen 10–12 ganger og tegn en graf over antall gjenværende terninger mot antall kast – dere vil se en tydelig halveringskurve der halvparten forsvinner omtrent hvert 3,8. kast! "
                "Alternativt kan læreren demonstrere bakgrunnsstråling og skjerming med en Geiger-Müller-teller (GM-teller) og svake, godkjente skolekilder (f.eks. ¹³⁷Cs eller ⁹⁰Sr). "
                "Risikovurdering: Terningforsøket har ingen risiko. Ved bruk av skolekilder skal kildene kun håndteres med pinsett av lærer, holdes på god avstand (tid, avstand, skjerming) og legges tilbake i blybeholderen straks målingen er ferdig."
            ),
            "examples": [
                "Alfastråling (α)",
                "Betastråling (β)",
                "Gammastråling (γ)",
                "Halveringstid (T½)",
                "Becquerel (Bq)",
                "Sievert (Sv)",
                "Radon",
            ],
        }
    ],
    "extra_control_questions": [
        {
            "question": (
                "Jod-131 (¹³¹I) er en radioaktiv isotop som brukes i medisin, og har en halveringstid på 8 døgn. "
                "En prøve har en startaktivitet på 6400 Bq. Hvor høy er aktiviteten etter 24 døgn?"
            ),
            "contextHint": "Finn først hvor mange halveringstider som passer inn i 24 døgn, og bruk formelen N(t) = N₀ · (1/2)^(t / T½).",
            "answer": (
                "Antall halveringstider er 24 døgn / 8 døgn = 3 halveringstider. "
                "Etter 1 halveringstid (8 døgn): 3200 Bq. Etter 2 halveringstider (16 døgn): 1600 Bq. "
                "Etter 3 halveringstider (24 døgn): 6400 Bq · (1/2)³ = 6400 Bq / 8 = 800 Bq."
            ),
        },
        {
            "question": (
                "Hvorfor er alfastråling relativt ufarlig når strålekilden ligger på bordet foran deg, "
                "men svært farlig hvis du puster inn alfastrålende gass som radon?"
            ),
            "contextHint": "Tenk på både gjennomtrengningsevnen og den ioniserende evnen til alfapartikler.",
            "answer": (
                "Alfapartikler er store og tunge, så de bremses allerede av noen centimeter luft, et papirark eller det døde, ytterste hudlaget vårt. "
                "Utenfor kroppen når de derfor ikke inn til levende celler. "
                "Hvis vi derimot puster inn radon i lungene, ligger strålekilden helt inntil ubeskyttet, levende lungevev. "
                "Da vil alfastrålingens svært høye ioniserende evne skade DNA-et i lungecellene direkte og øke risikoen for lungekreft."
            ),
        },
    ],
    "extra_glossary": {
        "Alfastråling (α)": "Ioniserende partikkelstråling som består av heliumkjerner (to protoner og to nøytroner). Har svært høy ioniserende evne, men stoppes av et papirark eller huden.",
        "Betastråling (β)": "Ioniserende partikkelstråling som består av raske elektroner (eller positroner) som sendes ut når et nøytron omdannes til et proton i kjernen. Stoppes av noen millimeter aluminium.",
        "Gammastråling (γ)": "Høyenergetisk elektromagnetisk stråling (fotoner) uten masse og ladning som sendes ut fra en atomkjerne med overskuddsenergi. Krever tykt bly eller betong for å dempes.",
        "Halveringstid (T½)": "Tiden det tar før halvparten av de ustabile atomkjernene i en radioaktiv prøve har henfalt.",
        "Becquerel (Bq)": "SI-enheten for radioaktivitet. 1 Bq betyr at én atomkjerne henfaller per sekund.",
        "Sievert (Sv)": "Enhet for effektiv stråledose, som måler den biologiske helserisikoen av ioniserende stråling på menneskekroppen.",
        "Radon": "En naturlig forekommende, luktfri og radioaktiv edelgass (²²²Rn) som dannes når uran i berggrunnen henfaller, og som sender ut alfastråling.",
    },
}
