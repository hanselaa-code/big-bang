# -*- coding: utf-8 -*-
"""
Tilleggsstoff for Kapittel 4: Stråling
Delkapittel 4.12: Trådløs kommunikasjon – Fra sender og bærebølge til 5G, WiFi og GPS
Delkapittel 4.13: Stråling, helseeffekter, strålevern og kildekritikk
"""

section_4_12 = {
    "title": "Trådløs kommunikasjon – Fra sender og bærebølge til 5G, WiFi og GPS",
    "timeAfterBB": "f ≈ 88 MHz – 5 GHz",
    "temperatureLabel": "λ ≈ 6 cm – 3,4 m",
    "eraLabel": "Radiobølger og mikrobølger",
    "subtitleTag": "Modulasjon, båndbredde og bøyning",
    "summaryTitle": "Slik pakkes lyd, bilder og data inn i elektromagnetiske bølger og sendes gjennom lufta",
    "image": "rad_extra_wireless_comm.jpg",
    "imageCaption": "Signalkjeden i trådløs kommunikasjon: digitalisert informasjon (0 og 1) moduleres på en bærebølge, sendes ut fra en antenne, fanges opp av mottakerantennen og demoduleres tilbake til lyd, bilde eller tekst.",
    "cosmicTag": "Trådløs kommunikasjon i praksis",
    "whatHappens": (
        "Hver gang du strømmer musikk på 5G, kobler deg til skolens WiFi eller bruker GPS på mobilen, "
        "går informasjonen gjennom den samme fysiske signalkjeden. Først gjøres lyd, bilde eller tekst om til digitale tall – "
        "lange rekker av nuller og enere (bits) i en kilde. Deretter tar senderen over: den lager en jevn, høyfrekvent elektromagnetisk bølge "
        "som kalles en bærebølge. For at bærebølgen skal frakte informasjon, må vi endre på den i takt med signalet – dette heter modulasjon. "
        "Ved amplitudemodulasjon (AM) varierer vi bølgens høyde (amplitude), mens ved frekvensmodulasjon (FM) varierer vi frekvensen litt opp og ned. "
        "Moderne mobilnett og WiFi bruker digital modulasjon, der 0 og 1 kodes som raske hopp i amplitude, frekvens eller fase. "
        "Senderantennen får elektroner til å svinge i takt med den modulerte strømmen, slik at en elektromagnetisk bølge stråler ut gjennom luft og rom med lysfarten (300 000 km/s). "
        "Når bølgen treffer mottakerantennen, setter den elektronene der i tilsvarende ørsmå svingninger. Mottakeren forsterker signalet og utfører demodulasjon – "
        "den skreller av bærebølgen og henter ut nullene og enerne igjen, slik at meldingen vises på skjermen eller spilles av i øreproppene."
    ),
    "didYouKnow": (
        "GPS-satellittene sender med omtrent samme effekt som en svak lyspære (rundt 25–50 watt) fra over 20 000 kilometers høyde. "
        "Når signalet når telefonen din på bakken, er det svakere enn én milliontedels milliarddels watt – likevel klarer mottakeren å regne ut posisjonen din på få meter!"
    ),
    "traitsHeading": "Fire nøkkelprinsipper i trådløs kommunikasjon",
    "keyTraits": [
        {
            "title": "Digitalisering (0 og 1)",
            "description": "Lyd og bilder samples og gjøres om til binære tall (bits). Digitale signaler tåler støy mye bedre enn analoge, fordi mottakeren bare trenger å skille mellom bestemte nivåer."
        },
        {
            "title": "Bærebølge og modulasjon",
            "description": "En ren bærebølge bærer ingen nyheter før den moduleres. AM endrer amplituden, FM endrer frekvensen, mens 4G/5G og WiFi bruker avansert digital modulasjon (som QAM) for å pakke flere bits inn i hvert bølgeglimt."
        },
        {
            "title": "Antenne og resonans",
            "description": "En antenne fungerer best når lengden passer med bølgelengden (gjerne en halv eller kvart bølgelengde). Derfor er en FM-antenne (λ ≈ 3 m) mye lengre enn den knøttlille WiFi-antennen inne i mobilen (λ ≈ 6–12 cm)."
        },
        {
            "title": "Frekvens vs. rekkevidde og bøyning",
            "description": "Høyere frekvens gir plass til mer data per sekund (større båndbredde), men kortere bølgelengde. Korte bølger bøyer seg dårligere rundt hjørner og stoppes lettere av betongvegger og trær."
        },
    ],
    "deep_dive": {
        "title": "Fysikk i fokus: Hvorfor sliter 5 GHz WiFi gjennom betongvegger, mens FM-radio når inn i kjelleren?",
        "body": (
            "Hemmeligheten ligger i <strong>bølgelengde (λ = c / f)</strong> og bølgefenomenet <strong>bøyning (diffraksjon)</strong>. "
            "Bølger bøyer seg lettest rundt hindringer som er omtrent like store som eller mindre enn bølgelengden selv. "
            "FM-radio rundt 100 MHz har bølgelengde på ca. <strong>3 meter</strong> – den bøyer seg elegant rundt bygninger, åser og døråpninger. "
            "WiFi på 2,4 GHz har bølgelengde på <strong>12,5 cm</strong>, mens 5 GHz WiFi har bare <strong>6 cm</strong>. "
            "De korte 5 GHz-bølgene bærer mye mer data per sekund og har mindre kø i lufta, men de absorberes lettere av murstein, betong og vanndamp og bøyer seg dårlig rundt vegger. "
            "Derfor bruker 5G-nettet flere frekvensbånd samtidig: lave bånd (700 MHz) til god dekning på bygda og innendørs, og høye bånd (3,6 GHz eller millimeterbølger) til lynrask kapasitet på tette steder som stadioner og bysentrum."
        ),
    },
    "table": {
        "headers": ["Teknologi", "Typisk frekvens", "Bølgelengde i luft", "Datakapasitet", "Rekkevidde og gjennomtrengning"],
        "rows": [
            ["FM-radio", "~88–108 MHz", "ca. 3 m", "Lav (lyd)", "Svært lang rekkevidde; bøyer seg godt rundt terreng og inn i bygninger"],
            ["GPS (satellitt)", "~1,575 GHz (L1)", "ca. 19 cm", "Svært lav (tid/posisjon)", "Når fra 20 200 km bane utendørs, men blokkeres av tykke tak og tunneler"],
            ["WiFi 2,4 GHz", "2,4 GHz", "12,5 cm", "Middels", "God rekkevidde gjennom vegger, men ofte mye trafikk og forstyrrelser"],
            ["WiFi 5 GHz", "5,0 GHz", "6,0 cm", "Høy", "Kortere rekkevidde; dempes mer av vegger, men gir raskere og renere forbindelse"],
            ["4G / 5G mobilnett", "0,7–3,6 GHz", "8,3–43 cm", "Svært høy (særlig på 3,6 GHz)", "700 MHz gir vid dekning; 3,6 GHz gir høy fart, men trenger tettere basestasjoner"],
        ],
    },
    "classroomTest": (
        "Gå hjem til ruteren din (eller sjekk på skolen) og mål signalstyrken på mobilen på to steder: rett ved siden av ruteren og bak to lukkede dører eller en murvegg. "
        "Har ruteren både et 2,4 GHz- og et 5 GHz-nettverk, vil du se at 5 GHz er raskest rett ved ruteren, mens 2,4 GHz holder seg stabilt lenger unna. "
        "Tenk på bølgene som lyd: bass (lav frekvens, lang bølgelengde) høres tydelig gjennom naboens vegg, mens diskant (høy frekvens, kort bølgelengde) stoppes av veggen!"
    ),
    "examples": [
        "Bærebølge",
        "Modulasjon",
        "AM og FM",
        "Digital modulasjon",
        "Demodulasjon",
        "Båndbredde",
        "Bøyning (diffraksjon)",
        "GPS",
    ],
}

