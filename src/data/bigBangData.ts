export type TraitIconName =
  | 'sparkles'
  | 'atom'
  | 'flame'
  | 'sun'
  | 'orbit'
  | 'telescope'
  | 'waves'
  | 'zap'
  | 'shield'
  | 'layers'
  | 'compass'
  | 'eye'
  | 'globe'
  | 'scale'
  | 'clock'
  | 'thermometer'
  | 'expand'
  | 'star';

export interface KeyTrait {
  title: string;
  description: string;
  icon: TraitIconName;
}

export type CosmicEpochCategory =
  | 'primordial'
  | 'recombination'
  | 'stellar_dawn'
  | 'galactic_solar'
  | 'modern_cosmos';

export interface CosmicNodeData {
  id: string;
  /** 0..9 indicates which main presentation step unlocks this node */
  stepIndex: number;
  /** True for the main steps along the timeline */
  isMainPath: boolean;
  /** Parent / previous node ID */
  parentId: string | null;
  /** Display number 1..10 */
  stepNumber: number;
  title: string;
  shortLabel: string;
  subtitleTag: string;
  /** Time after Big Bang (displayed on timeline dock & header) */
  timeAfterBB: string;
  /** Lookback time ("for X år siden") or epoch label */
  eraLabel: string;
  /** Approximate cosmic temperature at this stage */
  temperatureLabel: string;
  /** SVG world coordinates */
  x: number;
  y: number;
  /** Whether the milestone card sits above or below the central timeline spine */
  cardSide: 'above' | 'below';
  /** Cosmic epoch category for color-coding along the timeline */
  epochCategory: CosmicEpochCategory;
  /** Short formula / key fact tag shown inside the timeline SVG card */
  cosmicTag: string;
  /** Optional evidence or physics badge in InfoPanel */
  traceBadge?: string;
  /** Relative path or embedded data URI to 16:9 illustration */
  image: string;
  imageCaption: string;
  /** Optional HLS (.m3u8) or MP4 video URL */
  videoUrl?: string;
  summaryTitle: string;
  whatHappens: string;
  keyTraits: KeyTrait[];
  classroomTest?: string;
  didYouKnow: string;
  examples: string[];
}

export interface ControlQuestionItem {
  id: string;
  number: number;
  question: string;
  contextHint: string;
  points: {
    heading: string;
    detail: string;
    badge?: string;
  }[];
  comparisonTable?: {
    headers: [string, string, string];
    rows: [string, string, string][];
  };
  takeaway: string;
}

export const cosmosImg = (file: string): string =>
  (globalThis as unknown as { __COSMOS_IMGS__?: Record<string, string> })
    .__COSMOS_IMGS__?.[file] ?? `./images/bigbang/${file}`;

export const BIG_BANG_MAIN_STEP_IDS: string[] = [
  'bb_inflation',
  'bb_quarks',
  'bb_nucleosynthesis',
  'bb_cmb',
  'bb_dark_ages',
  'bb_first_stars',
  'bb_supernovae',
  'bb_galaxies',
  'bb_solar_system',
  'bb_modern_universe',
];

