import {
  cosmosImg,
  type ControlQuestionItem,
  type CosmicNodeData,
} from './bigBangData';

export const STARS_MAIN_STEP_IDS: string[] = [
  'star_nebula',
  'star_protostar',
  'star_main_sequence',
  'star_red_giant',
  'star_planetary_nebula',
  'star_white_dwarf',
  'star_red_supergiant',
  'star_supernova',
  'star_neutron_star',
  'star_black_hole',
];

export const STARS_NODES: CosmicNodeData[] = [
  // ==========================================================
  // FELLES STAMME (STEG 1–3): FØDSEL OG HOVEDSERIEN
  // ==========================================================
  {
    id: 'star_nebula',
    stepIndex: 0,
    isMainPath: true,
    parentId: null,
    stepNumber: 1,
    title: 'Stjernetåke – Stjernenes kalde fødestue',
    shortLabel: 'Stjernetåke',
    subtitleTag: 'Enorme skyer av hydrogen, helium og stjernestøv trekker seg sammen',
    timeAfterBB: 'Fødsel • Millioner av år',
    eraLabel: 'Felles start for alle stjerner',
    temperatureLabel: '10 – 100 K (−263 til −173 °C)',
    x: 240,
    y: 600,
    cardSide: 'above',
    epochCategory: 'primordial',
    cosmicTag: '~75 % H + ~25 % He + støv',
    traceBadge: 'Felles stamme • Gravitasjonskollaps',
    image: cosmosImg('star_step1_nebula.jpg'),
    imageCaption:
      'Tette søyler av kald gass og kosmisk støv i en stjernetåke (som Ørnetåken / «Skapelsens søyler»), der tyngdekraften samler stoff til nye stjerner.',
    summaryTitle: 'Kalde skyer må være kalde for å føde glovarme stjerner!',
    whatHappens:
      'Alle stjerner i universet starter livet på samme måte: inne i gigantiske, iskalde skyer av gass og støv som kalles stjernetåker (nebulosaer). Gasskyen består hovedsakelig av hydrogen (~75 %) og helium (~25 %) fra Big Bang, blandet med litt tyngre stjernestøv fra tidligere stjernegenerasjoner. Når en sjokkbølge – for eksempel fra en nærliggende supernova – dytter på skyen, oppstår områder med litt høyere tetthet. Da tar tyngdekraften over og begynner å trekke gass og støv inn mot tyngdepunktet.',
    keyTraits: [
      {
        title: 'Hvorfor skyen må være iskald (10–100 K)',
        description:
          'I varm gass beveger partiklene seg så raskt at gasstrykket presser skyen utover. Bare når gassen er iskald, vinner tyngdekraften over trykket slik at skyen kan kollapse.',
        icon: 'thermometer',
      },
      {
        title: 'Resirkulering i verdensrommet',
        description:
          'Dagens stjernetåker i Melkeveien inneholder også 1–2 % tyngre grunnstoffer (silisium, karbon, oksygen og jern) – råstoffet som senere blir til steinplaneter som Jorda.',
        icon: 'orbit',
      },
      {
        title: 'En sky gir ofte hundrevis av søskenstjerner',
        description:
          'En stor molekylsky kollapser ikke til bare én stjerne, men deler seg opp i mange knuter med ulik masse – fra små røde dverger til gigantiske blå kjemper.',
        icon: 'sparkles',
      },
    ],
    classroomTest:
      'Spørsmål til klassen: Det høres bakvendt ut, men hvorfor er det mye lettere for en ISKALD gassky å lage en glovarm stjerne enn for en varm gassky? (Hint: Hva gjør varm gass når du prøver å klemme den sammen?)',
    didYouKnow:
      'Oriontåken, som du kan skimte med det blotte øye som en uklar flekk i «sverdet» i stjernebildet Orion om vinteren, er en aktiv stjernefødestue 1340 lysår unna der hundrevis av nye solsystemer fødes akkurat nå!',
    examples: [
      'Stjernetåke (nebulosa)',
      'Gravitasjonskollaps',
      'Molekylsky',
      'Kosmisk støv',
    ],
  },

  {
    id: 'star_protostar',
    stepIndex: 1,
    isMainPath: true,
    parentId: 'star_nebula',
    stepNumber: 2,
    title: 'Protostjerne – Gravitasjonen skrur opp varmen',
    shortLabel: 'Protostjerne',
    subtitleTag: 'Roterende gasskive og glovarm kjerne – men ennå ingen kjernefusjon',
    timeAfterBB: '~100 000 – 10 mill. år',
    eraLabel: 'Fosterstadiet før tenning',
    temperatureLabel: 'Kjernetemp. 1 – 9 mill. K',
    x: 590,
    y: 600,
    cardSide: 'below',
    epochCategory: 'recombination',
    cosmicTag: 'Gravitasjonsenergi → Varme',
    traceBadge: 'Felles stamme • Protoplanetarisk skive',
    image: cosmosImg('star_step2_protostar.jpg'),
    imageCaption:
      'En ung protostjerne omgitt av en roterende skive av gass og støv der planeter kan dannes, mens kraftige jetstråler skytes ut langs polene.',
    summaryTitle: 'Som en kunstløper som trekker armene inn – gassen spinner og gløder',
    whatHappens:
      'Etter hvert som gasskyen faller innover mot sentrum, skjer to viktige ting: For det første spinner skyen raskere og raskere og flater ut til en roterende skive rundt en tett gasskule i midten – en protostjerne. For det andre gjøres gravitasjonell stillingsenergi om til varmeenergi når gassen komprimeres. Protostjernen lyser allerede kraftig i infrarødt lys, men den er ennå ikke en «ekte» stjerne fordi temperaturen i kjernen fortsatt er under 10 millioner kelvin.',
    keyTraits: [
      {
        title: 'Gløder av kompresjon – ikke fusjon ennå',
        description:
          'Akkurat som en sykkelpumpe blir varm når du presser luft sammen, varmes protostjernen opp fordi milliarder av tonn gass klemmes sammen av tyngdekraften.',
        icon: 'flame',
      },
      {
        title: 'Planetenes byggeplass rundt stjernen',
        description:
          'I den flate, roterende støv- og gasskiven rundt protostjernen kolliderer støvkorn og bygger seg opp til asteroider og planeter samtidig som stjernen fødes.',
        icon: 'globe',
      },
      {
        title: 'Infrarøde teleskoper ser gjennom støvet',
        description:
          'Vanlig synlig lys stoppes av støvskyen rundt protostjernen, men infrarødt lys slipper gjennom – derfor er James Webb-teleskopet perfekt til å studere protostjerner!',
        icon: 'telescope',
      },
    ],
    classroomTest:
      'Be en elev snurre på en kontorstol med armene rett ut og så trekke armene tett inn til kroppen. Den økte rotasjonen (bevaring av spinn) er nøyaktig grunnen til at alle planetene i Solsystemet går rundt Sola i samme plan og samme retning!',
    didYouKnow:
      'Hvis en gasskule har for liten masse (under ca. 8 % av Solas masse, eller ~80 ganger Jupiter), blir kjernen aldri varm nok til å tenne vanlig hydrogenfusjon. Da ender den som en «feilslått stjerne» kalt en brun dverg!',
    examples: [
      'Protostjerne',
      'Protoplanetarisk skive',
      'Gravitasjonsvarme',
      'Brun dverg (< 0,08 M☉)',
    ],
  },

  {
    id: 'star_main_sequence',
    stepIndex: 2,
    isMainPath: true,
    parentId: 'star_protostar',
    stepNumber: 3,
    title: 'Hovedseriestjerne – Fusjonsmotoren og den store drakampen',
    shortLabel: 'Hovedseriestjerne',
    subtitleTag: 'Hydrogen fusjonerer til helium i balanse med tyngdekraften • Her skiller veiene lag!',
    timeAfterBB: '~90 % av stjernens liv',
    eraLabel: 'Veivalg styrt av stjernens masse',
    temperatureLabel: 'Kjerne ≥ 15 mill. K (Sola)',
    x: 950,
    y: 600,
    cardSide: 'above',
    epochCategory: 'primordial',
    cosmicTag: '4 ¹H → ⁴He + energi • Veivalg!',
    traceBadge: 'Forgreningspunkt • Hydrostatisk likevekt',
    image: cosmosImg('star_step3_main_sequence.jpg'),
    imageCaption:
      'Gjennomskåret hovedseriestjerne (som Sola): I kjernen fusjonerer hydrogen til helium. Utadrettet strålings- og gasstrykk (gule piler) holder nøyaktig balanse mot tyngdekraften innover (blå piler).',
    summaryTitle: 'To krefter i perfekt balanse – og massen bestemmer både farge, fart og skjebne',
    whatHappens:
      'Idet kjernen passerer ca. 10–15 millioner kelvin, skjer tenningen: protoner har så stor fart at de overvinner den elektriske frastøtingen og smelter sammen fra hydrogen til helium (kjernefusjon). Litt masse forsvinner i hver reaksjon og frigjøres som enorme mengder energi (E = mc²). Dette skaper et voldsomt trykk utover som bremser tyngdekraften. Stjernen går inn i en stabil likevekt som hovedseriestjerne, slik Sola er i dag. Og her ved utgangen av hovedserien deler livsløpet seg i to helt ulike grener ut fra hvor stor masse stjernen ble født med!',
    keyTraits: [
      {
        title: 'Hydrostatisk likevekt: Tyngdekraft mot trykk',
        description:
          'Tyngdekraften prøver hele tiden å klemme stjernen sammen (innover), mens strålings- og gasstrykket fra fusjonen i kjernen presser utover. Så lenge det er hydrogen i kjernen, er stjernen stabil.',
        icon: 'scale',
      },
      {
        title: 'Overflatetemperatur bestemmer stjernens farge',
        description:
          'Lette stjerner er kjøligere og lyser rødt (~3000 K), middels stjerner som Sola er gule/gulhvite (~5800 K), mens de tyngste hovedseriestjernene er ekstremt varme og lyser blåhvitt (> 25 000 K)!',
        icon: 'sun',
      },
      {
        title: 'Jo større masse, desto kortere levetid!',
        description:
          'Tunge stjerner har mer drivstoff, men den voldsomme tyngdekraften gjør kjernen så varm at de sløser bort hydrogenet tusenvis av ganger raskere: de lever bare noen millioner år, mens Sola lever i ~10 milliarder år!',
        icon: 'clock',
      },
    ],
    classroomTest:
      'Lurespørsmål til klassen: Hvilken stjerne er varmest – en rød stjerne eller en blå stjerne? På baderomskranen betyr rødt varmt og blått kaldt, men i fysikkens verden er det stikk motsatt: blått lys har kortere bølgelengde og mer energi, så blå stjerner er de aller varmeste!',
    didYouKnow:
      'Hvert eneste sekund fusjonerer Sola ca. 600 millioner tonn hydrogen til 596 millioner tonn helium. De «manglende» 4 millioner tonnene per sekund gjøres direkte om til lys og varme som treffer blant annet Jorda!',
    examples: [
      'Kjernefusjon (4 H → He)',
      'Hydrostatisk likevekt',
      'Hovedserien',
      'Masse bestemmer skjebnen',
    ],
  },

  // ==========================================================
  // ØVRE GREN (STEG 4–6): SOL-LIGNENDE STJERNER (< 8 SOLMASSER)
  // ==========================================================
  {
    id: 'star_red_giant',
    stepIndex: 3,
    isMainPath: true,
    parentId: 'star_main_sequence',
    stepNumber: 4,
    title: 'Rød kjempe – Når hydrogenet tar slutt i kjernen',
    shortLabel: 'Rød kjempe',
    subtitleTag: 'Øvre gren (< 8 solmasser) • Kjernen krymper og tenner helium, mens utsiden eser enormt opp',
    timeAfterBB: 'Solas skjebne om ~5 mrd. år',
    eraLabel: 'Øvre gren • Lette/middels stjerner',
    temperatureLabel: 'Kjerne ~100 mill. K • Overflate ~3200 K',
    x: 1390,
    y: 295,
    cardSide: 'above',
    epochCategory: 'recombination',
    cosmicTag: '< 8 M☉ • 3 He → Karbon (C)',
    traceBadge: 'Sol-lignende gren • Heliumfusjon',
    image: cosmosImg('star_step4_red_giant.jpg'),
    imageCaption:
      'En oppsvulmet rød kjempe som har vokst til hundre ganger sin tidligere diameter og sluker sine innerste steinplaneter.',
    summaryTitle: 'Ubalanse i motoren: Innsiden krymper og blir glovarm, utsiden blåses opp og blir rød',
    whatHappens:
      'Følger vi den øvre grenen for lette og middels store stjerner (under ca. 8 solmasser, som Sola vår), tar hydrogenet i selve kjernen til slutt slutt etter milliarder av rolige år. Uten fusjon i midten vinner tyngdekraften midlertidig og presser heliumkjernen sammen. Da stiger temperaturen rundt og inne i kjernen voldsomt: hydrogen begynner å fusjonere i et skall rundt kjernen, og ved ca. 100 millioner kelvin tenner heliumfusjon til karbon og oksygen. Det økte strålingstrykket blåser stjernens ytterlag opp til en gigantisk rød kjempe!',
    keyTraits: [
      {
        title: 'Hvorfor blir den RØD når kjernen blir VARMERE?',
        description:
          ' Fordi ytterlagene presses hundrevis av millioner kilometer utover, fordeles energien ut over en enorm overflate. Dermed synker overflatetemperaturen til ~3000 K, og stjernen lyser oransje-rødt.',
        icon: 'thermometer',
      },
      {
        title: 'Helium smis om til karbon og oksygen',
        description:
          'I kjernen slår tre heliumkjerner seg sammen til ett karbonatom (trippel-alfa-prosessen), og litt videre til oksygen – grunnstoffene alt liv på Jorda er bygd av!',
        icon: 'atom',
      },
      {
        title: 'Solas fremtid om ca. 5 milliarder år',
        description:
          'Når Sola blir en rød kjempe, vil den sluke Merkur og Venus, koke bort verdenshavene på Jorda og fylle halve himmelen sett herfra.',
        icon: 'expand',
      },
    ],
    classroomTest:
      'Spør elevene: Sola er i dag ca. 4,6 milliarder år gammel og har drivstoff på hovedserien for totalt ca. 10 milliarder år. Hvor lenge er det igjen til Sola blir en rød kjempe? (~5 milliarder år – så vi har god tid før naturfagsprøven!)',
    didYouKnow:
      'Stjernen Aldebaran («oksen sitt røde øye» i stjernebildet Tyren) er en ekte rød kjempe som allerede har brukt opp hydrogenet i kjernen og svulmet opp til 44 ganger Solas diameter!',
    examples: [
      'Rød kjempe',
      'Skallfusjon',
      'Helium → Karbon & Oksygen',
      'Aldebaran',
    ],
  },

  {
    id: 'star_planetary_nebula',
    stepIndex: 4,
    isMainPath: true,
    parentId: 'star_red_giant',
    stepNumber: 5,
    title: 'Planetarisk tåke – Et stille og vakkert farvel',
    shortLabel: 'Planetarisk tåke',
    subtitleTag: 'Øvre gren (< 8 solmasser) • Ytterlagene blåses ut i rommet uten eksplosjon',
    timeAfterBB: 'Varer kun ~20 000 – 50 000 år',
    eraLabel: 'Øvre gren • Ingen supernova!',
    temperatureLabel: 'Gasskall ~10 000 K',
    x: 1770,
    y: 295,
    cardSide: 'below',
    epochCategory: 'galactic_solar',
    cosmicTag: 'Ingen supernova • Gasskall ut',
    traceBadge: 'Sol-lignende gren • Rolig avskjed',
    image: cosmosImg('star_step5_planetary_nebula.jpg'),
    imageCaption:
      'En planetarisk tåke (som Ringtåken): De ytre gasslagene fra en døende sol-lignende stjerne lyser i praktfulle farger rundt den blottlagte kjernen i midten.',
    summaryTitle: 'For lett til å eksplodere – stjernen puster ut kappen sin i verdensrommet',
    whatHappens:
      'Når heliumet i kjernen på en sol-lignende stjerne også er brukt opp og blitt til karbon og oksygen, er det slutt: stjernen har rett og slett for liten masse og tyngdekraft til å presse kjernen opp i de 600 millioner gradene som kreves for å fusjonere karbon videre. Stjernen blir ustabil, pulserer og blåser gradvis alle ytterlagene sine ut i rommet som glødende ringer av gass. Ultrafiolett stråling fra den glovarme restkjernen i midten får gasskallet til å lyse opp som en fargerik planetarisk tåke.',
    keyTraits: [
      {
        title: 'Misvisende navn fra 1700-tallet',
        description:
          'En «planetarisk tåke» har ingenting med planeter å gjøre! Gamle astronomer syntes bare de runde, grønnblå gasskyene lignet litt på planeten Uranus i små teleskoper.',
        icon: 'compass',
      },
      {
        title: 'Sola eksploderer ALDRI som supernova',
        description:
          'En vanlig misforståelse er at alle stjerner eksploderer når de dør. Stjerner under 8 solmasser dør fredelig ved å blåse av seg ytterlagene som en planetarisk tåke.',
        icon: 'shield',
      },
      {
        title: 'Gjødsler verdensrommet med karbon og nitrogen',
        description:
          'Gassen som blåses ut, tar med seg nyprodusert karbon og nitrogen ut i galaksen slik at nye stjernetåker får enda mer byggemateriale.',
        icon: 'waves',
      },
    ],
    classroomTest:
      'Vis bildet av den planetariske tåken på storskjerm og be elevene peke på den lille hvite prikken midt inne i skyen: Det er selve stjernekjernen som er i ferd med å bli en hvit dverg!',
    didYouKnow:
      'Planetariske tåker er som kosmiske såpebobler på speed: gasskallet utvider seg med ~20–30 km i sekundet og løser seg opp i løpet av bare noen titusen år – et øyeblikk i astronomisk tid!',
    examples: [
      'Planetarisk tåke',
      'Ringtåken (M57)',
      'Kattøyetåken',
      'Stjernevind & pulsering',
    ],
  },

  {
    id: 'star_white_dwarf',
    stepIndex: 5,
    isMainPath: true,
    parentId: 'star_planetary_nebula',
    stepNumber: 6,
    title: 'Hvit dverg – En glødende diamant på størrelse med Jorda',
    shortLabel: 'Hvit dverg',
    subtitleTag: 'Øvre gren sluttpunkt • Ingen fusjon lenger, kun ekstremt tett restglød',
    timeAfterBB: 'Avkjøles over milliarder av år',
    eraLabel: 'Øvre gren • Sluttstadiet for 97 % av stjerner',
    temperatureLabel: 'Overflate 25 000 → 4000 K',
    x: 2150,
    y: 295,
    cardSide: 'above',
    epochCategory: 'stellar_dawn',
    cosmicTag: 'Jord-størrelse • ~0,6 solmasser',
    traceBadge: 'Sluttpunkt A • Sol-lignende stjerner',
    image: cosmosImg('star_step6_white_dwarf.jpg'),
    imageCaption:
      'En intens blåhvit dvergstjerne: halve Solas masse pakket sammen i en kule på størrelse med planeten Jorda.',
    summaryTitle: 'En utbrent stjernekjerne der én teskje stoff veier like mye som en elefant!',
    whatHappens:
      'Når gasskallet i den planetariske tåken har drevet bort, står kun den nakne, utbrente karbon- og oksygenkjernen igjen: en hvit dverg. Her foregår det ingen kjernefusjon lenger! Likevel kollapser den ikke videre, fordi elektronene i stoffet nekter å bli presset tettere sammen (kvantemekanisk elektrontrykk). Halve Solas masse er klemt sammen i en kule på størrelse med Jorda! Den hvite dvergen skinner bare av oppspart restvarme, som en glødende kullbit tatt ut av bålet, og bruker mange milliarder år på å kjølne.',
    keyTraits: [
      {
        title: 'Ekstrem tetthet: Teskje = ~5 tonn',
        description:
          'Stoffet i en hvit dverg er rundt en million ganger tettere enn vann. En kule på størrelse med Jorda rommer ~60 % av hele Solas masse!',
        icon: 'layers',
      },
      {
        title: 'Skjebnen til 97 % av alle stjerner i Melkeveien',
        description:
          'Fordi det fødes langt flere lette og middels store stjerner enn tunge stjerner, vil nesten alle stjerner på nattehimmelen (inkludert Sola) til slutt ende som hvite dverger.',
        icon: 'star',
      },
      {
        title: 'Ingen «svarte dverger» finnes ennå!',
        description:
          'Til slutt vil en hvit dverg kjøles helt ned til en mørk «svart dverg» – men det tar så mange titalls milliarder år at det 13,8 mrd. år gamle universet fortsatt er for ungt til at én eneste er blitt helt kald!',
        icon: 'clock',
      },
    ],
    classroomTest:
      'Tanketest for klassen: Hvorfor kan vi slå fast med 100 % sikkerhet at det ennå ikke finnes én eneste utslukket «svart dverg» i hele universet? (Fordi nedkjølingen tar lenger tid enn de 13,8 milliarder årene universet har eksistert!)',
    didYouKnow:
      'Sirius B, den lille følgesvennen til himmelens klareste stjerne Sirius, er en hvit dverg bare 8,6 lysår unna oss – nesten like tung som Sola, men ikke større enn Jorda!',
    examples: [
      'Hvit dverg',
      'Elektrondegenerasjonstrykk',
      'Chandrasekhar-grensen (1,4 M☉)',
      'Sirius B',
    ],
  },

  // ==========================================================
  // NEDRE GREN (STEG 7–10): TUNGE STJERNER (> 8 SOLMASSER)
  // ==========================================================
  {
    id: 'star_red_supergiant',
    stepIndex: 6,
    isMainPath: true,
    parentId: 'star_main_sequence',
    stepNumber: 7,
    title: 'Tung stjerne & Rød superkjempe – Grunnstoff-fabrikken opp til jern',
    shortLabel: 'Rød superkjempe',
    subtitleTag: 'Nedre gren (> 8 solmasser) • Løkskall-fusjon fra hydrogen helt inn til en kjerne av jern',
    timeAfterBB: 'Lever kun få millioner år!',
    eraLabel: 'Nedre gren • Kosmiske tungvektere',
    temperatureLabel: 'Kjerne opptil ~3 mrd. K!',
    x: 1390,
    y: 905,
    cardSide: 'below',
    epochCategory: 'primordial',
    cosmicTag: '> 8 M☉ • H → He → C → O → Si → Fe',
    traceBadge: 'Tung stjerne-gren • Løkskall-fusjon',
    image: cosmosImg('star_step7_red_supergiant.jpg'),
    imageCaption:
      'Gjennomskåret rød superkjempe med løkskall-struktur: Ytterst fusjonerer hydrogen, og innover følger skall med helium, karbon, oksygen og silisium helt inn til en kjerne av jern (Fe).',
    summaryTitle: 'Universets grunnstoff-smie – men ved grunnstoff nr. 26 (jern) går motoren i fellen!',
    whatHappens:
      'Nå hopper vi tilbake til veiskillet etter hovedserien (Steg 3) og følger den nedre grenen for tunge stjerner med over 8 ganger Solas masse! Disse gigantene brenner gjennom hydrogenet i kjernen på bare noen få millioner år og svulmer opp til kolossale røde superkjemper (som Betelgeuse). Fordi tyngdekraften deres er så enorm, stopper ikke fusjonen ved karbon: kjernen presses til milliarder av grader og bygger stadig tyngre grunnstoffer lag på lag som en løk – karbon, neon, oksygen, magnesium og silisium – helt til midten fylles av jern (Fe, atomnr. 26). Og DA er det bråstopp!',
    keyTraits: [
      {
        title: 'Jern-grensen: Fusjon av jern SLUKER energi',
        description:
          'For alle grunnstoffer lettere enn jern frigjøres energi ved fusjon. Men jernkjernen er så tett bundet at å fusjonere jern videre KREVER tilført energi i stedet for å gi strålingstrykk utover!',
        icon: 'shield',
      },
      {
        title: 'Akselererende nedtelling mot slutten',
        description:
          'En stjerne på 20 solmasser bruker ~8 millioner år på hydrogen, ~800 000 år på helium, ~500 år på karbon, ~6 måneder på oksygen – og smir silisium om til en jernkjerne på bare ÉN DAG!',
        icon: 'zap',
      },
      {
        title: 'Smir oksygenet du puster og jernet i blodet ditt',
        description:
          'Nesten alt oksygen i lufta og havene, silisium i fjellene og jern i hemoglobinet ditt er bygd inne i skallene på slike tunge stjerner.',
        icon: 'atom',
      },
    ],
    classroomTest:
      'Bruk «ett-døgns-faktaen» i klasserommet: Når en rød superkjempe først begynner å fusjonere silisium til jern i kjernen sin, har stjernen bokstavelig talt rundt 24 timer igjen å leve før den eksploderer!',
    didYouKnow:
      'Den røde superkjempen Betelgeuse i stjernebildet Orion er så ufattelig stor at hvis vi plasserte den der Sola står, ville overflaten nådd helt ut forbi både Jorda, Mars og helt ut til Jupiter!',
    examples: [
      'Rød superkjempe',
      'Løkskall-fusjon',
      'Jernkjerne (Fe, nr. 26)',
      'Betelgeuse',
    ],
  },

  {
    id: 'star_supernova',
    stepIndex: 7,
    isMainPath: true,
    parentId: 'star_red_supergiant',
    stepNumber: 8,
    title: 'Supernova – Kjernekollaps på brøkdelen av et sekund',
    shortLabel: 'Supernova',
    subtitleTag: 'Nedre gren (> 8 solmasser) • Smir grunnstoffer tyngre enn jern og sår frøene til nye verdener',
    timeAfterBB: 'Kollaps på ~0,25 sekund!',
    eraLabel: 'Nedre gren • Nytt veiskille for restkjernen',
    temperatureLabel: '> 100 milliarder K i sjokket',
    x: 1770,
    y: 905,
    cardSide: 'above',
    epochCategory: 'recombination',
    cosmicTag: 'Sjokkbølge • Smir Cu, Ag, Au, U',
    traceBadge: 'Eksplosivt veiskille • Tunge grunnstoffer',
    image: cosmosImg('star_step8_supernova.jpg'),
    imageCaption:
      'En supernovaeksplosjon slynger nybakte grunnstoffer ut i rommet med titusenvis av kilometer i sekundet, mens restkjernen i midten kollapser.',
    summaryTitle: 'Når jernkjernen gir etter, lyser én døende stjerne sterkere enn milliarder av soler!',
    whatHappens:
      'Idet jernkjernen i superkjempen passerer ca. 1,4 solmasser, mister stjernen fotfestet: uten fusjon i kjernen forsvinner strålingstrykket utover, og tyngdekraften knuser jernkjernen sammen med nesten kvart lysfart på bare et kvart sekund! Ytterlagene raser etter, treffer den ekstremt tette indre kjernen og kastes utover i en gigantisk sjokkbølge: en supernova! I dette ekstreme infernoet er det så mye energi og frie nøytroner at grunnstoffer TYNGRE enn jern (som kobber, sølv, jod og uran) smis og spres ut i rommet. Hva som blir igjen i midten, avhenger nå av hvor tung stjernen var!',
    keyTraits: [
      {
        title: 'Smir grunnstoffene over jern (nr. 27–92)',
        description:
          'Energioverskuddet i eksplosjonen tvinger nøytroner inn i atomkjerner og bygger de tunge grunnstoffene i periodesystemet på bare noen sekunder.',
        icon: 'sparkles',
      },
      {
        title: 'Sprer stjernestøvet ut til nye solsystemer',
        description:
          'Uten supernovaer ville alt karbonet, oksygenet og jernet blitt liggende innelåst i døde stjernekjerner. Supernovaen sprer stoffene OG dytter i gang nye stjernetåker (Steg 1)!',
        icon: 'expand',
      },
      {
        title: 'Restkjernen deler seg i to ekstreme skjebner',
        description:
          'Var stjernen på ~8–20 solmasser, ender restkjernen som nøytronstjerne (Steg 9). Var den enda tyngre (> 20 solmasser), kollapser den helt til et sort hull (Steg 10)!',
        icon: 'orbit',
      },
    ],
    classroomTest:
      'Spør elevene: Hvordan henger Steg 8 (Supernova) direkte sammen med Steg 1 (Stjernetåke)? Svar: Sjokkbølgen og grunnstoffene fra en supernova både «gjødsler» gasskyene med tunge atomer OG gir dyttet som får nye stjerner og planeter til å fødes!',
    didYouKnow:
      'I år 1054 så kinesiske astronomer en «gjestestjerne» som var så lyssterk at den syntes midt på lyse dagen i tre uker! I dag ser vi restene gjennom teleskop som Krabbetåken – med en spinnende nøytronstjerne i midten.',
    examples: [
      'Supernova (kjernekollaps)',
      'Grunnstoffer tyngre enn jern',
      'Krabbetåken (SN 1054)',
      'Nøyttrino-utbrudd',
    ],
  },

  {
    id: 'star_neutron_star',
    stepIndex: 8,
    isMainPath: true,
    parentId: 'star_supernova',
    stepNumber: 9,
    title: 'Nøytronstjerne & Pulsar – En by med mer masse enn Sola',
    shortLabel: 'Nøytronstjerne',
    subtitleTag: 'Sluttpunkt B1 (8–20 solmasser) • Protoner og elektroner klemt sammen til rent nøytronstoff',
    timeAfterBB: 'Startmasse ~8 – 20 solmasser',
    eraLabel: 'Nedre gren • Restkjerne 1,4 – 3 solmasser',
    temperatureLabel: 'Overflate ~600 000 – 1 mill. K',
    x: 2230,
    y: 795,
    cardSide: 'above',
    epochCategory: 'stellar_dawn',
    cosmicTag: 'Diameter ~20 km • ~1,5–2 solmasser',
    traceBadge: 'Sluttpunkt B1 • Kosmisk fyrtårn (pulsar)',
    image: cosmosImg('star_step9_neutron_star.jpg'),
    imageCaption:
      'En hurtigroterende nøytronstjerne (pulsar) på bare ~20 km i diameter, med ekstreme magnetfelt og skarpe strålebunter ut fra de magnetiske polene.',
    summaryTitle: 'Én teskje nøytronstjerne veier en milliard tonn – like mye som et helt fjell!',
    whatHappens:
      'Hvis den tunge stjernen startet livet med rundt 8 til 20 solmasser, stopper kollapsen i supernovaen akkurat i siste liten: trykket er så ekstremt at elektroner presses rett inn i protonene i atomkjernene og danner nøytroner (p⁺ + e⁻ → n⁰). Resultatet er en gigantisk «atomkjerne» av nesten rene nøytroner – en nøytronstjerne! Hele 1,4 til 3 solmasser er presset inn i en kule på bare ca. 20 kilometer i diameter (omtrent på tvers av Oslo). Fordi den krympet så voldsomt, spinner den opptil hundrevis av ganger i sekundet og sender ut strålebunter som et fyrtårn – en pulsar!',
    keyTraits: [
      {
        title: 'Ufattelig tetthet: 20 km bred, tyngre enn Sola',
        description:
          'I vanlige atomer er 99,999999999999 % tomrom. I en nøytronstjerne er alt tomrommet skvist bort slik at en sukkerbit av stoffet ville veid rundt én milliard tonn på Jorda!',
        icon: 'layers',
      },
      {
        title: 'Pulsar – universets mest presise klokke',
        description:
          'Sterke magnetfelt sender strålebunter ut fra polene. Hver gang strålen feier forbi Jorda registrerer radioteleskoper et «pip» med millisekunds presisjon.',
        icon: 'waves',
      },
      {
        title: 'Kollisjoner (kilonova) smir gull og platina',
        description:
          'Når to nøytronstjerner går i bane rundt hverandre og kolliderer, sendes det ut gravitasjonsbølger og enorme mengder gull, platina og uran smis i eksplosjonen!',
        icon: 'sparkles',
      },
    ],
    classroomTest:
      'Da Jocelyn Bell Burnell oppdaget det første jevne radiosignalet fra en pulsar i 1967 (ett blink hvert 1,337 sekund), var signalet så uhyggelig regelmessig at forskerne på spøk kalte kilden «LGM-1» – Little Green Men 1!',
    didYouKnow:
      'I 2017 målte forskere for første gang både gravitasjonsbølger og lys fra to kolliderende nøytronstjerner (GW170817) – og bekreftet at én eneste slik kollisjon produserte gull tilsvarende flere ganger Jordas masse!',
    examples: [
      'Nøytronstjerne',
      'Pulsar',
      'Kilonova (gull-smie)',
      'Gravitasjonsbølger',
    ],
  },

  {
    id: 'star_black_hole',
    stepIndex: 9,
    isMainPath: true,
    parentId: 'star_supernova',
    stepNumber: 10,
    title: 'Sort hull – Når gravitasjonen vinner totalt',
    shortLabel: 'Sort hull',
    subtitleTag: 'Sluttpunkt B2 (> 20 solmasser) • Selv ikke lyset slipper ut innenfor hendelseshorisonten',
    timeAfterBB: 'Startmasse > 20 – 25 solmasser',
    eraLabel: 'Nedre gren • Restkjerne > 3 solmasser',
    temperatureLabel: 'Glovarm gasskive (~10 mill. K) rundt',
    x: 2230,
    y: 1020,
    cardSide: 'below',
    epochCategory: 'modern_cosmos',
    cosmicTag: 'Unnslipningsfart > lysfarten (c)',
    traceBadge: 'Sluttpunkt B2 • Ekstrem krumning av romtid',
    image: cosmosImg('star_step10_black_hole.jpg'),
    imageCaption:
      'Et stellart sort hull omgitt av en glødende akkresjonsskive av gass, der den ekstreme tyngdekraften bøyer selve romtiden og lyset rundt hendelseshorisonten.',
    summaryTitle: 'Universets mest ekstreme sluttpunkt – der stjernenes fysikk møter romtidens gåter',
    whatHappens:
      'For de aller tyngste stjernene i universet (startmasse over ca. 20–25 solmasser, slik at restkjernen etter kollapsen er mer enn ~3 solmasser) finnes det ingen kraft i naturen som klarer å holde imot tyngdekraften – ikke engang nøytrontrykket! Kjernen kollapser fullstendig til et stellart sort hull. Rundt midten oppstår en grense i rommet kalt hendelseshorisonten: innenfor denne grensen er tyngdekraften og krumningen av romtiden så ekstrem at unnslipningsfarten er større enn lysets hastighet (300 000 km/s). Ikke engang lys kan slippe ut!',
    keyTraits: [
      {
        title: 'Hendelseshorisonten – grensen uten retur',
        description:
          'Et sort hull er ikke en kosmisk «støvsuger» som suger til seg alt på lang avstand, men krysser lys eller materie selve hendelseshorisonten, finnes det ingen vei ut igjen.',
        icon: 'eye',
      },
      {
        title: 'Hvordan kan vi «se» noe som er helt svart?',
        description:
          'Vi avslører sorte hull ved å se stjerner som går i rask bane rundt et usynlig punkt, røntgenstråling fra glovarm gass som virvler inn (akkresjonsskive), og gravitasjonsbølger når sorte hull kolliderer!',
        icon: 'telescope',
      },
      {
        title: 'Broen videre til temaene Romtid og Galakser',
        description:
          'Stellare sorte hull har typisk 5–50 solmasser, mens i sentrum av galakser som Melkeveien sitter supermassive sorte hull med millioner til milliarder av solmasser!',
        icon: 'globe',
      },
    ],
    classroomTest:
      'Tankespørsmål til klassen: Hva ville skjedd med Jordas bane rundt Sola dersom Sola på magisk vis plutselig ble byttet ut med et sort hull med NØYAKTIG samme masse som Sola (1 solmasse)? Svar: Ingenting med banen vår! Tyngdekraften i jordbanen avhenger bare av massen og avstanden – det ville bare blitt bekmørkt og iskaldt på Jorda etter 8 minutter!',
    didYouKnow:
      'Hvis du skulle klemme Jorda sammen slik at den ble et sort hull, måtte hele planeten vår presses sammen til en kule på bare 1,8 centimeter – omtrent som en klinkekule!',
    examples: [
      'Stellart sort hull',
      'Hendelseshorisont',
      'Akkresjonsskive',
      'Krumning av romtid',
    ],
  },
];