section_4_13 = {
    "title": "Stråling, helseeffekter, strålevern og kildekritikk",
    "timeAfterBB": "Ioniserende vs. ikke-ioniserende",
    "temperatureLabel": "Radon-grense: 100 Bq/m³",
    "eraLabel": "Strålevern og kildekritikk",
    "subtitleTag": "Fotonenergi, DNA-skade og faktasjekk",
    "summaryTitle": "Hvorfor sol og radon kan skade arvestoffet, mens 5G og WiFi ikke kan det – og hvordan du avslører strålemyter",
    "image": "rad_extra_health_protection.jpg",
    "imageCaption": "Skillet mellom ikke-ioniserende stråling (mobil, WiFi, 5G – kun oppvarming ved svært høy effekt) og ioniserende stråling (UV-B/C, røntgen, gamma, alfa/radon – nok energi til å slå løs elektroner og skade DNA).",
    "cosmicTag": "Helse, strålevern og vitenskap",
    "whatHappens": (
        "Ordet «stråling» skaper ofte uro, men i fysikken er det helt avgjørende hvor mye energi hvert enkelt foton bærer med seg (E = h · f). "
        "Vi deler elektromagnetisk stråling i to hovedgrupper ved overgangen mellom ultrafiolett lys (UV) og røntgen, der grensen for ionisering går. "
        "Ikke-ioniserende stråling omfatter radiobølger, 4G/5G, WiFi, mikrobølger, infrarød varme og synlig lys. Disse fotonene har altfor lav energi til å slå løs elektroner fra atomer "
        "og kan derfor ikke ødelegge kjemiske bindinger eller skade DNA direkte. Den eneste kjente biologiske effekten av radiobølger ved svært høy effekt er oppvarming av vev – "
        "akkurat slik en mikrobølgeovn varmer mat, men en mobil eller 5G-sender ligger langt under strenge grenseverdier for oppvarming. "
        "Ioniserende stråling derimot – som UV-B og UV-C, røntgen, gammastråling og partikkelstråling fra radioaktive stoffer som radon – har nok energi til å rive løs elektroner (ionisere atomer). "
        "Inne i cellene våre kan dette danne aggressive frie radikaler og føre til brudd på DNA-tråden, noe som øker risikoen for kreft hvis cellen ikke klarer å reparere skaden."
    ),
    "didYouKnow": (
        "Den største kilden til ioniserende stråling for folk flest i Norge er ikke atomkraftverk eller medisinsk røntgen, "
        "men naturlig radongass som siver opp fra berggrunnen i kjellere og oppholdsrom – etterfulgt av soling i sterk UV-stråling!"
    ),
    "traitsHeading": "Fire pilarer i strålevern og kunnskapsbasert vurdering",
    "keyTraits": [
        {
            "title": "Fotonenergi avgjør faren",
            "description": "Ett eneste UV-B- eller røntgenfoton kan ødelegge en kjemisk binding i DNA. Milliarder av 5G- eller WiFi-fotoner har hver for seg for lite energi til å ionisere atomer."
        },
        {
            "title": "Sol og UV-indeks",
            "description": "Når UV-indeksen er 3 eller høyere, anbefaler Direktoratet for strålevern og atomsikkerhet (DSA) solbeskyttelse: skygge, klær, solbriller og solkrem (minst faktor 30) for å hindre solforbrenning og hudkreft."
        },
        {
            "title": "Radon i norske boliger",
            "description": "Radon er en luktfri, radioaktiv edelgass som sender ut alfastråling i lungene når den pustes inn. I Norge er tiltaksgrensen 100 Bq/m³ (becquerel per kubikkmeter), og maksgrensen 200 Bq/m³."
        },
        {
            "title": "Medisinsk røntgen og CT",
            "description": "Røntgen og CT bruker ioniserende stråling som gir uvurderlig medisinsk nytte, men leger følger alltid ALARA-prinsippet (As Low As Reasonably Achievable): så lav dose som mulig uten å miste bildekvalitet."
        },
    ],
    "deep_dive": {
        "title": "4-punkts sjekkliste for kildekritikk: Når du leser om 5G, mobil og stråling i media",
        "body": (
            "På sosiale medier og i nyhetsartikler dukker det jevnlig opp skremmende påstander om 5G, WiFi eller mobilstråling. "
            "Bruk denne 4-punkts sjekklisten som en ekte naturviter før du deler eller tror på påstanden:<br>"
            "<strong>1. Hvem står bak og hva er motivet?</strong> Er kilden en uavhengig fagmyndighet eller forskningsinstitusjon (som DSA, FHI eller WHO), eller en blogg/aktør som selger «strålebeskyttende» klistremerker og produkter?<br>"
            "<strong>2. Skiller teksten mellom ioniserende og ikke-ioniserende stråling?</strong> Hvis artikkelen blander sammen 5G-radiobølger med røntgen eller radioaktivitet, mangler den grunnleggende fysikkforståelse.<br>"
            "<strong>3. Viser påstanden til fagfellevurderte studier og samlet forskning?</strong> Enkeltstudier på celler i en skål med ekstreme doser kan ikke uten videre overføres til vanlig mobilbruk. Se etter oppsummert forskning over tid.<br>"
            "<strong>4. Er tall, enheter og grenseverdier oppgitt?</strong> Seriøse kilder oppgir konkrete målinger (for eksempel W/kg for SAR-verdi eller Bq/m³ for radon) og sammenligner med internasjonale grenseverdier – ikke bare vage ord som «farlige bølger»."
        ),
    },
    "table": {
        "headers": ["Strålingstype", "Kategori", "Biologisk virkning", "Vanlige kilder og tiltak / grenser"],
        "rows": [
            ["5G, 4G, WiFi, radio", "Ikke-ioniserende", "Kan bare varme vev ved svært høy effekt; skader ikke DNA", "Mobil, ruter, basestasjoner; strenge sikkerhetsmarginer (SAR-verdi)"],
            ["UV-stråling (UV-A/B)", "På grensen / ioniserende (UV-B/C)", "Danner frie radikaler og DNA-skader i hudceller; solbrenthet og hudkreft", "Sola og solarium; bruk solkrem (SPF 30+), klær og skygge ved UV-indeks ≥ 3"],
            ["Radon (alfastråling)", "Ioniserende partikkelstråling", "Kort rekkevidde, men svært høy ioniseringsevne inne i lungevev", "Berggrunn i kjellere; mål med sporfilm, tiltaksgrense 100 Bq/m³ i Norge"],
            ["Røntgen og CT", "Ioniserende EM-stråling", "Kan slå løs elektroner og skade DNA; øker kreftrisiko svakt ved høye doser", "Sykehus og tannlege; brukes kun når medisinsk nytte er større enn risiko (ALARA)"],
        ],
    },
    "classroomTest": (
        "Søk opp to ulike nettsaker om 5G og helse – én fra Direktoratet for strålevern og atomsikkerhet (dsa.no) eller FHI, og én fra et kommentarfelt eller en alternativ blogg. "
        "Gå gjennom de fire punktene i kildekritikk-sjekklisten på begge tekstene: Hvilken av dem oppgir konkrete måleenheter, skiller mellom ioniserende og ikke-ioniserende stråling, og viser til fagfellevurdert forskning?"
    ),
    "examples": [
        "Ikke-ioniserende stråling",
        "Ioniserende stråling",
        "Frie radikaler",
        "DNA-skade",
        "Radon",
        "Becquerel (Bq/m³)",
        "UV-indeks",
        "ALARA-prinsippet",
        "Kildekritikk",
    ],
}

