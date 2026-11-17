# -*- coding: utf-8 -*-
"""
Pedagogisk fordypningsstoff, læringsmål (LK20), formler, sammenhenger og ordliste
for den komplette Vg1 Naturfag-læreboken om Universet.
"""

CHAPTER_ENRICHMENTS = {
    "big-bang": {
        "chapter_num": 1,
        "accent": "#D97706",
        "accent_soft": "#FEF3C7",
        "accent_border": "#F59E0B",
        "cover_image": "hub_big_bang.jpg",
        "learning_goals": [
            "Forklare hovedtrekkene i Big Bang-teorien fra t = 0 til universet i dag (13,8 milliarder år).",
            "Gjøre rede for hvilke observasjoner som støtter Big Bang-modellen (rødforskyvning, kosmisk bakgrunnsstråling og fordelingen av lette grunnstoffer).",
            "Skille mellom hva Big Bang faktisk beskriver (utvidelse av selve rommet) og vanlige misforståelser (en eksplosjon i et tomt rom).",
            "Kjenne til hovedtrekkene i universets energibudsjett: vanlig materie, mørk materie og mørk energi.",
        ],
        "intro": (
            "Alt du ser rundt deg – atomene i kroppen din, lyset fra sola, jorda vi står på og milliardene av galakser i verdensrommet – "
            "har en felles opprinnelse. For omtrent 13,8 milliarder år siden var hele det observerbare universet samlet i en ekstremt varm og tett tilstand. "
            "Gjennom dette kapittelet følger vi de ti store vendepunktene i universets historie: fra den lynraske kosmiske inflasjonen i brøkdelen av det første sekundet, "
            "via dannelsen av de første atomkjernene og frigjøringen av den kosmiske bakgrunnsstrålingen, til de første stjernene, galaksene, vårt eget solsystem og det akselererende universet i dag."
        ),
        "deep_dives": {
            0: {
                "title": "Fysikk i fokus: Hva betyr «utvidelse av rommet»?",
                "body": (
                    "En vanlig misforståelse er at Big Bang var en bombe som eksploderte på ett bestemt punkt i et allerede eksisterende, tomt rom. "
                    "I moderne kosmologi er det selve <strong>romtiden</strong> som utvider seg. Det finnes derfor ikke noe «utenfor» eller «sentrum» i universet – "
                    "utvidelsen skjer overalt samtidig. Kosmisk inflasjon (ca. 10⁻³⁶ til 10⁻³² sekunder etter t = 0) forklarer hvorfor universet er så flatt og har nesten identisk temperatur i alle retninger."
                ),
            },
            2: {
                "title": "Tall & fakta: Big Bang-nukleosyntesen (de første 3–20 minuttene)",
                "body": (
                    "Da temperaturen sank under ca. 1 milliard kelvin, kunne protoner og nøytroner binde seg sammen til stabile atomkjerner uten å bli slått i stykker igjen. "
                    "Resultatet etter omtrent 20 minutter ble en svært presis oppskrift: om lag <strong>75 % hydrogen (¹H)</strong> og <strong>25 % helium (⁴He)</strong> etter masse, "
                    "pluss ørlite deuterium (²H) og litium (⁷Li). At vi måler akkurat dette blandingsforholdet i gamle gasskyer i dag, er et av de sterkeste bevisene for Big Bang."
                ),
            },
            3: {
                "title": "Kosmisk milepæl: Rekombinasjon og bakgrunnsstrålingen (CMB)",
                "body": (
                    "Før universet var 380 000 år gammelt, var det en ugjennomsiktig plasma-tåke av frie elektroner og atomkjerner. Fotonene kolliderte hele tiden med frie elektroner. "
                    "Da temperaturen falt til ca. <strong>3 000 K</strong>, fanget atomkjernene inn elektronene og dannet nøytrale atomer. Plutselig ble rommet gjennomsiktig! "
                    "Lyset fra dette øyeblikket har reist fritt gjennom rommet siden, men fordi universet har utvidet seg med en faktor på rundt 1 100, er bølgelengden strukket fra synlig/infrarødt lys til mikrobølger på bare <strong>2,725 K</strong>."
                ),
            },
            9: {
                "title": "Universets energibudsjett & Hubbles lov",
                "body": (
                    "Edwin Hubble viste i 1929 at jo lenger unna en galakse er, desto fortere fjerner den seg fra oss: <strong>v = H₀ · d</strong> (Hubbles lov). "
                    "I dag vet vi at utvidelsen til og med <em>akselererer</em>. Målinger av bakgrunnsstrålingen og fjerne supernovaer viser at universets energiinnhold består av omtrent "
                    "<strong>5 % vanlig (baryonisk) materie</strong>, <strong>27 % mørk materie</strong> og <strong>68 % mørk energi</strong>."
                ),
            },
        },
        "summary_points": [
            "Big Bang er teorien om at universet begynte i en ekstremt varm og tett tilstand for 13,8 milliarder år siden og har utvidet seg siden.",
            "De tre viktigste observasjonsbevisene er: (1) rødforskyvning av fjerne galakser (Hubbles lov), (2) den kosmiske bakgrunnsstrålingen (CMB) på 2,725 K, og (3) fordelingen av ~75 % hydrogen og ~25 % helium fra de første minuttene.",
            "De første 380 000 årene var universet ugjennomsiktig; først da nøytrale atomer ble dannet, slapp lyset fri.",
            "Tyngre grunnstoffer enn litium ble ikke laget i Big Bang, men i stjerner, supernovaer og kilonovaer senere i historien.",
        ],
    },
    "stjerner": {
        "chapter_num": 2,
        "accent": "#0284C7",
        "accent_soft": "#E0F2FE",
        "accent_border": "#0EA5E9",
        "cover_image": "hub_stjerner.jpg",
        "learning_goals": [
            "Forklare hvordan stjerner fødes i molekylskyer når tyngdekraften overvinner gasstrykket.",
            "Beskrive hva som skjer i hovedseriestjerner gjennom kjernefusjon (proton–proton-kjeden) og hydrostatisk likevekt.",
            "Sammenligne livsløpet til sol-lignende stjerner (< 8 solmasser) og tunge stjerner (> 8 solmasser).",
            "Forklare hvordan hvite dverger, supernovaer, nøytronstjerner og sorte hull oppstår.",
        ],
        "intro": (
            "Stjernene er universets lyskilder og atomfabrikker. Uten stjerner ville verdensrommet fortsatt vært mørkt, kaldt og nesten bare fylt av hydrogen og helium. "
            "Nøkkelen til å forstå enhver stjerne er én eneste egenskap: <strong>massen</strong> den blir født med. "
            "Massen avgjør hvor varm kjernen blir, hvor fort stjernen brenner opp drivstoffet sitt, hvor lenge den lever, og hvilken dramatisk skjebne som venter til slutt."
        ),
        "deep_dives": {
            2: {
                "title": "Kjernefusjon og E = mc²: Slik skinner Sola",
                "body": (
                    "Inne i Solas kjerne er temperaturen ca. <strong>15 millioner kelvin</strong>. Her smelter fire hydrogenkjerner (protoner) sammen til én heliumkjerne gjennom proton–proton-kjeden: "
                    "<strong>4 ¹H → ⁴He + 2 e⁺ + 2 νₑ + energi</strong>. En heliumkjerne veier omtrent <strong>0,7 % mindre</strong> enn de fire protonene til sammen. "
                    "Denne «manglende» massen blir direkte omdannet til energi etter Einsteins formel <strong>E = mc²</strong>. Fordi lyshastigheten c er enorm, gir selv ørlite masse enorme energimengder. "
                    "Stjernen er i <strong>hydrostatisk likevekt</strong> så lenge strålingstrykket utover balanserer tyngdekraften innover."
                ),
            },
            5: {
                "title": "Skjebnegren 1 (< 8 M☉): Fra rød kjempe til hvit dverg",
                "body": (
                    "Når en stjerne som Sola går tom for hydrogen i kjernen, trekker kjernen seg sammen mens de ytre lagene blåses opp til en <strong>rød kjempe</strong>. "
                    "I kjernen fusjoneres helium til karbon og oksygen. Til slutt blåses de ytre lagene forsiktig ut som en lysende <strong>planetarisk tåke</strong> (som beriker rommet med karbon og nitrogen), "
                    "mens kjernen blir igjen som en ultratett <strong>hvit dverg</strong> på størrelse med Jorda – holdt oppe av kvantemekanisk elektrondegenerasjonstrykk (maks ~1,44 solmasser, Chandrasekhar-grensen)."
                ),
            },
            7: {
                "title": "Skjebnegren 2 (> 8 M☉): Løkskall-fusjon og supernovaeksplosjon",
                "body": (
                    "Tunge stjerner klarer å presse kjernen til over en milliard grader og fusjonerer stadig tyngre grunnstoffer i konsentriske lag – som en kosmisk løk: "
                    "H → He → C → Ne → O → Si → <strong>Jern (Fe)</strong>. Men jern gir <em>ikke</em> energi ved fusjon – tvert imot stjeler jernfusjon energi! "
                    "På under ett sekund kollapser jernkjernen, spretter tilbake og sender en sjokkbølge utover som river stjernen i filler i en <strong>supernova</strong>. "
                    "En eneste supernova kan lyse sterkere enn en hel galakse i flere uker."
                ),
            },
            9: {
                "title": "De mest ekstreme sluttproduktene: Nøytronstjerne og sort hull",
                "body": (
                    "Hvis kjernen som blir igjen etter en supernova er mellom ca. 1,4 og 3 solmasser, presses protoner og elektroner sammen til nøytroner i en <strong>nøytronstjerne</strong> "
                    "(bare ~20 km bred, men tyngre enn Sola; en teskje veier hundrevis av millioner tonn). Raskt roterende nøytronstjerner kalles <strong>pulsarer</strong>. "
                    "Er resten tyngre enn ~3 solmasser, finnes det ingen kraft i naturen som kan stanse tyngdekraften: kjernen kollapser til et <strong>stellart sort hull</strong>."
                ),
            },
        },
        "summary_points": [
            "En stjernes masse avgjør både levetid og sluttprodukt: tunge stjerner lever kort og intenst, lette stjerner lever svært lenge.",
            "På hovedserien er stjerner i hydrostatisk likevekt mellom tyngdekraft innover og fusjonsvarme/strålingstrykk utover.",
            "Sol-lignende stjerner (< 8 M☉) blir røde kjemper, planetariske tåker og hvite dverger.",
            "Tunge stjerner (> 8 M☉) bygger grunnstoffer helt til jern, eksploderer som supernovaer og etterlater nøytronstjerner eller sorte hull.",
        ],
    },
    "grunnstoffer": {
        "chapter_num": 3,
        "accent": "#0D9488",
        "accent_soft": "#CCFBF1",
        "accent_border": "#14B8A6",
        "cover_image": "hub_grunnstoffer.jpg",
        "learning_goals": [
            "Forklare atomets oppbygning med protoner, nøytroner og elektroner, og hva atomnummer og massetall betyr.",
            "Skille mellom grunnstoffer, isotoper og ioner, og bruke periodesystemet til å finne antall elektronskall og ytterelektroner.",
            "Forklare hvordan spektrallinjer fungerer som atomenes «strekkode» i astronomien.",
            "Gjøre rede for de fire kosmiske smiene som har skapt alle naturlige grunnstoffer fra hydrogen til uran.",
        ],
        "intro": (
            "Hver eneste celle i kroppen din, oksygenet du puster inn, kalsiumet i skjelettet og jernet i blodet har en kosmisk historie som strekker seg milliarder av år tilbake. "
            "I dette kapittelet kobler vi kjemi og astrofysikk sammen: Først ser vi inn i selve atomet – hvordan protoner bestemmer hvilket grunnstoff det er, hvordan nøytroner skaper isotoper, "
            "og hvordan elektronskall og spektrallinjer lar oss lese kjemien til fjerne stjerner. Deretter besøker vi de <strong>fire kosmiske smiene</strong> som lagde grunnstoffene i periodesystemet."
        ),
        "deep_dives": {
            0: {
                "title": "Atomets tre byggeklosser: Z og A",
                "body": (
                    "Et atom består av en ørliten, tett <strong>atomkjerne</strong> av positivt ladde <strong>protoner (+1)</strong> og uladde <strong>nøytroner (0)</strong>, omgitt av en sky av negativt ladde <strong>elektroner (−1)</strong>. "
                    "<strong>Atomnummeret Z</strong> er antall protoner – det er dette alene som avgjør hvilket grunnstoff atomet er (6 protoner = alltid karbon). "
                    "<strong>Massetall (nukleontall) A = Z + N</strong> er summen av protoner og nøytroner. Et nøytralt atom har alltid like mange elektroner som protoner."
                ),
            },
            2: {
                "title": "Periodesystemets nøkkel: Perioder og grupper",
                "body": (
                    "Elektronene ordner seg i energinivåer (skall). Det innerste skallet har plass til maks 2 elektroner, det neste 8, og for de letteste grunnstoffene ønsker atomene ofte 8 elektroner i ytterste skall (<strong>oktettregelen</strong>). "
                    "I periodesystemet forteller <strong>perioden (raden)</strong> hvor mange elektronskall atomet har, mens <strong>hovedgruppen (kolonnen)</strong> forteller antall <strong>valenselektroner</strong> (ytterelektroner) – "
                    "som styrer hvordan grunnstoffet reagerer kjemisk."
                ),
            },
            3: {
                "title": "Kvantehopp og spektrallinjer: Slik vet vi hva stjerner består av",
                "body": (
                    "Elektroner kan bare eksistere i bestemte energinivåer. Når et elektron absorberer et foton med akkurat riktig energi, hopper det opp til et høyere skall (<strong>absorpsjonslinje</strong> – mørk strek i spekteret). "
                    "Når det faller ned igjen, sender det ut et foton med samme energi/farge (<strong>emisjonslinje</strong>). Fordi hvert grunnstoff har unike avstander mellom skallene, får hvert grunnstoff sin egen «strekkode»."
                ),
            },
            9: {
                "title": "De 4 kosmiske smiene – og menneskekroppens stjernestøv",
                "body": (
                    "Ingen enkelt prosess kunne lage hele periodesystemet alene: "
                    "<strong>(1) Big Bang</strong> laget H, He og litt Li. "
                    "<strong>(2) Stjernefusjon</strong> bygget lette grunnstoffer opp til jern (C, N, O, Si, Fe). "
                    "<strong>(3) Supernovaer</strong> smidde og spredte tyngre grunnstoffer via nøytroninnfanging. "
                    "<strong>(4) Kilonovaer</strong> (kolliderende nøytronstjerner) laget størstedelen av de aller tyngste metallene som gull, platina og uran. "
                    "Etter masse består menneskekroppen av ca. <strong>65 % oksygen, 18 % karbon, 10 % hydrogen og 3 % nitrogen</strong> – over 90 % av vekten din kommer bokstavelig talt fra døde stjerner!"
                ),
            },
        },
        "summary_points": [
            "Antall protoner (Z) definerer grunnstoffet; antall nøytroner kan variere og gir ulike isotoper av samme grunnstoff.",
            "Elektronskall og valenselektroner styrer både kjemiske bindinger og periodesystemets struktur.",
            "Spektrallinjer avslører både hvilke grunnstoffer stjerner og gasskyer inneholder, og hvor fort de beveger seg.",
            "Alle grunnstoffer tyngre enn litium er skapt i stjerner, supernovaer og kilonovaer.",
        ],
    },
    "straling": {
        "chapter_num": 4,
        "accent": "#E11D48",
        "accent_soft": "#FFE4E6",
        "accent_border": "#F43F5E",
        "cover_image": "hub_straling.jpg",
        "learning_goals": [
            "Forklare hva elektromagnetisk stråling er, og bruke bølgeligningen c = λ · f.",
            "Ordne bølgetypene i det elektromagnetiske spekteret etter bølgelengde, frekvens og fotonenergi, og skille mellom ioniserende og ikke-ioniserende stråling.",
            "Forklare hvordan stjernefarge, spektrallinjer og rødforskyvning gir oss informasjon om temperatur, kjemi og fart i universet.",
            "Beskrive hvordan Jordas atmosfære, ozonlaget og drivhuseffekten samspiller med innkommende og utgående stråling.",
        ],
        "intro": (
            "Nesten alt vi vet om verdensrommet har vi lært uten å forlate Jorda – ved å fange opp <strong>elektromagnetisk stråling</strong>. "
            "Lys, radiobølger, infrarød varmestråling, ultrafiolett lys, røntgenstråling og gammastråling er alle varianter av det samme fysiske fenomenet: svingende elektriske og magnetiske felt som beveger seg med lyshastigheten. "
            "I dette kapittelet ser vi på hele bølgespekteret, lærer hvordan astronomer tolker stjernelys, og forstår hvorfor strålingsbalansen i atmosfæren er avgjørende for klima og liv på Jorda."
        ),
        "deep_dives": {
            0: {
                "title": "Bølgeligningen og fotoner: c = λ · f og E = h · f",
                "body": (
                    "I vakuum beveger all elektromagnetisk stråling seg med samme fart: <strong>c ≈ 3,00 × 10⁸ m/s</strong>. "
                    "Sammenhengen mellom fart (c), bølgelengde (λ) og frekvens (f) er <strong>c = λ · f</strong>. "
                    "Det betyr at kort bølgelengde alltid gir høy frekvens – og dermed høyere fotonenergi etter Plancks formel <strong>E = h · f</strong>. "
                    "Stråling med høyest energi (UV-C, røntgen, gamma) er <strong>ioniserende</strong>: hvert foton kan slå elektroner løs fra atomer og skade DNA."
                ),
            },
            4: {
                "title": "Wiens forskyvningslov: Hvorfor er blå stjerner varmere enn røde?",
                "body": (
                    "Alle varme gjenstander sender ut varmestråling. Jo høyere overflatetemperaturen T er, desto kortere blir bølgelengden der gjenstanden stråler sterkest: "
                    "<strong>λ_maks · T ≈ 2,9 × 10⁻³ m·K</strong>. En rød stjerne (ca. 3 000 K) stråler mest i rødt og infrarødt, vår gule/hvite Sol (ca. 5 800 K) topper i synlig grønt/gult, "
                    "mens en blåhvit stjerne (20 000–40 000 K) stråler intenst i blått og ultrafiolett."
                ),
            },
            6: {
                "title": "Dopplereffekt og kosmologisk rødforskyvning",
                "body": (
                    "Når en lyskilde beveger seg bort fra oss, eller når selve rommet mellom oss og en fjern galakse utvider seg mens lyset er underveis, "
                    "strekkes lysbølgene til lengre bølgelengder – mot den røde enden av spekteret (<strong>rødforskyvning, z</strong>). "
                    "Ved å måle hvor mye kjente spektrallinjer (f.eks. fra hydrogen) er forskjøvet mot rødt, kan astronomer beregne hvor fort galakser fjerner seg og hvor langt tilbake i tid vi ser."
                ),
            },
            9: {
                "title": "Atmosfæren som skjold og drivhus",
                "body": (
                    "Jordas atmosfære slipper gjennom to hovedvinduer: synlig lys og radiobølger. <strong>Ozonlaget (O₃)</strong> i stratosfæren stopper skadelig UV-stråling, "
                    "mens romteleskoper som Hubble og James Webb må opp over atmosfæren for å observere UV og infrarødt uhindret. "
                    "Ved bakken slipper sollys (kortbølget) inn og varmer opp Jorda. Jorda sender ut langbølget <strong>infrarød varmestråling</strong> tilbake, "
                    "som delvis fanges opp av klimagasser (H₂O, CO₂, CH₄) og sendes tilbake til bakken. Uten denne naturlige drivhuseffekten ville Jorda hatt en gjennomsnittstemperatur på ca. −18 °C i stedet for +15 °C."
                ),
            },
        },
        "summary_points": [
            "Elektromagnetisk stråling spenner fra radiobølger til gammastråling, og følger c = λ · f og E = h · f.",
            "Bare høyenergisk stråling (kortbølget UV, røntgen, gamma) er ioniserende.",
            "Stjernefarge avslører overflatetemperatur, spektrallinjer avslører grunnstoffer, og rødforskyvning avslører fart og kosmisk utvidelse.",
            "Drivhuseffekten skyldes at atmosfæren slipper kortbølget sollys inn, men bremser langbølget infrarød varmestråling ut.",
        ],
    },
    "galakser": {
        "chapter_num": 5,
        "accent": "#4F46E5",
        "accent_soft": "#E0E7FF",
        "accent_border": "#6366F1",
        "cover_image": "hub_galakser.jpg",
        "learning_goals": [
            "Beskrive oppbygningen av vår egen galakse Melkeveien og vår plassering i Orion-armen.",
            "Skille mellom hovedtypene av galakser (spiral, ellipse og irregulær) og forklare hva som skjer når galakser kolliderer.",
            "Forklare hvordan Vera Rubins observasjoner av galaksers rotasjon ga bevis for mørk materie.",
            "Plassere Jorda i universets storskala-struktur: Den lokale gruppen, Virgo-hopen, Laniakea og det kosmiske nettverket.",
        ],
        "intro": (
            "Frem til 1920-tallet trodde mange astronomer at Melkeveien var <em>hele</em> universet. Da Edwin Hubble målte avstanden til Andromedatåken i 1924, "
            "utvidet verdensbildet seg over natten: Universet består av hundrevis av milliarder eller billioner av slike «stjerneøyer» – galakser. "
            "I dette kapittelet zoomer vi ut fra vår egen nabolags-spiral til kolliderende giganter, usynlig mørk materie, lyssterke kvasarer og til slutt det enorme kosmiske nettverket."
        ),
        "deep_dives": {
            1: {
                "title": "Melkeveien i tall: Vår hjemmegalakse",
                "body": (
                    "Melkeveien er en <strong>stavspiralgalakse</strong> med en diameter på omtrent <strong>100 000 lysår</strong> og mellom 100 og 400 milliarder stjerner. "
                    "Sett fra siden er den en tynn skive (bare ~1 000 lysår tykk) med en tykkere, gulhvit sentralkule i midten. "
                    "Solsystemet ligger i <strong>Orion-armen</strong>, rundt <strong>26 000 lysår</strong> fra sentrum, og bruker ca. 225–250 millioner år på én runde rundt galaksesentrum (ett «kosmisk år»)."
                ),
            },
            2: {
                "title": "Sagittarius A* – Det supermassive sorte hullet i sentrum",
                "body": (
                    "Midt i Melkeveiens sentrum skjuler det seg et supermassivt sort hull kalt <strong>Sagittarius A*</strong> med en masse på rundt <strong>4,1 millioner solmasser</strong>. "
                    "Astronomer har fulgt stjerner som suser rundt et usynlig punkt i sentrum i enorme hastigheter, og i 2022 publiserte Event Horizon Telescope det første direkte bildet av skyggen rundt Sagittarius A*. "
                    "I dag vet vi at nesten alle store galakser har et supermassivt sort hull i kjernen."
                ),
            },
            5: {
                "title": "Vera Rubin og gåten om mørk materie",
                "body": (
                    "Etter Newtons og Keplers lover burde stjerner langt ute i kanten av en galakse gå mye saktere enn stjerner nær sentrum – akkurat som Neptun går saktere enn Merkur rundt Sola. "
                    "Men på 1970-tallet målte <strong>Vera Rubin</strong> at stjernene i ytterkantene av spiralgalakser beveger seg nesten like fort som stjernene lenger inne (en «flat rotasjonskurve»). "
                    "For at galaksene ikke skal slynges fra hverandre, må de være omgitt av en enorm, usynlig halo av <strong>mørk materie</strong> – som utgjør over fem ganger så mye masse som all vanlig materie!"
                ),
            },
            9: {
                "title": "Vår kosmiske adresse og Det kosmiske nettverket",
                "body": (
                    "Galakser ligger ikke jevnt drysset utover, men samler seg i hierarkier bundet av tyngdekraften: "
                    "<strong>Jorda → Solsystemet → Orion-armen → Melkeveien → Den lokale gruppen</strong> (ca. 50–80 galakser, bl.a. Andromeda) → "
                    "<strong>Virgo-superhopen → Laniakea-superhopen</strong> (~520 mill. lysår bred). "
                    "På den aller største skalaen danner galaksehoper lange lysende tråder (<strong>filamenter</strong>) rundt enorme <strong>kosmiske tomrom</strong> – det kosmiske nettverket."
                ),
            },
        },
        "summary_points": [
            "Melkeveien er en stavspiralgalakse (~100 000 lysår bred) med Sola ~26 000 lysår fra sentrum og Sagittarius A* (4,1 mill. M☉) i kjernen.",
            "Spiralgalakser har mye gass og ung stjernedannelse (blåhvite armer), mens ellipsegalakser er eldre og fattige på kald gass (gulrøde).",
            "Flate rotasjonskurver og gravitasjonslinser viser at galakser ligger inne i store haloer av usynlig mørk materie.",
            "På stor skala danner galakser hoper, superhoper (Laniakea) og et kosmisk nettverk av filamenter og tomrom.",
        ],
    },
    "romtid": {
        "chapter_num": 6,
        "accent": "#7C3AED",
        "accent_soft": "#EDE9FE",
        "accent_border": "#8B5CF6",
        "cover_image": "hub_romtid.jpg",
        "learning_goals": [
            "Forklare hva som menes med firedimensjonal romtid (3 romdimensjoner + 1 tidsdimensjon) og hvorfor lyshastigheten c er universets fartsgrense.",
            "Beskrive hvordan tid går saktere ved høy fart og i sterke gravitasjonsfelt (relativitetsteori og GPS).",
            "Forklare Einsteins bilde av tyngdekraft som krummet romtid, og hvordan dette gir planetbaner, gravitasjonslinser, sorte hull og gravitasjonsbølger.",
            "Skille mellom lokal tyngdekraft (som holder galakser sammen) og kosmisk utvidelse drevet av mørk energi.",
        ],
        "intro": (
            "I hverdagen tenker vi på rommet som en fast scene og tiden som en klokke som tikker likt for alle. "
            "I begynnelsen av 1900-tallet snudde Albert Einstein dette på hodet med den spesielle og generelle relativitetsteorien. "
            "Rom og tid er vevd sammen til én elastisk <strong>romtid</strong> som kan strekkes, bøyes og bølge. "
            "I dette siste kapittelet utforsker vi hvordan relativitet gjør GPS-en på mobilen din nøyaktig, hvordan lys bøyes rundt galaksehoper, og hvordan selve romtiden kan vibrere når sorte hull kolliderer."
        ),
        "deep_dives": {
            2: {
                "title": "Relativ tid i praksis: Hvorfor trenger GPS relativitet?",
                "body": (
                    "Både høy fart og sterk tyngdekraft får tiden til å gå saktere. "
                    "GPS-satellittene kretser i 20 200 km høyde med ca. 14 000 km/t. Fordi de beveger seg fort (spesiell relativitet), sakker klokkene deres ca. 7 mikrosekunder per dag. "
                    "Men fordi de er lenger unna Jordas tyngdefelt (generell relativitet), går klokkene deres ca. 45 mikrosekunder <em>fortere</em> per dag enn våre klokker på bakken. "
                    "Nettoeffekten er <strong>+38 mikrosekunder hver dag</strong>. Uten å korrigere for Einsteins teorier ville GPS-navigasjon bommet med over 10 kilometer hver eneste dag!"
                ),
            },
            3: {
                "title": "Newton vs. Einstein: Hva er egentlig tyngdekraft?",
                "body": (
                    "Isaac Newton beskrev tyngdekraften som en usynlig tiltrekningskraft mellom masser. Den fungerer utmerket til å beregne raketter og planetbaner i hverdagen. "
                    "Albert Einstein gikk dypere: <strong>«Masse forteller romtiden hvordan den skal krumme seg, og krummet romtid forteller massen hvordan den skal bevege seg.»</strong> "
                    "Jorda går ikke i bane rundt Sola fordi et usynlig tau drar i den, men fordi den følger den retteste veien (en <em>geodetisk linje</em>) gjennom romtiden som Solas masse krummer."
                ),
            },
            5: {
                "title": "Gravitasjonslinser: Universets naturlige forstørrelsesglass",
                "body": (
                    "Fordi lys alltid følger romtiden, vil også lysstråler uten masse bøyes når de passerer en tung stjerne eller galaksehop. "
                    "Dette kalles en <strong>gravitasjonslinse</strong>. Den kan forvrenge bakgrunnsgalakser til lysende buer eller hele ringer (Einsteinringer), "
                    "og gjør det mulig for astronomer å både se rekordfjerne galakser og «veie» usynlig mørk materie."
                ),
            },
            7: {
                "title": "Gravitasjonsbølger (LIGO 2015) og kosmisk utvidelse",
                "body": (
                    "Når to sorte hull eller nøytronstjerner spiralerer inn mot hverandre og smelter sammen, sender de ut krusninger i selve romtiden med lyshastigheten: <strong>gravitasjonsbølger</strong>. "
                    "I 2015 målte LIGO-detektorene i USA for første gang en slik bølge fra to sorte hull som kolliderte 1,3 milliarder lysår unna – en lengdeendring mindre enn en tusendels protondiameter! "
                    "På kosmisk skala kan også hele romtiden utvide seg mellom galaksehopene, og denne utvidelsen akselereres av <strong>mørk energi</strong>."
                ),
            },
        },
        "summary_points": [
            "Rom og tid utgjør en firedimensjonal romtid; lyshastigheten c er lik for alle observatører og universets øvre fartsgrense.",
            "Tid går saktere ved høy fart og i sterke gravitasjonsfelt – noe GPS-systemet må korrigere for daglig.",
            "Tyngdekraft er krummet romtid, som også bøyer lys (gravitasjonslinser) og kan bølge (gravitasjonsbølger).",
            "Sorte hull krummer romtiden så ekstremt at ingenting innenfor hendelseshorisonten kan slippe ut.",
        ],
    },
}

