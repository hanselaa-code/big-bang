import {
  cosmosImg,
  type ControlQuestionItem,
  type CosmicNodeData,
} from './bigBangData';

export type ElementRoleCategory =
  | 'atom_structure'
  | 'periodic_spectra'
  | 'stellar_forge'
  | 'extreme_cosmos';

export interface ElementNodeData extends CosmicNodeData {
  side: 'left' | 'right';
  anchorX: number;
  anchorY: number;
  roleCategory: ElementRoleCategory;
}

export const CENTRAL_ELEMENTS_HUB_IMAGE = cosmosImg('elem_central_hub.jpg');

export const ELEMENTS_MAIN_STEP_IDS: string[] = [
  'elem_nucleus_protons',
  'elem_isotopes',
  'elem_electron_shells',
  'elem_spectral_lines',
  'elem_bigbang_elements',
  'elem_stellar_fusion',
  'elem_iron_peak',
  'elem_supernova_elements',
  'elem_kilonova_gold',
  'elem_stardust_humans',
];

export const ELEMENTS_NODES: ElementNodeData[] = [
  // ==========================================================
  // VENSTRE SIDE (DEL 1–5): ATOMET, PERIODESYSTEMET & URSTOFFET
  // ==========================================================
  {
    id: 'elem_nucleus_protons',
    stepIndex: 0,
    isMainPath: true,
    parentId: null,
    stepNumber: 1,
    title: 'Atomkjernen & Atomnummeret – Grunnstoffets «personnummer»',
    shortLabel: 'Atomkjernen & Protoner',
    subtitleTag: 'Antall protoner (Z) i kjernen avgjør 100 % hvilket grunnstoff atomet er',
    timeAfterBB: 'Atomnummer Z = antall p⁺',
    eraLabel: 'Atomets oppbygning',
    temperatureLabel: 'Sterk kjernekraft i kjernen',
    x: 225,
    y: 190,
    side: 'left',
    anchorX: 816,
    anchorY: 512,
    cardSide: 'above',
    roleCategory: 'atom_structure',
    epochCategory: 'primordial',
    cosmicTag: '1 p⁺ = H • 6 p⁺ = C • 79 p⁺ = Au',
    traceBadge: 'Atomkjernen • Antall protoner = Grunnstoff',
    image: cosmosImg('elem_step1_nucleus.jpg'),
    imageCaption:
      'Innerst i hvert atom sitter en ørliten, ekstremt tett kjerne av positivt ladde protoner (rødgyldne) og nøytrale nøytroner (blå), bundet sammen av den sterke kjernekraften.',
    summaryTitle: 'Endrer du antall protoner i kjernen, skifter du selve grunnstoffet!',
    whatHappens:
      'Alt vanlig stoff i universet er bygd opp av atomer, og midt inne i atomet sitter atomkjernen. Kjernen består av positivt ladde protoner (p⁺) og elektrisk nøytrale nøytroner (n⁰), og inneholder over 99,9 % av atomets masse selv om resten av atomet nesten bare er tomrom! Det aller viktigste tallet i kjemien og astrofysikken er atomnummeret (Z): antall protoner i kjernen. Har en atomkjerne 1 proton, er den ALLTID hydrogen. Har den 6 protoner, er den ALLTID karbon. Har den 26 protoner, er den jern – og 79 protoner er gull!',
    keyTraits: [
      {
        title: 'Hvorfor sprenges ikke kjernen av pluss-mot-pluss?',
        description:
          'Like elektriske ladninger (protoner) frastøter egentlig hverandre voldsomt. Men på ekstremt kort avstand i kjernen virker den sterke kjernekraften som et superlim som er enda sterkere!',
        icon: 'shield',
      },
      {
        title: 'Kjernefusjon = å bygge høyere atomnummer',
        description:
          'Når stjerner lager nye grunnstoffer, betyr det helt konkret at atomkjerner kolliderer så hardt at de smelter sammen til kjerner med flere protoner.',
        icon: 'flame',
      },
      {
        title: 'Atomet er nesten bare tomrom',
        description:
          'Hvis vi forstørret atomkjernen opp til en klinkekule midt på midtbanen på Ullevaal stadion, ville de ytterste elektronene surret rundt helt oppe på tribunen!',
        icon: 'expand',
      },
    ],
    classroomTest:
      'Spør klassen: Hvorfor klarer ikke en kjemiker på skolelaben å lage gull av bly med en gassbrenner? Fordi kjemiske reaksjoner bare flytter på elektroner ytterst i atomet – for å endre antall protoner i kjernen må du ha en stjerne, supernova eller partikkelakselerator!',
    didYouKnow:
      'Periodesystemet har i dag 118 kjente grunnstoffer (atomnummer 1 til 118). De 92 første (fra hydrogen til uran) finnes naturlig i universet, mens nr. 93–118 er laget kunstig i laboratorier!',
    examples: [
      'Proton (p⁺)',
      'Atomnummer (Z)',
      'Sterk kjernekraft',
      'Kjemisk vs. kjernereaksjon',
    ],
  },

  {
    id: 'elem_isotopes',
    stepIndex: 1,
    isMainPath: true,
    parentId: 'elem_nucleus_protons',
    stepNumber: 2,
    title: 'Nøytroner & Isotoper – Søskenutgaver av samme grunnstoff',
    shortLabel: 'Nøytroner & Isotoper',
    subtitleTag: 'Samme antall protoner, men ulikt antall nøytroner i kjernen',
    timeAfterBB: 'Massetall A = p⁺ + n⁰',
    eraLabel: 'Atomkjernens stabilitet',
    temperatureLabel: '¹H (protium) • ²H (deuterium) • ³H (tritium)',
    x: 225,
    y: 370,
    side: 'left',
    anchorX: 804,
    anchorY: 566,
    cardSide: 'below',
    roleCategory: 'atom_structure',
    epochCategory: 'primordial',
    cosmicTag: 'Samme grunnstoff • Ulik masse',
    traceBadge: 'Isotoper • Nøkkelen til fusjon',
    image: cosmosImg('elem_step2_isotopes.jpg'),
    imageCaption:
      'Tre isotoper av hydrogen: alle har nøyaktig 1 proton (rød) og 1 elektron, men henholdsvis 0, 1 og 2 nøytroner (blå) i kjernen.',
    summaryTitle: 'Nøytronene fungerer som «lim» i kjernen – og gir oss kosmiske klokker',
    whatHappens:
      'Selv om antall protoner aldri kan endres uten at grunnstoffet skifter navn, kan atomer av samme grunnstoff ha ulikt antall nøytroner i kjernen. Slike varianter kalles isotoper! For eksempel har vanlig hydrogen (¹H) bare ett proton og null nøytroner, mens «tungt hydrogen» – deuterium (²H) – har ett proton og ett nøytron. Kjemisk oppfører de seg nesten helt likt fordi de har like mange elektroner, men de har ulik masse og ulik stabilitet i kjernen.',
    keyTraits: [
      {
        title: 'Deuterium (²H) – universets viktigste mellomsteg',
        description:
          'Både i de første minuttene etter Big Bang og inne i Sola akkurat nå må hydrogen først danne isotopen deuterium før helium kan bygges!',
        icon: 'atom',
      },
      {
        title: 'Stabile vs. radioaktive isotoper',
        description:
          'Blir det for mange eller for få nøytroner i forhold til protoner, blir kjernen ustabil (radioaktiv) og sender ut stråling når den omdannes – som karbon-14 (¹⁴C) og uran-238.',
        icon: 'zap',
      },
      {
        title: 'Slik vet vi at Jorda er 4,54 milliarder år gammel',
        description:
          'Ved å måle hvor mye radioaktivt uran som har rukket å bli til bly i urgamle meteoritter (halveringstid), kan forskere lese av alderen på Solsystemet som en klokke!',
        icon: 'clock',
      },
    ],
    classroomTest:
      'Rask sjekk med klassen: Karbon-12 (¹²C) og karbon-14 (¹⁴C) er begge karbon (atomnummer 6). Hvor mange protoner og hvor mange nøytroner har hver av dem? (Svar: Begge har 6 protoner; ¹²C har 6 nøytroner, mens ¹⁴C har 8 nøytroner!)',
    didYouKnow:
      'Karbon-14 lages hele tiden øverst i atmosfæren vår av kosmisk stråling fra verdensrommet, tas opp av planter og dyr, og brukes av arkeologer til å datere alt fra vikingskip til mammutbein!',
    examples: [
      'Isotoper',
      'Deuterium (²H)',
      'Karbon-14-datering',
      'Radioaktiv halveringstid',
    ],
  },

  {
    id: 'elem_electron_shells',
    stepIndex: 2,
    isMainPath: true,
    parentId: 'elem_isotopes',
    stepNumber: 3,
    title: 'Elektronskall & Periodesystemet – Naturens geniale system',
    shortLabel: 'Elektronskall & Systemet',
    subtitleTag: 'Perioder teller elektronskall • Hovedgrupper teller ytterelektroner',
    timeAfterBB: '118 grunnstoffer i orden',
    eraLabel: 'Kjemiens byggetegning',
    temperatureLabel: 'Skall: 2 • 8 • 8 / 18 elektroner',
    x: 225,
    y: 550,
    side: 'left',
    anchorX: 656,
    anchorY: 590,
    cardSide: 'above',
    roleCategory: 'periodic_spectra',
    epochCategory: 'stellar_dawn',
    cosmicTag: 'Ytterelektroner = Kjemiske egenskaper',
    traceBadge: 'Periodesystemet • Rader & familier',
    image: cosmosImg('elem_step3_shells.jpg'),
    imageCaption:
      'Bohrs skallmodell ved siden av periodesystemet: Innerste skall har plass til 2 elektroner, neste 8 – og antallet elektroner i ytterste skall styrer hvordan atomet binder seg til andre.',
    summaryTitle: 'Hvorfor karbon kan bygge liv mens helium nekter å reagere med noe som helst',
    whatHappens:
      'Rundt den positivt ladde kjernen svirrer negativt ladde elektroner (e⁻) i bestemte energinivåer eller «skall». I et nøytralt atom er det nøyaktig like mange elektroner som protoner. Periodesystemet er rett og slett et kart over elektronskallene! Hver vannrette rad (periode) forteller hvor mange skall atomet har, mens hver loddrette kolonne (gruppe) samler grunnstoffer med likt antall ytterelektroner (valenselektroner) – og dermed nesten lik kjemi!',
    keyTraits: [
      {
        title: 'Åtteregelen (oktettregelen) driver all kjemi',
        description:
          'Atomer «ønsker» fullt ytterste skall (2 i innerste skall for H/He, 8 i ytterste skall for de neste). Derfor deler eller bytter atomer elektroner og bygger molekyler som H₂O og CO₂.',
        icon: 'layers',
      },
      {
        title: 'Edelgassene (gruppe 18) er allerede fulle',
        description:
          'Helium (2 ytterelektroner) og neon/argon (8 ytterelektroner) har fulle skall og reagerer derfor nesten aldri med andre stoffer.',
        icon: 'shield',
      },
      {
        title: 'Karbon (nr. 6) har 4 ytterelektroner – livets super-bygger',
        description:
          'Med 4 elektroner i ytterste skall kan ett karbonatom binde seg i fire retninger samtidig og danne lange kjeder, ringer og DNA-molekyler!',
        icon: 'sparkles',
      },
    ],
    classroomTest:
      'Spør elevene: Hvorfor tror astrobiologer at liv på andre planeter i universet sannsynligvis også er basert på karbon (og vann), og ikke f.eks. helium eller neon? (Fordi karbon kan danne 4 bindinger i uendelige mønstre, mens edelgassene ikke danner bindinger i det hele tatt!)',
    didYouKnow:
      'Da Dmitrij Mendelejev satte opp periodesystemet i 1869, lot han det stå tomme ruter der det manglet grunnstoffer – og spådde egenskapene til blant annet gallium og germanium før noen hadde oppdaget dem!',
    examples: [
      'Elektronskall',
      'Ytterelektroner (valenselektroner)',
      'Perioder & hovedgrupper',
      'Oktettregelen',
    ],
  },

  {
    id: 'elem_spectral_lines',
    stepIndex: 3,
    isMainPath: true,
    parentId: 'elem_electron_shells',
    stepNumber: 4,
    title: 'Spektrallinjer – Slik leser vi grunnstoffenes «strekkode» i stjernelyset',
    shortLabel: 'Spektrallinjer (Strekkode)',
    subtitleTag: 'Elektronsprang i atomet gir hvert grunnstoff et unikt fingeravtrykk av lys',
    timeAfterBB: 'Fjernmåling over milliarder lysår',
    eraLabel: 'Broen mellom Grunnstoffer og Stråling',
    temperatureLabel: 'ΔE = lys med bestemt bølgelengde',
    x: 225,
    y: 730,
    side: 'left',
    anchorX: 712,
    anchorY: 682,
    cardSide: 'below',
    roleCategory: 'periodic_spectra',
    epochCategory: 'stellar_dawn',
    cosmicTag: 'Unikt linjespekter per grunnstoff',
    traceBadge: 'Spektroskopi • Stjernenes fingeravtrykk',
    image: cosmosImg('elem_step4_spectra.jpg'),
    imageCaption:
      'Når elektroner hopper mellom bestemte skall i atomet, absorberes eller sendes det ut lys med helt bestemte farger/bølgelengder – og skaper en unik «strekkode» i spekteret!',
    summaryTitle: 'Vi har aldri hentet en skje av en fjern stjerne – likevel vet vi nøyaktig hva den består av!',
    whatHappens:
      'Hvordan kan astronomer sitte på Jorda og vite at Sola og fjerne galakser inneholder 75 % hydrogen, 25 % helium og spor av jern og kalsium? Hemmeligheten ligger i elektronskallene! Elektroner får bare lov til å oppholde seg i helt bestemte skall rundt kjernen. For å hoppe ut til et høyere skall må elektronet sluke et lyskvant (foton) med NØYAKTIG riktig energi/farge, og når det faller ned igjen, sender det ut nøyaktig samme farge. Splitter vi stjernelys i en regnbue (spekter), ser vi skarpe mørke linjer akkurat der atomene i stjerneatmosfæren har forsynt seg av lyset!',
    keyTraits: [
      {
        title: 'Ingen to grunnstoffer har samme strekkode',
        description:
          'Fordi hydrogen, helium, natrium og jern har helt ulik kjerne og skallavstand, gir hvert eneste grunnstoff sitt eget unike mønster av spektrallinjer.',
        icon: 'eye',
      },
      {
        title: 'Absorpsjonsspekter vs. emisjonsspekter',
        description:
          'En kjøligere gass foran en varm stjerne lager mørke streker i regnbuen (absorpsjonslinjer), mens en glødende gassky i mørket sender ut lyse fargestreker på nøyaktig samme plass (emisjonslinjer).',
        icon: 'waves',
      },
      {
        title: 'Avslører også rødforskyvning og universets utvidelse!',
        description:
          'Når hele strekkoden til hydrogen fra en fjern galakse er forskjøvet mot den røde enden av spekteret, vet vi at lyset er blitt strukket på veien hit!',
        icon: 'telescope',
      },
    ],
    classroomTest:
      'Fortell klassen historien bak navnet HELIUM: Under en solformørkelse i 1868 så astronomer en gul spektrallinje i sollyset som ikke stemte med NOE kjent grunnstoff på Jorda. De kalte det nye stoffet opp etter solguden «Helios» – hele 27 år før noen klarte å finne heliumgass her på Jorda!',
    didYouKnow:
      'Den samme fysikken ser du i nyttårsfyrverkeri og gatelys: Natrium gir intenst gult lys, kobber gir blågrønt, og strontium gir dyprødt fordi elektronene i de ulike metallatomene har ulike skall-sprang!',
    examples: [
      'Spektrallinjer',
      'Absorpsjons- & emisjonsspekter',
      'Kvantesprang i skall',
      'Helium oppdaget på Sola',
    ],
  },

  {
    id: 'elem_bigbang_elements',
    stepIndex: 4,
    isMainPath: true,
    parentId: 'elem_spectral_lines',
    stepNumber: 5,
    title: 'Kosmisk smie 1: Big Bang – Universets ur-råstoff (H og He)',
    shortLabel: 'Smie 1: Big Bang (H & He)',
    subtitleTag: '75 % hydrogen, 25 % helium og et bittelite spor av litium på 20 minutter',
    timeAfterBB: 't = 3 – 20 minutter etter Big Bang',
    eraLabel: 'Opprinnelse #1 i periodesystemet',
    temperatureLabel: '~1 milliard K i uruniverset',
    x: 225,
    y: 910,
    side: 'left',
    anchorX: 648,
    anchorY: 765,
    cardSide: 'above',
    roleCategory: 'stellar_forge',
    epochCategory: 'recombination',
    cosmicTag: 'Nr. 1 Hydrogen & Nr. 2 Helium',
    traceBadge: 'Kosmisk smie 1 av 4 • Big Bang',
    image: cosmosImg('elem_step5_bigbang_h_he.jpg'),
    imageCaption:
      'I de første minuttene etter Big Bang rakk uruniverset kun å smi de aller enkleste atomkjernene: hydrogen (1 proton) og helium (2 protoner + 2 nøytroner).',
    summaryTitle: 'Hvert eneste hydrogenatom i kroppen din er 13,8 milliarder år gammelt!',
    whatHappens:
      'Nå kobler vi atomene direkte til universets historie! Hvor ble grunnstoffene i periodesystemet egentlig lagd? De to aller første rutenumrene – hydrogen (nr. 1) og helium (nr. 2), pluss et ørlite spor av litium (nr. 3) – ble dannet allerede mellom 3 og 20 minutter etter Big Bang! Da var hele universet én eneste tett og varm fusjonsovn. Men fordi rommet utvidet seg og kjølte seg ned så fort, stoppet fusjonen helt opp etter 20 minutter før karbon eller oksygen rakk å bli lagd.',
    keyTraits: [
      {
        title: '98 % av alle vanlige atomer i universet i dag',
        description:
          'Selv etter 13,8 milliarder år med stjerner utgjør hydrogen og helium fra Big Bang fortsatt rundt 98 % av all vanlig materie i universet (målt i masse)!',
        icon: 'globe',
      },
      {
        title: 'Ingen stjerner kan lage nytt hydrogen',
        description:
          'Stjerner BRUKER OPP hydrogen når de fusjonerer det til tyngre grunnstoffer. Alt hydrogenet i verdenshavene på Jorda stammer derfor direkte fra selve Big Bang!',
        icon: 'sparkles',
      },
      {
        title: 'Flaskehalsen ved masse 5 og 8 stoppet Big Bang',
        description:
          'Det finnes ingen stabile atomkjerner med til sammen 5 eller 8 partikler (p⁺ + n⁰). Da uruniverset sank i tetthet, rakk ikke tre heliumkjerner å treffe hverandre samtidig for å lage karbon.',
        icon: 'clock',
      },
    ],
    classroomTest:
      'Be elevene se på drikkeflasken sin på pulten: Vann er H₂O. Oksygenatomet ble smidd inne i en stjerne for milliarder av år siden, mens de to hydrogenatomene har eksistert helt siden universet var tre minutter gammelt!',
    didYouKnow:
      'Når målt i antall atomer (og ikke vekt), er over 90 % av alle atomer i hele universet fortsatt enkle hydrogenatomer med ett eneste proton!',
    examples: [
      'Hydrogen (H, nr. 1)',
      'Helium (He, nr. 2)',
      'Litium (Li, nr. 3)',
      'Big Bang-nukleosyntese',
    ],
  },

  // ==========================================================
  // HØYRE SIDE (DEL 6–10): STJERNESMIA, SUPERNOVA, KILONOVA & OSS
  // ==========================================================
  {
    id: 'elem_stellar_fusion',
    stepIndex: 5,
    isMainPath: true,
    parentId: 'elem_bigbang_elements',
    stepNumber: 6,
    title: 'Kosmisk smie 2: Stjernekjerner – Livets grunnstoffer (C, N, O)',
    shortLabel: 'Smie 2: Stjerner (C, N, O)',
    subtitleTag: 'Inne i røde kjemper og tunge stjerner smis helium om til karbon, nitrogen og oksygen',
    timeAfterBB: '100+ millioner K i stjernekjerner',
    eraLabel: 'Opprinnelse #2 i periodesystemet',
    temperatureLabel: '3 ⁴He → ¹²C (Trippel-alfa)',
    x: 1455,
    y: 190,
    side: 'right',
    anchorX: 1005,
    anchorY: 325,
    cardSide: 'above',
    roleCategory: 'stellar_forge',
    epochCategory: 'recombination',
    cosmicTag: 'Karbon (6) • Nitrogen (7) • Oksygen (8)',
    traceBadge: 'Kosmisk smie 2 av 4 • Stjernefusjon',
    image: cosmosImg('elem_step6_carbon_oxygen.jpg'),
    imageCaption:
      'Trippel-alfa-fusjon dypt inne i en kjempestjerne: Tre heliumkjerner (hver med 2 protoner og 2 nøytroner) kolliderer nesten samtidig og smelter sammen til karbon-12 (6 protoner og 6 nøytroner).',
    summaryTitle: 'Stjernene knakk koden som Big Bang ikke rakk – og lagde byggeklossene for biologi!',
    whatHappens:
      'For å komme videre fra helium (nr. 2) til karbon (nr. 6) måtte universet vente på stjernene! Inne i kjernen på røde kjemper og tunge stjerner er tettheten så enorm og temperaturen over 100 millioner kelvin i millioner av år. Da rekker tre heliumkjerner å smelle sammen nesten nøyaktig samtidig og danne ett stabilt karbonatom (trippel-alfa-prosessen)! Kobler karbonet på enda en heliumkjerne, får vi oksygen (6 + 2 = 8 protoner). Også nitrogen (nr. 7) bygges i stjernenes indre og blåses senere ut gjennom planetariske tåker og stjernevind.',
    keyTraits: [
      {
        title: 'Trippel-alfa: Tre heliumkjerner blir karbon',
        description:
          '2 + 2 + 2 = 6 protoner! Dette er selve nøkkelreaksjonen i universet som åpner døra til organisk kjemi og alt liv.',
        icon: 'flame',
      },
      {
        title: 'Både middels og tunge stjerner bidrar',
        description:
          'Røde kjemper på størrelse med Sola lager store mengder karbon og nitrogen som pustes ut i planetariske tåker, mens tunge stjerner lager mesteparten av oksygenet i universet!',
        icon: 'sun',
      },
      {
        title: 'De 4 vanligste stoffene i universet: H, He, O og C',
        description:
          'Ikke tilfeldig er nettopp hydrogen, oksygen og karbon (pluss nitrogen) også de aller vanligste grunnstoffene i levende celler på Jorda!',
        icon: 'atom',
      },
    ],
    classroomTest:
      'La elevene regne proton-regnestykket i hodet: Helium har atomnummer 2. Hvilke partall-grunnstoffer får du når du legger på én og én heliumkjerne utover fra karbon (6)? Svar: Oksygen (8), Neon (10), Magnesium (12), Silisium (14), Svovel (16), Argon (18), Kalsium (20)... Derfor er partalls-grunnstoffer vanligere i universet enn oddetalls-grunnstoffer!',
    didYouKnow:
      'Den britiske astrofysikeren Fred Hoyle regnet i 1953 ut at karbonatomet MÅTTE ha et helt bestemt energinivå for at stjerner skulle klare å lage nok karbon – bare fordi han selv, bygd av karbon, fantes og kunne regne på det!',
    examples: [
      'Karbon (C, nr. 6)',
      'Nitrogen (N, nr. 7)',
      'Oksygen (O, nr. 8)',
      'Trippel-alfa-prosessen',
    ],
  },

  {
    id: 'elem_iron_peak',
    stepIndex: 6,
    isMainPath: true,
    parentId: 'elem_stellar_fusion',
    stepNumber: 7,
    title: 'Løkskall & «Jernmuren» (nr. 26) – Steinplanetenes råstoff',
    shortLabel: 'Jernmuren (opp til Fe, nr. 26)',
    subtitleTag: 'Tunge stjerner smir silisium, kalsium og jern – men ved jern tar fusjonsenergien slutt',
    timeAfterBB: 'Atomnummer 9 → 26 (Jern)',
    eraLabel: 'Tunge stjerners indre',
    temperatureLabel: 'Opptil ~3 milliarder K ved Si → Fe',
    x: 1455,
    y: 370,
    side: 'right',
    anchorX: 876,
    anchorY: 536,
    cardSide: 'below',
    roleCategory: 'stellar_forge',
    epochCategory: 'primordial',
    cosmicTag: 'Mg (12) • Si (14) • Ca (20) • Fe (26)',
    traceBadge: 'Jernmuren • Mest stabile atomkjerne',
    image: cosmosImg('elem_step7_iron_core.jpg'),
    imageCaption:
      'I de aller varmeste indre skallene på en tung stjerne fusjonerer oksygen og silisium helt inn til en glødende kjerne av jern (Fe, nr. 26) – der fusjonsmotoren bråstopper.',
    summaryTitle: 'Silisium til fjellene og jern til jordkjernen – og så treffer stjernen veggen ved nr. 26!',
    whatHappens:
      'I stjerner som er tyngre enn 8 solmasser fortsetter fusjonen forbi oksygen ved milliarder av grader: neon (10), magnesium (12), silisium (14), svovel (16), kalsium (20) og til slutt jern (Fe, atomnummer 26) og nikkel bygges i løkskall innover mot sentrum. Legg merke til listen: oksygen, silisium, magnesium og jern utgjør til sammen over 90 % av hele kloden Jorda! Men ved jern (nr. 26) skjer et fundamentalt skifte i kjernefysikken: jernkjernen er den mest stabilt bundne kjernen i hele periodesystemet.',
    keyTraits: [
      {
        title: 'Før jern: Fusjon GIR energi • Etter jern: Fusjon KREVER energi',
        description:
          'Opp til nr. 26 (jern) blir den nye kjernen litt lettere enn delene til sammen, så energi frigjøres. Over nr. 26 blir den nye kjernen TYNGRE, så energi må tilføres utenfra!',
        icon: 'scale',
      },
      {
        title: 'Derfor har Jorda en kjerne av jern',
        description:
          'Fordi tunge stjerner produserer store mengder silisium, magnesium, oksygen og jern før de eksploderer, finnes det rikelig av nettopp disse stoffene til å bygge steinplaneter.',
        icon: 'globe',
      },
      {
        title: 'Kalsiumet i skjelettet og jernet i blodet ditt',
        description:
          'Hvert kalsiumatom i tennene dine (nr. 20) og hvert jernatom som frakter oksygen i de røde blodcellene dine (nr. 26) ble smidd i kjernen på en tung superkjempe!',
        icon: 'layers',
      },
    ],
    classroomTest:
      'Koble fisjon og fusjon for elevene: Hvorfor kan kjernekraftverk på Jorda hente ut energi ved å SPALTE tunge urankjerner (nr. 92), mens Sola henter energi ved å SMELTE SAMMEN lette hydrogenkjerner (nr. 1)? Fordi BEGGE prosessene beveger seg innover mot «bunnen av energidalen» ved jern (nr. 26)!',
    didYouKnow:
      'Jordkloden vår består etter vekt av ca. 32 % jern (mesteparten i jordkjernen), 30 % oksygen, 15 % silisium og 14 % magnesium – en ren oppskrift fra en tung stjernes løkskall!',
    examples: [
      'Silisium (Si, nr. 14)',
      'Kalsium (Ca, nr. 20)',
      'Jern (Fe, nr. 26)',
      'Bindingsenergi i kjernen',
    ],
  },

  {
    id: 'elem_supernova_elements',
    stepIndex: 7,
    isMainPath: true,
    parentId: 'elem_iron_peak',
    stepNumber: 8,
    title: 'Kosmisk smie 3: Supernovaer – Nøytronstorm forbi jernmuren',
    shortLabel: 'Smie 3: Supernovaer (> Fe)',
    subtitleTag: 'Rask nøytronfangst i eksplosjonen bygger tunge grunnstoffer og sprer stjernestøvet',
    timeAfterBB: 'Sekunder under supernova-sjokket',
    eraLabel: 'Opprinnelse #3 i periodesystemet',
    temperatureLabel: '> 100 milliarder K + nøytronflom',
    x: 1455,
    y: 550,
    side: 'right',
    anchorX: 1116,
    anchorY: 565,
    cardSide: 'above',
    roleCategory: 'extreme_cosmos',
    epochCategory: 'recombination',
    cosmicTag: 'Kobber (29) • Sink (30) • Selen (34)',
    traceBadge: 'Kosmisk smie 3 av 4 • Supernova',
    image: cosmosImg('elem_step8_supernova_capture.jpg'),
    imageCaption:
      'I sjokkbølgen fra en supernova bombarderes atomkjerner av en voldsom strøm av nøytroner (blå) som bygger grunnstoffer tyngre enn jern og slynger dem ut i galaksen.',
    summaryTitle: 'Smarte nøytroner sniker seg inn uten elektrisk frastøting – og bygger videre oppover!',
    whatHappens:
      'Hvordan kommer naturen seg forbi jernmuren (nr. 26) når vanlig fusjon ikke lenger gir energi? Svaret er ekstrem vold + elektrisk nøytrale nøytroner! Når en tung stjerne eksploderer som en supernova (og også ved langsom nøytronfangst i døende kjemper), frigjøres en enorm storm av frie nøytroner. Fordi nøytroner har null elektrisk ladning, blir de ikke frastøtt av den positivt ladde jernkjernen – de dundrer rett inn og fanges opp! Etterpå omdannes flere av nøytronene i den overfylte kjernen til protoner (betastråling), og vipps har atomnummeret klatret videre forbi 26!',
    keyTraits: [
      {
        title: 'Nøytronfangst + betaoomdanning (n⁰ → p⁺ + e⁻)',
        description:
          'Når en kjerne fanger mange nøytroner og noen av dem omdannes til protoner, stiger atomnummeret trinn for trinn opp til kobber (29), sink (30), zirkonium og sølv (47).',
        icon: 'zap',
      },
      {
        title: 'Både fabrikk OG budbil på én gang',
        description:
          'Supernovaen lager ikke bare nye grunnstoffer over jern – den sprenger også ut alt karbonet, oksygenet, silisiumet og jernet som lå lagret i løkskallene!',
        icon: 'expand',
      },
      {
        title: 'Hvite dverger som eksploderer (Type Ia) gir oss ekstra jern',
        description:
          'Også hvite dverger i dobbeltstjernesystemer som stjeler gass fra en nabostjerne kan eksplodere og pøse ut enorme mengder jern, nikkel og krom i galaksen!',
        icon: 'sparkles',
      },
    ],
    classroomTest:
      'Spør elevene: Hvorfor er det mye lettere for et NØYTRON å komme seg inn i en tung atomkjerne med 26 plussladninger enn det er for et PROTON? (Fordi protonet er positivt og frastøtes elektrisk av de 26 protonene i kjernen, mens nøytronet er elektrisk nøytralt og sklir rett inn!)',
    didYouKnow:
      'Kobbertrådene inne i mobilladeren din (Cu, nr. 29) og sinken som immunforsvaret ditt bruker hver dag (Zn, nr. 30) ble smidd i dødsøyeblikket til eldgamle stjerner!',
    examples: [
      'Nøytronfangst',
      'Kobber (Cu, nr. 29)',
      'Sink (Zn, nr. 30)',
      'Spredning av stjernestøv',
    ],
  },

  {
    id: 'elem_kilonova_gold',
    stepIndex: 8,
    isMainPath: true,
    parentId: 'elem_supernova_elements',
    stepNumber: 9,
    title: 'Kosmisk smie 4: Kilonova – Gull, jod, platina og uran',
    shortLabel: 'Smie 4: Kilonova (Au, I, U)',
    subtitleTag: 'Kollisjoner mellom to nøytronstjerner smir periodesystemets aller tyngste skatter',
    timeAfterBB: 'Nøytronstjerne + Nøytronstjerne',
    eraLabel: 'Opprinnelse #4 i periodesystemet',
    temperatureLabel: 'Ekstrem r-prosess (nøytronrik materie)',
    x: 1455,
    y: 730,
    side: 'right',
    anchorX: 1076,
    anchorY: 708,
    cardSide: 'below',
    roleCategory: 'extreme_cosmos',
    epochCategory: 'modern_cosmos',
    cosmicTag: 'Jod (53) • Platina (78) • Gull (79) • Uran (92)',
    traceBadge: 'Kosmisk smie 4 av 4 • Kilonova',
    image: cosmosImg('elem_step9_kilonova_gold.jpg'),
    imageCaption:
      'To nøytronstjerner spinner inn i hverandre og kolliderer i en kilonova – universets rikeste gull-, platina- og uranfabrikk, omgitt av gravitasjonsbølger.',
    summaryTitle: 'Gullringen på fingeren ble smidd da to ultrakompakte nøytronstjerner krasjet!',
    whatHappens:
      'Lenge trodde man at vanlige supernovaer lagde alt over jern alene, men moderne observasjoner (spesielt gravitasjonsbølge-målingen GW170817 i 2017!) avslørte en fjerde, enda mer ekstrem kosmisk smie: Når to nøytronstjerner går i bane rundt hverandre og krasjer i en kilonova, slynges klumper av nesten rent nøytronstoff ut i rommet. Der fanger atomkjernene dusinvis av nøytroner på millisekunder og bygger hoveddelen av universets aller tyngste grunnstoffer – som jod (nr. 53), platina (nr. 78), gull (nr. 79) og uran (nr. 92)!',
    keyTraits: [
      {
        title: 'Hvorfor gull og platina er så sjeldne på Jorda',
        description:
          'Kollisjoner mellom to nøytronstjerner skjer tusen ganger sjeldnere enn vanlige supernovaer – derfor finnes det langt mindre gull og platina i universet enn jern og silisium!',
        icon: 'star',
      },
      {
        title: 'Jod (nr. 53) – et kilonova-stoff vi ikke kan leve uten',
        description:
          'Skjoldbruskkjertelen i halsen din trenger jod for å lage hormoner som styrer stoffskiftet og veksten din – et grunnstoff hovedsakelig smidd i nøytronstjerne-kollisjoner!',
        icon: 'atom',
      },
      {
        title: 'Uran (nr. 92) holder Jordas indre varmt i dag',
        description:
          'Radioaktivt uran og thorium inne i jordmantelen avgir varme når de spaltes, og er en viktig grunn til at Jorda fortsatt har kontinentalplater, vulkaner og magnetfelt!',
        icon: 'flame',
      },
    ],
    classroomTest:
      'Spør klassen: Hva er mest ekstremt – at diamanter lages dypt nede i jordskorpa, eller at gull (nr. 79) bokstavelig talt krevde at to døde stjerner med mer masse enn Sola krasjet i nær lysfart ute i Melkeveien før Jorda ble født?',
    didYouKnow:
      'I den ene kilonova-kollisjonen forskerne observerte i august 2017 (130 millioner lysår unna), ble det smidd gull og platina med en samlet vekt på over hundre ganger hele jordkloden på bare noen sekunder!',
    examples: [
      'Kilonova',
      'Jod (I, nr. 53)',
      'Gull (Au, nr. 79)',
      'Uran (U, nr. 92)',
    ],
  },

  {
    id: 'elem_stardust_humans',
    stepIndex: 9,
    isMainPath: true,
    parentId: 'elem_kilonova_gold',
    stepNumber: 10,
    title: 'Grunnstoffene i oss – Vi er universet som har blitt levende!',
    shortLabel: 'Stjernestøv i mennesket',
    subtitleTag: '99 % av massen i kroppen din er O, C, H, N, Ca og P – en samling fra hele kosmos',
    timeAfterBB: '13,8 mrd. år → Deg i dag',
    eraLabel: 'Helheten i tankekartet',
    temperatureLabel: '65 % O • 18 % C • 10 % H • 3 % N',
    x: 1455,
    y: 910,
    side: 'right',
    anchorX: 875,
    anchorY: 835,
    cardSide: 'above',
    roleCategory: 'stellar_forge',
    epochCategory: 'modern_cosmos',
    cosmicTag: 'Big Bang + Stjerner + Kilonova = Deg',
    traceBadge: 'Oppsummering • Levende stjernestøv',
    image: cosmosImg('elem_step10_stardust_body.jpg'),
    imageCaption:
      'Fra Big Bang og stjernetåker via stjernekjerner, supernovaer og kilonovaer til Jorda, DNA og menneskekroppen: Vi består bokstavelig talt av resirkulerte stjerneatomer.',
    summaryTitle: 'Venstre hånd har kanskje atomer fra én død stjerne, og høyre hånd fra en helt annen!',
    whatHappens:
      'Setter vi alle de 10 brikkene sammen, ser vi hvorfor astrofysikeren Carl Sagan sa at «vi er lagd av stjernestøv»: Målt i vekt består menneskekroppen av ca. 65 % oksygen, 18 % karbon, 10 % hydrogen og 3 % nitrogen, etterfulgt av kalsium (1,5 % i skjelettet), fosfor (1 % i DNA og energimolekylet ATP), kalium, svovel, natrium, klor, magnesium, jern (~4 gram i blodet) og ørsmå sporstoffer som sink, kobber og jod. Hvert eneste ett av disse grunnstoffene bærer med seg sin egen kosmiske fødselsattest!',
    keyTraits: [
      {
        title: 'Hydrogenet i deg (10 % av vekten): Fra Big Bang',
        description:
          'En person på 70 kg bærer rundt på ca. 7 kg rent, uforandret ur-hydrogen som oppsto bare tre minutter etter at tid og rom startet!',
        icon: 'clock',
      },
      {
        title: 'Karbon, oksygen, kalsium og jern (~89,9 %): Fra stjerner & supernovaer',
        description:
          'Nesten 63 kg av en person på 70 kg er atomer som ble smidd ved kjernefusjon inne i stjerner som levde og døde i Melkeveien før Sola ble til.',
        icon: 'sun',
      },
      {
        title: 'Jod, kobber og sporstoffer: Fra supernovaer & kilonovaer',
        description:
          'Selv de mest sjeldne kosmiske smiene – eksploderende superkjemper og kolliderende nøytronstjerner – er helt nødvendige for at cellene våre skal fungere!',
        icon: 'sparkles',
      },
    ],
    classroomTest:
      'Avslutt temaet med å peke tilbake på hoved-tankekartet: Nå ser elevene med egne øyne hvorfor «Grunnstoffer» har linjer både til «Big Bang», «Stjerner» og «Stråling» (spektrallinjer) – alt i naturfag henger sammen!',
    didYouKnow:
      'Atomene i kroppen din går bare til låns i naturens kretsløp: de samme karbon- og oksygenatomene som ble lagd i en eldgammel stjerne, har tidligere vært en del av både urhav, dinosaurer og skoger før de ble deg!',
    examples: [
      'Oksygen (65 %) & Karbon (18 %)',
      'Hydrogen fra Big Bang (10 %)',
      'Jern i hemoglobin',
      'Jod fra kilonova',
    ],
  },
];