PART_DATA = {
    "target_chapter": "straling",
    "extra_learning_goals": [
        "Forklare hovedprinsippene for trådløs kommunikasjon (digitalisering, bærebølge, modulasjon og demodulasjon) og gjøre rede for hvordan frekvensbånd påvirker datakapasitet og rekkevidde i teknologi som 4G/5G, WiFi og GPS.",
        "Skille mellom ioniserende og ikke-ioniserende stråling ut fra fotonenergi, vurdere strålevern knyttet til UV-stråling, radon og medisinsk røntgen, og bruke kildekritikk til å vurdere påstander om stråling og helse.",
    ],
    "extra_summary_points": [
        "Trådløs kommunikasjon bygger på at digitaliserte data (0 og 1) moduleres på en bærebølge og sendes som elektromagnetiske bølger; høyere frekvens gir større datakapasitet, men kortere rekkevidde og svakere bøyning rundt vegger.",
        "Ikke-ioniserende stråling (mobil, 5G, WiFi) har for lav fotonenergi til å skade DNA direkte, mens ioniserende stråling (UV-B/C, radon, røntgen) kan skade arvestoffet og krever bevisst strålevern og kildekritikk.",
    ],
    "sections": [section_4_12, section_4_13],
    "extra_control_questions": [
        {
            "question": (
                "En familie merker at WiFi-nettverket på 5 GHz gir lynrask nedlasting i stua der ruteren står, "
                "men mister dekningen på soverommet bak to tykke murvegger, mens 2,4 GHz-nettverket fortsatt fungerer. "
                "Forklar hele signalkjeden fra ruteren til mobilen, og bruk bølgelengde og bøyning (diffraksjon) til å forklare forskjellen mellom 2,4 GHz og 5 GHz."
            ),
            "contextHint": "Tegn opp i hodet: data (0 og 1) → modulasjon på bærebølge → antenne → bølgelengde λ = c / f → bøyning og demping i murvegg → demodulasjon.",
            "answer": (
                "Ruteren mottar digitale data (0 og 1) og modulerer dem på en høyfrekvent bærebølge (digital modulasjon). "
                "Antennen sender ut elektromagnetiske mikrobølger som fanges opp av mobilens antenne og demoduleres tilbake til data. "
                "Fordi bølgelengden er gitt av λ = c / f, har 5 GHz-signalet en bølgelengde på ca. 6 cm, mens 2,4 GHz har ca. 12,5 cm. "
                "Høyere frekvens (5 GHz) gir plass til mer data per sekund i stua, men kortere bølger bøyer seg dårligere rundt hjørner (mindre diffraksjon) og absorberes lettere av murvegger. "
                "Derfor når 2,4 GHz lenger inn på soverommet."
            ),
        },
        {
            "question": (
                "En slektning deler en artikkel på sosiale medier med overskriften «Ny 5G-mast gir farlig radioaktiv stråling og DNA-skader – kjøp dette skjoldet til mobilen!». "
                "Bruk fysikkunnskap om fotonenergi (ioniserende vs. ikke-ioniserende stråling) og den 4-punkts kildekritiske sjekklisten til å vurdere påstanden."
            ),
            "contextHint": "Sammenlign energien i 5G-fotoner med UV/røntgen/radon, og sjekk motiv, fagbegreper, forskning og måleenheter.",
            "answer": (
                "Fysisk sett er påstanden feil: 5G bruker radiobølger/mikrobølger, som er ikke-ioniserende stråling. "
                "Fotonene har altfor lav energi (E = h · f) til å slå løs elektroner, danne frie radikaler eller skade DNA, og de er ikke radioaktive (radioaktivitet kommer fra ustabile atomkjerner, som ved radon eller gamma). "
                "Kildekritisk sett avslører alle fire punktene artikkelen: (1) Avsenderen har økonomisk motiv for å selge et «mobilsjold», "
                "(2) teksten blander sammen ikke-ioniserende 5G-bølger og radioaktiv/ioniserende stråling, "
                "(3) den støtter seg ikke på fagfellevurdert, oppsummert forskning fra uavhengige faginstanser som DSA eller WHO, og "
                "(4) den mangler konkrete målinger og enheter sammenlignet med gjeldende grenseverdier."
            ),
        },
    ],
    "extra_glossary": {
        "Bærebølge": "En jevn, høyfrekvent elektromagnetisk bølge som brukes til å frakte informasjon gjennom luft eller rom ved at den moduleres.",
        "Modulasjon": "Prosessen der informasjon (lyd, bilde eller digitale 0 og 1) legges oppå en bærebølge ved å variere amplituden (AM), frekvensen (FM) eller fasen.",
        "AM og FM": "Amplitudemodulasjon (AM) varierer bølgehøyden, mens frekvensmodulasjon (FM) varierer frekvensen litt opp og ned i takt med lydsignalet.",
        "Digital modulasjon": "Metode der digitale bits (0 og 1) kodes som raske, presise hopp i amplitude, frekvens og/eller fase – brukt i 4G, 5G og WiFi.",
        "Demodulasjon": "Prosessen i mottakeren som skiller den opprinnelige informasjonen (0 og 1, lyd eller bilde) fra bærebølgen.",
        "Båndbredde": "Hvor stort frekvensområde et signal disponerer, som avgjør hvor mye data (bits per sekund) som kan overføres samtidig.",
        "Bøyning (diffraksjon)": "At bølger bøyer seg rundt kanter og åpninger. Lengre bølgelengder (lavere frekvens) bøyer seg lettere rundt vegger og terreng enn korte bølger.",
        "GPS": "Global Positioning System – satellittnavigasjon der mottakeren måler tidsforsinkelsen til radiosignaler (~1,575 GHz) fra minst fire satellitter for å finne posisjonen.",
        "Ikke-ioniserende stråling": "Elektromagnetisk stråling med for lav fotonenergi til å slå løs elektroner fra atomer (f.eks. radio, WiFi, 4G/5G, mikrobølger, synlig lys). Kan kun varme vev ved svært høy effekt.",
        "Ioniserende stråling": "Stråling med nok energi til å rive løs elektroner fra atomer og molekyler (UV-B/C, røntgen, gamma, alfa/radon), noe som kan skade DNA.",
        "Frie radikaler": "Svært reaktive molekyler med uparede elektroner som kan dannes når ioniserende stråling treffer vann og andre stoffer inne i cellene.",
        "DNA-skade": "Brudd eller kjemiske endringer i arvestoffet (DNA) forårsaket av for eksempel ioniserende stråling, som kan føre til celledød eller kreft hvis det ikke repareres.",
        "Radon": "En naturlig, luktfri og radioaktiv edelgass fra berggrunnen som sender ut alfastråling og øker risikoen for lungekreft ved høye konsentrasjoner innendørs.",
        "Becquerel (Bq/m³)": "Måleenhet for radioaktiv aktivitet per kubikkmeter luft; ett becquerel betyr én kjerneomdanning per sekund. Norsk tiltaksgrense for radon i bolig er 100 Bq/m³.",
        "UV-indeks": "En standardisert skala som viser hvor sterk den ultrafiolette strålingen fra sola er; ved UV-indeks 3 eller høyere anbefales solbeskyttelse.",
        "ALARA-prinsippet": "Strålevernprinsipp (As Low As Reasonably Achievable): all bruk av ioniserende stråling i medisin skal gi så lav stråledose som praktisk mulig uten at nytten går tapt.",
        "Kildekritikk": "Systematisk vurdering av hvem som står bak en påstand, motivet, faglig presisjon, bruk av måleenheter og om påstanden støttes av oppsummert forskning.",
    },
}