export const BIG_BANG_NODES: CosmicNodeData[] = [
  // ==========================================================
  // STEG 1: BIG BANG & KOSMISK INFLASJON (t = 0 -> 10^-32 s)
  // ==========================================================
  {
    id: 'bb_inflation',
    stepIndex: 0,
    isMainPath: true,
    parentId: null,
    stepNumber: 1,
    title: 'Big Bang & Kosmisk inflasjon – Rom og tid oppstår',
    shortLabel: 'Big Bang & Inflasjon',
    subtitleTag: 'Selve rommet utvider seg eksponentielt • Ikke en eksplosjon i et tomt rom',
    timeAfterBB: 't = 0 → 10⁻³² s',
    eraLabel: '13,8 mrd. år siden',
    temperatureLabel: '> 10²⁷ K',
    x: 240,
    y: 520,
    cardSide: 'above',
    epochCategory: 'primordial',
    cosmicTag: 'Rom + tid + energi starter',
    traceBadge: 'Startskuddet • Utvidelse av rommet',
    image: cosmosImg('bb_step1_inflation.jpg'),
    imageCaption:
      'Fra en ufattelig tett og varm urtilstand utvider selve tidrommet seg lynraskt under den kosmiske inflasjonen i universets aller første brøkdel av et sekund.',
    summaryTitle: 'Big Bang var ikke en bombe i et tomt mørke – det var selve rommet som begynte å vokse',
    whatHappens:
      'For 13,8 milliarder år siden var alt som i dag utgjør det observerbare universet – alle galakser, stjerner, atomer og lys – presset sammen i en ufattelig tett og brennhet tilstand mindre enn et enkelt atom. I løpet av en ufattelig liten brøkdel av det første sekundet gjennomgikk universet kosmisk inflasjon: selve rommet strakte seg ut raskere enn vi klarer å forestille oss. Tid, rom og energi ble født samtidig. Derfor finnes det ikke noe «midtpunkt» i universet der Big Bang skjedde – Big Bang skjedde overalt samtidig!',
    keyTraits: [
      {
        title: 'Den vanligste misforståelsen: Ikke en eksplosjon i rommet!',
        description:
          'En vanlig eksplosjon slynger biter ut i et eksisterende tomrom. I Big Bang fantes det ikke noe «utenfor» – det er selve avstanden mellom alle punkter i rommet som strekkes ut.',
        icon: 'expand',
      },
      {
        title: 'Kosmisk inflasjon jevnet ut universet',
        description:
          'Den ekstreme utvidelsen det første brøkdels sekundet forklarer hvorfor universet har nesten nøyaktig samme temperatur i alle retninger, men samtidig bevarte ørsmå kvante-ujevnheter som senere ble til galakser.',
        icon: 'zap',
      },
      {
        title: 'Hva var «før» Big Bang?',
        description:
          'Siden både rom og tid henger sammen som tidrom (jf. Einsteins relativitetsteori), oppsto selve tidsaksen vår ved Big Bang. Fysikkens nåværende lover bryter sammen helt inne ved t = 0.',
        icon: 'clock',
      },
    ],
    classroomTest:
      'Ballong- og rosinbolle-testen i timen: Tegn ti prikker (galakser) med tusj på en litt oppblåst ballong. Blås ballongen mer opp! Ingen av prikkene beveger seg på egen hånd over gummien, og ingen prikk er «sentrum» – likevel ser hver eneste prikk at alle andre prikker fjerner seg fra den!',
    didYouKnow:
      'Selve navnet «Big Bang» ble faktisk funnet på som et litt ertende kallenavn i et BBC-radioprogram i 1949 av astronomen Fred Hoyle, som selv ikke trodde på teorien – men navnet var så fengende at det ble stående for alltid!',
    examples: [
      'Big Bang (13,8 mrd. år siden)',
      'Kosmisk inflasjon',
      'Tidrom (rom + tid)',
      'Ingen midtpunkt i rommet',
      'Kvante-ujevnheter',
    ],
  },

  // ==========================================================
  // STEG 2: UR-SUPPEN AV KVARKER, PROTONER & NØYTRONER (1 sek)
  // ==========================================================
  {
    id: 'bb_quarks',
    stepIndex: 1,
    isMainPath: true,
    parentId: 'bb_inflation',
    stepNumber: 2,
    title: 'Ur-suppen – Energi blir til kvarker, protoner og nøytroner',
    shortLabel: 'Kvarker & Protoner',
    subtitleTag: 'E = mc² i praksis • Atomkjernenes byggesteiner samles i løpet av 1 sekund',
    timeAfterBB: '10⁻¹² s → 1 sekund',
    eraLabel: 'Det første sekundet',
    temperatureLabel: '~10¹³ → 10¹⁰ K',
    x: 555,
    y: 560,
    cardSide: 'below',
    epochCategory: 'primordial',
    cosmicTag: 'Energi → Kvarker → p⁺ & n⁰',
    traceBadge: 'Partikkelfysikk • E = mc²',
    image: cosmosImg('bb_step2_quarks.jpg'),
    imageCaption:
      'I den glødende kvark-gluon-suppen kjøles universet nok ned til at kvarker binder seg sammen tre og tre og danner universets første protoner og nøytroner.',
    summaryTitle: 'Ren strålingsenergi fryser ut som elementærpartikler mens universet kjøles ned',
    whatHappens:
      'Rett etter inflasjonen var universet et sydende hav av ren energi og stråling på mange billioner grader. Her gjaldt Einsteins berømte formel E = mc² begge veier: intens lysenergi ble omdannet til par av partikler og antipartikler. Nesten all materie og antimaterie tilintetgjorde hverandre igjen i lysglimt, men én av en milliard materiepartikler ble til overs – og det lille overskuddet er alt vi og alle stjernene er bygd av i dag! Etter rundt ett mikrosekund ble det kaldt nok til at kvarkene låste seg sammen tre og tre til protoner (p⁺) og nøytroner (n⁰).',
    keyTraits: [
      {
        title: 'Energi og masse er to sider av samme sak (E = mc²)',
        description:
          'I det glovarme uruniverset hadde lysfotonene så enorm energi at kollisjoner mellom dem skapte ekte partikler med masse, som kvarker og elektroner.',
        icon: 'atom',
      },
      {
        title: 'Kvarkene bygger protoner og nøytroner',
        description:
          'Et proton består av to opp-kvarker og én ned-kvark (uud), mens et nøytron består av én opp-kvark og to ned-kvarker (udd), holdt sammen av naturkraften sterk kjernekraft.',
        icon: 'layers',
      },
      {
        title: 'Mysteriet med antimaterie',
        description:
          'For hver milliard antipartikler ble det dannet én milliard og én vanlig partikkel. Hadde forholdet vært helt likt, ville universet i dag bare bestått av lys og null atomer!',
        icon: 'scale',
      },
    ],
    classroomTest:
      'Tenk over dette i klassen: De fleste protonene i vannglasset ditt – og hydrogenatomene i kroppen din – ble satt sammen før universet hadde fylt ett eneste sekund! De er bokstavelig talt 13,8 milliarder år gamle.',
    didYouKnow:
      'I partikkelakseleratoren LHC hos CERN i Sveits kolliderer forskere blykjerner nær lysets hastighet for å gjenskape denne «kvark-gluon-suppen» i mikroskopiske glimt – slik universet så ut et milliondels sekund etter Big Bang!',
    examples: [
      'E = mc²',
      'Kvarker og elektroner',
      'Materie vs. antimaterie',
      'Protoner (p⁺) og nøytroner (n⁰)',
      'Sterk kjernekraft',
    ],
  },

  // ==========================================================
  // STEG 3: DE FØRSTE TRE MINUTTENE – UR-NUKLEOSYNTESEN
  // ==========================================================
  {
    id: 'bb_nucleosynthesis',
    stepIndex: 2,
    isMainPath: true,
    parentId: 'bb_quarks',
    stepNumber: 3,
    title: 'De første 3 minuttene – Hydrogen og helium smis',
    shortLabel: 'Første atomkjerner',
    subtitleTag: 'Ur-nukleosyntesen • 75 % hydrogen og 25 % helium blir bevis #1 for Big Bang',
    timeAfterBB: '3 – 20 minutter',
    eraLabel: 'Ur-nukleosyntesen',
    temperatureLabel: '~1 milliard K (10⁹ K)',
    x: 870,
    y: 520,
    cardSide: 'above',
    epochCategory: 'primordial',
    cosmicTag: '75 % Hydrogen • 25 % Helium',
    traceBadge: 'Hovedbevis #1 • Lette grunnstoffer',
    image: cosmosImg('bb_step3_nucleosynthesis.jpg'),
    imageCaption:
      'Mellom 3 og 20 minutter etter Big Bang kolliderer protoner og nøytroner og smelter sammen til heliumkjerner ved rundt én milliard grader.',
    summaryTitle: 'I et tidsvindu på bare 17 minutter fungerer hele universet som en kjernefysisk fusjonsreaktor',
    whatHappens:
      'Da universet var rundt tre minutter gammelt, hadde temperaturen sunket til omtrent én milliard grader – varmere enn det indre av Sola! Nå var det kaldt nok til at nøytroner og protoner kunne smelte sammen (fusjonere) uten å bli slått i stykker igjen med én gang, men fortsatt varmt og tett nok til at kollisjonene skjedde i rasende fart. Nesten alle frie nøytroner parret seg med protoner til stabile heliumkjerner (⁴He). Allerede etter 20 minutter hadde universet utvidet og avkjølt seg så mye at fusjonen bråstoppet – lenge før karbon, oksygen eller jern rakk å lages!',
    keyTraits: [
      {
        title: 'Oppskriften på det unge universet: 75 % H og 25 % He',
        description:
          'Målt etter masse endte universet opp med ca. 75 % hydrogenkjerner (enkeltprotoner), ca. 25 % heliumkjerner og et ørsmått spor (0,0000001 %) av litium – og ingenting tyngre!',
        icon: 'flame',
      },
      {
        title: 'Ett av de tre store bevisene for Big Bang!',
        description:
          'Når astronomer måler urgamle gasskyer i verdensrommet med teleskoper, finner de nettopp 75 % hydrogen og 25 % helium. Ingen annen teori enn Big Bang klarer å forklare så mye helium i hele universet!',
        icon: 'shield',
      },
      {
        title: 'Fortsatt bare nakne atomkjerner – ingen elektroner rundt!',
        description:
          'Ved én milliard grader suste elektronene altfor raskt til å kunne fanges inn i baner rundt kjernene. Hele universet var fortsatt et elektrisk ladet plasma.',
        icon: 'atom',
      },
    ],
    classroomTest:
      'Regneutfordring på tavla: Ved 3 minutter fantes det omtrent 7 protoner for hvert nøytron (14 protoner per 2 nøytroner). Når de 2 nøytronene tar med seg 2 protoner og danner én heliumkjerne (masse 4), blir 12 løse hydrogenprotoner (masse 12) til overs. 4 av 16 masseenheter = nøyaktig 25 % helium og 75 % hydrogen!',
    didYouKnow:
      'Heliumgassen som får en bursdagsballong til å sveve, stammer i hovedsak fra radioaktiv nedbrytning i jordskorpa – men ute i verdensrommet ble nesten hvert eneste heliumatom smidd i løpet av disse første 20 minuttene etter Big Bang!',
    examples: [
      'Ur-nukleosyntese (fusjon)',
      'Hydrogenkjerner (75 % av massen)',
      'Heliumkjerner (25 % av massen)',
      'Spor av litium (Li)',
      'Hovedbevis for Big Bang',
    ],
  },

  // ==========================================================
  // STEG 4: 380 000 ÅR – BAKGRUNNSSTRÅLINGEN (CMB)
  // ==========================================================
  {
    id: 'bb_cmb',
    stepIndex: 3,
    isMainPath: true,
    parentId: 'bb_nucleosynthesis',
    stepNumber: 4,
    title: 'Universet blir gjennomsiktig – Bakgrunnsstrålingen',
    shortLabel: 'Bakgrunnsstråling',
    subtitleTag: '380 000 år • Første hele atomer dannes og universets eldste lys (CMB) slipper fri',
    timeAfterBB: '380 000 år',
    eraLabel: 'Rekombinasjon & CMB',
    temperatureLabel: '3000 K (i dag: 2,7 K)',
    x: 1185,
    y: 560,
    cardSide: 'below',
    epochCategory: 'recombination',
    cosmicTag: 'Atomer dannes • CMB slipper fri',
    traceBadge: 'Hovedbevis #2 • Universets babybilde',
    image: cosmosImg('bb_step4_cmb.jpg'),
    imageCaption:
      'Da temperaturen faller til 3000 K fanges elektronene inn rundt atomkjernene. Den glødende plasmatåken letter brått, og ur-lyset strømmer fritt ut som den kosmiske bakgrunnsstrålingen.',
    summaryTitle: 'Tåken letter etter 380 000 år – og sender ut «ekkoet» vi fortsatt måler fra hele himmelen',
    whatHappens:
      'I 380 000 år var hele universet som innsiden av Sola: en tett, guloransje, ugjennomsiktig tåke av plasma. Lysfotoner kom bare noen brøkdeler av en millimeter før de krasjet i et fritt elektron. Men da rommet hadde utvidet seg nok til at temperaturen sank til rundt 3000 kelvin, skjedde et magisk vendepunkt kalt rekombinasjon: elektronene roet seg ned og festet seg i baner rundt hydrogen- og heliumkjernene til de aller første nøytrale atomene! Plutselig forsvant de frie elektronene – tåken lettet, universet ble gjennomsiktig, og lyset har reist fritt gjennom rommet helt frem til oss i dag!',
    keyTraits: [
      {
        title: 'Kosmisk mikrobølge-bakgrunnsstråling (CMB)',
        description:
          'Fordi universet har utvidet seg ca. 1100 ganger siden lyset slapp fri, er de guloransje lysbølgene blitt strukket ut til usynlig mikrobølgestråling med en temperatur på bare 2,725 kelvin (−270,4 °C).',
        icon: 'waves',
      },
      {
        title: 'Universets «babybilde» og hovedbevis #2',
        description:
          'Oppdaget ved en tilfeldighet av Penzias og Wilson i 1964 (Nobelpris 1978) og kartlagt sylskarpt av Planck-satellitten. Det eldste bildet det noen gang er fysisk mulig å ta av universet med lys!',
        icon: 'telescope',
      },
      {
        title: 'Ørsmå temperaturflekker avslører fremtidens galakser',
        description:
          'På CMB-kartet ser vi variasjoner på bare 0,00001 grader – steder der gassen allerede var ørsmått tettere, og der tyngdekraften senere skulle bygge galaksehoper!',
        icon: 'eye',
      },
    ],
    classroomTest:
      'Klassisk kuriositet i timen: Hvis noen har sett gammeldags svart-hvitt «snø»/skurring på en analog TV uten antennesignal, skyldtes rundt 1 % av den flimrende skurringen på skjermen faktisk mikrobølger fra selve Big Bang som traff TV-antennen etter 13,8 milliarder års reise!',
    didYouKnow:
      'Arno Penzias og Robert Wilson trodde først at den svake støyen i den store traktantennen deres i New Jersey skyldtes fugleskitt fra duer som hekket inne i antennen – men selv etter at de vasket antennen skinnende ren, kom støyen like sterkt fra absolutt alle retninger på himmelen!',
    examples: [
      'Rekombinasjon (380 000 år)',
      'Første nøytrale H- og He-atomer',
      'Kosmisk bakgrunnsstråling (CMB)',
      '3000 K → 2,7 K (−270,4 °C)',
      'Planck-satellitten',
    ],
  },

  // ==========================================================
  // STEG 5: DEN MØRKE TIDSALDEREN & MØRK MATERIE
  // ==========================================================
  {
    id: 'bb_dark_ages',
    stepIndex: 4,
    isMainPath: true,
    parentId: 'bb_cmb',
    stepNumber: 5,
    title: 'Den mørke tidsalderen – Tyngdekraft og mørk materie',
    shortLabel: 'Mørke tidsalder',
    subtitleTag: 'Over 100 millioner år uten en eneste stjerne • Mørk materie vever universets skjelett',
    timeAfterBB: '380 000 – 150 mill. år',
    eraLabel: 'Den kosmiske mørke tidsalder',
    temperatureLabel: '~3000 → 60 K',
    x: 1515,
    y: 520,
    cardSide: 'above',
    epochCategory: 'stellar_dawn',
    cosmicTag: 'Gravitasjon + mørk materie',
    traceBadge: 'Strukturdannelse • Usynlig reisverk',
    image: cosmosImg('bb_step5_dark_ages.jpg'),
    imageCaption:
      'I totalt stjerneløst mørke danner mørk materie et enormt kosmisk nettverk av tyngdekraft som trekker skyer av hydrogen og helium sammen i knutepunktene.',
    summaryTitle: 'Stille før stormen: I stupmørket trekker tyngdekraften ur-gassen sammen til enorme skyer',
    whatHappens:
      'Etter at gløden fra bakgrunnsstrålingen strakte seg ut i det infrarøde og sluknet for øyet, stupte universet inn i «den kosmiske mørke tidsalderen». Tenk deg et helt univers helt uten stjerner, uten planeter og uten galakser – bare stupmørkt rom fylt av tynn hydrogen- og heliumgass! Men i kulissene jobbet to avgjørende krefter: tyngdekraften (gravitasjonen) og mørk materie. Fordi det finnes over fem ganger mer mørk materie enn vanlig gass, samlet den mørke materien seg først i et gigantisk kosmisk edderkoppnett og trakk hydrogengassen ned i tyngdekraftsgropene sine.',
    keyTraits: [
      {
        title: 'Hvorfor det tok over 100 millioner år før noe lyste',
        description:
          'Gassen fra Big Bang var nesten helt jevnt fordelt. Tyngdekraften er en tålmodig kraft som trengte over hundre millioner år på å samle tynn gass til tette nok skyer.',
        icon: 'clock',
      },
      {
        title: 'Mørk materie – universets usynlige reisverk',
        description:
          'Mørk materie verken sender ut eller reflekterer lys, men har tyngdekraft. Uten tyngdekraften fra mørk materie ville hydrogengassen brukt milliarder av år ekstra på å klumpe seg sammen – og Melkeveien ville knapt rukket å dannes!',
        icon: 'orbit',
      },
      {
        title: 'Det kosmiske nettet (Cosmic Web)',
        description:
          'Gassen samlet seg langs lange tråder (filamenter) med enorme tomrom (voids) imellom – den storskala strukturen universet fortsatt har i dag.',
        icon: 'compass',
      },
    ],
    classroomTest:
      'Spør klassen: Rundt 80 millioner år etter Big Bang hadde selve rommet en behagelig «romtemperatur» på ca. 0 til 30 °C (rundt 273–300 K) overalt – men helt stummende mørkt og uten et eneste oksygen- eller karbonatom i hele kosmos!',
    didYouKnow:
      'Astronomer prøver nå å bygge radioteleskoper på baksiden av Månen (skjermet for all radiostøy fra Jorda) for å fange opp de ultrasvake 21-centimeters radiobølgene fra hydrogengassen i nettopp denne mørke tidsalderen!',
    examples: [
      'Den kosmiske mørke tidsalder',
      'Tyngdekraft (gravitasjon)',
      'Mørk materie (27 % av universet)',
      'Det kosmiske nettet',
      'Nøytral hydrogengass',
    ],
  },

  // ==========================================================
  // STEG 6: KOSMISK DAGGRY – DE FØRSTE STJERNENE TENNES
  // ==========================================================
  {
    id: 'bb_first_stars',
    stepIndex: 5,
    isMainPath: true,
    parentId: 'bb_dark_ages',
    stepNumber: 6,
    title: 'Kosmisk daggry – De aller første stjernene tennes',
    shortLabel: 'Første stjerner',
    subtitleTag: 'Kjernefysisk fusjon starter i gasskyene • Gigantiske blåhvite ur-stjerner lyser opp kosmos',
    timeAfterBB: '~100 – 200 mill. år',
    eraLabel: 'Kosmisk daggry & reionisering',
    temperatureLabel: '> 15 mill. K i stjernekjerner',
    x: 1830,
    y: 560,
    cardSide: 'below',
    epochCategory: 'stellar_dawn',
    cosmicTag: '4 ¹H → ⁴He + stjernelys',
    traceBadge: 'Fusjon • Lyset vender tilbake',
    image: cosmosImg('bb_step6_first_stars.jpg'),
    imageCaption:
      'Midt i tette skyer av ur-hydrogen tennes universets første kjempestjerner – blåhvite giganter som flommer det mørke rommet med intenst ultrafiolett stjernelys.',
    summaryTitle: 'Tyngdekraften presser hydrogengassen så hardt sammen at universets første stjerner tennes',
    whatHappens:
      'Rundt 100 til 200 millioner år etter Big Bang brøt «det kosmiske daggryet» endelig frem! I knutepunktene til den mørke materien kollapset tette skyer av ren hydrogen- og heliumgass under sin egen tyngdekraft. I sentrum steg trykket og temperaturen til over 15 millioner grader – varmt nok til å tenne kjernefysisk fusjon der hydrogen smelter sammen til helium! Slik ble universets aller første stjerner født. Fordi gassen manglet tyngre grunnstoffer til å kjøle seg ned under kollapsen, ble disse ur-stjernene (kalt Populasjon III) kolossale giganter – ofte 100 til 300 ganger tyngre enn Sola!',
    keyTraits: [
      {
        title: 'Balansekunsten i en stjerne: Tyngdekraft mot gasstrykk',
        description:
          'Tyngdekraften prøver hele tiden å klemme stjernen sammen innover, mens den enorme varmeenergien fra fusjonen i kjernen presser utover – en likevekt som holder stjerner lysende!',
        icon: 'scale',
      },
      {
        title: 'Populasjon III – kortlivde, blåhvite giganter',
        description:
          'Mens Sola vår lever rolig i 10 milliarder år, slukte disse enorme ur-stjernene drivstoffet sitt så voldsomt at de bare levde i 2–5 millioner år før de eksploderte!',
        icon: 'sun',
      },
      {
        title: 'Reionisering av universet',
        description:
          'Det intense ultrafiolette lyset fra de første stjernene rev elektroner løs fra hydrogengassen mellom galaksene igjen, og gjorde verdensrommet krystallklart slik det er i dag.',
        icon: 'sparkles',
      },
    ],
    classroomTest:
      'Spørsmål til klassen: Kunne det finnes jordlignende steinplaneter med fjell, jernkjerne og vann i bane rundt disse aller første stjernene? Nei! Universet inneholdt jo kun hydrogen og helium – silisium, oksygen og jern fantes ikke ennå!',
    didYouKnow:
      'Jo tyngre en stjerne er, desto kortere lever den! En stjerne med 100 solmasser lyser opptil én million ganger sterkere enn Sola, men brenner opp alt hydrogenet i kjernen på bare et par millioner år – et øyeblikk i kosmisk målestokk.',
    examples: [
      'Kosmisk daggry',
      'Kjernefysisk fusjon (H → He)',
      'Populasjon III-stjerner',
      'Tyngdekraft vs. strålingstrykk',
      'Reionisering',
    ],
  },

  // ==========================================================
  // STEG 7: STJERNESMIA & SUPERNOVAER (GRUNNSTOFFENE SMIS)
  // ==========================================================
  {
    id: 'bb_supernovae',
    stepIndex: 6,
    isMainPath: true,
    parentId: 'bb_first_stars',
    stepNumber: 7,
    title: 'Stjernesmia & Supernovaer – Grunnstoffene skapes',
    shortLabel: 'Supernovaer & Stoff',
    subtitleTag: 'Karbon, oksygen, silisium, jern og gull smis og slynges ut som stjernestøv',
    timeAfterBB: '~200 – 500 mill. år',
    eraLabel: 'Stjernenes grunnstoffsmie',
    temperatureLabel: '10⁸ – 10¹⁰ K i supernova',
    x: 2145,
    y: 520,
    cardSide: 'above',
    epochCategory: 'stellar_dawn',
    cosmicTag: 'He → C, O, Si, Fe → Gull',
    traceBadge: 'Kjemiens opphav • «Stjernestøv»',
    image: cosmosImg('bb_step7_supernova.jpg'),
    imageCaption:
      'Når en massiv stjerne har brukt opp brenselet i kjernen, kollapser den og eksploderer som en supernova – og sprer nysmidde grunnstoffer ut til fremtidige solsystemer.',
    summaryTitle: 'Uten døende kjempestjerner hadde periodesystemet stoppet ved helium og litium!',
    whatHappens:
      'Da de første tunge stjernene gikk tomme for hydrogen i kjernen, presset tyngdekraften kjernen enda hardere sammen slik at helium fusjonerte videre til karbon (C) og oksygen (O), og deretter lag på lag med neon, magnesium, silisium og helt opp til jern (Fe, atomnummer 26). Men jern gir ingen ny energi ved fusjon! Da stjernekjernen ble til jern, kollapset hele kjempestjernen på under ett sekund og eksploderte i en gigantisk supernova. I eksplosjonen – og i senere kollisjoner mellom nøytronstjerner – ble grunnstoffer tyngre enn jern (som kobber, sølv, gull og uran) skapt og slynget ut i rommet!',
    keyTraits: [
      {
        title: 'Stjernekjernen som «løk» opp til jern (nr. 26)',
        description:
          'Tunge stjerner bygger skall utenpå hverandre: hydrogen ytterst, deretter helium, karbon, oksygen og silisium inn til en kjerne av jern.',
        icon: 'layers',
      },
      {
        title: 'Supernovaer og nøytronstjerner lager alt tyngre enn jern',
        description:
          'Fordi fusjon av jern krever energi i stedet for å frigjøre energi, må det ekstreme eksplosjoner (supernovaer og nøytronstjerne-kollisjoner) til for å smi gull, jod, platina og uran.',
        icon: 'flame',
      },
      {
        title: 'Du er bokstavelig talt bygd av stjernestøv!',
        description:
          'Karbonet i DNA-et ditt, oksygenet i lungene, kalsiumet i skjelettet og jernet i hemoglobinet ditt er smidd inne i stjerner som levde og døde milliarder av år før Sola ble født.',
        icon: 'sparkles',
      },
    ],
    classroomTest:
      'Be elevene se på en gullring, en jernspiker eller sin egen hånd: Hydrogenet i vannmolekylene i huden ble laget i Big Bang (Steg 3), mens karbonet, nitrogenet og oksygenet i cellene har vært inne i kjernen på en glødende stjerne!',
    didYouKnow:
      'Høsten 2017 fanget forskere både gravitasjonsbølger og lys fra to nøytronstjerner som kolliderte (en «kilonova») 130 millioner lysår unna – i det ene smellet ble det dannet gull og platina med en samlet masse flere ganger større enn hele planeten Jorda!',
    examples: [
      'Stjernefusjon (C, N, O, Si, Fe)',
      'Jern (atomnummer 26) som stoppunkt',
      'Supernova-eksplosjon',
      'Nøytronstjerne-kollisjon (gull, uran)',
      'Kosmiske støvskyer',
    ],
  },

  // ==========================================================
  // STEG 8: GALAKSENE VOKSER FREM & MELKEVEIEN TAR FORM
  // ==========================================================
  {
    id: 'bb_galaxies',
    stepIndex: 7,
    isMainPath: true,
    parentId: 'bb_supernovae',
    stepNumber: 8,
    title: 'Galaksene vokser frem – Melkeveien tar form',
    shortLabel: 'Galakser & Melkeveien',
    subtitleTag: 'Ur-galakser kolliderer og vokser til enorme spiralgalakser med hundrevis av milliarder stjerner',
    timeAfterBB: '~400 mill. – 4 mrd. år',
    eraLabel: 'Galaksenes oppvekst',
    temperatureLabel: 'Rommet kjøles under 20 K',
    x: 2460,
    y: 560,
    cardSide: 'below',
    epochCategory: 'galactic_solar',
    cosmicTag: 'Melkeveien • ~200–400 mrd. stjerner',
    traceBadge: 'Kosmiske øyer • James Webb-epoken',
    image: cosmosImg('bb_step8_galaxies.jpg'),
    imageCaption:
      'Mindre stjernehoper og gassrike dverggalakser smelter sammen under tyngdekraften og danner majestetiske roterende spiralgalakser som vår egen Melkevei.',
    summaryTitle: 'Milliarder av stjerner samles i roterende kosmiske byer holdt sammen av mørk materie',
    whatHappens:
      'Etter hvert som nye generasjoner av stjerner ble født i gasskyene som var beriket med stjernestøv, trakk tyngdekraften stjernene sammen til de aller første dverggalaksene allerede noen få hundre millioner år etter Big Bang. Gjennom milliarder av år kolliderte og smeltet små ur-galakser sammen til stadig større systemer – spiralgalakser og ellipsegalakser – omgitt av enorme gloriaer (haloer) av mørk materie og med supermassive svarte hull i sentrum. Slik vokste også vår egen galakse, Melkeveien, frem til en roterende skive på rundt 100 000 lysår i tverrsnitt!',
    keyTraits: [
      {
        title: 'James Webb-teleskopet ser tilbake til de første galaksene',
        description:
          'Fordi lyset bruker tid gjennom rommet, fungerer romteleskopet James Webb (JWST) som en tidsmaskin som fotograferer unge galakser slik de så ut bare 280–400 millioner år etter Big Bang!',
        icon: 'telescope',
      },
      {
        title: 'Melkeveien – hjemgalaksen vår',
        description:
          'Melkeveien inneholder mellom 200 og 400 milliarder stjerner, og i sentrum ligger det supermassive svarte hullet Sagittarius A* med masse som 4 millioner soler.',
        icon: 'orbit',
      },
      {
        title: 'Kosmisk resirkulering i spiralarmene',
        description:
          'I spiralarmene tetner gass og støv fra eldre stjerner sammen og føder nye stjerner med nok tunge grunnstoffer til å danne steinplaneter rundt seg.',
        icon: 'star',
      },
    ],
    classroomTest:
      'Størrelsessjekk i timen: Lyset bruker drøyt 1 sekund fra Månen til Jorda og 8 minutter fra Sola – men for å krysse fra den ene kanten av Melkeveien til den andre bruker en lysstråle hele 100 000 år!',
    didYouKnow:
      'Om rundt 4,5 milliarder år vil Melkeveien kollidere og smelte sammen med nabogalaksen vår Andromeda! Likevel er avstanden mellom enkeltstjernene så enorm at nesten ingen stjerner kommer til å krasje direkte inn i hverandre.',
    examples: [
      'Spiralgalakser & ellipsegalakser',
      'Melkeveien (100 000 lysår bred)',
      'James Webb-romteleskopet (JWST)',
      'Supermassivt svart hull i sentrum',
      'Galaksehoper',
    ],
  },

  // ==========================================================
  // STEG 9: SOLSYSTEMET & JORDA OPPSTÅR (9,2 MRD. ÅR ETTER BB)
  // ==========================================================
  {
    id: 'bb_solar_system',
    stepIndex: 8,
    isMainPath: true,
    parentId: 'bb_galaxies',
    stepNumber: 9,
    title: 'Solsystemet og Jorda oppstår – Vår kosmiske adresse',
    shortLabel: 'Solsystemet & Jorda',
    subtitleTag: '9,2 mrd. år etter Big Bang (4,6 mrd. år siden) • Sola og planetene samles av stjernestøv',
    timeAfterBB: '9,2 mrd. år',
    eraLabel: 'For 4,6 milliarder år siden',
    temperatureLabel: 'Flytende vann på Jorda (~288 K)',
    x: 2775,
    y: 520,
    cardSide: 'above',
    epochCategory: 'galactic_solar',
    cosmicTag: 'Sola + 8 planeter (4,6 mrd. år siden)',
    traceBadge: 'Solsystemets fødsel • Broen til biologi',
    image: cosmosImg('bb_step9_solar_system.jpg'),
    imageCaption:
      'I en roterende skive av gass og resirkulert stjernestøv rundt den nyfødte Sola klumper støvkorn og steinblokker seg sammen til den unge Jorda og naboplanetene.',
    summaryTitle: 'Universet hadde allerede eksistert i to tredjedeler av sin levetid da Sola og Jorda ble til!',
    whatHappens:
      'En vanlig felle er å tro at Jorda ble til like etter Big Bang – men universet var allerede hele 9,2 milliarder år gammelt da Solsystemet ble født for 4,6 milliarder år siden! I en av Melkeveiens spiralarmer kollapset en kald sky av hydrogengass og stjernestøv fra tidligere generasjoner av supernovaer. 99,86 % av massen samlet seg i midten og tente vår egen stjerne, Sola. Resten flatet ut til en roterende protoplanetarisk skive: nær den varme Sola klumpet tung stein og metall seg sammen til Merkur, Venus, Jorda og Mars, mens gass- og iskjemper vokste lenger ute!',
    keyTraits: [
      {
        title: 'Sola er en «tredjegenerasjons» stjerne (Populasjon I)',
        description:
          'Fordi Sola ble født så sent i universets historie, inneholdt gasskyen ca. 2 % tyngre grunnstoffer fra eldre stjerner – akkurat det som trengtes for å bygge steinplaneter og liv!',
        icon: 'sun',
      },
      {
        title: 'Steinplaneter innerst – gasskjemper ytterst',
        description:
          'Varmen fra den unge Sola blåste lette gasser bort fra den indre delen av skiven, slik at silisium, jern og nikkel formet Jorda i den beboelige sonen med flytende vann.',
        icon: 'globe',
      },
      {
        title: 'Her tar evolusjonen på Jorda over stafettpinnen!',
        description:
          'Etter at Jorda kjølte seg ned og fikk verdenshav, oppsto de første levende cellene (LUCA) for ca. 3,7–4,0 milliarder år siden – kjemi ble til biologi!',
        icon: 'sparkles',
      },
    ],
    classroomTest:
      'Det kosmiske kalenderåret i klasserommet: Hvis vi presser alle 13,8 milliarder år siden Big Bang inn i ett vanlig kalenderår (1. januar kl. 00:00 = Big Bang, 31. desember kl. 24:00 = i dag), dukker Solsystemet og Jorda først opp rundt 1. september – og det moderne mennesket (Homo sapiens) først kl. 23:48 på selveste nyttårsaften!',
    didYouKnow:
      'Kort tid etter at Jorda ble dannet, kolliderte en planet på størrelse med Mars (kalt Theia) skrått inn i ur-Jorda. Vrakrestene som ble slynget ut i bane rundt Jorda, samlet seg raskt og ble til Månen vår!',
    examples: [
      '4,6 milliarder år siden (9,2 mrd. år etter BB)',
      'Protoplanetarisk skive',
      'Steinplaneter vs. gasskjemper',
      'Beboelig sone & flytende vann',
      'Overgangen fysikk → kjemi → biologi',
    ],
  },

  // ==========================================================
  // STEG 10: UNIVERSET I DAG – RØDFORSKYVNING & MØRK ENERGI
  // ==========================================================
  {
    id: 'bb_modern_universe',
    stepIndex: 9,
    isMainPath: true,
    parentId: 'bb_solar_system',
    stepNumber: 10,
    title: 'Universet i dag – Rødforskyvning og mørk energi',
    shortLabel: 'Universet i dag',
    subtitleTag: '13,8 milliarder år • Hubbles lov, kosmologisk rødforskyvning og akselererende utvidelse',
    timeAfterBB: '13,8 mrd. år (Nåtid)',
    eraLabel: 'Vår kosmiske nåtid',
    temperatureLabel: 'CMB: 2,725 K (−270,4 °C)',
    x: 3090,
    y: 560,
    cardSide: 'below',
    epochCategory: 'modern_cosmos',
    cosmicTag: '5 % stoff • 27 % mørk mat. • 68 % mørk energi',
    traceBadge: 'Hovedbevis #3 • Rødforskyvning',
    image: cosmosImg('bb_step10_modern_universe.jpg'),
    imageCaption:
      'Et dypfelt av det moderne universet med milliarder av galakser: jo fjernere galaksene er, desto mer er lyset deres strukket mot rødt av rommets utvidelse.',
    summaryTitle: 'Vi lever i et univers med to billioner galakser som utvider seg raskere og raskere!',
    whatHappens:
      '13,8 milliarder år etter Big Bang ser vi ut på et observerbart univers med rundt 2000 milliarder (to billioner) galakser! Hvordan oppdaget vi egentlig hele denne historien? I 1929 viste Edwin Hubble (byggende på beregninger fra bl.a. Georges Lemaître) at lyset fra fjerne galakser er rødforskjøvet: spektrallinjene i lyset er forskjøvet mot lengre, rødere bølgelengder, og jo lenger unna en galakse er, desto raskere fjerner den seg fra oss (Hubbles lov). Spoler vi denne filmen bakover i tid, må alt ha startet samlet i Big Bang! Og i 1998 kom en ny overraskelse: utvidelsen bremser ikke opp – den akselererer, drevet av mystisk mørk energi!',
    keyTraits: [
      {
        title: 'Kosmologisk rødforskyvning – Hovedbevis #3!',
        description:
          'Mens lyset fra en fjern galakse reiser gjennom rommet, utvider selve rommet seg og strekker lysbølgene lengre (mer rødlige). Dette beviser direkte at universet utvider seg!',
        icon: 'waves',
      },
      {
        title: 'Universets oppskrift i dag: 5 % – 27 % – 68 %',
        description:
          'Alt synlig stoff (stjerner, planeter, gass og mennesker) utgjør bare ca. 5 % av universet! Ca. 27 % er mørk materie, og hele 68 % er mørk energi.',
        icon: 'atom',
      },
      {
        title: 'Mørk energi og universets fremtid',
        description:
          'For ca. 5 milliarder år siden begynte mørk energi å vinne over tyngdekraften på store skalaer, slik at universets utvidelse skyter fart mot et stadig kaldere og mørkere rom («Big Freeze»).',
        icon: 'expand',
      },
    ],
    classroomTest:
      'Oppsummer hele faget på 30 sekunder med klassen: Hva er de TRE store bevisene for Big Bang som alle bør kunne til prøven? 1) Rødforskyvning fra fjerne galakser (Hubbles lov), 2) Den kosmiske bakgrunnsstrålingen (CMB fra 380 000 år), og 3) Mengdeforholdet mellom de letteste grunnstoffene (75 % hydrogen og 25 % helium)!',
    didYouKnow:
      'Når du ser ut på nattehimmelen eller på et bilde fra James Webb-teleskopet, ser du aldri nåtiden – du ser alltid bakover i tid: Sola slik den var for 8 minutter siden, Andromeda slik den var for 2,5 millioner år siden, og de fjerneste galaksene slik de var for over 13,4 milliarder år siden!',
    examples: [
      'Rødforskyvning & spektrallinjer',
      'Hubbles lov (Georges Lemaître & Edwin Hubble)',
      'Mørk energi (68 %) & akselererende utvidelse',
      'De 3 hovedbevisene for Big Bang',
      'Å se ut i rommet er å se bakover i tid',
    ],
  },
];

