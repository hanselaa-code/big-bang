# -*- coding: utf-8 -*-
"""Enrichment part 4.11: Sentrale bølgefenomener (Kapittel 4: Stråling)."""

PART_DATA = {
    "target_chapter": "straling",
    "extra_learning_goals": [
        "Gjøre rede for og gi eksempler på de fire sentrale bølgefenomenene refleksjon, brytning, bøyning (diffraksjon) og interferens for både lys og lyd.",
        "Forklare hvordan bølgefart, bølgelengde og åpningens størrelse avgjør hvordan bølger oppfører seg i møte med medier, spalter og andre bølger.",
    ],
    "extra_summary_points": [
        "Bølger følger fire universelle fenomener: refleksjon (innfallsvinkel = refleksjonsvinkel), brytning (endring i bølgefart mellom medier), bøyning (spredning rundt kanter og gjennom smale spalter) og interferens (konstruktiv forsterkning eller destruktiv utslokking).",
        "Bøyning er tydeligst når spalten eller hindringen er på størrelse med bølgelengden, noe som forklarer hvorfor lyd bøyes lett rundt hushjørner mens synlig lys danner skarpe skygger.",
    ],
    "sections": [
        {
            "title": "Sentrale bølgefenomener – Refleksjon, brytning, bøyning og interferens",
            "timeAfterBB": "Bølgefysikk • Lys & lyd",
            "temperatureLabel": "4 kjernefenomener",
            "eraLabel": "Kapittel 4 • Bølger",
            "subtitleTag": "Hvordan oppfører bølger seg når de møter speil, prismer, spalter og andre bølger?",
            "summaryTitle": "De fire bølgefenomenene som styrer alt fra regnbuer og briller til LIGO-detektorer",
            "image": "rad_extra_wave_phenomena.jpg",
            "imageCaption": "De fire sentrale bølgefenomenene: Refleksjon mot speil (øverst t.v.), brytning i prisme (øverst t.h.), bøyning/diffraksjon gjennom smal spalte (nederst t.v.) og interferens mellom to bølgekilder (nederst t.h.).",
            "cosmicTag": "NAT01-05 • Bølgefenomener",
            "whatHappens": (
                "Når en bølge møter en hindring, en overflate eller en annen bølge, kan fire grunnleggende "
                "bølgefenomener oppstå. Ved **refleksjon** kastes bølgen tilbake fra en flate, for eksempel et speil "
                "eller en fjellvegg. Her gjelder refleksjonsloven: innfallsvinkelen er alltid lik refleksjonsvinkelen, "
                "målt mot innfallsloddet. **Brytning** (refraksjon) skjer når en bølge går skrått inn i et nytt medium "
                "der bølgefarten endres, slik lys gjør fra luft til vann eller glass. Fordi farten avtar i glass, bøyes "
                "lyset mot loddet, og et sugerør i et vannglass ser brukket ut. **Bøyning** (diffraksjon) oppstår når "
                "bølger runder kanter eller passerer gjennom en smal spalte. Bøyningen blir størst når åpningen er "
                "omtrent like stor som bølgelengden – derfor hører vi stemmer rundt et hushjørne, mens lys kaster "
                "skarpe skygger. **Interferens** skjer når to eller flere bølger møtes og overlapper. Bølgetopp mot "
                "bølgetopp gir forsterkning (**konstruktiv interferens**), mens bølgetopp mot bølgedal gir utslokking "
                "(**destruktiv interferens**)."
            ),
            "didYouKnow": (
                "Verdens mest følsomme måleinstrument, gravitasjonsbølgedetektoren LIGO i USA, bruker laserinterferometri "
                "til å måle avstandsendringer som er ti tusen ganger mindre enn diameteren til et proton (rundt 10⁻¹⁹ m)! "
                "Når to laserstråler i 4 km lange vinkelrette armer møtes, avslører selv den minste forskyvning i "
                "interferensmønsteret at en gravitasjonsbølge fra kolliderende sorte hull har passert jorda."
            ),
            "traitsHeading": "De fire bølgefenomenene i praksis",
            "keyTraits": [
                {
                    "title": "1. Refleksjon",
                    "description": (
                        "Bølgen kastes tilbake fra en grenseflate. Innfallsvinkelen er alltid lik refleksjonsvinkelen "
                        "(θ₁ = θ₂). Glatte flater gir speilende refleksjon (som i et baderomsspeil), mens ru flater "
                        "gir diffus spredning i mange retninger (som fra et hvitt papirark)."
                    ),
                },
                {
                    "title": "2. Brytning (refraksjon)",
                    "description": (
                        "Bølgen endrer retning fordi bølgefarten endres ved overgangen mellom to medier (v = λ · f, "
                        "der frekvensen f er konstant og bølgelengden λ endres). Lys går med ca. 3,00 · 10⁸ m/s i vakuum, "
                        "men bremses til ca. 2,25 · 10⁸ m/s i vann og 2,00 · 10⁸ m/s i glass."
                    ),
                },
                {
                    "title": "3. Bøyning (diffraksjon)",
                    "description": (
                        "Bølger sprer seg ut i nye retninger når de passerer gjennom en smal åpning eller rundt en kant. "
                        "Lydbølger har bølgelengder på flere desimeter til meter og bøyes lett gjennom en åpen dør, "
                        "mens synlig lys (400–700 nm) knapt bøyes rundt vanlige gjenstander."
                    ),
                },
                {
                    "title": "4. Interferens",
                    "description": (
                        "Når to eller flere bølger overlapper i samme punkt, legges bølgeutslagene sammen. Sammenfallende "
                        "topper gir større amplitude (konstruktiv interferens), mens topp mot dal nuller hverandre ut "
                        "(destruktiv interferens). Dette skaper lys- og mørkestriper eller stille og høye soner."
                    ),
                },
            ],
            "deep_dive": {
                "title": "Fysikk i fokus: Hvorfor ser vi regnbuer, og hvordan virker støydempende hodetelefoner?",
                "body": (
                    "**Regnbuer og dispersjon:** Når hvitt sollys treffer en regndråpe i lufta, skjer først brytning inn i "
                    "vanndråpen, deretter refleksjon på innsiden av dråpens bakvegg, og til slutt brytning ut igjen mot øyet "
                    "vårt. Fordi blått og fiolett lys (kort bølgelengde, ca. 400 nm) bremses litt mer i vann enn rødt lys "
                    "(lang bølgelengde, ca. 700 nm), brytes fargene med ulik vinkel. Dette kalles **dispersjon**, og det "
                    "splitter hvitt sollys opp i hele fargespekteret på himmelen.\n\n"
                    "**Aktiv støydemping (ANC):** Støydempende hodetelefoner bruker ørlite mikrofoner på utsiden som måler "
                    "jevn bakgrunnsstøy, for eksempel suset fra en flymotor. En innebygd prosessor lager lynraskt en "
                    "identisk motlydbølge som er faseforskjøvet med en halv bølgelengde (180°). Når støybølgen og "
                    "motlydbølgen møtes inne i øreklokken, oppstår **destruktiv interferens**: bølgetopp treffer bølgedal, "
                    "og støyen slokkes ut før den når trommehinnen.\n\n"
                    "**Hvorfor når radiobølger bak fjell, mens mobilnett i høyere frekvens stopper?** Lange radiobølger "
                    "(bølgelengde fra meter til hundrevis av meter) kan bøyes (diffrakteres) rundt fjellrygger og bygninger. "
                    "Høyfrekvente signaler som 5G og synlig lys har mye kortere bølgelengde og bøyes langt mindre, og krever "
                    "derfor fri sikt eller tettere sendere."
                ),
            },
            "table": {
                "headers": ["Fenomen", "Hva skjer med bølgen?", "Eksempel i hverdagen", "Eksempel i astronomien"],
                "rows": [
                    [
                        "Refleksjon",
                        "Bølgen kastes tilbake fra en grenseflate med innfallsvinkel lik refleksjonsvinkel.",
                        "Speilbilder, ekko i fjellheimen, refleksvest i billys.",
                        "Speilteleskoper (som James Webb) samler stjernelys; månen reflekterer sollys.",
                    ],
                    [
                        "Brytning (refraksjon)",
                        "Bølgen endrer fart og retning når den går skrått inn i et nytt medium.",
                        "Briller, kameralinser, regnbue, sugerør som ser brukket ut i vann.",
                        "Jordas atmosfære bryter sollyset ved solnedgang; gravitasjonslinser bøyer lys rundt galakser.",
                    ],
                    [
                        "Bøyning (diffraksjon)",
                        "Bølgen sprer seg rundt kanter eller gjennom smale spalter på størrelse med bølgelengden.",
                        "Du hører noen snakke rundt et hushjørne uten å se dem.",
                        "Diffraksjonsgitter i spektrografer splitter stjernelys i spektrallinjer for å avsløre grunnstoffer.",
                    ],
                    [
                        "Interferens",
                        "Overlappende bølger forsterker hverandre (konstruktiv) eller slokker hverandre ut (destruktiv).",
                        "Støydempende hodetelefoner, regnbuefarger i tynne såpebobler og oljefilm.",
                        "Laserinterferometri i LIGO måler gravitasjonsbølger; radioteleskop-nettverk (VLBI) tar skarpe bilder av sorte hull.",
                    ],
                ],
            },
            "classroomTest": (
                "**Klasseromsforsøk: Laser gjennom CD-plate eller optisk gitter**\n"
                "Lys med en vanlig rød eller grønn laserpeker skrått mot undersiden av en gammel CD- eller DVD-plate (eller "
                "rett gjennom et optisk spaltegitter mot en hvit vegg 1–2 meter unna). De tette sporene på platen virker som "
                "et gitter der lyset både **bøyes** (diffraksjon) og danner lysprikker på veggen der bølgene møtes i "
                "**konstruktiv interferens**. Mål avstanden mellom prikkene og sammenlign rød laser (ca. 650 nm) med grønn "
                "laser (ca. 532 nm): rød laser har lengre bølgelengde og gir større avstand mellom prikkene!\n"
                "*Sikkerhet (risikovurdering):* Bruk kun svak klasseromslaser (klasse 1 eller 2, < 1 mW). Lys aldri mot øyne "
                "eller blanke speilflater der strålen kan reflekteres ukontrollert inn i noens øyne."
            ),
            "examples": [
                "Refleksjon",
                "Brytning (refraksjon)",
                "Bøyning (diffraksjon)",
                "Konstruktiv interferens",
                "Destruktiv interferens",
            ],
        }
    ],
    "extra_control_questions": [
        {
            "question": (
                "Du står utenfor en åpen klasseromsdør og kan høre læreren snakke tydelig inne i rommet, selv om du "
                "ikke kan se læreren. Forklar hvorfor lydbølgene når ørene dine rundt dørkarmen, mens lysbølgene "
                "fra læreren ikke gjør det."
            ),
            "contextHint": "Tenk på sammenhengen mellom bølgelengde, åpningens størrelse og bøyning (diffraksjon).",
            "answer": (
                "Bøyning (diffraksjon) blir størst når åpningen bølgen passerer gjennom er omtrent på størrelse med "
                "bølgelengden. Lydbølger fra menneskestemmen har bølgelengder på omtrent 0,3–1,5 meter, som passer godt "
                "med bredden på en vanlig døråpning (ca. 0,8–1 m). Derfor bøyes lydbølgene effektivt rundt dørkarmen og "
                "fyller gangen utenfor. Synlig lys har derimot ekstremt kort bølgelengde (400–700 nanometer, altså under "
                "én tusendels millimeter), som er millioner av ganger mindre enn døråpningen. Lyset bøyes derfor knapt "
                "merkbart rundt kanten, men fortsetter rett fram og danner en skarp skygge."
            ),
        },
        {
            "question": (
                "En lysstråle går fra luft inn i et akvarium fylt med vann. Hva skjer med lysets fart, frekvens, "
                "bølgelengde og retning når det krysser vannoverflaten skrått? Hva kalles dette bølgefenomenet?"
            ),
            "contextHint": "Bruk sammenhengen v = λ · f, og husk hva som skjer når en bølge går over i et optisk tettere medium.",
            "answer": (
                "Dette fenomenet kalles **brytning (refraksjon)**. Når lyset går fra luft inn i vann (et optisk tettere "
                "medium), avtar lysfarten fra ca. 3,00 · 10⁸ m/s til ca. 2,25 · 10⁸ m/s. Frekvensen (f) forblir uendret "
                "fordi den bestemmes av lyskilden. Siden v = λ · f og farten v minker mens f er konstant, må også "
                "bølgelengden (λ) bli kortere i vannet. Fordi strålen treffer vannflaten skrått, endrer den retning og "
                "bøyes inn mot innfallsloddet."
            ),
        },
    ],
    "extra_glossary": {
        "Refleksjon": "Bølgefenomen der en bølge kastes tilbake fra en grenseflate slik at innfallsvinkelen alltid er lik refleksjonsvinkelen.",
        "Brytning (refraksjon)": "Endring i en bølges retning og bølgelengde når den går skrått over i et nytt medium der bølgefarten er annerledes.",
        "Bøyning (diffraksjon)": "Spredning av bølger når de passerer gjennom en smal åpning eller runder en kant; effekten er størst når åpningen er på størrelse med bølgelengden.",
        "Konstruktiv interferens": "Forsterkning som oppstår når to eller flere bølger møtes i fase (bølgetopp møter bølgetopp) slik at samlet amplitude øker.",
        "Destruktiv interferens": "Demping eller utslokking som oppstår når bølger møtes i motfase (bølgetopp møter bølgedal) slik at bølgeutslagene helt eller delvis nuller hverandre ut.",
    },
}
