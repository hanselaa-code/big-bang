import {
  cosmosImg,
  type ControlQuestionItem,
  type CosmicNodeData,
} from './bigBangData';

export type RadiationZoneCategory =
  | 'em_spectrum'
  | 'cosmic_decoding'
  | 'cmb_and_earth'
  | 'earth_tech_health';

export interface RadiationNodeData extends CosmicNodeData {
  zoneCategory: RadiationZoneCategory;
}

export const RADIATION_MAIN_STEP_IDS: string[] = [
  'rad_waves_photons',
  'rad_radio_microwave',
  'rad_infrared_visible',
  'rad_uv_xray_gamma',
  'rad_thermal_starlight',
  'rad_spectral_barcode',
  'rad_doppler_redshift',
  'rad_cmb_afterglow',
  'rad_atmosphere_windows',
  'rad_greenhouse_balance',
  'rad_wave_phenomena',
  'rad_wireless_comm',
  'rad_radioactivity_decay',
  'rad_health_protection',
];

export const RADIATION_NODES: RadiationNodeData[] = [
  // ====================================================================
  // SONE 1 (STEG 1–4): ELEKTROMAGNETISKE BØLGER & SPEKTERET (c = λ · f)
  // ====================================================================
  {
    id: 'rad_waves_photons',
    stepIndex: 0,
    isMainPath: true,
    parentId: null,
    stepNumber: 1,
    title: 'Bølger & Fotoner – Slik reiser lys og stråling gjennom tomrommet',
    shortLabel: 'Bølger & fotoner (c = λ·f)',
    subtitleTag:
      'Elektriske og magnetiske felt som svinger i takt med lysfarten c – både bølge og energipakke!',
    timeAfterBB: 'c = λ · f',
    eraLabel: 'Sone 1 • EM-spekteret',
    temperatureLabel: 'c ≈ 300 000 km/s',
    x: 230,
    y: 648,
    cardSide: 'below',
    zoneCategory: 'em_spectrum',
    epochCategory: 'primordial',
    cosmicTag: 'Kort λ = Høy f = Høy fotonenergi',
    traceBadge: 'Grunnloven • Bølge + Foton',
    image: cosmosImg('rad_step1_em_wave_photon.jpg'),
    imageCaption:
      'En elektromagnetisk bølge består av et elektrisk og et magnetisk felt som svinger vinkelrett på hverandre gjennom rommet – samtidig oppfører lyset seg som energipakker kalt fotoner.',
    summaryTitle:
      'Lyd trenger luft for å reise – men elektromagnetisk stråling krysser hele det tomme verdensrommet!',
    whatHappens:
      'Mens vannbølger trenger vann og lydbølger trenger luft, trenger elektromagnetisk stråling ikke noe stoff å bevege seg i! Den består av sammenkoblede elektriske og magnetiske felt som dytter hverandre fremover gjennom vakuum med lysfarten c ≈ 300 000 km/s. Samtidig viste Max Planck og Albert Einstein at strålingen kommer i ørsmå, udelelige energipakker kalt FOTONER. Sammenhengen er enkel og nådeløs: Jo KORTERE bølgelengde (λ), desto HØYERE frekvens (f) – og desto mer energi bærer hvert enkelt foton!',
    keyTraits: [
      {
        title: 'Bølgelengde (λ) og frekvens (f) henger omvendt sammen',
        description:
          'Siden alt lys i vakuum har nøyaktig samme fart (c = λ · f), betyr halvert bølgelengde automatisk dobbelt så mange svingninger per sekund (dobbelt så høy frekvens).',
        icon: 'waves',
      },
      {
        title: 'Fotonet: Lysets energipakke (E = h · f)',
        description:
          'Energien til hvert enkelt foton vokser proporsjonalt med frekvensen. Ett enkelt røntgenfoton bærer tusenvis av ganger mer energi enn ett synlig lysfoton!',
        icon: 'zap',
      },
      {
        title: 'Universets viktigste budbringer',
        description:
          'Vi kan ikke reise ut og ta på stjerner eller fjerne galakser. Nesten alt menneskeheten vet om universet kommer fra fotoner som har reist hit gjennom rommet.',
        icon: 'sparkles',
      },
    ],
    classroomTest:
      'Be to elever holde et langt hoppetau mellom seg: Skal de lage KORTE, tette bølger, må de riste armen skikkelig raskt med MYE energi. Lange, slake bølger krever rolige bevegelser og lite energi – akkurat slik er det i EM-spekteret!',
    didYouKnow:
      'Albert Einstein fikk faktisk Nobelprisen i fysikk i 1921 ikke for relativitetsteorien, men for den fotoelektriske effekten – der han beviste at lys består av fotoner (energipakker)!',
    examples: [
      'Bølgelengde (λ)',
      'Frekvens (Hz)',
      'Foton (energipakke)',
      'Bølgeligningen c = λ · f',
    ],
  },

  {
    id: 'rad_radio_microwave',
    stepIndex: 1,
    isMainPath: true,
    parentId: 'rad_waves_photons',
    stepNumber: 2,
    title: 'Radiobølger & Mikrobølger – De lange, skånsomme bølgene',
    shortLabel: 'Radio- & mikrobølger',
    subtitleTag:
      'Bølgelengder fra millimeter til kilometer – ufarlig kommunikasjon og kalde kosmiske skyer',
    timeAfterBB: 'λ ≈ 1 mm – flere km',
    eraLabel: 'Sone 1 • EM-spekteret',
    temperatureLabel: 'Ikke-ioniserende',
    x: 475,
    y: 444,
    cardSide: 'above',
    zoneCategory: 'em_spectrum',
    epochCategory: 'recombination',
    cosmicTag: 'Lav fotonenergi • Går gjennom skyer & støv',
    traceBadge: 'Ikke-ioniserende • Radioastronomi',
    image: cosmosImg('rad_step2_radio_telescopes.jpg'),
    imageCaption:
      'Store parabolantenner som ALMA-observatoriet fanger opp svake radio- og mikrobølger fra pulsarer, kalde hydrogenskyer og fødestuer for nye planeter.',
    summaryTitle:
      'Der vanlige teleskoper bare ser mørke støvskyer, ser radioteleskoper tvers gjennom!',
    whatHappens:
      'Helt til venstre i det elektromagnetiske spekteret finner vi radiobølger (fra noen titalls centimeter til mange kilometer lange) og mikrobølger (fra én millimeter til rundt 30 centimeter). Fordi bølgelengden er så lang, har hvert enkelt foton svært lav energi. Denne strålingen er derfor IKKE-IONISERENDE: Den kan aldri slå løs elektroner i cellene våre eller ødelegge DNA, men høy intensitet kan gi litt oppvarming (slik mikrobølgeovnen setter vannmolekyler i svingning i maten!).',
    keyTraits: [
      {
        title: 'Hverdagens trådløse motorvei',
        description:
          'DAB-radio, TV, 4G/5G-mobilnett, Bluetooth, Wi-Fi og radar bruker alle radio- og mikrobølger til å sende informasjon med lysets fart.',
        icon: 'compass',
      },
      {
        title: '21 cm-linjen kartlegger Melkeveiens gass',
        description:
          'Kalde hydrogenskyer i verdensrommet lyser ikke i synlig lys, men sender ut en berømt radiobølge med λ = 21 cm som lar astronomer kartlegge spiralarmene våre.',
        icon: 'telescope',
      },
      {
        title: 'Fotograferte tidenes første sorte hull',
        description:
          'Det var et verdensomspennende nettverk av radioteleskoper (Event Horizon Telescope) som tok de berømte ring-bildene av de sorte hullene i M87 og Melkeveien!',
        icon: 'globe',
      },
    ],
    classroomTest:
      'Spør klassen: Hvorfor er det trygt å ha en Wi-Fi-ruter og mobil i lomma når både mobilstråling og røntgen er «elektromagnetisk stråling»? (Fordi et mobilfoton har rundt én million ganger LAVERE energi enn et UV-/røntgenfoton – det er ikke-ioniserende!)',
    didYouKnow:
      'Radioastronomien ble født ved en tilfeldighet i 1932 da ingeniøren Karl Jansky skulle finne ut hva som lagde susing på transatlantiske telefonsamtaler – og oppdaget at radiosignalet kom fra sentrum av Melkeveien!',
    examples: [
      'Radiobølger',
      'Mikrobølger',
      'Ikke-ioniserende stråling',
      'Radioteleskoper (ALMA / EHT)',
    ],
  },

  {
    id: 'rad_infrared_visible',
    stepIndex: 2,
    isMainPath: true,
    parentId: 'rad_radio_microwave',
    stepNumber: 3,
    title: 'Infrarød varme & Synlig lys – Den smale glipen øyet kan se',
    shortLabel: 'Infrarød & Synlig lys',
    subtitleTag:
      'Varmestråling fra alt rundt oss – og regnbuestripen på 400–700 nm som styrer syn og fotosyntese',
    timeAfterBB: 'IR (0,7–1000 µm) • Synlig (400–700 nm)',
    eraLabel: 'Sone 1 • EM-spekteret',
    temperatureLabel: 'Varmestråling & Regnbuen',
    x: 720,
    y: 648,
    cardSide: 'below',
    zoneCategory: 'em_spectrum',
    epochCategory: 'stellar_dawn',
    cosmicTag: 'Rødt ≈ 700 nm → Blåfiolett ≈ 400 nm',
    traceBadge: 'James Webb (IR) • Øyets vindu',
    image: cosmosImg('rad_step3_infrared_prism_light.jpg'),
    imageCaption:
      'Hvitt stjernelys splittes i regnbuens farger fra rødt (700 nm) til fiolett (400 nm), mens usynlig infrarød stråling like utenfor rødt avslører nydannede stjerner bak tette støvskyer.',
    summaryTitle:
      'Hvis hele EM-spekteret var et pianoklaviatur fra Oslo til Roma, er synlig lys bare ÉN eneste tangent!',
    whatHappens:
      'Mellom mikrobølgene og det røde lyset ligger INFRARØD STRÅLING (IR) – det vi kjenner på huden som ren strålevarme fra et bål, en varmeovn eller vår egen kropp (~37 °C). Rett ved siden av IR ligger en ørliten stripe med bølgelengder fra ca. 700 nanometer (rødt) til 400 nanometer (blåfiolett): SYNLIG LYS. Grunnen til at øynene våre er tilpasset akkurat disse bølgelengdene er ingen tilfeldighet – det er nettopp her Sola stråler aller sterkest, og akkurat dette lyset slipper rett gjennom Jordas atmosfære!',
    keyTraits: [
      {
        title: 'Du selv lyser kraftig i infrarødt akkurat nå!',
        description:
          'Menneskekroppen, dyr, hus og selve jordkloden er for kalde til å gløde i synlig lys, men stråler ut usynlig infrarød varmestråling døgnet rundt (det varmekameraer ser).',
        icon: 'thermometer',
      },
      {
        title: 'James Webb ser gjennom kosmiske støvtepper',
        description:
          'Kosmisk støv blokkerer vanlig synlig lys, men lengre infrarøde bølger smetter forbi støvkornene. Derfor kan James Webb-teleskopet se rett inn i stjernenes barnehager!',
        icon: 'eye',
      },
      {
        title: 'Hvitt lys er alle regnbuens bølgelengder samlet',
        description:
          'Når sollys brytes i regndråper eller et glassprisme, bøyes kortbølget fiolett lys mer enn langbølget rødt lys – og fargespekteret brettes ut.',
        icon: 'sun',
      },
    ],
    classroomTest:
      'Åpne mobilkameraet i klasserommet og pek en vanlig TV-fjernkontroll mot linsa mens en elev trykker på en knapp: Øyet ser ingenting, men kamerasensoren fanger det infrarøde blinket som en lilla-hvit lysprikk!',
    didYouKnow:
      'Astronomen William Herschel oppdaget infrarød stråling i år 1800 da han la termometre i hver farge av solspekteret – og oppdaget at termometeret som lå i mørket RETT UTENFOR rødt ble aller varmest!',
    examples: [
      'Infrarød stråling (IR)',
      'Synlig lys (400–700 nm)',
      'Nanometer (10⁻⁹ m)',
      'Varmekamera & James Webb',
    ],
  },

  {
    id: 'rad_uv_xray_gamma',
    stepIndex: 3,
    isMainPath: true,
    parentId: 'rad_infrared_visible',
    stepNumber: 4,
    title: 'UV, Røntgen & Gammastråling – Kortbølget og ioniserende kraft',
    shortLabel: 'UV, Røntgen & Gamma',
    subtitleTag:
      'Korte bølger med så energirike fotoner at de slår løs elektroner fra atomer og kan endre DNA',
    timeAfterBB: 'λ < 400 nm ned til < 1 pm',
    eraLabel: 'Sone 1 • EM-spekteret',
    temperatureLabel: 'Ioniserende stråling!',
    x: 965,
    y: 444,
    cardSide: 'above',
    zoneCategory: 'em_spectrum',
    epochCategory: 'galactic_solar',
    cosmicTag: 'Slår løs elektroner → Danner ioner & mutasjoner',
    traceBadge: 'Ioniserende • Kosmiske ekstremer',
    image: cosmosImg('rad_step4_high_energy_gamma.jpg'),
    imageCaption:
      'Rundt sorte hull, nøytronstjerner og supernovaer slynges intens UV-, røntgen- og gammastråling ut – fotoner med nok energi til å rive elektroner rett ut av atomer (ionisering).',
    summaryTitle:
      'Over grensen ved kortbølget UV blir hvert enkelt foton som en mikroskopisk kanonkule!',
    whatHappens:
      'Når bølgelengden krymper under 400 nm, beveger vi oss inn i ULTRAFIOLETT (UV), videre til RØNTGENSTRÅLING (~0,01–10 nm) og helt ytterst til GAMMASTRÅLING (< 0,01 nm). Fra de korteste UV-bølgene og utover passerer vi en avgjørende grense i naturfag: Strålingen blir IONISERENDE. Det betyr at ett eneste foton har nok energi til å slå et elektron helt løs fra et atom eller molekyl (slik at atomet blir et ladd ion). I levende celler kan dette klippe over DNA-tråder og gi solbrenthet, mutasjoner eller kreft – men også brukes målrettet på sykehus til røntgenbilder og strålebehandling!',
    keyTraits: [
      {
        title: 'Ultrafiolett (UV): D-vitamin, solbrenthet og unge kjempe-stjerner',
        description:
          'Litt UV fra Sola gir D-vitamin i huden, men for mye skader hudcellenes DNA (solkrem og ozonlaget beskytter oss!). Unge, glovarme stjerner bader omgivelsene sine i UV.',
        icon: 'shield',
      },
      {
        title: 'Røntgen: Ser gjennom hud – og avslører sorte hull',
        description:
          'Røntgenstråler går gjennom bløtt vev men stoppes av kalsium i knokler. Ute i rommet gløder gass som virvler inn mot sorte hull med millioner av grader i røntgenlys!',
        icon: 'atom',
      },
      {
        title: 'Gammastråling: Atomkjernenes og universets råeste glimt',
        description:
          'Skapes i radioaktive atomkjerner, kjernefusjon i Sola og når nøytronstjerner kolliderer eller gigantstjerner kollapser i kosmiske gammaglimt (GRB).',
        icon: 'flame',
      },
    ],
    classroomTest:
      'Spør elevene: Hvorfor kan du ligge 10 timer på sofaen foran en glovarm peis (masse IR og synlig lys) uten å bli solbrent, mens 30 minutter i vårsola på fjellet kan gjøre deg knallrød? (Fordi det er energien per ENKELTFOTON – kortbølget UV – som avgjør om DNA skades, ikke bare total varme!)',
    didYouKnow:
      'Et kosmisk gammaglimt (Gamma-Ray Burst) fra en kollapsende kjempe-stjerne i en fjern galakse kan i løpet av noen få sekunder sende ut mer energi enn Sola vår vil stråle ut i løpet av hele sitt 10 milliarder år lange liv!',
    examples: [
      'Ioniserende stråling',
      'Ultrafiolett (UV-A / UV-B / UV-C)',
      'Røntgenstråling',
      'Gammastråling & gammaglimt',
    ],
  },

  // ====================================================================
  // SONE 2 (STEG 5–7): HVORDAN ASTRONOMER LESER KODEN I STJERNELYSET
  // ====================================================================
  {
    id: 'rad_thermal_starlight',
    stepIndex: 4,
    isMainPath: true,
    parentId: 'rad_uv_xray_gamma',
    stepNumber: 5,
    title: 'Temperaturstråling – Stjernenes farge er et direkte termometer',
    shortLabel: 'Temperatur & Stjernefarge',
    subtitleTag:
      'Jo varmere et legeme er, desto mer stråling sender det ut – og desto mer blåforskyves strålingstoppen',
    timeAfterBB: '3 000 K (rød) → 25 000 K (blå)',
    eraLabel: 'Sone 2 • Lysets kode',
    temperatureLabel: 'Wiens forskyvningslov',
    x: 1210,
    y: 648,
    cardSide: 'below',
    zoneCategory: 'cosmic_decoding',
    epochCategory: 'stellar_dawn',
    cosmicTag: 'Rød stjerne = Kjøligere • Blåhvit stjerne = Brennhet!',
    traceBadge: 'Sort legeme • Fargetermometer',
    image: cosmosImg('rad_step5_star_colors_temp.jpg'),
    imageCaption:
      'I fysikken er fargekoden motsatt av vannkrana på badet: En «kjølig» stjerne (~3 200 K) gløder rød-oransje, Sola (~5 800 K) lyser gulhvitt, mens de heteste stjernene (> 20 000 K) gnistrer blåhvitt!',
    summaryTitle:
      'Glem rød = varm og blå = kald fra vannkranene – på stjernehimmelen er BLÅTT brennhett!',
    whatHappens:
      'Alt stoff med temperatur over det absolutte nullpunktet (0 K = −273,15 °C) sender ut elektromagnetisk varmestråling (temperaturstråling). Når en smed varmer en jernstang i essa, sender den først bare ut usynlig infrarød varme. Blir den varmere, gløder den mørkerødt, så oransje, gulhvitt – og ved ekstrem temperatur blåhvitt! Denne naturloven (Wiens forskyvningslov) lar astronomer måle overflatetemperaturen til enhver stjerne på himmelen bare ved å måle hvilken bølgelengde stjernen lyser sterkest på!',
    keyTraits: [
      {
        title: 'Kjølige stjerner (~3 000–3 500 K): Røde dverger og røde kjemper',
        description:
          'Stjerner som Proxima Centauri og kjempen Betelgeuse har strålingstoppen sin i rødt og nær-infrarødt lys, og får derfor et varmt rød-oransje skjær.',
        icon: 'thermometer',
      },
      {
        title: 'Middels varme stjerner (~5 800 K): Gulhvite stjerner som Sola',
        description:
          'Sola vår har strålingstoppen midt i det synlige spekteret (~500 nm) og sender ut en jevn blanding av alle regnbuens farger som til sammen ser gulhvit/hvit ut.',
        icon: 'sun',
      },
      {
        title: 'Ekstremt varme stjerner (10 000–40 000 K): Blåhvite kraftverk',
        description:
          'Stjerner som Rigel og Sirius sender ut enorm total effekt med strålingstopp i blått og ultrafiolett – de lyser intenst blåhvitt!',
        icon: 'star',
      },
    ],
    classroomTest:
      'Be elevene se opp på stjernebildet Orion en klar vinterkveld: Oppe til venstre lyser skulderstjernen Betelgeuse tydelig rød-oransje (~3 500 K), mens fotstjernen Rigel nede til høyre gnistrer isblå-hvitt (~12 000 K) – man ser temperaturforskjellen med det blotte øye!',
    didYouKnow:
      'Dobler du overflatetemperaturen (i kelvin) på en stjerne med samme størrelse, øker ikke utstrålt energi bare til det dobbelte – den øker hele 16 GANGER (2⁴, Stefan–Boltzmanns lov)!',
    examples: [
      'Temperaturstråling',
      'Wiens forskyvningslov',
      'Betelgeuse (~3 500 K, rød)',
      'Rigel (~12 000 K, blåhvit)',
    ],
  },

  {
    id: 'rad_spectral_barcode',
    stepIndex: 5,
    isMainPath: true,
    parentId: 'rad_thermal_starlight',
    stepNumber: 6,
    title: 'Spektrallinjer – Slik avslører lyset hvilke grunnstoffer stjernene består av',
    shortLabel: 'Spektrallinjer (Strekkode)',
    subtitleTag:
      'Mørke absorpsjonslinjer og lysende emisjonslinjer er hvert grunnstoffs unike fingeravtrykk',
    timeAfterBB: 'Kvantehopp i atomet',
    eraLabel: 'Sone 2 • Lysets kode',
    temperatureLabel: 'Absorpsjon & Emisjon',
    x: 1455,
    y: 444,
    cardSide: 'above',
    zoneCategory: 'cosmic_decoding',
    epochCategory: 'stellar_dawn',
    cosmicTag: 'Hvert grunnstoff = Unikt mønster av linjer i regnbuen',
    traceBadge: 'Spektroskopi • Kjemisk fingeravtrykk',
    image: cosmosImg('rad_step6_spectral_lines.jpg'),
    imageCaption:
      'Når hvitt lys fra en glødende stjernekjerne passerer gjennom gassen i stjerneatmosfæren, plukker atomene ut helt bestemte bølgelengder og etterlater sylskarpe mørke linjer i regnbuen.',
    summaryTitle:
      'I 1835 erklærte en filosof at mennesket ALDRI ville få vite hva stjernene er laget av – 25 år senere løste spektroskopien gåten!',
    whatHappens:
      'Når vi forstørrer regnbuespekteret fra Sola eller en fjern stjerne kraftig opp, er ikke regnbuen helt jevn: Den er krysset av hundrevis av knivskarpe, mørke streker (Fraunhofer-linjer)! Hvor kommer de fra? Inne i hvert atom går elektronene i faste elektronskall (energinivåer). For å hoppe opp til et høyere skall må elektronet sluke et foton med NØYAKTIG riktig energi (og dermed nøyaktig riktig bølgelengde). Siden hydrogen, helium, natrium og jern har helt ulike skallavstander, etterlater hvert eneste grunnstoff sin helt egen «strekkode» i lyset!',
    keyTraits: [
      {
        title: 'Absorpsjonsspekter: Mørke linjer i en regnbue',
        description:
          'Når kontinuerlig hvitt lys fra det indre av en stjerne går gjennom kjøligere gass utenpå stjernen (eller i en eksoplanet-atmosfære!), stjeler gassatomene sine bestemte farger.',
        icon: 'layers',
      },
      {
        title: 'Emisjonsspekter: Fargede lyslinjer på mørk bakgrunn',
        description:
          'Når elektroner i en varm gassky (eller i nordlyset her på Jorda!) faller ned igjen til lavere skall, sender de ut fotoner med nøyaktig de samme unike bølgelengdene.',
        icon: 'sparkles',
      },
      {
        title: 'Jakt på livets signatur rundt fremmede planeter',
        description:
          'Når en eksoplanet passerer foran stjernen sin, siles litt stjernelys gjennom planetens luftlag – slik leter James Webb etter spektrallinjene til vann, metan og CO₂!',
        icon: 'telescope',
      },
    ],
    classroomTest:
      'Koble dette til nordlyset: Spør klassen hvorfor nordlyset oftest er grønt (~558 nm) og av og til rødt eller lilla! (Fordi solvindpartikler dytter elektroner opp i oksygen- og nitrogenatomer høyt i atmosfæren – når elektronene hopper ned igjen, sender de ut sine eksakte emisjonsfarger!)',
    didYouKnow:
      'Grunnstoffet HELIUM (av gresk «Helios» = Sola) ble oppdaget som en ukjent gul spektrallinje i sollyset under en solformørkelse i 1868 – hele 27 år før kjemikere fant gassen på Jorda!',
    examples: [
      'Absorpsjonsspekter',
      'Emisjonsspekter',
      'Fraunhofer-linjer',
      'Elektronskall & kvantehopp',
    ],
  },

  {
    id: 'rad_doppler_redshift',
    stepIndex: 6,
    isMainPath: true,
    parentId: 'rad_spectral_barcode',
    stepNumber: 7,
    title: 'Dopplereffekt & Rødforskyvning – Lyset måler fart og universets utvidelse',
    shortLabel: 'Doppler & Rødforskyvning',
    subtitleTag:
      'Når hele strekkoden av spektrallinjer er forskjøvet mot rødt eller blått, avsløres bevegelse og kosmisk vekst',
    timeAfterBB: 'z = Δλ / λ₀',
    eraLabel: 'Sone 2 • Lysets kode',
    temperatureLabel: 'Rødforskyvning vs. Blåforskyvning',
    x: 1700,
    y: 648,
    cardSide: 'below',
    zoneCategory: 'cosmic_decoding',
    epochCategory: 'galactic_solar',
    cosmicTag: 'Bort fra oss → Rødere (lengre λ) • Mot oss → Blåere (kortere λ)',
    traceBadge: 'Hubbles oppdagelse • Eksoplaneter',
    image: cosmosImg('rad_step7_doppler_redshift.jpg'),
    imageCaption:
      'Når en fjern galakse fjerner seg mens rommet utvider seg, strekkes lysbølgene underveis slik at både lyset og alle spektrallinjene forskyves mot den røde enden av spekteret.',
    summaryTitle:
      'Akkurat som tonen fra en ambulanse endrer seg når den kjører forbi, skifter lysbølgene farge ved bevegelse!',
    whatHappens:
      'Alle har hørt DOPPLEREFFEKTEN med lyd: Når en sykebil kjører MOT deg, trykkes lydbølgene sammen til en lysere tone; når den kjører FRA deg, strekkes lydbølgene ut til en mørkere tone. Det samme skjer med lys! Hvis en stjerne eller galakse beveger seg MOT oss, presses lysbølgene sammen mot kortere bølgelengder (BLÅFORSKYVNING). Beveger den seg BORT fra oss – eller strekkes selve rommet mens lyset er på vei – blir bølgelengdene lengre og hele mønsteret av spektrallinjer flyttes mot rødt (RØDFORSKYVNING)!',
    keyTraits: [
      {
        title: 'Edwin Hubble (1929): Nesten alle galakser er rødforskjøvet!',
        description:
          'Jo lenger unna en galakse ligger, desto mer er spektrallinjene forskjøvet mot rødt. Det var slik vi oppdaget at universet utvider seg!',
        icon: 'expand',
      },
      {
        title: 'To mekanismer: Doppler-rødforskyvning vs. kosmologisk rødforskyvning',
        description:
          'Lokale bevegelser gjennom rommet gir vanlig dopplereffekt (Andromedagalaksen er faktisk BLÅFORSKJØVET på vei mot oss!), mens over milliarder av lysår er det selve rommets utvidelse som strekker bølgene.',
        icon: 'waves',
      },
      {
        title: 'Slik avslører vaggende stjerner usynlige eksoplaneter',
        description:
          'En planet som går i bane rykker ørsmått i stjernen sin. Ved å måle rytmisk veksling mellom ørliten blå- og rødforskyvning i stjernelyset har astronomer funnet hundrevis av eksoplaneter!',
        icon: 'orbit',
      },
    ],
    classroomTest:
      'Viktig presisering til prøver: Betyr «rødforskjøvet» at stjernen/galaksen nødvendigvis SER rød ut med øyet? (Nei! Det betyr at alle de kjente spektrallinjene er flyttet i RETNING den røde, langbølgede enden av spekteret – UV-lys kan for eksempel strekkes ned til synlig lys eller infrarødt!)',
    didYouKnow:
      'De aller fjerneste galaksene James Webb har observert fra universets barndom har rødforskyvning over z = 13 – det betyr at bølgelengdene deres er strukket over 14 ganger, slik at sterkt UV-lys fra unge stjerner må fanges opp som infrarødt lys!',
    examples: [
      'Dopplereffekt',
      'Rødforskyvning (z)',
      'Blåforskyvning (Andromeda)',
      'Radialhastighetsmetoden',
    ],
  },

  // ====================================================================
  // SONE 3 (STEG 8–10): KOSMISK BAKGRUNNSSTRÅLING & JORDAS STRÅLINGSSKJOLD
  // ====================================================================
  {
    id: 'rad_cmb_afterglow',
    stepIndex: 7,
    isMainPath: true,
    parentId: 'rad_doppler_redshift',
    stepNumber: 8,
    title: 'Kosmisk bakgrunnsstråling (CMB) – Ekkoet av lys fra det unge universet',
    shortLabel: 'Bakgrunnsstrålingen (CMB)',
    subtitleTag:
      'Universets eldste frie stråling fra 380 000 år etter Big Bang – strukket 1100 ganger til mikrobølger ved 2,725 K',
    timeAfterBB: 't = 380 000 år → 2,725 K i dag',
    eraLabel: 'Sone 3 • Urlys & Jordas skjold',
    temperatureLabel: '3 000 K → 2,725 K',
    x: 1945,
    y: 444,
    cardSide: 'above',
    zoneCategory: 'cmb_and_earth',
    epochCategory: 'recombination',
    cosmicTag: 'Strukket 1 100× av rommets utvidelse til mikrobølger!',
    traceBadge: 'Hovedbevis for Big Bang • Nobelpris 1978 & 2006',
    image: cosmosImg('rad_step8_cmb_sky_globe.jpg'),
    imageCaption:
      'Hele himmelkulen gløder svakt i mikrobølger tilsvarende 2,725 kelvin (−270,4 °C) – de ørsmå fargeflekkene viser tetthetsforskjellene på 1 til 100 000 som senere vokste til alle galaksene!',
    summaryTitle:
      'Uansett hvilken retning du peker en mikrobølgeantenne mot himmelen, treffer du urlyset fra Big Bang!',
    whatHappens:
      'De første 380 000 årene etter Big Bang var universet en glovarm, ugjennomsiktig «tåke» av frie protoner og elektroner der fotonene spratt veggimellom. Da temperaturen sank til rundt 3 000 kelvin, slo elektroner og kjerner seg sammen til de første nøytrale hydrogen- og heliumatomene. Plutselig ble rommet krystallklart! Det oransje-røde varmelyset som slapp fri den gangen, reiser fortsatt gjennom universet – men i løpet av 13,8 milliarder år har rommets utvidelse strukket bølgelengdene 1 100 ganger til kald MIKROBØLGESTRÅLING på 2,725 K!',
    keyTraits: [
      {
        title: 'Tidenes mest presise temperaturstrålingskurve',
        description:
          'Spekteret til den kosmiske bakgrunnsstrålingen følger en teoretisk sort-legeme-kurve ved 2,725 K med så ekstrem presisjon at målepunktene og teorikurven smelter helt sammen.',
        icon: 'thermometer',
      },
      {
        title: 'Oppdaget ved et uhell som «fugleskitt-støy» i 1964',
        description:
          'Arno Penzias og Robert Wilson trodde først den jevne mikrobølgesusingen i hornantennen deres skyldtes duer som hekket i traktåpningen – i virkeligheten hadde de funnet ettergløden fra Big Bang!',
        icon: 'sparkles',
      },
      {
        title: 'Babybildet av galaksenes frø',
        description:
          'Romteleskopene COBE, WMAP og Planck viste ørsmå temperaturvariasjoner på 0,00001 grad i CMB – de litt tettere områdene der tyngdekraften senere samlet gass til de første stjernene og galaksene.',
        icon: 'globe',
      },
    ],
    classroomTest:
      'Spør elevene hvordan Steg 5 (temperaturstråling), Steg 7 (kosmisk rødforskyvning) og Steg 8 (CMB) henger sammen i én kjede: Universet glødet som en rød stjerne ved 3 000 K → rommet utvidet seg 1 100 ganger → bølgelengden ble 1 100 ganger lengre (mikrobølger) og temperaturen 1 100 ganger lavere (3 000 K / 1 100 ≈ 2,73 K)!',
    didYouKnow:
      'Hver eneste kubikkcentimeter av rommet rundt deg – også inne i klasserommet akkurat nå – inneholder rundt 411 eldgamle fotoner fra den kosmiske bakgrunnsstrålingen!',
    examples: [
      'Kosmisk bakgrunnsstråling (CMB)',
      '2,725 kelvin (−270,4 °C)',
      'Penzias & Wilson (1964)',
      'Planck-romteleskopet',
    ],
  },

  {
    id: 'rad_atmosphere_windows',
    stepIndex: 8,
    isMainPath: true,
    parentId: 'rad_cmb_afterglow',
    stepNumber: 9,
    title: 'Atmosfærens skjold & vinduer – Ozonlaget og hvorfor vi sender opp romteleskoper',
    shortLabel: 'Atmosfæreskjold & Romteleskop',
    subtitleTag:
      'Jordas atmosfære stopper dødelig gamma, røntgen og UV-C, men slipper inn synlig lys og radiobølger',
    timeAfterBB: 'Skjold for livet • Vindu mot rommet',
    eraLabel: 'Sone 3 • Urlys & Jordas skjold',
    temperatureLabel: 'Ozonlaget (O₃) i stratosfæren',
    x: 2190,
    y: 648,
    cardSide: 'below',
    zoneCategory: 'cmb_and_earth',
    epochCategory: 'modern_cosmos',
    cosmicTag: 'Åpne vinduer: Synlig lys + Radio • Stoppes: Gamma / Røntgen / UV-C',
    traceBadge: 'Livsviktig skjold • Romobservatorier',
    image: cosmosImg('rad_step9_atmosphere_telescopes.jpg'),
    imageCaption:
      'Ozonlaget og gassene høyt i atmosfæren absorberer dødelig kortbølget stråling fra rommet, mens synlig lys slipper ned til bakken – derfor må røntgen-, gamma- og IR-teleskoper gå i bane over atmosfæren!',
    summaryTitle:
      'Det som redder livet på Jorda, gjør samtidig bakkeastronomene «blinde» på store deler av spekteret!',
    whatHappens:
      'Heldigvis er ikke Jordas atmosfære helt gjennomsiktig for all elektromagnetisk stråling! Høyt oppe i atmosfæren stopper oksygen- og nitrogenmolekyler all kosmisk gammastråling og røntgenstråling, og i stratosfæren (15–35 km høyde) fanger OZONLAGET (O₃) opp all den livsfarlige UV-C-strålingen og nesten all UV-B fra Sola. Bare to store «atmosfæriske vinduer» står vidåpne helt ned til bakken: SYNLIG LYS og RADIOBØLGER! Skal vi studere universet i røntgen, gamma, fjern-UV eller store deler av infrarødt, må vi løfte teleskopene opp i verdensrommet!',
    keyTraits: [
      {
        title: 'Ozonlaget (O₃): Livets solkrem på landjorda',
        description:
          'Uten oksygen og ozon fra tidlig fotosyntese ville intens UV-stråling svidd i stykker DNA på landjorda. Montrealprotokollen (1987) forbød KFK-gasser og reddet ozonlaget!',
        icon: 'shield',
      },
      {
        title: 'Derfor kan gigantiske radioteleskoper stå på bakken',
        description:
          'Radiobølger suser rett gjennom både atmosfæren og vanlige skyer – derfor kan vi bygge enorme parabolanlegg på bakken i stedet for å sende dem opp med rakett.',
        icon: 'compass',
      },
      {
        title: 'Romteleskoper åpner hele EM-spekteret',
        description:
          'Chandra ser universet i røntgen, Fermi i gammastråling, Hubble i UV/synlig lys, og James Webb svever 1,5 millioner km ute for å fange iskald infrarød stråling uten forstyrrelser fra Jordas varme atmosfære!',
        icon: 'telescope',
      },
    ],
    classroomTest:
      'Spør elevene: Hvorfor bruker vi gullbelagt sekskantspeil og et gigantisk solskjold på størrelse med en tennisbane på James Webb-romteleskopet? (Gull reflekterer infrarødt lys ekstremt godt, og teleskopet må kjøles ned til −233 °C i skyggen av solskjoldet så det ikke blender seg selv med sin egen infrarøde varmestråling!)',
    didYouKnow:
      'Kosmisk gammastråling ble faktisk oppdaget på 1960-tallet av amerikanske Vela-satellitter som egentlig ble skutt opp for å overvåke om Sovjetunionen sprengte hemmelige atombomber i verdensrommet!',
    examples: [
      'Atmosfæriske vinduer',
      'Ozonlaget (O₃)',
      'UV-A, UV-B og UV-C',
      'Romteleskoper (JWST / Hubble / Chandra)',
    ],
  },

  {
    id: 'rad_greenhouse_balance',
    stepIndex: 9,
    isMainPath: true,
    parentId: 'rad_atmosphere_windows',
    stepNumber: 10,
    title: 'Strålingsbalanse & Drivhuseffekten – Kortbølget inn, langbølget varme ut',
    shortLabel: 'Strålingsbalanse & Drivhus',
    subtitleTag:
      'Samspillet mellom kortbølget sollys (synlig) og langbølget varmestråling (IR) styrer Jordas klima',
    timeAfterBB: 'Sollys inn (500 nm) ⇄ IR ut (10 µm)',
    eraLabel: 'Sone 3 • Urlys & Jordas skjold',
    temperatureLabel: '−18 °C uten • +15 °C naturlig',
    x: 2435,
    y: 444,
    cardSide: 'above',
    zoneCategory: 'cmb_and_earth',
    epochCategory: 'modern_cosmos',
    cosmicTag: 'Drivhusgasser (H₂O, CO₂, CH₄) slipper inn sollys, men holder på IR!',
    traceBadge: 'Vg1 Nøkkelbegrep • Klima & Fysikk',
    image: cosmosImg('rad_step10_greenhouse_balance.jpg'),
    imageCaption:
      'Kortbølget synlig sollys passerer lett gjennom atmosfæren og varmer bakken og havet, mens deler av den utgående langbølgede infrarøde varmestrålingen fanges og sendes tilbake av drivhusgasser.',
    summaryTitle:
      'Hele klimafysikken koker ned til forskjellen i bølgelengde mellom den 5 800 K varme Sola og den 288 K lunkne Jorda!',
    whatHappens:
      'Nå samler vi alle trådene fra EM-spekteret på vår egen klode! Sola er 5 800 K varm og sender derfor mesteparten av energien sin som KORTBØLGET SYNLIG LYS (~400–700 nm). Atmosfærens gasser slipper dette lyset rett gjennom, slik at ca. 70 % absorberes og varmer opp hav og land (ca. 30 % reflekteres direkte av skyer og lys snø/is – albedo). Den oppvarmede jordoverflaten (~15 °C = 288 K) sender deretter energien ut igjen som LANGBØLGET INFRARØD VARMESTRÅLING (~10 µm). Men drivhusgasser med tre eller flere atomer – som vanndamp (H₂O), karbondioksid (CO₂) og metan (CH₄) – vibrerer i takt med nettopp disse IR-bølgene, absorberer varmestrålingen og sender deler av den tilbake mot bakken!',
    keyTraits: [
      {
        title: 'Naturlig drivhuseffekt gjør Jorda beboelig (+33 °C forskjell)',
        description:
          'Uten atmosfærens naturlige drivhuseffekt ville Jordas gjennomsnittstemperatur vært rundt −18 °C (dypfryst isklode) i stedet for behagelige ~+15 °C!',
        icon: 'globe',
      },
      {
        title: 'Forsterket drivhuseffekt gir ubalanse i strålingsbudsjettet',
        description:
          'Når forbrenning av kull, olje og gass øker CO₂- og CH₄-nivået, slipper litt mindre IR-varme ut i rommet enn det kommer solenergi inn – da stiger temperaturen på kloden.',
        icon: 'scale',
      },
      {
        title: 'Planet-sammenligning: Mars vs. Jorda vs. Venus',
        description:
          'Tynne Mars har nesten ingen drivhuseffekt (−63 °C), Jorda er akkurat passe (+15 °C), mens Venus med sin tette CO₂-atmosfære har løpsk drivhuseffekt og 465 °C på bakken!',
        icon: 'flame',
      },
    ],
    classroomTest:
      'Spør klassen det klassiske eksamensspørsmålet: Hvorfor er IKKE oksygen (O₂) og nitrogen (N₂) – som utgjør 99 % av lufta – drivhusgasser, mens CO₂ og H₂O er det? (Symmetriske to-atomige molekyler som N₂ og O₂ lar infrarøde bølger passere uten å endre elektrisk ladningsfordeling, mens tre-atomige molekyler som CO₂ og H₂O bøyes og strekkes så de absorberer IR!)',
    didYouKnow:
      'Venus ligger lenger unna Sola enn Merkur, men på grunn av sin ekstreme drivhuseffekt i den tette CO₂-atmosfæren er overflaten på Venus (465 °C) varmere enn på Merkur – varm nok til å smelte bly!',
    examples: [
      'Strålingsbalanse & Albedo',
      'Kortbølget solstråling vs. langbølget IR',
      'Drivhusgasser (H₂O, CO₂, CH₄)',
      'Naturlig vs. forsterket drivhuseffekt',
    ],
  },

  // ====================================================================
  // SONE 4 (STEG 11–14): BØLGER, TEKNOLOGI & HELSE PÅ JORDA (VG1)
  // ====================================================================
  {
    id: 'rad_wave_phenomena',
    stepIndex: 10,
    isMainPath: true,
    parentId: 'rad_greenhouse_balance',
    stepNumber: 11,
    title: 'Sentrale bølgefenomener – Refleksjon, brytning, bøyning og interferens',
    shortLabel: 'Bølgefenomener (4 prinsipper)',
    subtitleTag:
      'Hvordan bølger oppfører seg når de møter speil, glassprismer, smale spalter og andre bølger',
    timeAfterBB: 'Speil • Prisme • Spalte • Overlagring',
    eraLabel: 'Sone 4 • Bølger & Teknologi',
    temperatureLabel: 'Bølgefysikk (Vg1)',
    x: 2680,
    y: 648,
    cardSide: 'below',
    zoneCategory: 'earth_tech_health',
    epochCategory: 'modern_cosmos',
    cosmicTag: 'Styrer alt fra regnbuer og briller til LIGO-detektorer',
    traceBadge: 'NAT01-05 • Sentrale bølgefenomener',
    image: cosmosImg('rad_extra_wave_phenomena.jpg'),
    imageCaption:
      'De fire sentrale bølgefenomenene: Refleksjon mot speil (øverst t.v.), brytning i prisme (øverst t.h.), bøyning/diffraksjon gjennom smal spalte (nederst t.v.) og interferens mellom to bølgekilder (nederst t.h.).',
    summaryTitle:
      'Fire enkle regler forklarer hvorfor du ser deg selv i speilet, hvorfor himmelen gir regnbuer, og hvordan LIGO fanger gravitasjonsbølger!',
    whatHappens:
      'Alle bølger – enten det er lys, radiobølger, lyd eller vannbølger – følger fire universelle fenomener. Ved REFLEKSJON spretter bølgen tilbake fra en flate med lik innfalls- og refleksjonsvinkel. Ved BRYTNING (refraksjon) skifter bølgen retning fordi bølgefarten endrer seg når den går inn i et nytt stoff, for eksempel fra luft til glass eller vann. Ved BØYNING (diffraksjon) sprer bølgen seg utover rundt kanter eller gjennom smale åpninger – sterkest når åpningen er på størrelse med bølgelengden. Og ved INTERFERENS møtes to bølger og legger seg oppå hverandre: bølgetopp mot bølgetopp forsterker lyset (konstruktiv), mens bølgetopp mot bølgedal slukker det ut (destruktiv).',
    keyTraits: [
      {
        title: 'Refleksjon & brytning i optikk og astronomi',
        description:
          'Speilteleskoper som James Webb bruker refleksjon for å samle svakt stjernelys, mens briller, kameralinser og prismer bruker brytning til å fokusere og splitte lys i regnbuens farger.',
        icon: 'sparkles',
      },
      {
        title: 'Bøyning (diffraksjon) forklarer lyd rundt hjørner og 5G-dekning',
        description:
          'Lydbølger (~1 m) og radiobølger bøyes lett rundt bygninger og åser. Synlig lys (~500 nm) er altfor kortbølget til å bøyes rundt hushjørner og kaster derfor skarpe skygger.',
        icon: 'waves',
      },
      {
        title: 'Interferens – fra støydempende hodetelefoner til LIGO',
        description:
          'Støydempende hodetelefoner lager motlyd som gir destruktiv interferens. LIGO-observatoriet bruker laserinterferens til å måle bevegelser mindre enn én tusendel av et proton!',
        icon: 'zap',
      },
    ],
    classroomTest:
      'Lys med en svak grønn/rød laserpeker (klasse 2, ikke rett mot øyne!) mot baksiden av en gammel CD/DVD-plate: De mikroskopiske sporene virker som et optisk gitter og lager skarpe lysprikker på veggen gjennom bøyning og konstruktiv interferens!',
    didYouKnow:
      'Regnbuen oppstår ved at sollys brytes når det går inn i runde regndråper, reflekteres på baksiden av dråpen, og brytes på nytt ut igjen – fordi rødt lys brytes litt mindre enn fiolett, skilles fargene!',
    examples: [
      'Refleksjon',
      'Brytning (refraksjon)',
      'Bøyning (diffraksjon)',
      'Konstruktiv & destruktiv interferens',
    ],
  },

  {
    id: 'rad_wireless_comm',
    stepIndex: 11,
    isMainPath: true,
    parentId: 'rad_wave_phenomena',
    stepNumber: 12,
    title: 'Trådløs kommunikasjon – Fra sender og bærebølge til 5G, WiFi og GPS',
    shortLabel: 'Trådløs kommunikasjon',
    subtitleTag:
      'Digitalisering, bærebølge og modulasjon – slik pakkes lyd, bilder og data inn i radiobølger',
    timeAfterBB: 'f ≈ 88 MHz – 5 GHz',
    eraLabel: 'Sone 4 • Bølger & Teknologi',
    temperatureLabel: 'AM • FM • 5G • WiFi',
    x: 2925,
    y: 444,
    cardSide: 'above',
    zoneCategory: 'earth_tech_health',
    epochCategory: 'modern_cosmos',
    cosmicTag: 'Sender → Bærebølge + Modulasjon → Mottaker',
    traceBadge: 'NAT01-05 • Trådløs teknologi',
    image: cosmosImg('rad_extra_wireless_comm.jpg'),
    imageCaption:
      'Signalkjeden i trådløs kommunikasjon: digitalisert informasjon (0 og 1) moduleres på en bærebølge, sendes ut fra en antenne, fanges opp av mottakerantennen og demoduleres tilbake til lyd, bilde eller tekst.',
    summaryTitle:
      'En jevn radiobølge inneholder ingen melding før senderen «former» den – det kalles modulasjon!',
    whatHappens:
      'Hver gang du strømmer musikk på 5G, kobler til WiFi eller bruker GPS, går informasjonen gjennom samme fysiske signalkjede. Først gjøres lyd, bilder og tekst om til digitale tall (0 og 1). Deretter lager senderen en jevn, høyfrekvent elektromagnetisk BÆREBØLGE. For å pakke inn meldingen endrer senderen enten bølgehøyden (amplitudemodulasjon, AM), frekvensen (frekvensmodulasjon, FM) eller raske digitale hopp i fase og amplitude (4G/5G/WiFi). Senderantennen stråler bølgene ut med lysfarten (300 000 km/s), og mottakerantennen gjør prosessen motsatt (demodulasjon) så meldingen dukker opp på skjermen din!',
    keyTraits: [
      {
        title: 'Høy frekvens = høy fart, men kortere rekkevidde',
        description:
          'WiFi på 5 GHz overfører mer data per sekund enn 2,4 GHz, men har kortere bølgelengde og stoppes lettere av betongvegger fordi bøyningen rundt hindringer blir svakere.',
        icon: 'compass',
      },
      {
        title: 'GPS: Tidsmåling fra verdensrommet',
        description:
          'GPS-satellitter i 20 200 km høyde sender svake radiosignaler (~1,57 GHz) med nøyaktig atomklokketid. Mobilen måler tidsforskjellen fra minst fire satellitter og beregner posisjonen din på få meter!',
        icon: 'globe',
      },
      {
        title: 'Bruksområder over hele samfunnet',
        description:
          'Samme grunnprinsipp driver Bluetooth-ørepluggene dine, trådløse medisinske sensorer, værradar, nødsamband og kommunikasjon med romsonder milliarder av kilometer unna.',
        icon: 'waves',
      },
    ],
    classroomTest:
      'Test rekkevidde i praksis: Be elevene sammenligne WiFi-signalstyrken (dBm) på 2,4 GHz vs. 5 GHz rett ved ruteren og deretter bak to murvegger eller en lukket dør. 2,4 GHz holder lenger gjennom vegger!',
    didYouKnow:
      'GPS-satellittene sender med omtrent samme effekt som en svak lyspære (25–50 watt) over 20 000 km unna. Når signalet treffer mobilen din, er det svakere enn én milliontedels milliarddels watt – likevel fanges det opp!',
    examples: [
      'Bærebølge & modulasjon',
      'Sender & mottaker (antenne)',
      'WiFi (2,4 GHz vs. 5 GHz) & 5G',
      'GPS-signaler',
    ],
  },

  {
    id: 'rad_radioactivity_decay',
    stepIndex: 12,
    isMainPath: true,
    parentId: 'rad_wireless_comm',
    stepNumber: 13,
    title: 'Radioaktivitet – Ustabile kjerner, α-, β- og γ-stråling og halveringstid',
    shortLabel: 'Radioaktivitet (α, β, γ)',
    subtitleTag:
      'Når atomkjerner har feil balanse av protoner og nøytroner, sender de ut ioniserende stråling',
    timeAfterBB: 'Kjernefysikk • T½ & Becquerel',
    eraLabel: 'Sone 4 • Bølger & Helse',
    temperatureLabel: 'Papir • Aluminium • Bly',
    x: 3170,
    y: 648,
    cardSide: 'below',
    zoneCategory: 'earth_tech_health',
    epochCategory: 'modern_cosmos',
    cosmicTag: 'Ustabile isotoper søker stabilitet med fast halveringstid',
    traceBadge: 'NAT01-05 • Ioniserende stråling',
    image: cosmosImg('rad_extra_alpha_beta_gamma.jpg'),
    imageCaption:
      'Gjennomtrengningsevnen til radioaktiv stråling: Alfastråling (heliumkjerner) stoppes av et papirark, betastråling (raske elektroner) av tynn aluminium, mens gammastråling (fotoner) krever tykt bly eller betong.',
    summaryTitle:
      'Ikke all ioniserende stråling er lys – radioaktive atomkjerner skyter også ut tunge alfapartikler og lynraske betaelektroner!',
    whatHappens:
      'Mens stabile atomkjerner holder sammen for alltid, har radioaktive isotoper for mange eller for få nøytroner. For å bli mer stabile sender kjernen spontant ut stråling – det måler vi i becquerel (Bq, antall kjernenedbrytninger per sekund). Ved ALFASTRÅLING (α) skytes en tung heliumkjerne (2p⁺ + 2n⁰) ut; den gjør stor skade på nært hold, men stoppes av et enkelt papirark. Ved BETASTRÅLING (β) omdannes et nøytron til et proton og et raskt elektron som trenger gjennom papir, men stoppes av tynn aluminium. Ved GAMMASTRÅLING (γ) kvitter kjernen seg med overskuddsenergi som ekstremt gjennomtrengende fotoner som krever tykt bly eller betong.',
    keyTraits: [
      {
        title: 'Halveringstid (T½): Naturens ustoppelige klokke',
        description:
          'Tiden det tar før halvparten av de radioaktive kjernene i en prøve har brutt ned. Karbon-14 har T½ = 5 730 år (brukes til å datere vikingskip), mens uran-238 har 4,5 milliarder år!',
        icon: 'clock',
      },
      {
        title: 'Innvendig vs. utvendig fare',
        description:
          'Alfastråling fra radon stopper mot huden utenfra, men puster vi radongass ned i lungene, treffer alfapartiklene ubeskyttede lungeceller rett på kloss hold.',
        icon: 'shield',
      },
      {
        title: 'Nyttig i medisin og industri',
        description:
          'Radioaktive isotoper med kort halveringstid brukes som sporstoffer i kreftdiagnostikk (PET-skanning), til strålebehandling av svulster og i vanlige røykvarslere (americium-241).',
        icon: 'atom',
      },
    ],
    classroomTest:
      'Halveringstid med 100 terninger: Kast alle terningene, og ta bort alle som viser «6» (de har henfalt). Gjenta kastene og tell hvor mange som er igjen for hvert steg – kurven følger nøyaktig eksponentiell nedbrytning!',
    didYouKnow:
      'En vanlig banan inneholder ørlite naturlig radioaktivt kalium-40 (rundt 15 Bq) – helt ufarlig, men morsomt å vite at også maten vår sender ut noen få partikler hvert sekund!',
    examples: [
      'Alfastråling (α)',
      'Betastråling (β)',
      'Gammastråling (γ)',
      'Becquerel (Bq) & Sievert (Sv)',
    ],
  },

  {
    id: 'rad_health_protection',
    stepIndex: 13,
    isMainPath: true,
    parentId: 'rad_radioactivity_decay',
    stepNumber: 14,
    title: 'Stråling, helseeffekter, strålevern og kildekritikk',
    shortLabel: 'Helse, strålevern & kildekritikk',
    subtitleTag:
      'Hva er egentlig farlig for DNA, hva er ufarlig, og hvordan vurderer vi påstander i media?',
    timeAfterBB: 'Norge snitt: ~3–4 mSv/år',
    eraLabel: 'Sone 4 • Bølger & Helse',
    temperatureLabel: 'UV • Radon • 5G-myter',
    x: 3415,
    y: 444,
    cardSide: 'above',
    zoneCategory: 'earth_tech_health',
    epochCategory: 'modern_cosmos',
    cosmicTag: 'Fotonenergi (ikke «naturlig vs. kunstig») avgjør helserisiko',
    traceBadge: 'NAT01-05 • Helse & Kildekritikk',
    image: cosmosImg('rad_extra_health_protection.jpg'),
    imageCaption:
      'Ikke-ioniserende radio- og WiFi-bølger passerer DNA uten å bryte kjemiske bindinger (t.v.), mens ioniserende UV-, røntgen- og gammastråling kan slå løs elektroner og skade DNA (t.h.). Til høyre: solkrem mot UV, radonmåling og røntgenvern.',
    summaryTitle:
      'Skal du vurdere helserisiko av stråling, er det alltid én fysisk grense som teller: Er strålingen ioniserende eller ikke?',
    whatHappens:
      'I nyheter og sosiale medier blandes ofte ufarlig og farlig stråling sammen. Fysikken setter en knivskarp grense: Ikke-ioniserende stråling (mobil, WiFi, 5G, strømnett) har altfor lav fotonenergi til å slå løs elektroner eller skade DNA. Ioniserende stråling (UV-B/C fra sola/solarium, medisinsk røntgen/CT og alfastråling fra radon i kjellere) har derimot høy nok energi til å skade DNA-tråder direkte eller danne reaktive frie radikaler. Skader på arvestoffet kan føre til celledød eller kreft over tid. Derfor måler vi helseeffekten av stråledoser i sievert (Sv) og bruker enkle strålevernregler: solkrem og skygge mot UV, radonmåling i bolig (tiltaksgrense 100 Bq/m³), og bare nødvendig røntgen/CT.',
    keyTraits: [
      {
        title: 'Naturlig bakgrunnsstråling i Norge (~3–4 mSv/år)',
        description:
          'Over halvparten av stråledosen nordmenn får i løpet av et år kommer fra naturlig radongass fra berggrunnen og kosmisk stråling – resten fra medisinsk bruk (røntgen/CT) og mat.',
        icon: 'globe',
      },
      {
        title: 'Sjekkliste for kildekritikk om stråling',
        description:
          'Når en artikkel advarer mot «farlig stråling»: (1) Er den ioniserende eller ikke-ioniserende? (2) Hva er dosen (mSv/W)? (3) Viser kilden til uavhengig, fagfellevurdert forskning som DSA eller WHO?',
        icon: 'scale',
      },
      {
        title: 'Strålevern i praksis: Tid, avstand og skjerming',
        description:
          'All strålebeskyttelse bygger på tre enkle prinsipper: kortere oppholdstid ved kilden, større avstand (intensiteten faller med kvadratet av avstanden) og riktig skjerming (bly/betong/solkrem).',
        icon: 'shield',
      },
    ],
    classroomTest:
      'Kildekritikk-øvelse i klassen: La elevene finne én skremselsartikkel om «5G-stråling» og én faktaartikkel fra Direktoratet for strålevern og atomsikkerhet (DSA). Be dem sjekke om artiklene oppgir frekvens, ioniserende evne og målbare doser!',
    didYouKnow:
      'En vanlig flytur fra Oslo til New York gir omtrent 0,04 mSv i ekstra kosmisk stråling – omtrent det samme som fire–fem dager med vanlig naturlig bakgrunnsstråling på bakken i Norge!',
    examples: [
      'Radon i inneluft',
      'Kildekritikk om stråling',
      'Ikke-ioniserende stråling',
      'Ioniserende stråling',
    ],
  },
];

