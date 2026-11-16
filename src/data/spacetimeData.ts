import {
  cosmosImg,
  type ControlQuestionItem,
  type CosmicNodeData,
} from './bigBangData';

export type SpacetimeZoneCategory =
  | 'space_and_time'
  | 'gravity_well'
  | 'dynamic_cosmos';

export interface SpacetimeNodeData extends CosmicNodeData {
  zoneCategory: SpacetimeZoneCategory;
}

export const SPACETIME_MAIN_STEP_IDS: string[] = [
  'st_four_dimensions',
  'st_speed_of_light',
  'st_time_dilation_gps',
  'st_curved_spacetime',
  'st_orbits_wells',
  'st_gravitational_lensing',
  'st_black_hole_horizon',
  'st_gravitational_waves',
  'st_expanding_space',
  'st_dark_energy_fate',
];

export const SPACETIME_NODES: SpacetimeNodeData[] = [
  // ==========================================================
  // SONE 1 (STEG 1–3): ROM + TID = ROMTID & LYSETS FARTSGRENSE
  // ==========================================================
  {
    id: 'st_four_dimensions',
    stepIndex: 0,
    isMainPath: true,
    parentId: null,
    stepNumber: 1,
    title: 'Rom + Tid = Romtid – Universets firedimensjonale vev',
    shortLabel: '4 dimensjoner (Rom + Tid)',
    subtitleTag:
      'Tre romdimensjoner (lengde, bredde, høyde) og én tidsdimensjon vevd sammen til én helhet',
    timeAfterBB: '3 rom + 1 tid = 4D',
    eraLabel: 'Sone 1 • Rom og tid',
    temperatureLabel: 'Hvor + Når = Hendelse',
    x: 230,
    y: 475,
    cardSide: 'below',
    zoneCategory: 'space_and_time',
    epochCategory: 'primordial',
    cosmicTag: 'Bredde • Lengde • Høyde • Tid',
    traceBadge: 'Grunnmuren • Einsteins romtid (1905)',
    image: cosmosImg('st_step1_four_dimensions.jpg'),
    imageCaption:
      'Rom og tid er ikke to adskilte scener: I moderne fysikk er de tre romdimensjonene og tiden vevd sammen til én elastisk, firedimensjonal vev – romtiden.',
    summaryTitle:
      'Du kan aldri avtale et møte på et sted uten samtidig å avtale en tid!',
    whatHappens:
      'I hverdagen tenker vi gjerne på rommet som en stiv, usynlig boks med tre retninger (frem/tilbake, høyre/venstre, opp/ned), mens en usynlig klokke tikker helt likt overalt i universet. I 1905 snudde Albert Einstein opp ned på dette bildet! Han viste at rom og tid ikke er uavhengige av hverandre, men vevd sammen til ett eneste firedimensjonalt teppe som vi kaller ROMTID (spacetime). Hvordan du beveger deg gjennom rommet påvirker faktisk hvor raskt du beveger deg gjennom tiden!',
    keyTraits: [
      {
        title: 'Hver hendelse krever 4 koordinater',
        description:
          'Skal du møte en venn i 3. etasje på Oslo S, hjelper lengdegrad, breddegrad og høyde ingenting hvis dere ikke også avtaler KLOKKESLETT – i universet henger «hvor» og «når» alltid sammen.',
        icon: 'compass',
      },
      {
        title: 'Fra stiv scene til levende, bøyelig duk',
        description:
          'Hos Isaac Newton var rommet bare en tom, uforanderlig kulisse. Hos Einstein kan selve romtiden bøyes, strekkes, vris og slå bølger!',
        icon: 'layers',
      },
      {
        title: 'Jo mer fart i rommet, desto roligere går klokka',
        description:
          'Alt i universet deler bevegelsen sin mellom rom og tid. Bruker du mer av farten din gjennom rommet, tikker din egen klokke litt langsommere sammenlignet med en som står i ro.',
        icon: 'clock',
      },
    ],
    classroomTest:
      'Spør klassen: Hvis Sola plutselig forsvant på et knips akkurat nå – ville vi merket det i samme sekund her på Jorda, verken på lyset eller tyngdekraften? (Nei! Selv endringer i romtiden bruker litt over 8 minutter fra Sola og hit!)',
    didYouKnow:
      'Det var Einsteins tidligere matematikklærer Hermann Minkowski som i 1908 formulerte de berømte ordene: «Fra nå av vil rom for seg selv og tid for seg selv blekne bort som rene skygger, og bare en forening av de to vil bevare en selvstendig virkelighet.»',
    examples: [
      'Romtid (4D)',
      'Tre romdimensjoner',
      'Tidsdimensjonen',
      'Albert Einstein',
    ],
  },

  {
    id: 'st_speed_of_light',
    stepIndex: 1,
    isMainPath: true,
    parentId: 'st_four_dimensions',
    stepNumber: 2,
    title: 'Lysfarten c – Universets fartsgrense & vår kosmiske tidsmaskin',
    shortLabel: 'Lysfarten c & Tidsmaskin',
    subtitleTag:
      'Ingenting kan reise raskere enn 300 000 km/s – derfor ser vi alltid bakover i tid ut i rommet',
    timeAfterBB: 'c ≈ 300 000 km/s',
    eraLabel: 'Sone 1 • Rom og tid',
    temperatureLabel: '1 lysår ≈ 9 460 mrd. km',
    x: 490,
    y: 395,
    cardSide: 'above',
    zoneCategory: 'space_and_time',
    epochCategory: 'primordial',
    cosmicTag: 'Å se langt ut = Å se langt tilbake i tid',
    traceBadge: 'Lysfart & Lysår • Kosmisk tilbakeblikk',
    image: cosmosImg('st_step2_light_speed.jpg'),
    imageCaption:
      'Lyset fra fjerne galakser har vært på reise i millioner eller milliarder av år før det treffer speilet på James Webb-romteleskopet – teleskopet fotograferer fortiden direkte!',
    summaryTitle:
      'Et lysår måler AVSTAND – men gir astronomene en ekte tidsmaskin!',
    whatHappens:
      'I vakuum beveger alt elektromagnetisk lys seg med nøyaktig samme fart uansett hvordan du selv beveger deg: c = 299 792 km per sekund (rundt 7,5 ganger rundt Jordas ekvator på ett sekund!). Dette er selve fartsgrensen i romtiden – ingen informasjon, materie eller tyngdekraftbølge kan krysse universet raskere enn c. Fordi rommet er så ufattelig stort, bruker lyset tid på reisen. Dermed ser vi aldri universet slik det er «akkurat nå», men slik det VAR da lyset dro!',
    keyTraits: [
      {
        title: 'Pass opp for klassiker-fella: Lysår er LENGDE, ikke tid!',
        description:
          'Ett lysår er strekningen lyset tilbakelegger på ett år: ca. 9,46 billioner kilometer (9,46 · 10¹² km).',
        icon: 'scale',
      },
      {
        title: 'Kosmisk tilbakeblikk fra Månen til ur-galaksene',
        description:
          'Vi ser Månen 1,3 sekunder tilbake i tid, Sola 8 minutter og 20 sekunder tilbake, nabogalaksen Andromeda 2,5 millioner år tilbake – og bakgrunnsstrålingen 13,8 milliarder år tilbake!',
        icon: 'telescope',
      },
      {
        title: 'Konstant lysfart for ALLE observatører',
        description:
          'Enten du står stille eller flyr i et romskip i halve lysfarten mot en stjerne, måler du at stjernelyset passerer deg med nøyaktig 300 000 km/s. Det er tiden og lengden som må gi etter!',
        icon: 'zap',
      },
    ],
    classroomTest:
      'Rask grublis til elevene: Stjernen Betelgeuse i Orion ligger ca. 650 lysår unna oss. Hvis den eksploderte som en supernova i år 1500 (mens senmiddelalderen pågikk i Norge), når får vi se smellet på nattehimmelen her på Jorda? (Rundt år 2150!)',
    didYouKnow:
      'Når romteleskopet James Webb tar bilder av galakser over 13,4 milliarder lysår unna, ser vi lys som ble sendt ut over ni milliarder år FØR Sola og Jorda i det hele tatt eksisterte!',
    examples: [
      'Lysfarten c',
      'Lysår (avstand)',
      '8,3 lysminutter til Sola',
      'Teleskop som tidsmaskin',
    ],
  },

  {
    id: 'st_time_dilation_gps',
    stepIndex: 2,
    isMainPath: true,
    parentId: 'st_speed_of_light',
    stepNumber: 3,
    title: 'Tidsdilatasjon & GPS – Derfor må mobilen din regne med Einstein!',
    shortLabel: 'Relativ tid & GPS-klokker',
    subtitleTag:
      ' Både stor fart og sterk tyngdekraft endrer hvor fort tiden går – målt med atomklokker hver dag',
    timeAfterBB: '+38 mikrosekunder/døgn i bane',
    eraLabel: 'Sone 1 • Romtid i hverdagen',
    temperatureLabel: '20 200 km høyde over Jorda',
    x: 750,
    y: 475,
    cardSide: 'below',
    zoneCategory: 'space_and_time',
    epochCategory: 'stellar_dawn',
    cosmicTag: 'Uten relativitetsteori: ~10 km GPS-feil per dag!',
    traceBadge: 'Hverdagsbevis • Atomklokker i satellitter',
    image: cosmosImg('st_step3_gps_relativity.jpg'),
    imageCaption:
      'GPS-satellittene 20 200 km oppe i romtiden opplever svakere tyngdekraft og høy banefart – atomklokkene deres går 38 mikrosekunder for raskt hvert eneste døgn i forhold til klokka på bakken!',
    summaryTitle:
      'Romtid er ikke bare science fiction – kart-appen på telefonen din bruker den hvert sekund!',
    whatHappens:
      'Går tiden virkelig med ulik fart ulike steder? Ja, og det er målt tusenvis av ganger med supernøyaktige atomklokker! Einsteins to relativitetsteorier gir to effekter på tid (tidsdilatasjon): 1) Spesielt ved HØY FART går klokka litt saktere. 2) Høyt oppe der TYNGDEKRAFTEN ER SVAKERE, går klokka litt RASKERE enn nede på bakken i Jordas gravitasjonsfelt. For en GPS-satellitt 20 200 km over oss vinner tyngdekraft-effekten (+45 mikrosekunder/døgn) over fartseffekten (−7 mikrosekunder/døgn). Totalt tikker satellittklokka 38 milliondels sekund raskere per døgn enn mobilen din!',
    keyTraits: [
      {
        title: 'Hvorfor 38 mikrosekunder gir 10 kilometer feil!',
        description:
          'GPS måler avstand ved å gange tidsforskjellen på radiosignalene med lysfarten c. På bare 0,000038 sekunder rekker lyset å reise over 11 kilometer!',
        icon: 'globe',
      },
      {
        title: 'Tvillingparadokset og romreiser',
        description:
          'Hvis en astronaut kunne reist ut i rommet i 99 % av lysfarten og snudd hjem igjen etter 5 år på sin klokke, ville tvillingen på Jorda blitt rundt 35 år eldre i mellomtiden!',
        icon: 'clock',
      },
      {
        title: 'Føttene dine eldes ørlite saktere enn hodet ditt',
        description:
          'Moderne optiske atomklokker i fysikklaboratorier er nå så presise at de måler at tiden går litt saktere bare du senker klokka 1 millimeter nærmere jordoverflaten!',
        icon: 'scale',
      },
    ],
    classroomTest:
      'Spør elevene: Når noen sier «relativitetsteori er bare en sprø teori forskere har funnet på», hvilket hverdagsverktøy i lomma deres ville sluttet å fungere innen få minutter hvis Einstein tok feil? (GPS på mobil, fly, skip og ambulanser!)',
    didYouKnow:
      'Da de første GPS-satellittene ble sendt opp på slutten av 1970-tallet, var enkelte ingeniører usikre på om relativitetseffekten virkelig trengtes – så de bygde inn en bryter for å skru «Einstein-korreksjonen» på. Etter kort tid så alle at avviket vokste akkurat slik Einstein hadde regnet ut 60 år tidligere!',
    examples: [
      'Tidsdilatasjon',
      'GPS-korreksjon',
      'Atomklokker',
      'Spesiell & generell relativitet',
    ],
  },

  // ==========================================================
  // SONE 2 (STEG 4–7): GRAVITASJONSBRØNNEN – MASSE KRUMMER ROMTIDEN
  // ==========================================================
  {
    id: 'st_curved_spacetime',
    stepIndex: 3,
    isMainPath: true,
    parentId: 'st_time_dilation_gps',
    stepNumber: 4,
    title: 'Einsteins genistrek (1915): Tyngdekraft ER krummet romtid!',
    shortLabel: 'Masse krummer romtiden',
    subtitleTag:
      'Masse forteller romtiden hvordan den skal krumme seg – og romtiden forteller massen hvordan den skal bevege seg',
    timeAfterBB: 'Generell relativitetsteori (1915)',
    eraLabel: 'Sone 2 • Gravitasjonsbrønnen',
    temperatureLabel: 'Trampoline- / lakenmodellen',
    x: 1020,
    y: 450,
    cardSide: 'above',
    zoneCategory: 'gravity_well',
    epochCategory: 'recombination',
    cosmicTag: 'Ingen usynlig tråd – selve rommet bøyes!',
    traceBadge: 'Generell relativitet • Krumning av romtid',
    image: cosmosImg('st_step4_curved_grid.jpg'),
    imageCaption:
      'En tung stjerne som Sola lager en dyp krumning i den firedimensjonale romtiden rundt seg – ofte illustrert som en tung kule på en spent gummiduk.',
    summaryTitle:
      'Newton beskrev HVOR MYE tyngdekraften drar – Einstein forklarte HVA tyngdekraft egentlig er!',
    whatHappens:
      'I over 200 år trodde fysikerne på Newtons bilde: at Sola trekker på Jorda med en mystisk, øyeblikkelig «fjernkraft» tvers gjennom tomt rom. I 1915 publiserte Einstein den generelle relativitetsteorien og viste hva som egentlig skjer: Tyngdekraft er ikke en usynlig tråd mellom gjenstander – det er selve GEOMETRIEN i romtiden som bøyes av masse og energi! Akkurat som en tung bowlingkule lager en grop i en trampoline, krummer Sola, stjerner og planeter den firedimensjonale romtiden rundt seg.',
    keyTraits: [
      {
        title: 'Fysikerens mest berømte setning (John Archibald Wheeler)',
        description:
          '«Romtiden forteller materien hvordan den skal bevege seg; materien forteller romtiden hvordan den skal krumme seg.»',
        icon: 'orbit',
      },
      {
        title: 'Hvorfor trampoline-bildet er både genialt og litt forenklet',
        description:
          'På en trampoline bøyes en 2D-duk nedover i en 3. dimensjon. I virkeligheten er det ALLE tre romdimensjonene OG selve tiden rundt Sola og Jorda som krummes innover!',
        icon: 'layers',
      },
      {
        title: 'Jo mer kompakt masse, desto brattere krumning',
        description:
          'En hvit dverg, en nøytronstjerne og Sola kan ha omtrent samme masse, men fordi nøytronstjernen presser massen inn på 20 km, lager den en tusenvis av ganger brattere trakt i romtiden!',
        icon: 'sparkles',
      },
    ],
    classroomTest:
      'Tankeeksperiment i heisen (Einsteins «lykkeligste tanke»): Hvis du svever i en lukket boks uten vinduer – kan du merke forskjell på om du svever vektløs i verdensrommet, eller er i fritt fall mot Jorda? Nei! Fordi fritt fall bare er å flyte uforstyrret langs romtidens naturlige kurve!',
    didYouKnow:
      'Selv Newton syntes i 1692 det var ulogisk at tyngdekraften skulle virke øyeblikkelig gjennom absolutt ingenting, og skrev i et brev at han overlot til fremtidens lesere å finne selve mekanismen – det tok 223 år før Einstein løste gåten!',
    examples: [
      'Generell relativitetsteori',
      'Krummet romtid',
      'Trampolinemodellen',
      'Ekvivalensprinsippet',
    ],
  },

  {
    id: 'st_orbits_wells',
    stepIndex: 4,
    isMainPath: true,
    parentId: 'st_curved_spacetime',
    stepNumber: 5,
    title: 'Gravitasjonsbrønner & Planetbaner – Rett frem i et krumt rom!',
    shortLabel: 'Gravitasjonsbrønn & Baner',
    subtitleTag:
      'Jorda triller langs kanten av Solas gravitasjonsbrønn med 30 km/s uten å falle inn',
    timeAfterBB: 'Jordas banefart ≈ 30 km/s',
    eraLabel: 'Sone 2 • Gravitasjonsbrønnen',
    temperatureLabel: 'Solas + Jordas + Månens groper',
    x: 1235,
    y: 585,
    cardSide: 'below',
    zoneCategory: 'gravity_well',
    epochCategory: 'recombination',
    cosmicTag: 'Rett linje i krum romtid = Lukket bane!',
    traceBadge: 'Planetbaner • Hvorfor Jorda ikke faller i Sola',
    image: cosmosImg('st_step5_planet_orbit.jpg'),
    imageCaption:
      'Sola lager den dype hovedbrønnen i Solsystemets romtid, mens Jorda lager sin egen lille grop der Månen går i bane rundt oss.',
    summaryTitle:
      'Jorda forsøker egentlig bare å bevege seg rett frem – men romtiden rundt Sola svinger!',
    whatHappens:
      'Se for deg at du triller en klinkekule med akkurat riktig sidefart langs innsiden av en glatt trakt eller skål: Kula prøver hele tiden å rulle «rett frem», men siden skålveggen er krum, følger kula en sirkel- eller ellipsebane rundt midten! Nøyaktig slik går Jorda i bane rundt Sola (og Månen rundt Jorda, og Solsystemet rundt Melkeveien). Fordi det ikke er luftmotstand i verdensrommet, bremser ikke Jorda opp og faller ikke ned i Sola – den har fulgt krumningen i 4,6 milliarder år!',
    keyTraits: [
      {
        title: 'Geodetisk linje = «rettest mulige vei» i krum romtid',
        description:
          'Akkurat som korteste flyrute mellom Oslo og Tokyo ser ut som en bue på et flatt verdenskart fordi Jorda er rund, blir den retteste veien i krum romtid en krum planetbane!',
        icon: 'orbit',
      },
      {
        title: 'Merkurs merkelige bane beviste at Einstein hadde rett',
        description:
          'Innerst ved Sola er romtiden ekstra krum. Derfor dreier ellipsebanen til planeten Merkur ørlite grann mer enn Newtons formler klarte å forklare – Einsteins likninger traff på prikken!',
        icon: 'sun',
      },
      {
        title: 'Unnslipningsfart = å klatre opp av gravitasjonsbrønnen',
        description:
          'Skal en rakett forlate Jordas gravitasjonsbrønn må den opp i 11,2 km/s; fra Sola kreves 618 km/s!',
        icon: 'zap',
      },
    ],
    classroomTest:
      'Spør elevene: Hvorfor svever astronautene på Den internasjonale romstasjonen (ISS) vektløse rundt 400 km over oss? Er tyngdekraften borte der oppe? (Nei! Tyngdekraften er nesten 90 % like sterk som på bakken – men både ISS og astronautene er i kontinuerlig fritt fall langs krumningen rundt Jorda med 27 600 km/t!)',
    didYouKnow:
      'Hele Solsystemet vårt ligger i tillegg inne i den enda større gravitasjonsbrønnen til Melkeveien, og bruker rundt 230 millioner år på én runde rundt galaksesenteret!',
    examples: [
      'Gravitasjonsbrønn',
      'Ellipsebane',
      'Fritt fall i bane (ISS)',
      'Unnslipningsfart',
    ],
  },

  {
    id: 'st_gravitational_lensing',
    stepIndex: 5,
    isMainPath: true,
    parentId: 'st_orbits_wells',
    stepNumber: 6,
    title: 'Gravitasjonslinser – Når krummet romtid bøyer selve lyset!',
    shortLabel: 'Gravitasjonslinser (Lysbøying)',
    subtitleTag:
      'Lys har null masse, men følger romtiden – og gjør tunge galaksehoper til gigantiske forstørrelsesglass',
    timeAfterBB: 'Solformørkelsen 1919 → James Webb',
    eraLabel: 'Sone 2 • Bro til Galakser & Stråling',
    temperatureLabel: 'Einstein-ringer & lysbuer',
    x: 1450,
    y: 515,
    cardSide: 'above',
    zoneCategory: 'gravity_well',
    epochCategory: 'stellar_dawn',
    cosmicTag: 'Beviser krum romtid OG avslører mørk materie!',
    traceBadge: 'Gravitasjonslinse • Kosmisk teleskop',
    image: cosmosImg('st_step6_gravitational_lens.jpg'),
    imageCaption:
      'En enorm galaksehop i forgrunnen krummer romtiden så mye at lyset fra en mye fjernere blå galakse rett bak bøyes rundt hopen til lysende buer og en nesten hel «Einstein-ring».',
    summaryTitle:
      'Hvordan kan tyngdekraften bøye lysstråler når fotoner ikke veier noe som helst?',
    whatHappens:
      'Her kommer den råeste testen av Einsteins idé: Lyspartikler (fotoner) har NULL masse. Hvis tyngdekraft bare trakk på masse, burde lys kanskje gå rett frem? Men hvis selve ROMTIDEN er krum, må også lyset følge det krumme sporet! Under en total solformørkelse i 1919 målte astronomen Arthur Eddington at stjerner tett inntil Solas kant så ut til å ha flyttet seg litt på himmelen fordi Sola bøyde stjernelyset – og Einstein ble verdenskjendis over natta! Ute i rommet virker hele galaksehoper som gigantiske linser («gravitasjonslinser») som samler og forstørrer lyset fra urgamle galakser bak dem.',
    keyTraits: [
      {
        title: 'Solformørkelsen i 1919 – eksperimentet som endret fysikken',
        description:
          'Einstein spådde på forhånd at Sola ville bøye stjernelys nøyaktig dobbelt så mye som en gammel newtonsk beregning antydet – og bildene under formørkelsen ga Einstein full klaff!',
        icon: 'eye',
      },
      {
        title: 'James Webbs naturlige super-zoom',
        description:
          'Astronomer sikter bevisst romteleskopet James Webb mot tunge galaksehoper for å bruke den krummede romtiden som ekstra forstørrelsesglass til å se universets aller første stjerner og galakser!',
        icon: 'telescope',
      },
      {
        title: 'Slik «veier» vi usynlig mørk materie!',
        description:
          'Galaksehoper bøyer lyset rundt 5–6 ganger mer enn alle de synlige stjernene og gasskyene i hopen skulle klart alene – et av våre sterkeste bevis på at mørk materie finnes!',
        icon: 'scale',
      },
    ],
    classroomTest:
      'Vis elevene gravitasjonslinse-effekten med foten av et vinglass eller bunnen av en klar glassflaske over et ark med prikker: Ser du hvordan prikken bak glasset strekkes ut til lysende buer og en hel ring? Akkurat slik virker krummet romtid rundt en galaksehop!',
    didYouKnow:
      'Noen ganger bøyer en galaksehop lyset fra én og samme supernova langt der bak langs flere ulike baner med ulik reisetid – slik at astronomene har sett NØYAKTIG SAMME supernova eksplodere flere ganger med måneders eller års mellomrom!',
    examples: [
      'Gravitasjonslinse',
      'Einstein-ring',
      'Solformørkelsen 1919',
      'Kartlegging av mørk materie',
    ],
  },

  {
    id: 'st_black_hole_horizon',
    stepIndex: 6,
    isMainPath: true,
    parentId: 'st_gravitational_lensing',
    stepNumber: 7,
    title: 'Sorte hull – Når gravitasjonsbrønnen stuper bunnløst ned!',
    shortLabel: 'Sorte hull & Hendelseshorisont',
    subtitleTag:
      'Romtiden krummes så ekstremt at unnslipningsfarten passerer lysfarten c – og tiden bremser opp',
    timeAfterBB: 'Unnslipningsfart > c',
    eraLabel: 'Sone 2 • Bro til Stjerner',
    temperatureLabel: 'Hendelseshorisont & ekstrem tidsbrems',
    x: 1585,
    y: 815,
    cardSide: 'below',
    zoneCategory: 'gravity_well',
    epochCategory: 'modern_cosmos',
    cosmicTag: 'Innenfor horisonten peker ALLE veier innover!',
    traceBadge: 'Ekstrem romtid • Punktet uten retur',
    image: cosmosImg('st_step7_black_hole_well.jpg'),
    imageCaption:
      'Et sort hull med glødende gasskive øverst og en loddrett, bunnløs trakt i romtiden under seg: Ved hendelseshorisonten er romtiden så krum at selv ikke lys klarer å klatre opp igjen.',
    summaryTitle:
      'Et sort hull er ikke en kosmisk støvsuger – det er et sted der romtiden stuper som en foss raskere enn lyset!',
    whatHappens:
      'Husker du fra Stjerner-temaet at de aller tyngste stjernekjernene kollapser til et sort hull? Nå ser vi hva et sort hull faktisk er i romtiden: Når enorm masse presses sammen på et knøttlite område, blir gravitasjonsbrønnen så ufattelig bratt at unnslipningsfarten passerer lysfarten c (300 000 km/s). Grensen rundt kalles HENDELSESHORISONTEN. Krysser lys eller materie denne usynlige grensen, er romtiden så krum at alle tenkelige fremtidsretninger peker innover mot sentrum!',
    keyTraits: [
      {
        title: 'Sett utenfra ser det ut som klokka stopper på kanten!',
        description:
          'På grunn av ekstrem gravitasjonell tidsdilatasjon tikker tiden saktere og saktere jo nærmere hendelseshorisonten noe kommer, samtidig som lyset derfra rødforskyves til det blir usynlig!',
        icon: 'clock',
      },
      {
        title: 'Ikke en støvsuger på lang avstand!',
        description:
          'Hvis Sola vår på magisk vis ble presset sammen til et sort hull med nøyaktig samme masse (radius ~3 km), ville romtiden ute ved Jordas bane vært helt uendret – Jorda ville fortsatt i akkurat samme bane (bare i mørke og kulde)!',
        icon: 'orbit',
      },
      {
        title: 'Fotografert i virkeligheten (M87* og Melkeveiens Sgr A*)',
        description:
          'Event Horizon Telescope koblet sammen radioteleskoper over hele jordkloden og tok i 2019 og 2022 direkte bilder av skyggen og den bøyde lysringen rundt supermassive sorte hull!',
        icon: 'eye',
      },
    ],
    classroomTest:
      'Rask sjekk med klassen (fra filmen Interstellar!): I filmen lander astronautene på en planet kloss inntil et gigantisk roterende sort hull, der 1 time på planeten tilsvarer 7 år ute ved moderskipet. Er selve fysikkprinsippet ekte? (Ja! Ekstrem tyngdekraft krummer tiden slik at klokker dypt i gravitasjonsbrønnen går dramatisk mye saktere enn langt unna!)',
    didYouKnow:
      'Midt inne i Melkeveien vår sitter det supermassive sorte hullet Sagittarius A* med en masse på rundt 4,3 millioner soler samlet innenfor en hendelseshorisont mindre enn Merkurs bane!',
    examples: [
      'Hendelseshorisont',
      'Gravitasjonell tidsdilatasjon',
      'Sagittarius A*',
      'Event Horizon Telescope',
    ],
  },

  // ==========================================================
  // SONE 3 (STEG 8–10): BØLGER I DUKEN & ROMMET SOM UTVIDER SEG
  // ==========================================================
  {
    id: 'st_gravitational_waves',
    stepIndex: 7,
    isMainPath: true,
    parentId: 'st_black_hole_horizon',
    stepNumber: 8,
    title: 'Gravitasjonsbølger – Når selve romtiden skjelver og slår ringer!',
    shortLabel: 'Gravitasjonsbølger (LIGO)',
    subtitleTag:
      'Kolliderende sorte hull og nøytronstjerner sender ut krusninger i selve romtidsduken med lysets fart',
    timeAfterBB: 'Oppdaget direkte av LIGO i 2015',
    eraLabel: 'Sone 3 • Dynamisk romtid & Kilonova-bro',
    temperatureLabel: 'Måler lengdeendring < 1/1000 proton!',
    x: 1865,
    y: 560,
    cardSide: 'above',
    zoneCategory: 'dynamic_cosmos',
    epochCategory: 'modern_cosmos',
    cosmicTag: 'En helt ny «hørselssans» for universet!',
    traceBadge: 'Gravitasjonsbølger • Nobelprisen i fysikk 2017',
    image: cosmosImg('st_step8_gravitational_waves.jpg'),
    imageCaption:
      'To sorte hull spinner stadig raskere rundt hverandre før de smelter sammen og sender ut konsentriske gravitasjonsbølger – krusninger som strekker og trykker sammen selve rommet.',
    summaryTitle:
      'I 100 år var gravitasjonsbølger bare et regnestykke på Einsteins blokk – nå «lytter» vi til sorte hull hver uke!',
    whatHappens:
      'Allerede i 1916 innså Einstein at hvis romtiden er en elastisk vev, må voldsomme bevegelser av ekstreme masser lage BØLGER i selve romtiden – omtrent som ringer i vannet når du pisker overflaten! Når to sorte hull eller to nøytronstjerner spinner inn i hverandre og kolliderer, stråles enorme mengder energi ut som gravitasjonsbølger med lysets fart c. Da bølgene fra en kollisjon 1,3 milliarder lysår unna passerte Jorda 14. september 2015, strakk og krympet de 4 km lange laserarmene i LIGO-detektoren seg med en tusendel av bredden til et proton!',
    keyTraits: [
      {
        title: 'Ikke lys eller lyd – selve avstanden mellom punkter svaier!',
        description:
          'Når en gravitasjonsbølge passerer gjennom klasserommet, blir rommet ørlite grann lengre i én retning og kortere på tvers, helt uten at bølgen kan stoppes av støv, stjerner eller planeter!',
        icon: 'waves',
      },
      {
        title: 'Direkte bro til Grunnstoffer: Kilonovaen i 2017 (GW170817)',
        description:
          'I august 2017 fanget LIGO/Virgo opp gravitasjonsbølger fra to kolliderende nøytronstjerner, og 1,7 sekunder senere så teleskoper lysglimtet som beviste hvor gull og platina smis!',
        icon: 'sparkles',
      },
      {
        title: 'Lar oss «høre» helt mørke kollisjoner',
        description:
          'To sorte hull som kolliderer i tomt rom sender ikke ut lys i det hele tatt – men med gravitasjonsbølger kan vi følge hele dødsspiralen deres!',
        icon: 'zap',
      },
    ],
    classroomTest:
      'Spør klassen: I over tusen år kunne menneskeheten bare studere verdensrommet ved hjelp av LYS (stråling). Hvorfor kaller astronomer oppdagelsen av gravitasjonsbølger i 2015 for øyeblikket da vi fikk «hørsel» i tillegg til «syn» ute i universet?',
    didYouKnow:
      'I de siste tiendels sekundene da de to sorte hullene i 2015-signalet smeltet sammen, ble en masse tilsvarende TRE HELE SOLER gjort om til ren gravitasjonsbølge-energi (E = mc²) – mer effekt på et øyeblikk enn lyset fra alle stjernene i hele det synlige universet til sammen!',
    examples: [
      'Gravitasjonsbølger',
      'LIGO & Virgo',
      'Sorte hull-fusjon',
      'Kilonova GW170817',
    ],
  },

  {
    id: 'st_expanding_space',
    stepIndex: 8,
    isMainPath: true,
    parentId: 'st_gravitational_waves',
    stepNumber: 9,
    title: 'Rommet selv utvider seg – Rosinbolle-modellen & Rødforskyvning',
    shortLabel: 'Rommet selv utvider seg',
    subtitleTag:
      'Galaksene flyr ikke som splinter gjennom et tomt rom – det er selve romtidsnettet mellom dem som vokser!',
    timeAfterBB: 'Big Bang skjedde OVERALT i rommet',
    eraLabel: 'Sone 3 • Bro til Big Bang, Galakser & Stråling',
    temperatureLabel: 'Strukket rom = Strukket lysbølge',
    x: 2125,
    y: 470,
    cardSide: 'below',
    zoneCategory: 'dynamic_cosmos',
    epochCategory: 'modern_cosmos',
    cosmicTag: 'Jo større avstand i rommet, desto raskere vokser gapet!',
    traceBadge: 'Kosmisk utvidelse • Nøkkelen til Big Bang',
    image: cosmosImg('st_step9_expanding_fabric.jpg'),
    imageCaption:
      'Tre øyeblikksbilder av universets romtidsnett: Galaksene blir værende i sine egne ruter mens selve rutene vokser – og lysbølgen på vei mellom dem strekkes fra blått til rødt (kosmisk rødforskyvning)!',
    summaryTitle:
      'Den viktigste innsikten i hele kosmologien: Big Bang var IKKE en bombe i et ferdig tomrom!',
    whatHappens:
      'Når vi bruker Einsteins likninger på hele universet under ett (slik Georges Lemaître og Edwin Hubble oppdaget på slutten av 1920-tallet), ser vi at selve romtidsduken på stor skala STREKKER SEG! Tenk på rosiner i en bolledeig som hever i ovnen: Hver rosin (galaksehop) ligger i ro i sin del av deigen, men fordi selve deigen (rommet) eser ut overalt, øker avstanden mellom alle rosinene! Og lyset som reiser gjennom dette voksende rommet får bølgelengden sin strukket ut mot rødt – det vi kaller kosmisk rødforskyvning!',
    keyTraits: [
      {
        title: 'Hvor var «sentrum» for Big Bang? OVERALT!',
        description:
          'Uansett hvilken rosin i deigen du sitter på, ser du alle de andre rosinene fjerne seg fra deg – og rosiner dobbelt så langt unna fjerner seg dobbelt så raskt (Hubble-Lemaîtres lov)!',
        icon: 'expand',
      },
      {
        title: 'Hvorfor utvider ikke DU, Jorda eller Melkeveien seg?',
        description:
          'På små avstander holder elektromagnetiske krefter (i kroppen og Jorda) og sterk lokal tyngdekraft (i Solsystemet og Melkeveien) alt fast samlet. Romutvidelsen merkes bare i tomrommene MELLOM galaksehopene!',
        icon: 'globe',
      },
      {
        title: 'Kan avstanden til fjerne galakser øke raskere enn lysfarten c?',
        description:
          'JA! Fartsgrensen c gjelder ting som reiser GJENNOM rommet – den forbyr ikke selve rommet mellom to punkter å vokse raskere enn c over milliarder av lysår!',
        icon: 'waves',
      },
    ],
    classroomTest:
      'Tegn to prikker (galakser) og en bølgestrek mellom dem på en slapp ballong i klasserommet, og blås ballongen opp foran elevene: Ser alle at ingen av prikkene er «midten» av ballongoverflaten, og at bølgestreken automatisk får lengre bølgelengde (rødforskyvning) når gummien strekkes?',
    didYouKnow:
      'Den kosmiske bakgrunnsstrålingen startet som brennhet oransje-hvit varmestråling ved 3000 kelvin da universet var 380 000 år gammelt – siden den gang har selve rommet strukket seg ~1100 ganger i alle retninger og strukket bølgene helt ut til kalde mikrobølger!',
    examples: [
      'Rosinbolle- / ballongmodellen',
      'Kosmisk rødforskyvning',
      'Hubble-Lemaîtres lov',
      'Ingen midtpunkt i rommet',
    ],
  },

  {
    id: 'st_dark_energy_fate',
    stepIndex: 9,
    isMainPath: true,
    parentId: 'st_expanding_space',
    stepNumber: 10,
    title: 'Mørk materie, Mørk energi & Romtidens fremtid',
    shortLabel: 'Mørk energi & Fremtiden',
    subtitleTag:
      '68 % mørk energi får romtidens utvidelse til å akselerere – en kosmisk dragkamp om universets skjebne!',
    timeAfterBB: '13,8 mrd. år → Evig utvidelse?',
    eraLabel: 'Sone 3 • Universets store regnskap',
    temperatureLabel: '68 % mørk energi • 27 % mørk materie • 5 % atomer',
    x: 2375,
    y: 385,
    cardSide: 'above',
    zoneCategory: 'dynamic_cosmos',
    epochCategory: 'modern_cosmos',
    cosmicTag: 'Tyngdekraften bremser – mørk energi gir gass!',
    traceBadge: 'Fremtiden • Kosmisk akselerasjon (1998)',
    image: cosmosImg('st_step10_dark_energy_cosmos.jpg'),
    imageCaption:
      'Hele universets utvidelseshistorie formet som en lysende trompet gjennom romtiden: Etter milliarder av år der tyngdekraften bremset utvidelsen, har mørk energi de siste ~5 milliarder årene fått rommet til å utvide seg stadig raskere!',
    summaryTitle:
      'Alt vi kan se av stjerner, planeter og grunnstoffer er bare 5 % – resten skjuler seg i selve romtiden!',
    whatHappens:
      'På 1990-tallet målte to uavhengige forskerteam fjerne supernovaer for å se hvor mye tyngdekraften hadde bremset universets utvidelse etter Big Bang. Sjokket ga dem Nobelprisen i fysikk: Utvidelsen bremser IKKE lenger – de siste ~5 milliarder årene har rommet utvidet seg STADIG RASKERE! Fysikerne kaller drivkraften bak denne akselerasjonen for MØRK ENERGI, en slags iboende frastøtende energi i selve det tomme rommet. Sammen med MØRK MATERIE (som krummer romtiden rundt galaksene) styrer dette hele universets geometri og skjebne!',
    keyTraits: [
      {
        title: 'Universets 3 ingredienser: 5 % + 27 % + 68 %',
        description:
          'Vanlig stoff (grunnstoffer/atomer) utgjør ~5 %, usynlig mørk materie som trekker ting sammen utgjør ~27 %, og mørk energi som presser rommet fra hverandre utgjør hele ~68 %!',
        icon: 'layers',
      },
      {
        title: 'Vårt univers ser ut til å være geometrisk «flatt» på stor skala',
        description:
          'Målinger av bakgrunnsstrålingen viser at selv om stjerner og galakser lager lokale groper i romtiden, går parallelle lysstråler over milliarder av lysår rett frem uten at hele universet krummer seg tilbake til en lukket kule.',
        icon: 'compass',
      },
      {
        title: 'Hva blir slutten? «Big Freeze» (Den store nedkjølingen)',
        description:
          'Hvis mørk energi fortsetter å vinne dragkampen, vil fjerne galaksehoper akselerere bort fra hverandre i all fremtid mens stjernene sakte brenner ut i et stadig kaldere og mørkere rom.',
        icon: 'sparkles',
      },
    ],
    classroomTest:
      'Oppsummer hele romtidsreisen med elevene: Ikke forveksle MØRK MATERIE og MØRK ENERGI! Spør klassen: Hvem av dem virker som EKSTRA LIM (krummer romtiden og holder galaksene samlet), og hvem virker som en KOSMISK GASS-PEDAL (får tomrommet mellom galaksehopene til å vokse raskere)?',
    didYouKnow:
      'Nye kartlegginger av millioner av galakser med instrumentet DESI og det europeiske romteleskopet Euclid undersøker akkurat nå i vår tid om den mørke energien faktisk er helt konstant, eller om den langsomt svekkes over milliarder av år – et av de mest spennende åpne spørsmålene i moderne naturvitenskap!',
    examples: [
      'Mørk energi (68 %)',
      'Mørk materie (27 %)',
      'Akselererende utvidelse',
      'Big Freeze',
    ],
  },
];