export const BIG_BANG_NODE_MAP: Record<string, CosmicNodeData> =
  Object.fromEntries(BIG_BANG_NODES.map((node) => [node.id, node]));

export const BIG_BANG_CONTROL_QUESTIONS: ControlQuestionItem[] = [
  {
    id: 'bb-q1',
    number: 1,
    question:
      'Hva mener fysikere egentlig med Big Bang – og hvorfor er det feil å se for seg Big Bang som en vanlig bombe som eksploderer midt i et stort, tomt og mørkt rom?',
    contextHint:
      'Tenk tilbake til Steg 1 og ballong- eller rosinbolle-modellen: Hva skjedde med selve rommet og tiden, og har universet et midtpunkt?',
    points: [
      {
        heading: 'Utvidelse av selve rommet – ikke ut i et ferdig tomrom',
        badge: 'Kjernepoeng',
        detail:
          'Ved en vanlig eksplosjon slynges splinter ut gjennom et rom som allerede fantes på forhånd. I Big Bang oppsto selve tidrommet (rom og tid) sammen med energien for 13,8 milliarder år siden, og det er selve rommet mellom galaksene som strekker seg og vokser.',
      },
      {
        heading: 'Universet har ikke noe midtpunkt («Big Bang skjedde overalt»)',
        badge: 'Ballong-modellen',
        detail:
          'Akkurat som prikker på overflaten av en ballong som blåses opp, vil en observatør i hvilken som helst galakse se at alle andre galakser fjerner seg – uten at noen av prikkene ligger i «sentrum» av overflaten.',
      },
      {
        heading: 'Fra ufattelig tett og varmt til kaldere og mer utstrakt',
        badge: 'Kosmisk inflasjon',
        detail:
          'Det unge universet startet ekstremt varmt og tett, utvidet seg eksponentielt under den kosmiske inflasjonen den første brøkdelen av et sekund, og har siden kjølt seg ned etter hvert som rommet har vokst.',
      },
    ],
    takeaway:
      'Kort sagt til prøven: Big Bang var ikke en eksplosjon i rommet på et bestemt sted, men starten på en pågående utvidelse av selve rommet overalt samtidig for 13,8 milliarder år siden.',
  },
  {
    id: 'bb-q2',
    number: 2,
    question:
      'Hvilke tre uavhengige hovedbevis gjør at naturvitenskapen i dag er så sikker på at Big Bang-teorien er riktig?',
    contextHint:
      'Koble sammen observasjonene fra Steg 3 (3 minutter), Steg 4 (380 000 år) og Steg 10 (fjerne galakser).',
    points: [
      {
        heading: '1. Kosmologisk rødforskyvning fra fjerne galakser (Hubbles lov)',
        badge: 'Bevis #1 • Steg 10',
        detail:
          'Spektrallinjene i lyset fra fjerne galakser er forskjøvet mot den røde enden av spekteret fordi rommet strekker lysbølgene på veien hit. Jo lenger unna en galakse er, desto raskere fjerner den seg – spoler vi bakover i tid, må alt ha vært samlet!',
      },
      {
        heading: '2. Den kosmiske mikrobølge-bakgrunnsstrålingen (CMB)',
        badge: 'Bevis #2 • Steg 4',
        detail:
          'Big Bang-modellen forutsa at det måtte finnes en restglød fra da universet ble gjennomsiktig ved 380 000 år (3000 K). Denne strålingen er målt fra absolutt alle retninger på himmelen, strukket ut til mikrobølger ved 2,725 K (−270,4 °C).',
      },
      {
        heading: '3. Fordelingen av de letteste grunnstoffene (75 % H og 25 % He)',
        badge: 'Bevis #3 • Steg 3',
        detail:
          'Beregninger av fusjonen mellom 3 og 20 minutter etter Big Bang gir ca. 75 % hydrogen, 25 % helium og litt litium (etter masse). Teleskopmålinger av urgamle gasskyer i universet viser nøyaktig dette blandingsforholdet!',
      },
    ],
    comparisonTable: {
      headers: [
        'Hovedbevis for Big Bang',
        'Når stammer fenomenet fra?',
        'Hva måler vi med teleskoper i dag?',
      ],
      rows: [
        [
          '1. Lette grunnstoffer (H & He)',
          '3–20 minutter etter Big Bang',
          'Ca. 75 % hydrogen og 25 % helium i de eldste gasskyene i rommet',
        ],
        [
          '2. Bakgrunnsstrålingen (CMB)',
          '380 000 år etter Big Bang',
          'Jevn mikrobølgestråling på 2,725 K fra alle retninger på himmelen',
        ],
        [
          '3. Kosmologisk rødforskyvning',
          'Hele universets utvidelseshistorie',
          'Spektrallinjer fra fjerne galakser er strukket mot rødt (Hubbles lov)',
        ],
      ],
    },
    takeaway:
      'Disse tre bevisene er helt uavhengige av hverandre – partikkelfysikk ved 3 minutter, strålingsfysikk ved 380 000 år og galaksemålinger i dag peker alle på den samme historien!',
  },
  {
    id: 'bb-q3',
    number: 3,
    question:
      'Hvor kommer grunnstoffene i periodesystemet og i menneskekroppen vår fra? Forklar forskjellen på hva som ble laget i Big Bang, inne i stjerner og i supernovaer!',
    contextHint:
      'Hvorfor rakk ikke Big Bang å lage karbon, oksygen eller jern – og hvorfor er atomnummer 26 (jern) en magisk grense inne i stjerner?',
    points: [
      {
        heading: 'Big Bang lagde kun de aller letteste grunnstoffene (H, He og litt Li)',
        badge: '3–20 min',
        detail:
          'Universet utvidet og kjølte seg så raskt ned etter 20 minutter at fusjonen stoppet opp før tyngre kjerner rakk å bygges. Hydrogenet i vannet (H₂O) i kroppen din stammer direkte fra Big Bang!',
      },
      {
        heading: 'Fusjon i stjernekjerner bygger grunnstoffer opp til jern (Fe, nr. 26)',
        badge: 'Stjernenes indre',
        detail:
          'Inne i stjerner er trykket og temperaturen høy i millioner av år, slik at hydrogen og helium kan fusjonere videre til karbon (C), nitrogen (N), oksygen (O), silisium (Si) og helt opp til jern (Fe).',
      },
      {
        heading: 'Supernovaer og nøytronstjerne-kollisjoner smir alt tyngre enn jern',
        badge: 'Eksplosiv død',
        detail:
          'Å fusjonere jern gir ikke energi, men krever tilført energi. Derfor lages tunge grunnstoffer som kobber, sølv, jod, gull og uran først i ekstreme supernova-eksplosjoner og kollisjoner mellom nøytronstjerner, som samtidig sprer stoffene ut til nye solsystemer.',
      },
    ],
    comparisonTable: {
      headers: [
        'Kosmisk smie',
        'Hvilke grunnstoffer lages her?',
        'Eksempel i hverdagen og kroppen din',
      ],
      rows: [
        [
          'Big Bang (første 3–20 min)',
          'Hydrogen (H), helium (He) og ørsmå spor av litium (Li)',
          'Hydrogenatomene i drikkevannet og i alle kroppens molekyler',
        ],
        [
          'Fusjon i kjernen av stjerner',
          'Grunnstoffer fra karbon (nr. 6) opp til jern (nr. 26)',
          'Karbon i DNA, oksygen vi puster, kalsium i skjelettet og jern i blodet',
        ],
        [
          'Supernovaer & nøytronstjerner',
          'Grunnstoffer tyngre enn jern (nr. 27 og oppover)',
          'Jod i skjoldbruskkjertelen, kobber i ledninger, gull og uran',
        ],
      ],
    },
    takeaway:
      'Sola og Jorda kunne først oppstå etter 9,2 milliarder år fordi tidligere generasjoner av tunge stjerner først måtte leve, smi grunnstoffene og eksplodere som supernovaer!',
  },
  {
    id: 'bb-q4',
    number: 4,
    question:
      'Hva består universet av i dag, og hva er forskjellen på vanlig materie, mørk materie og mørk energi?',
    contextHint:
      'Pass på så du ikke blander sammen mørk materie (som trekker sammen) og mørk energi (som presser fra hverandre)!',
    points: [
      {
        heading: 'Vanlig synlig materie (~5 %): Alt av atomer, stjerner, planeter og oss',
        badge: ' ca. 5 %',
        detail:
          'Alt som står i periodesystemet – stjerner, gasskyer, planeter, trær og mennesker – utgjør bare rundt en tyvendedel av energi- og masseinnholdet i universet!',
      },
      {
        heading: 'Mørk materie (~27 %): Usynlig «lim» med tyngdekraft som holder galaksene sammen',
        badge: 'ca. 27 % • Trekker sammen',
        detail:
          'Mørk materie verken lyser eller reflekterer lys, men vi ser effekten av tyngdekraften dens: den samlet de første gasskyene i den mørke tidsalderen og hindrer roterende galakser i å bli slynget fra hverandre.',
      },
      {
        heading: 'Mørk energi (~68 %): Drivkraften bak universets akselererende utvidelse',
        badge: 'ca. 68 % • Utvider raskere',
        detail:
          'En gåtefull form for energi knyttet til selve det tomme rommet som virker motsatt av tyngdekraften på store avstander, og får universet til å utvide seg stadig raskere.',
      },
    ],
    takeaway:
      'Huskeregel: Mørk MATERIE samler galakser med tyngdekraft (som et usynlig skjelett), mens mørk ENERGI får selve rommet mellom galaksehopene til å utvide seg stadig raskere!',
  },
];