export const STARS_NODE_MAP: Record<string, CosmicNodeData> = Object.fromEntries(
  STARS_NODES.map((n) => [n.id, n]),
);

export const STARS_CONTROL_QUESTIONS: ControlQuestionItem[] = [
  {
    id: 'star-q1',
    number: 1,
    question:
      'Hva er det som får en stjerne til å lyse i milliarder av år – og hvilke to krefter holder stjernen stabil mens den er på hovedserien?',
    contextHint:
      'Tenk på energikilden i kjernen (Steg 3) og «drakampen» mellom kraften som trekker innover og kraften som presser utover.',
    points: [
      {
        heading: 'Kjernefusjon i stjernekjernen (4 ¹H → ⁴He + energi)',
        badge: ' ≥ 10–15 mill. K',
        detail:
          'I den ekstremt varme og tette kjernen smelter fire hydrogenkjerner (protoner) sammen til én heliumkjerne. Litt av massen går over til ren energi etter Einsteins formel E = mc².',
      },
      {
        heading: 'Hydrostatisk likevekt: Tyngdekraft innover = Trykk utover',
        badge: 'Stabil balanse',
        detail:
          'Stjernens egen tyngdekraft prøver hele tiden å klemme gasskulen sammen innover, mens strålingstrykket og gasstrykket fra fusjonen i kjernen presser like sterkt utover.',
      },
      {
        heading: 'Når hydrogenet i kjernen tar slutt, brytes likevekten',
        badge: 'Slutten på hovedserien',
        detail:
          'Så snart fusjonen i kjernen dabber av, vinner tyngdekraften midlertidig og presser kjernen sammen – det er dette som starter forvandlingen til rød kjempe eller rød superkjempe!',
      },
    ],
    takeaway:
      'Hele stjernens liv er en eneste lang drakamp mellom tyngdekraft (innover) og fusjonstrykk (utover) – når drivstoffet til slutt tar slutt, avgjør massen hvordan drakampen ender!',
  },
  {
    id: 'star-q2',
    number: 2,
    question:
      'Hvorfor ender Sola vår som en hvit dverg, mens en tung stjerne (> 8 solmasser) eksploderer som en supernova og blir til nøytronstjerne eller sort hull?',
    contextHint:
      'Sammenlign den øvre grenen (Steg 4–6) med den nedre grenen (Steg 7–10) i det forgrenede livsløpet!',
    points: [
      {
        heading: 'Sol-lignende stjerner (< 8 solmasser) stopper etter karbon og oksygen',
        badge: 'Øvre gren',
        detail:
          'Middels store stjerner fusjonerer hydrogen til helium og deretter helium til karbon/oksygen i en rød kjempe, men har for liten tyngdekraft til å presse kjernen varm nok for videre fusjon. De blåser ut en planetarisk tåke og etterlater en hvit dverg.',
      },
      {
        heading: 'Tunge stjerner (> 8 solmasser) fusjonerer i løkskall helt opp til jern',
        badge: 'Nedre gren',
        detail:
          'Den enorme massen gir så høyt trykk og temperatur (milliarder av K) at kjernen smir stadig tyngre grunnstoffer helt til jern (Fe). Fordi jern ikke frigjør energi ved fusjon, kollapser kjernen brått i en supernova.',
      },
      {
        heading: 'Restkjernens masse avgjør om det blir nøytronstjerne eller sort hull',
        badge: '8–20 M☉ vs. > 20 M☉',
        detail:
          'Stjerner på ca. 8–20 solmasser etterlater en ekstremt tett nøytronstjerne (~20 km bred). De aller tyngste stjernene (> 20–25 solmasser) har så tung restkjerne at selv ikke nøytrontrykket stopper kollapsen – de blir sorte hull.',
      },
    ],
    comparisonTable: {
      headers: [
        'Stjernens startmasse',
        'Kjempefase & siste fusjon',
        'Død og sluttprodukt',
      ],
      rows: [
        [
          'Lett / middels (< 8 solmasser, som Sola)',
          'Rød kjempe • Stopper ved karbon (C) og oksygen (O)',
          'Planetarisk tåke → Hvit dverg (jordstørrelse)',
        ],
        [
          'Tung stjerne (~8 – 20 solmasser)',
          'Rød superkjempe • Løkskall helt til jern (Fe)',
          'Supernova → Nøytronstjerne / pulsar (~20 km)',
        ],
        [
          'Svært tung stjerne (> 20 – 25 solmasser)',
          'Rød/blå superkjempe • Løkskall helt til jern (Fe)',
          'Supernova / kollaps → Stellart sort hull',
        ],
      ],
    },
    takeaway:
      'Én eneste egenskap ved fødselen – stjernens MASSE – avgjør både hvor varm og blå stjernen er, hvor fort den brenner ut, og om den dør som hvit dverg, nøytronstjerne eller sort hull!',
  },
  {
    id: 'star-q3',
    number: 3,
    question:
      'Hvorfor lever de aller største og tyngste stjernene mye KORTERE enn små og middels store stjerner, selv om de starter med mye mer drivstoff?',
    contextHint:
      'Sammenlign gjerne med forskjellen på en liten sparebil og en gigantisk rakettmotor – og se på fargen til stjernene!',
    points: [
      {
        heading: 'Større masse gir voldsomt mye høyere trykk og temperatur i kjernen',
        badge: 'Ekstrem fusjonstakt',
        detail:
          'For å stå imot den enorme tyngdekraften i en stjerne på 20 solmasser må kjernen være ekstremt varm. Da går hydrogenfusjonen tusenvis til titusenvis av ganger raskere enn i Sola!',
      },
      {
        heading: 'Tunge stjerner lever «fort og vilt» – små stjerner er gjerrige',
        badge: 'Millioner vs. milliarder år',
        detail:
          'En blåhvit tungvekter bruker opp alt drivstoffet på noen få millioner år. Sola bruker ca. 10 milliarder år, mens små røde dvergstjerner sparer så godt på hydrogenet at de kan lyse i hundrevis av milliarder år!',
      },
      {
        heading: 'Fargen avslører overflatetemperaturen',
        badge: 'Blå > Gul > Rød',
        detail:
          'Blåhvite stjerner har høyest overflatetemperatur (> 25 000 K), gule stjerner som Sola ligger rundt 5800 K, og røde dverger/røde kjemper har lavest overflatetemperatur (~3000 K).',
      },
    ],
    takeaway:
      'En stjerne med 10 ganger så stor masse som Sola har riktignok 10 ganger mer drivstoff, men lyser flere tusen ganger sterkere – og går derfor tom på under en hundredel av tiden!',
  },
  {
    id: 'star-q4',
    number: 4,
    question:
      'Hva menes med at «vi er lagd av stjernestøv» – og hvorfor er atomnummer 26 (jern) et avgjørende vendepunkt inne i stjerner?',
    contextHint:
      'Koble stjernenes livsløp direkte til nabotemaene Big Bang og Grunnstoffer i tankekartet!',
    points: [
      {
        heading: 'Stjerner bygger livets grunnstoffer (karbon, nitrogen, oksygen) fra helium',
        badge: 'Opp til jern (nr. 26)',
        detail:
          'Big Bang ga oss bare hydrogen og helium. Karbonet i cellene våre, oksygenet vi puster og kalsiumet i skjelettet ble smidd ved kjernefusjon inne i tidligere stjerner.',
      },
      {
        heading: 'Jern (Fe) gir ikke energi ved fusjon – det stopper stjernemotoren',
        badge: 'Vendepunkt ved Fe',
        detail:
          'Alle fusjonsreaksjoner opp til jern frigjør energi som holder stjernen oppe. Å smelte jernkjerner sammen til tyngre stoffer krever derimot energi, så en jernkjerne kan ikke opprettholde strålingstrykket.',
      },
      {
        heading: 'Supernovaer og nøytronstjerne-kollisjoner skaper og sprer de tyngste stoffene',
        badge: 'Over nr. 26',
        detail:
          'I supernovaeksplosjoner og kilonova-kollisjoner mellom nøytronstjerner smis tunge stoffer som kobber, jod, sølv, gull og uran – samtidig som eksplosjonene slynger alle grunnstoffene ut til nye stjernetåker og planeter.',
      },
    ],
    takeaway:
      'Uten tunge stjerner som levde raskt og eksploderte som supernovaer før Sola ble født, ville det verken fantes steinplaneter som Jorda, jern i blodet vårt eller gull på fingeren!',
  },
];