export const SPACETIME_NODE_MAP: Record<string, SpacetimeNodeData> =
  Object.fromEntries(SPACETIME_NODES.map((n) => [n.id, n]));

export const SPACETIME_CONTROL_QUESTIONS: ControlQuestionItem[] = [
  {
    id: 'st-q1',
    number: 1,
    question:
      'Hva mener fysikere med begrepet «romtid», hvorfor kalles et teleskop en tidsmaskin, og hvordan merker vi relativitetsteorien i hverdagen med GPS?',
    contextHint:
      'Bruk de tre første stegene i Sone 1 (4 dimensjoner, lysfarten c og GPS-satellittene)!',
    points: [
      {
        heading: 'Rom (3D) og tid (1D) er vevd sammen til en elastisk 4D-helhet',
        badge: 'Romtid',
        detail:
          'Einstein viste at tid ikke tikker likt for alle uavhengig av bevegelse og tyngdekraft – rom og tid påvirker hverandre direkte.',
      },
      {
        heading: 'Lysfarten c ≈ 300 000 km/s gir oss et blikk rett inn i fortiden',
        badge: 'Tidsmaskin',
        detail:
          'Siden lyset bruker tid på å krysse verdensrommet (ett lysår = avstanden lyset tilbakelegger på ett år), ser vi Sola 8,3 min tilbake i tid, Andromeda 2,5 mill. år tilbake og de første galaksene over 13 mrd. år tilbake.',
      },
      {
        heading: 'GPS-klokker i bane må korrigeres for både fart og svakere tyngdekraft',
        badge: 'GPS i praksis',
        detail:
          '20 200 km over Jorda går satellittklokkene totalt 38 mikrosekunder raskere per døgn enn klokker på bakken – uten korreksjon ville mobilkartet bommet med over 10 km hver eneste dag!',
      },
    ],
    takeaway:
      'Lysfarten c er selve limet som knytter rom og tid sammen – og relativitetsteorien testes hver eneste gang du åpner kartet på mobilen!',
  },
  {
    id: 'st-q2',
    number: 2,
    question:
      'Forklar forskjellen på hvordan Newton og Einstein forsto tyngdekraft (gravitasjon), og hvordan krummet romtid kan bøye lys som ikke har masse!',
    contextHint:
      'Se på gravitasjonsbrønnen i Sone 2 (Steg 4, 5 og 6 – trampolinemodellen, planetbaner og gravitasjonslinser)!',
    points: [
      {
        heading: 'Newton: Usynlig tiltrekningskraft • Einstein: Krummet romtid',
        badge: 'Paradigmeskifte',
        detail:
          'Hos Einstein trekker ikke Sola på Jorda med en usynlig tråd; Sola krummer selve romtiden rundt seg, og Jorda følger den retteste mulige banen gjennom denne krumningen.',
      },
      {
        heading: 'Fotoner har null masse, men følger det krumme rommet!',
        badge: 'Gravitasjonslinse',
        detail:
          'Fordi selve rommet rundt stjerner og galaksehoper er bøyd, må lysstråler følge krumningen. Det ble bevist ved solformørkelsen i 1919 og gir oss «Einstein-ringer» i James Webb-bilder.',
      },
      {
        heading: 'Sorte hull oppstår når gravitasjonsbrønnen stuper brattere enn lysfarten c',
        badge: 'Hendelseshorisont',
        detail:
          'Innenfor hendelseshorisonten er romtiden krummet så ekstremt at selv ikke lys kan unnslippe, og tiden bremser kraftig opp sammenlignet med observatører langt unna.',
      },
    ],
    comparisonTable: {
      headers: [
        'Egenskap',
        'Newtons tyngdelov (1687)',
        'Einsteins generelle relativitetsteori (1915)',
      ],
      rows: [
        [
          'Hva er tyngdekraft?',
          'En tiltrekkende kraft gjennom tomt rom mellom masser',
          'Krumning av selve den firedimensjonale romtiden rundt masse og energi',
        ],
        [
          'Hvor fort brer endringer seg?',
          'Øyeblikkelig (uendelig fort)',
          'Med lysfarten c ≈ 300 000 km/s (som gravitasjonsbølger)',
        ],
        [
          'Ekstreme fenomener den forklarer',
          'Fungerer glimrende for hverdagsfysikk og enkle baner',
          'GPS-tid, Merkurs bane, gravitasjonslinser, sorte hull og gravitasjonsbølger',
        ],
      ],
    },
    takeaway:
      'Masse forteller romtiden hvordan den skal krumme seg – og romtiden forteller både planeter og lysstråler hvordan de skal bevege seg!',
  },
  {
    id: 'st-q3',
    number: 3,
    question:
      'Hva mener vi når vi sier at «selve rommet utvider seg» (rosinbolle-/ballongmodellen), og hvorfor hadde ikke Big Bang et bestemt midtpunkt ute i verdensrommet?',
    contextHint:
      'Se på Steg 9 i Sone 3: Forskjellen på ting som flyr gjennom rommet vs. rommet som strekkes!',
    points: [
      {
        heading: 'Galaksene kastes ikke ut gjennom et ferdig tomrom – rommet MELLOM dem vokser',
        badge: 'Rosinbolle-modellen',
        detail:
          'Akkurat som rosiner i en hevende deig fjerner galaksehopene seg fra hverandre fordi selve romtiden eser ut overalt.',
      },
      {
        heading: 'Alle observatører i universet ser ut til å være «i midten»',
        badge: 'Ingen sentrum',
        detail:
          'Siden det var selve rommet som startet sin utvidelse i Big Bang, skjedde Big Bang overalt – enhver galakse ser andre galakser fjerne seg raskere jo lenger unna de er.',
      },
      {
        heading: 'Kosmisk rødforskyvning skyldes at lysbølgene strekkes sammen med rommet',
        badge: 'Strukket lys',
        detail:
          'Mens lyset fra fjerne galakser (og fra bakgrunnsstrålingen) reiser gjennom universet, strekker romutvidelsen bølgelengden mot den røde/mikrobølge-enden av spekteret.',
      },
    ],
    takeaway:
      'Lokale systemer som kroppen din, Solsystemet og Melkeveien holdes samlet av krefter og lokal tyngdekraft – det er de enorme tomrommene mellom galaksehopene som utvider seg!',
  },
  {
    id: 'st-q4',
    number: 4,
    question:
      'Hva er hovedforskjellen på gravitasjonsbølger, mørk materie og mørk energi – og hvordan påvirker de tre romtiden?',
    contextHint:
      'Sammenlign Steg 6 (linser), Steg 8 (bølger i duken) og Steg 10 (dragkampen om universets fremtid)!',
    points: [
      {
        heading: 'Gravitasjonsbølger: Krusninger som brer seg gjennom romtiden med lysets fart',
        badge: 'Bølger i duken',
        detail:
          'Skapes når ekstreme masser som sorte hull eller nøytronstjerner akselererer og kolliderer – målt direkte med laserinterferometre (LIGO) siden 2015.',
      },
      {
        heading: 'Mørk materie (~27 %): Usynlig masse som KRUMMER romtiden og holder galakser samlet',
        badge: 'Kosmisk lim',
        detail:
          'Sender ikke ut lys, men avslører seg gjennom ekstra gravitasjonslinse-effekt og ved å hindre at spinnende galakser slites fra hverandre.',
      },
      {
        heading: 'Mørk energi (~68 %): Drivkraft i tomrommet som får utvidelsen til å AKSELERERE',
        badge: 'Kosmisk gasspedal',
        detail:
          'Får universet til å utvide seg stadig raskere de siste ~5 milliarder årene, og peker mot en fremtidig «Big Freeze».',
      },
    ],
    comparisonTable: {
      headers: [
        'Fenomen',
        'Andel av universet',
        'Virkning på romtiden',
      ],
      rows: [
        [
          'Vanlig materie (grunnstoffer)',
          '~5 %',
          'Bygger stjerner, planeter og oss; lager lokale gravitasjonsbrønner',
        ],
        [
          'Mørk materie',
          '~27 %',
          'Krummer romtiden rundt galakser og hoper; virker tiltrekkende («bremser»)',
        ],
        [
          'Mørk energi',
          '~68 %',
          'Får selve romtiden mellom galaksehopene til å utvide seg stadig raskere',
        ],
      ],
    },
    takeaway:
      'Mørk materie krummer og samler – mørk energi strekker og akselererer!',
  },
];