GLOSSARY = [
    ("Absorpsjonslinje", "Mørk linje i et spekter der atomer i en kjøligere gass har absorbert fotoner med bestemte bølgelengder."),
    ("Atomnummer (Z)", "Antall protoner i atomkjernen. Bestemmer hvilket grunnstoff atomet tilhører."),
    ("Bakgrunnsstrålingen (CMB)", "Den eldste strålingen vi kan observere – mikrobølger fra da universet var ca. 380 000 år gammelt og ble gjennomsiktig (i dag 2,725 K)."),
    ("Big Bang", "Den vitenskapelige teorien om at universet utvidet seg fra en ekstremt varm og tett tilstand for 13,8 milliarder år siden."),
    ("Dopplereffekt", "Endring i observert bølgelengde og frekvens når en kilde og en observatør beveger seg i forhold til hverandre."),
    ("Drivhuseffekt", "Atmosfærens evne til å slippe inn kortbølget sollys, mens klimagasser (H₂O, CO₂, CH₄) absorberer og sender tilbake langbølget infrarød varmestråling."),
    ("Elektromagnetisk spekter", "Hele spennet av elektromagnetisk stråling ordnet etter bølgelengde/frekvens: radio, mikro, IR, synlig lys, UV, røntgen og gamma."),
    ("Ellipsegalakse", "Rund eller oval galakse med lite kald gass og støv, dominert av eldre, gulrøde stjerner."),
    ("Foton", "En energipakke (lyskvant) av elektromagnetisk stråling med energi E = h · f."),
    ("Galakse", "Et enormt system av milliarder av stjerner, gass, støv og mørk materie bundet sammen av tyngdekraft."),
    ("Gravitasjonsbølge", "Krusninger i selve romtiden som brer seg med lyshastigheten når tunge objekter akselereres kraftig (f.eks. kolliderende sorte hull)."),
    ("Gravitasjonslinse", "Avbøyning av lys rundt et massivt objekt (som en galaksehop), slik at bakgrunnsobjekter forstørres eller forvrenges til buer."),
    ("Hendelseshorisont", "Grensen rundt et sort hull der unnslipningshastigheten når lyshastigheten c; ingenting innenfor kan komme ut."),
    ("Hovedserien", "Den lange, stabile fasen i en stjernes liv der den fusjonerer hydrogen til helium i kjernen i hydrostatisk likevekt."),
    ("Hubbles lov", "Sammenhengen v = H₀ · d: Jo lenger unna en galakse er, desto fortere beveger den seg bort fra oss som følge av rommets utvidelse."),
    ("Hvit dverg", "Den ultratette, glødende kjernen som blir igjen etter at en sol-lignende stjerne (< 8 M☉) har kastet av de ytre lagene sine."),
    ("Hydrostatisk likevekt", "Balansen i en stjerne mellom tyngdekraften som presser innover og strålings-/gasstrykket som presser utover."),
    ("Ioniserende stråling", "Stråling med nok fotonenergi (kortbølget UV, røntgen, gamma) til å slå elektroner løs fra atomer og skade molekyler/DNA."),
    ("Isotop", "Varianter av samme grunnstoff (likt antall protoner Z), men med ulikt antall nøytroner i kjernen."),
    ("Kilonova", "En enorm eksplosjon når to nøytronstjerner kolliderer; hovedkilden til svært tunge grunnstoffer som gull, platina og uran."),
    ("Kjernefusjon", "Sammensmelting av lette atomkjerner til tyngre kjerner (f.eks. 4 H → He) ved ekstrem temperatur og trykk, som frigjør enorme energimengder (E = mc²)."),
    ("Kosmisk inflasjon", "En ekstremt kort og voldsom akselerert utvidelse av rommet i den aller første brøkdelen av et sekund etter Big Bang."),
    ("Kvasar", "En ekstremt lyssterk aktiv galaksekjerne drevet av gass som faller inn mot et supermassivt sort hull."),
    ("Laniakea", "Superhopen som inneholder både Melkeveien, Den lokale gruppen og Virgo-hopen (~520 millioner lysår bred)."),
    ("Lysår (ly)", "Avstanden lyset tilbakelegger i vakuum på ett år, omtrent 9,46 · 10¹² km."),
    ("Mørk energi", "Den ukjente energiformen (~68 % av universets energi) som får universets utvidelse til å akselerere."),
    ("Mørk materie", "Usynlig materie (~27 % av universet) som ikke sender ut eller absorberer lys, men påvirker galakser og lys gjennom tyngdekraft."),
    ("Nøytronstjerne", "Ekstremt kompakt rest etter en tung stjernes supernova, bestående nesten bare av tettpakkede nøytroner (~20 km bred)."),
    ("Planetarisk tåke", "Lysende gassky som blåses ut fra en døende sol-lignende stjerne før kjernen blir en hvit dverg."),
    ("Romtid", "De tre romdimensjonene og én tidsdimensjon vevd sammen til ett firedimensjonalt hele som krummes av masse og energi."),
    ("Rødforskyvning", "At bølgelengden til lys blir strukket mot rødt fordi kilden beveger seg bort eller fordi rommet utvider seg underveis."),
    ("Sagittarius A*", "Det supermassive sorte hullet i sentrum av vår egen galakse Melkeveien (~4,1 millioner solmasser)."),
    ("Sort hull", "Et område der masse er presset sammen så tett at romtiden krummes fullstendig og ikke engang lys slipper ut innenfor hendelseshorisonten."),
    ("Spektrallinje", "Skarp mørk eller lys linje i et spekter på bestemte bølgelengder som fungerer som et unikt fingeravtrykk for et bestemt grunnstoff."),
    ("Stavspiralgalakse", "Spiralgalakse der spiralarmene springer ut fra en stavformet kjerne av stjerner – slik som Melkeveien."),
    ("Supernova", "En voldsom eksplosjon som avslutter livet til tunge stjerner (> 8 M☉) når jernkjernen kollapser, og som smir og sprer tunge grunnstoffer."),
    ("Valenselektron", "Elektron i det ytterste elektronskallet til et atom; avgjørende for atomets kjemiske egenskaper."),
]