export const ELEMENTS_NODE_MAP: Record<string, ElementNodeData> =
  Object.fromEntries(ELEMENTS_NODES.map((n) => [n.id, n]));

export const ELEMENTS_CONTROL_QUESTIONS: ControlQuestionItem[] = [
  {
    id: 'elem-q1',
    number: 1,
    question:
      'Hvordan er et atom bygd opp, og hva er forskjellen på hva protoner, nøytroner og ytterelektroner bestemmer?',
    contextHint:
      'Se på de tre første delene på venstre side av modellen (Atomkjernen, Isotoper og Elektronskall)!',
    points: [
      {
        heading: 'Protoner (p⁺) i kjernen bestemmer HVILKET GRUNNSTOFF det er (atomnummer Z)',
        badge: 'Personnummeret',
        detail:
          'Antall protoner er unikt for hvert grunnstoff: 1 proton er alltid hydrogen, 6 er alltid karbon og 26 er alltid jern. Endrer du antall protoner, har du byttet grunnstoff!',
      },
      {
        heading: 'Nøytroner (n⁰) i kjernen bestemmer HVILKEN ISOTOP det er og om kjernen er stabil',
        badge: 'Masse & stabilitet',
        detail:
          'Atomer av samme grunnstoff med ulikt antall nøytroner kalles isotoper (f.eks. ¹²C og radioaktivt ¹⁴C, eller vanlig hydrogen ¹H og deuterium ²H).',
      },
      {
        heading: 'Ytterelektronene (e⁻) bestemmer de KJEMISKE EGENSKAPENE og plassen i hovedgruppene',
        badge: 'Kjemi & bindinger',
        detail:
          'Antall elektronskall gir perioden (raden) i periodesystemet, mens antall elektroner i ytterste skall gir hovedgruppen (kolonnen) og styrer hvordan atomet binder seg til andre atomer.',
      },
    ],
    comparisonTable: {
      headers: [
        'Partikkel i atomet',
        'Ladning og plassering',
        'Hva bestemmer antallet?',
      ],
      rows: [
        [
          'Proton (p⁺)',
          'Positiv (+1) • I atomkjernen',
          'Atomnummeret (Z) – hvilket grunnstoff det er',
        ],
        [
          'Nøytron (n⁰)',
          'Nøytral (0) • I atomkjernen',
          'Isotopen, atommassen og om kjernen er stabil eller radioaktiv',
        ],
        [
          'Elektron (e⁻)',
          'Negativ (−1) • I skall rundt kjernen',
          'Antall skall = periode; ytterelektroner = kjemiske egenskaper',
        ],
      ],
    },
    takeaway:
      'Huskeregel: Protonene gir grunnstoffets NAVN, nøytronene gir ISOTOPEN, og ytterelektronene styrer KJEMIEN!',
  },
  {
    id: 'elem-q2',
    number: 2,
    question:
      'Hvordan kan forskere vite nøyaktig hvilke grunnstoffer Sola og fjerne stjerner/galakser består av, uten å ha vært der og tatt en prøve?',
    contextHint:
      'Tenk på hva som skjer når elektroner hopper mellom skallene i et atom (Del 4: Spektrallinjer)!',
    points: [
      {
        heading: 'Kvantesprang i elektronskall krever og gir helt bestemte lysbølgelengder',
        badge: 'Bestemte energinivåer',
        detail:
          'Elektronene kan bare ligge i faste skall. For å hoppe utover absorberer elektronet lys med nøyaktig den energien/fargen som tilsvarer energiforskjellen mellom skallene.',
      },
      {
        heading: 'Hvert grunnstoff lager sin egen unike «strekkode» av spektrallinjer',
        badge: 'Unikt fingeravtrykk',
        detail:
          'Når lyset fra en stjerne splittes opp i et spekter (regnbue), ser vi skarpe mørke absorpsjonslinjer akkurat på de bølgelengdene som grunnstoffene i stjerneatmosfæren har absorbert.',
      },
      {
        heading: 'Samme strekkode over hele universet – pluss måling av rødforskyvning',
        badge: 'Kosmisk verktøy',
        detail:
          'Ved å sammenligne stjernens linjemønster med målinger på Jorda avslører vi både hvilke grunnstoffer som finnes der, OG hvor mye lyset er rødforskjøvet på veien hit!',
      },
    ],
    takeaway:
      'Spektrallinjer er universets strekkode: ett og samme hydrogenatom har nøyaktig de samme elektronskallene på Jorda som i en galakse 10 milliarder lysår unna!',
  },
  {
    id: 'elem-q3',
    number: 3,
    question:
      'Gjør rede for de FIRE kosmiske «smiene» som har skapt de naturlige grunnstoffene i periodesystemet – fra nr. 1 (hydrogen) til nr. 92 (uran)!',
    contextHint:
      'Følg reisen fra Big Bang (Del 5) gjennom stjernekjerner (Del 6–7), supernovaer (Del 8) og nøytronstjerne-kollisjoner (Del 9)!',
    points: [
      {
        heading: '1. Big Bang (3–20 min): Hydrogen (nr. 1), helium (nr. 2) og spor av litium (nr. 3)',
        badge: 'Smie #1',
        detail:
          'Uruniverset fusjonerte ~75 % H og ~25 % He før rommet kjølte seg for mye ned til å lage tyngre kjerner.',
      },
      {
        heading: '2. Fusjon i stjernekjerner: Karbon (nr. 6) opp til jern (nr. 26)',
        badge: 'Smie #2',
        detail:
          'Røde kjemper og tunge stjerner fusjonerer helium videre til karbon, nitrogen, oksygen, silisium og kalsium helt opp til jern (Fe), der fusjon slutter å gi energi.',
      },
      {
        heading: '3. Supernovaer & 4. Kilonovaer (nøytronstjerne-kollisjoner): Alt tyngre enn jern!',
        badge: 'Smie #3 & #4',
        detail:
          'Når frie nøytroner bombarderer atomkjerner i supernovaer (f.eks. kobber, sink, sølv) og i ekstreme kollisjoner mellom nøytronstjerner (jod, gull, platina, uran), bygges resten av periodesystemet opp til nr. 92!',
      },
    ],
    comparisonTable: {
      headers: [
        'Kosmisk smie',
        'Typiske grunnstoffer',
        'Hvor finner vi dem i dag?',
      ],
      rows: [
        [
          '1. Big Bang',
          'Hydrogen (H), Helium (He), litt Litium (Li)',
          'Vannet på Jorda (H₂O), Sola, gasskjemper, ballonger',
        ],
        [
          '2. Fusjon i stjernekjerner',
          'Karbon (C), Nitrogen (N), Oksygen (O), Silisium (Si), Jern (Fe)',
          'DNA, proteiner, lufta vi puster, fjellgrunn og blod',
        ],
        [
          '3–4. Supernova & Kilonova',
          'Kobber (Cu), Sink (Zn), Jod (I), Gull (Au), Uran (U)',
          'Elektronikk, hormoner i kroppen, smykker og jordvarme',
        ],
      ],
    },
    takeaway:
      'Periodesystemet på veggen i naturfagsrommet er egentlig et historiekart over universets mest ekstreme hendelser!',
  },
  {
    id: 'elem-q4',
    number: 4,
    question:
      'Hvorfor stopper vanlig stjernefusjon opp ved jern (Fe, atomnummer 26), og hvordan klarer universet likevel å bygge grunnstoffer som kobber, jod, gull og uran?',
    contextHint:
      'Tenk både på energien i jernkjernen (Del 7) og på forskjellen i elektrisk ladning mellom protoner og nøytroner (Del 8–9)!',
    points: [
      {
        heading: 'Jernkjernen er «bunnen av energidalen» – videre fusjon KREVER energi',
        badge: 'Energifellen',
        detail:
          'Alle fusjonsreaksjoner opp til jern frigjør energi. Å smelte jern sammen til enda tyngre kjerner sluker derimot energi, så stjernen kan ikke bruke jern som drivstoff.',
      },
      {
        heading: 'Elektrisk nøytrale nøytroner sklir rett forbi proton-frastøtingen',
        badge: 'Ingen frastøting',
        detail:
          'Tunge atomkjerner har mange plussladninger som skyver andre protoner vekk. Men frie nøytroner har ladning 0 og fanges lett opp i enorme mengder under supernovaer og kilonovaer.',
      },
      {
        heading: 'Nøytroner omdannes til protoner inne i kjernen og øker atomnummeret',
        badge: 'n⁰ → p⁺ + e⁻',
        detail:
          'Når en kjerne har fanget mange nøytroner, blir den ustabil og omdanner nøytroner til protoner (betastråling) – slik klatrer kjernen helt opp til gull (79) og uran (92)!',
      },
    ],
    takeaway:
      'Der vanlig fusjon møter veggen ved nr. 26 (jern), tar eksplosiv nøytronfangst i supernovaer og nøytronstjerne-kollisjoner stafettpinnen helt opp til uran (nr. 92)!',
  },
];