export const RADIATION_NODE_MAP: Record<string, RadiationNodeData> =
  Object.fromEntries(RADIATION_NODES.map((n) => [n.id, n]));

export const RADIATION_CONTROL_QUESTIONS: ControlQuestionItem[] = [
  {
    id: 'rad-q1',
    number: 1,
    question:
      'Hvordan henger bølgelengde, frekvens og fotonenergi sammen i det elektromagnetiske spekteret – og hva er den fysiske forskjellen på ikke-ioniserende og ioniserende stråling?',
    contextHint:
      'Bruk bølgeligningen c = λ · f fra Steg 1 og grensen mellom Steg 2–3 og Steg 4!',
    points: [
      {
        heading: 'Alt lys reiser med c ≈ 300 000 km/s i vakuum – kort bølgelengde gir høy frekvens og høy energi',
        badge: 'c = λ · f',
        detail:
          'Fordi farten er fast, betyr kortere bølgelengde (λ) automatisk flere svingninger per sekund (f) og mer energi i hvert eneste foton.',
      },
      {
        heading: 'Ikke-ioniserende stråling (Radio, Mikrobølger, IR, Synlig lys, langbølget UV)',
        badge: 'Lav fotonenergi',
        detail:
          'Enkeltfotonene har for lite energi til å rive løs elektroner fra atomer. Kan varme opp vev ved høy styrke, men klipper ikke over DNA direkte.',
      },
      {
        heading: 'Ioniserende stråling (Kortbølget UV, Røntgen og Gammastråling)',
        badge: 'Høy fotonenergi',
        detail:
          'Hvert enkelt foton har nok energi til å slå løs elektroner (danne ioner), ødelegge kjemiske bindinger og skape mutasjoner i DNA.',
      },
    ],
    comparisonTable: {
      headers: [
        'Egenskap',
        'Ikke-ioniserende stråling',
        'Ioniserende stråling',
      ],
      rows: [
        [
          'Deler av EM-spekteret',
          'Radiobølger, mikrobølger, infrarød (IR) og synlig lys',
          'Kortbølget UV, røntgenstråling og gammastråling',
        ],
        [
          'Bølgelengde & fotonenergi',
          'Lengre bølgelengde • Lav energi per foton',
          'Svært kort bølgelengde • Høy energi per foton',
        ],
        [
          ' Biologisk virkning'.trim(),
          'Kan gi oppvarming, men slår ikke løs elektroner i DNA',
          'Slår løs elektroner (ioniserer) og kan skade celler og arvestoff (DNA)',
        ],
      ],
    },
    takeaway:
      'Det er bølgelengden (energien i hvert enkelt foton) som avgjør om stråling er ioniserende – ikke om kilden er «menneskeskapt» eller «naturlig»!',
  },
  {
    id: 'rad-q2',
    number: 2,
    question:
      'Ingen romsonde har noensinne besøkt en fremmed stjerne eller galakse. Hvordan kan astronomer likevel vite både temperaturen, grunnstoffene og farten deres bare ved å analysere lyset?',
    contextHint:
      'Kombiner de tre verktøyene på spektroskopi-benken i Sone 2 (Steg 5, Steg 6 og Steg 7)!',
    points: [
      {
        heading: '1. Overflatetemperatur leses av strålingstoppen (fargen)',
        badge: 'Temperaturstråling',
        detail:
          'Kjøligere stjerner (~3 200 K) har topp i rødt/IR, Sola (~5 800 K) i gulhvitt, og brennhete stjerner (> 20 000 K) i blåhvitt/UV (Wiens forskyvningslov).',
      },
      {
        heading: '2. Kjemisk innhold leses av mønsteret av spektrallinjer',
        badge: 'Atomets strekkode',
        detail:
          'Elektronoverganger i elektronskallene gir hvert grunnstoff (H, He, C, Fe osv.) helt bestemte absorpsjons- og emisjonslinjer i spekteret.',
      },
      {
        heading: '3. Fart og avstand leses av forskyvningen av linjene (Doppler / rødforskyvning)',
        badge: 'Rød- / blåforskyvning',
        detail:
          'Er hele strekkoden flyttet mot kortere blå bølger, nærmer objektet seg oss; er den flyttet mot lengre røde bølger, fjerner det seg eller strekkes av rommets utvidelse.',
      },
    ],
    comparisonTable: {
      headers: [
        'Egenskap i lyset',
        'Fysisk årsak',
        'Hva astronomene finner ut',
      ],
      rows: [
        [
          'Hvor i spekteret lyset er sterkest (fargen)',
          'Temperaturstråling (Wiens forskyvningslov)',
          'Overflatetemperaturen til stjernen i kelvin',
        ],
        [
          'Mønsteret av mørke/lyse spektrallinjer',
          'Kvantehopp mellom elektronskall i atomer',
          'Nøyaktig hvilke grunnstoffer stjernen eller gasskyen består av',
        ],
        [
          'Forskyvning av linjene mot rødt eller blått',
          'Dopplereffekt eller kosmologisk utvidelse av rommet',
          'Hastighet mot/fra oss, eksoplaneter og universets utvidelse',
        ],
      ],
    },
    takeaway:
      'Et stjernespekter er tre måleinstrumenter i ett: Fargen gir temperaturen, linjemønsteret gir grunnstoffene, og linjeforskyvningen gir bevegelsen!',
  },
  {
    id: 'rad-q3',
    number: 3,
    question:
      'Hva er den kosmiske bakgrunnsstrålingen (CMB), og hvorfor fanger vi den opp som kalde mikrobølger (2,7 K) i dag når den egentlig ble sendt ut som varmt lys ved 3 000 K?',
    contextHint:
      'Se på Steg 8: Hva skjedde da universet ble gjennomsiktig 380 000 år etter Big Bang?',
    points: [
      {
        heading: 'Universet gikk fra ugjennomsiktig plasma-tåke til gjennomsiktig gass ved t = 380 000 år',
        badge: 'De første atomene',
        detail:
          'Da temperaturen sank til ca. 3 000 K, bandt elektronene seg til atomkjernene, og lyset kunne for første gang reise fritt gjennom verdensrommet.',
      },
      {
        heading: 'Rommet har utvidet seg ~1 100 ganger siden lyset slapp fri',
        badge: 'Kosmisk strekking',
        detail:
          'Mens disse eldgamle fotonene har reist gjennom rommet i 13,8 milliarder år, har selve romtiden strukket bølgelengden deres ~1 100 ganger.',
      },
      {
        heading: 'Fra synlig/IR glød (3 000 K) til mikrobølger fra alle himmelretninger (2,725 K)',
        badge: 'Sterkeste Big Bang-bevis',
        detail:
          'At hele himmelen lyser jevnt med en perfekt sort-legeme-kurve på 2,725 K – med ørsmå frø til galaksene – bekrefter at universet startet ekstremt tett og varmt.',
      },
    ],
    takeaway:
      'Den kosmiske bakgrunnsstrålingen er ikke lyset fra en eksplosjon på ett sted, men ettergløden fra da hele det unge, varme universet ble gjennomsiktig på én gang!',
  },
  {
    id: 'rad-q4',
    number: 4,
    question:
      'Forklar både (a) hvorfor vi trenger romteleskoper som James Webb og Chandra, og (b) hvordan forskjellen på kortbølget og langbølget stråling skaper drivhuseffekten på Jorda!',
    contextHint:
      'Sammenlign atmosfærens skjold i Steg 9 med strålingsbalansen i Steg 10!',
    points: [
      {
        heading: 'Atmosfæren stopper gamma, røntgen, UV-C og mye IR – heldigvis for livet!',
        badge: 'Atmosfæriske vinduer',
        detail:
          'Bare synlig lys og radiobølger slipper fritt ned til bakken. For å observere sorte hull i røntgen eller kalde stjernefødsler i infrarødt må teleskopene opp over atmosfæren.',
      },
      {
        heading: 'Kortbølget synlig sollys slipper lett INN og varmer jordoverflaten',
        badge: 'Innstråling (~500 nm)',
        detail:
          'Sola (5 800 K) stråler mest i synlig lys, som passerer nesten uhindret gjennom luftas gasser og varmer opp hav og kontinenter.',
      },
      {
        heading: 'Langbølget infrarød varmestråling bremses UT av drivhusgassene',
        badge: 'Utstråling (~10 µm)',
        detail:
          'Den lunkne Jorda (~288 K) stråler energien ut som langbølget IR. Drivhusgasser som H₂O, CO₂ og CH₄ absorberer IR og sender varme tilbake – mere CO₂/CH₄ gir forsterket drivhuseffekt.',
      },
    ],
    takeaway:
      'Samme atmosfære beskytter DNA-et vårt mot kortbølget UV/røntgen fra rommet OG holder kloden frostfri ved å bremse langbølget infrarød varme på vei ut!',
  },
  {
    id: 'rad-q5',
    number: 5,
    question:
      'Forklar hva som skjer ved refleksjon, brytning, bøyning og interferens – og gi ett praktisk eksempel på hver!',
    contextHint:
      'Se på Steg 11: Tenk på speil, regndråper/prisme, lyd rundt hushjørner og LIGO/støydempende hodetelefoner.',
    points: [
      {
        heading: 'Refleksjon: Bølgen spretter tilbake med lik vinkel',
        badge: 'Speil & parabol',
        detail:
          'Innfallsvinkel = refleksjonsvinkel. Brukes i baderomsspeil, speilteleskoper (JWST) og parabolantenner.',
      },
      {
        heading: 'Brytning (refraksjon): Bølgen endrer retning i nytt stoff',
        badge: 'Prisme & briller',
        detail:
          'Når lys går fra luft til glass eller vann, endres farten og bølgen bøyer av. Skaper regnbuer og fokuserer lys i briller.',
      },
      {
        heading: 'Bøyning (diffraksjon) & interferens: Spredning og overlagring',
        badge: '5G, lyd & LIGO',
        detail:
          'Bølger runder kanter/spalter på størrelse med bølgelengden (derfor hører vi lyd rundt hjørner). Overlappende bølger forsterker (konstruktiv) eller slukker (destruktiv) hverandre.',
      },
    ],
    takeaway:
      'Alle bølger følger disse fire reglene – de forklarer alt fra optikk og regnbuer til mobilnett og gravitasjonsbølge-detektorer!',
  },
  {
    id: 'rad-q6',
    number: 6,
    question:
      'Gjør rede for hovedprinsippene i trådløs kommunikasjon (fra sender til mottaker), og forklar hvorfor 5 GHz WiFi er raskere enn 2,4 GHz, men har kortere rekkevidde!',
    contextHint:
      'Se på Steg 12: Bruk begrepene bærebølge, modulasjon, demodulasjon og bøyning gjennom vegger.',
    points: [
      {
        heading: 'Digitalisering → bærebølge → modulasjon → antenne',
        badge: 'Senderen',
        detail:
          'Data (0 og 1) pakkes inn på en jevn høyfrekvent bærebølge ved å variere amplitude (AM), frekvens (FM) eller digitale faser/amplituder.',
      },
      {
        heading: 'Mottakerantenne & demodulasjon',
        badge: 'Mottakeren',
        detail:
          'Radiobølgen setter elektronene i mottakerantennen i svingning, og mottakeren skreller av bærebølgen for å hente ut nullene og enerne igjen.',
      },
      {
        heading: 'Høyere frekvens gir mer data, men svakere vegg-penetrering',
        badge: '2,4 vs. 5 GHz',
        detail:
          '5 GHz svinger raskere og bærer mer data per sekund, men kortere bølgelengde gir mindre bøyning rundt og gjennom vegger enn 2,4 GHz.',
      },
    ],
    takeaway:
      'Trådløs teknologi bygger på å modulere informasjon oppå en elektromagnetisk bærebølge – der frekvensvalget alltid er et kompromiss mellom fart og rekkevidde.',
  },
  {
    id: 'rad-q7',
    number: 7,
    question:
      'Sammenlign alfa- (α), beta- (β) og gammastråling (γ) ut fra hva de består av, gjennomtrengningsevne og skjerming, og forklar hva halveringstid betyr!',
    contextHint:
      'Se på Steg 13: Tenk på papir, aluminiumsplate og bly – og hvorfor α-stråling fra radon likevel er farlig i lungene.',
    points: [
      {
        heading: 'α-stråling (heliumkjerne): Stoppes av papir/hud, svært ioniserende',
        badge: 'Tung partikkel',
        detail:
          'Har størst masse og ladning (+2), mister energien raskt, men gjør stor skade hvis kilden (f.eks. radon) pustes inn.',
      },
      {
        heading: 'β-stråling (raskt elektron): Stoppes av tynn aluminium',
        badge: 'Middels rekkevidde',
        detail:
          'Sendes ut når et nøytron blir til et proton i kjernen. Trenger gjennom papir og hud, men bremses av noen millimeter metall.',
      },
      {
        heading: 'γ-stråling (foton) & halveringstid (T½)',
        badge: 'Tykt bly / betong',
        detail:
          'Uladde, høyenergetiske fotoner krever tykt bly/betong. Halveringstiden T½ er tiden før halvparten av de ustabile atomkjernene har brutt ned.',
      },
    ],
    takeaway:
      'Jo tyngre og mer ladd strålingspartikkelen er, desto lettere stoppes den utenfra – men desto mer energi legger den igjen lokalt inne i kroppen.',
  },
  {
    id: 'rad-q8',
    number: 8,
    question:
      'Hvordan kan vi bruke fysikkunnskap og kildekritikk til å skille mellom reell helserisiko (UV, radon, røntgen) og ugrunnet frykt for stråling fra mobil/WiFi?',
    contextHint:
      'Se på Steg 14: Bruk skillet mellom ikke-ioniserende og ioniserende stråling og enheten sievert (Sv).',
    points: [
      {
        heading: 'Skillelinjen går ved ioniserende energi (E = h · f)',
        badge: 'Fotonenergi',
        detail:
          'Mobil, WiFi og 5G sender ikke-ioniserende radiobølger med altfor lav fotonenergi til å bryte DNA-bindinger. UV-B/C, røntgen, gamma og alfa fra radon er ioniserende.',
      },
      {
        heading: 'Reelle strålekilder i Norge (~3–4 mSv/år)',
        badge: 'Radon & UV',
        detail:
          'Radongass i kjellere (tiltaksgrense 100 Bq/m³), sterk UV-stråling fra sol/solarium og unødvendige CT-undersøkelser står for den faktiske helserisikoen.',
      },
      {
        heading: 'Sjekk kilder og doser kritisk',
        badge: 'Kildekritikk',
        detail:
          'Sjekk alltid om kilden oppgir strålingstype, dose (mSv) og bygger på fagfellevurdert forskning eller etater som DSA og WHO.',
      },
    ],
    takeaway:
      'Det er ikke om en strålekilde er menneskeskapt eller naturlig som avgjør faren – det er fotonenergien, strålingstypen og dosen (sievert)!',
  },
];
