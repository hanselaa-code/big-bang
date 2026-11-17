import {
  cosmosImg,
  type ControlQuestionItem,
  type CosmicNodeData,
} from './bigBangData';

export type GalaxyZoneCategory =
  | 'milky_way_home'
  | 'types_and_dark_matter'
  | 'cosmic_web_scale';

export interface GalaxyNodeData extends CosmicNodeData {
  zoneCategory: GalaxyZoneCategory;
}

export const GALAXIES_MAIN_STEP_IDS: string[] = [
  'gal_island_universes',
  'gal_milky_way_home',
  'gal_sagittarius_core',
  'gal_types_hubbles',
  'gal_andromeda_collision',
  'gal_dark_matter_halo',
  'gal_quasars_agn',
  'gal_first_baby_galaxies',
  'gal_clusters_laniakea',
  'gal_cosmic_web',
];

export const GALAXIES_NODES: GalaxyNodeData[] = [
  // ====================================================================
  // SONE 1 (STEG 1–3): HJEMMEGALAKSEN MELKEVEIEN & GALAKSESENTERET
  // ====================================================================
  {
    id: 'gal_island_universes',
    stepIndex: 0,
    isMainPath: true,
    parentId: null,
    stepNumber: 1,
    title: 'Hva er en galakse? – Enorme øyer av stjerner i verdensrommet',
    shortLabel: 'Stjerneøyer i rommet',
    subtitleTag:
      'Milliarder av stjerner, gasskyer, støv, planeter og mørk materie bundet sammen av tyngdekraft',
    timeAfterBB: '~2 000 mrd. galakser',
    eraLabel: 'Sone 1 • Vår galakse',
    temperatureLabel: '10⁷ – 10¹² stjerner per galakse',
    x: 230,
    y: 652,
    cardSide: 'below',
    zoneCategory: 'milky_way_home',
    epochCategory: 'galactic_solar',
    cosmicTag: 'Stjerner + Gass + Støv + Mørk materie = Galakse',
    traceBadge: 'Edwin Hubble (1924) • Deep Field',
    image: cosmosImg('gal_step1_island_universes.jpg'),
    imageCaption:
      'Når Hubble- og James Webb-teleskopet stirrer på en knøttliten «tom» flekk av nattehimmelen, dukker tusenvis av fjerne galakser frem – hver av dem en egen by av milliarder av stjerner!',
    summaryTitle:
      'For bare hundre år siden trodde mange forskere at Melkeveien var HELE universet!',
    whatHappens:
      'Lenge så astronomene svake, tåkete lysflekker («spiraltåker») i teleskopene sine uten å vite om de var små gasskyer inne i vår egen Melkevei eller egne, fjerne stjernesystemer. I 1924 målte Edwin Hubble avstanden til Andromedatåken ved hjelp av blinkende kefeide-stjerner – og beviste at den lå millioner av lysår utenfor Melkeveien! Over natten ble det kjente universet ufattelig mye større: En GALAKSE er et gigantisk system av stjerner, gass, kosmisk støv, stjernerester og mørk materie som holdes samlet av sin egen felles tyngdekraft. I det observerbare universet finnes det rundt to billioner (2 000 milliarder) galakser!',
    keyTraits: [
      {
        title: 'Ikke bare stjerner – gass og støv er råstoffet',
        description:
          'Mellom stjernene i en galakse svever det interstellare mediet: tynne skyer av hydrogen, helium og stjernestøv der nye stjerner og planeter stadig fødes.',
        icon: 'sparkles',
      },
      {
        title: 'Enorme spenn i størrelse',
        description:
          'De minste dverggalaksene teller bare noen få millioner stjerner, mens de største kjempegalaksene i sentrum av galaksehoper rommer over ti tusen milliarder (10¹³) stjerner!',
        icon: 'scale',
      },
      {
        title: 'Hubble & Webb Deep Field: Tusenvis av galakser bak et sandkorn',
        description:
          'Holder du et sandkorn på strak arm mot nattehimmelen, skjuler den lille flekken alene flere tusen fjerne galakser i dybden bak seg!',
        icon: 'telescope',
      },
    ],
    classroomTest:
      'Spør klassen: Når du ser opp på en stjerneklar høsthimmel uten kikkert – hvor mange av enkeltstjernene du ser ligger i ANDRE galakser? (Ingen enkeltstjerner! Hver eneste enkeltestjerne du ser med det blotte øye hører til vår egen Melkevei – men som en svak tåkeflekk i stjernebildet Andromeda kan du faktisk skimte lyset fra hele Andromedagalaksen 2,5 millioner lysår unna!)',
    didYouKnow:
      'Ordet «galakse» kommer fra det greske ordet «galaxias kyklos» – som rett og slett betyr «melkesirkelen», oppkalt etter det hvite lysbåndet fra Melkeveien over nattehimmelen!',
    examples: [
      'Galakse («stjerneøy»)',
      'Edwin Hubble (1924)',
      'Interstellart gass & støv',
      'Deep Field-observasjoner',
    ],
  },

  {
    id: 'gal_milky_way_home',
    stepIndex: 1,
    isMainPath: true,
    parentId: 'gal_island_universes',
    stepNumber: 2,
    title: 'Melkeveien – Vår egen stavspiral og Solas plass i skiven',
    shortLabel: 'Melkeveien (Stavspiral)',
    subtitleTag:
      '100–400 milliarder stjerner i en flat skive som er 100 000 lysår bred – og vi bor i Orion-armen!',
    timeAfterBB: 'Diameter ≈ 100 000 lysår',
    eraLabel: 'Sone 1 • Vår galakse',
    temperatureLabel: '1 kosmisk år ≈ 230 mill. år',
    x: 475,
    y: 440,
    cardSide: 'above',
    zoneCategory: 'milky_way_home',
    epochCategory: 'galactic_solar',
    cosmicTag: 'Sola ligger ~26 000 lysår fra sentrum og suser i 220 km/s!',
    traceBadge: 'Vårt hjem • Stavspiral (SBbc)',
    image: cosmosImg('gal_step2_milky_way_structure.jpg'),
    imageCaption:
      'Melkeveien sett utenfra ville vist en lysende gulhvit stav av eldre stjerner i midten og feiende blåhvite spiralarmer fulle av rosa stjernetåker – med Sola litt over halvveis ut fra sentrum.',
    summaryTitle:
      'Hvorfor ser Melkeveien ut som et smalt lysbånd over himmelen? Fordi vi bor INNI pannekaka og ser langs kanten!',
    whatHappens:
      'Vi har aldri kunnet sende et kamera ut av Melkeveien for å ta en selfie av hele galaksen vår – likevel har radio-, infrarød- og romteleskoper som Gaia kartlagt hjemmet vårt i detalj! Melkeveien er en STAVSPIRALGALAKSE med mellom 100 og 400 milliarder stjerner. Stjerneskiven er rundt 100 000 lysår i tverrsnitt, men bare ca. 1 000 lysår tykk – tynnere i forhold til bredden sin enn en vanlig pannekake! Solsystemet vårt ligger i et rolig nabolag kalt Orion-armen, rundt 26 000 lysår fra galaksesenteret.',
    keyTraits: [
      {
        title: 'Tre hoveddeler: Sentralbule/stav, tynn skive og kuleformet halo',
        description:
          'Innerst ligger en avlang stav av eldre gulrøde stjerner, utenfor ligger den flate skiven med blå spiralarmer og støv, og rundt det hele svever eldgamle kulehoper i en stor sfærisk halo.',
        icon: 'layers',
      },
      {
        title: 'Ett «kosmisk år» tar 230 millioner år',
        description:
          'Hele Solsystemet suser rundt Melkeveiens sentrum med ca. 220 km/s (~800 000 km/t!). Sist gang Sola var på samme sted i banen sin, begynte de første dinosaurene å vandre på Jorda!',
        icon: 'orbit',
      },
      {
        title: 'Spiralarmene er kosmiske «trafikkorker» av stjernefødsler',
        description:
          'Stjerner sitter ikke fast i én arm hele livet – spiralarmene er tetthetsbølger der gass presses sammen slik at nye, lyssterke blå stjerner tennes!',
        icon: 'star',
      },
    ],
    classroomTest:
      'Bruk en flat tallerken eller en frisbee i klasserommet: Hold en kulepenn litt ut fra midten inne i skiven. Ser du rett opp eller rett ned ut av skiven, er det få stjerner i synslinjen. Ser du langs skiven inn mot midten, ser du et tett hvitt bånd av millioner av fjerne stjerner – Melkeveibåndet!',
    didYouKnow:
      'Siden Solsystemet ble født for 4,6 milliarder år siden, har Sola og Jorda rukket å fullføre rundt 20 runder rundt sentrum av Melkeveien – solen vår er altså bare «20 kosmiske år» gammel!',
    examples: [
      'Stavspiralgalakse',
      'Orion-armen (26 000 lysår)',
      'Kosmisk år (~230 mill. år)',
      'Gaia-romteleskopet',
    ],
  },

  {
    id: 'gal_sagittarius_core',
    stepIndex: 2,
    isMainPath: true,
    parentId: 'gal_milky_way_home',
    stepNumber: 3,
    title: 'Galaksesenteret & Sagittarius A* – Det supermassive sorte hullet i midten',
    shortLabel: 'Sagittarius A* (4 mill. M☉)',
    subtitleTag:
      'Bak tette støvskyer i Skytten kretser stjerner i rasende fart rundt en usynlig kjempe på 4 millioner solmasser',
    timeAfterBB: 'Masse ≈ 4,1 mill. solmasser',
    eraLabel: 'Sone 1 • Vår galakse',
    temperatureLabel: 'Stjernefart opp mot 7 650 km/s!',
    x: 720,
    y: 652,
    cardSide: 'below',
    zoneCategory: 'milky_way_home',
    epochCategory: 'galactic_solar',
    cosmicTag: 'Nesten ALLE store galakser har et supermassivt sort hull i kjernen!',
    traceBadge: 'Nobelpris i fysikk 2020 • EHT-bilde 2022',
    image: cosmosImg('gal_step3_sagittarius_core.jpg'),
    imageCaption:
      'Gjennom 30 år med infrarøde målinger fulgte astronomene stjerner som svingte i skarpe ellipser rundt et tilsynelatende tomt punkt – beviset på Melkeveiens supermassive sorte hull, Sagittarius A*!',
    summaryTitle:
      'Hvordan oppdager man noe helt beksvart bak tette støvskyer 26 000 lysår unna? Man ser på stjernene som danser rundt det!',
    whatHappens:
      'Ser vi med vanlige øyne mot stjernebildet Skytten (Sagittarius), sperrer tykke støvskyer for utsikten inn til Melkeveiens hjerte. Men da Reinhard Genzel og Andrea Ghez pekte kraftige infrarøde teleskoper dit år etter år, så de et utrolig skue: En sverm av stjerner (blant annet stjernen S2) suste rundt et usynlig punkt med hastigheter på over 25 millioner km/t – mer enn 2,5 % av lysets fart! Bare én ting i fysikken kan pakke 4,1 millioner solmasser inn på et område mindre enn Merkurs bane uten å sende ut lys: et SUPERMASSIVT SORT HULL som har fått navnet Sagittarius A* (uttales «A-stjerne»).',
    keyTraits: [
      {
        title: 'Ikke en «kosmisk støvsuger» som sluker hele galaksen',
        description:
          'Selv om 4 millioner solmasser høres enormt ut, utgjør Sagittarius A* bare en brøkdel av en promille av Melkeveiens totalmasse – stjernene lenger ute går trygt i vanlige baner!',
        icon: 'orbit',
      },
      {
        title: 'En sovende kjempe sammenlignet med andre galakser',
        description:
          'Akkurat nå faller veldig lite gass inn i Sagittarius A*, så vårt sorte hull «småspiser» bare litt – men spor av enorme gassbobler over og under skiven tyder på utbrudd for noen millioner år siden!',
        icon: 'flame',
      },
      {
        title: 'Fotografert direkte av Event Horizon Telescope i 2022',
        description:
          'Sammenkoblede radioteleskoper over hele jordkloden tok et direkte bilde av den glødende gassringen rundt skyggen av Sagittarius A*!',
        icon: 'eye',
      },
    ],
    classroomTest:
      'Avliv en vanlig myte i klassen: «Er det Sagittarius A* i midten som holder hele Melkeveien samlet, akkurat som Sola holder Solsystemet samlet?» (Nei! Sola har 99,86 % av massen i Solsystemet, mens Sagittarius A* bare har rundt 0,0003 % av Melkeveiens masse – det er den samlede tyngdekraften fra alle stjernene, gassen og den mørke materien som holder galaksen samlet!)',
    didYouKnow:
      'Astronomene oppdaget at nesten HVER ENESTE store galakse i universet har sitt eget supermassive sorte hull i sentrum – og merkelig nok vokser massen til det sorte hullet nesten alltid i fast takt med størrelsen på galaksens sentralbule!',
    examples: [
      'Sagittarius A* (Sgr A*)',
      'Supermassivt sort hull',
      'Stjernen S2 (infrarøde baner)',
      'Event Horizon Telescope',
    ],
  },

  // ====================================================================
  // SONE 2 (STEG 4–7): GALAKSETYPER, KOLLISJONER & USYNLIG MØRK MATERIE
  // ====================================================================
  {
    id: 'gal_types_hubbles',
    stepIndex: 3,
    isMainPath: true,
    parentId: 'gal_sagittarius_core',
    stepNumber: 4,
    title: 'Galaksenes familiealbum – Spiral-, ellipse- og uregelmessige galakser',
    shortLabel: 'Spiral, Ellipse & Uregelmessig',
    subtitleTag:
      'Fra blå, livlige stjernefabrikker i skiver til gylne kjempekuler av eldre stjerner',
    timeAfterBB: 'Hubbles stemmegaffel (1926)',
    eraLabel: 'Sone 2 • Typer & Mørk materie',
    temperatureLabel: 'Blå = Unge stjerner • Gulrød = Eldre',
    x: 965,
    y: 440,
    cardSide: 'above',
    zoneCategory: 'types_and_dark_matter',
    epochCategory: 'stellar_dawn',
    cosmicTag: 'Fargen og formen røper om galaksen fortsatt føder nye stjerner!',
    traceBadge: 'Klassifisering • S / SB • E • Irr',
    image: cosmosImg('gal_step4_galaxy_types_trio.jpg'),
    imageCaption:
      'De tre hovedfamiliene av galakser side om side: En blåhvit spiralgalakse rik på kald gass, en jevn gullgul ellipsegalakse dominert av eldre stjerner, og en fargerik uregelmessig dverggalakse.',
    summaryTitle:
      'Bare ved å se på formen og fargen på en galakse ser du med én gang livshistorien dens!',
    whatHappens:
      'Da Edwin Hubble begynte å sortere galaksene han fotograferte, delte han dem inn i et berømt skjema («Hubbles stemmegaffel») med tre hovedfamilier: SPIRALGALAKSER (vanlige spiraler S og stavspiraler SB), ELLIPSEGALAKSER (E) og UREGELMESSIGE GALAKSER (Irr). Kobler vi dette til det vi lærte under Stjerner og Stråling, skjønner vi til og med fargene deres! Blåhvite spiralarmer lyser opp av kortlivede, brennhete unge kjempe-stjerner – et sikkert tegn på at galaksen er full av kald gass og føder nye stjerner akkurat nå!',
    keyTraits: [
      {
        title: 'Spiral- og stavspiralgalakser (S / SB): Flate, roterende skiver',
        description:
          'Som Melkeveien og Andromeda: Har roterende skive med gass, støv og blåhvite spiralarmer rundt en eldre, gulere sentralbule (~2/3 av nærliggende lyse galakser).',
        icon: 'orbit',
      },
      {
        title: 'Ellipsegalakser (E): Gylne «pensjonist-byer» fra dverger til giganter',
        description:
          'Runde eller eggformede svermer der stjernene går i kryssende baner i alle retninger. De har brukt opp eller mistet gassen sin, føder nesten ingen nye stjerner og lyser varmt gulrødt!',
        icon: 'sun',
      },
      {
        title: 'Uregelmessige galakser (Irr): Gassrike og påvirket av naboer',
        description:
          'Mangler både fast skive og symmetrisk kjerne – ofte mindre dverggalakser (som Den store og lille magellanske sky på sørhimmelen) som vris av tyngdekraften fra større naboer.',
        icon: 'sparkles',
      },
    ],
    classroomTest:
      'Vis bildet på storskjermen og spør klassen: Hvorfor ser vi nesten aldri knallblå stjerner i en stor, gammel ellipsegalakse? (Fordi store blå stjerner lever bare noen få millioner år og sprenger som supernovaer – når gassen til nye stjernefødsler er slutt, står bare de seiglivede gule og røde mindre stjernene igjen!)',
    didYouKnow:
      'Edwin Hubble kalte først ellipsegalakser for «tidlige» og spiraler for «sene» fordi han trodde kuler flatet seg ut til spiraler – i dag vet vi at det ofte skjer stikk motsatt: Når to spiralgalakser kolliderer, smelter de sammen til en ellipsegalakse!',
    examples: [
      'Spiral- & stavspiralgalakse',
      'Ellipsegalakse',
      'Uregelmessig galakse',
      'Magellanskyene',
    ],
  },

  {
    id: 'gal_andromeda_collision',
    stepIndex: 4,
    isMainPath: true,
    parentId: 'gal_types_hubbles',
    stepNumber: 5,
    title: 'Galaksekollisjoner – Når Andromeda og Melkeveien smelter sammen',
    shortLabel: 'Galaksekollisjoner',
    subtitleTag:
      'Nabogalaksen Andromeda suser mot oss i 110 km/s – om ~4,5 milliarder år møtes vi i en kosmisk dans!',
    timeAfterBB: 'Sammenstøt om ~4,5 mrd. år',
    eraLabel: 'Sone 2 • Typer & Mørk materie',
    temperatureLabel: 'Avstand nå ≈ 2,5 mill. lysår',
    x: 1210,
    y: 652,
    cardSide: 'below',
    zoneCategory: 'types_and_dark_matter',
    epochCategory: 'galactic_solar',
    cosmicTag: 'Gasskyene kolliderer og tenner stjerner – men enkeltstjernene bommer!',
    traceBadge: 'Blåforskjøvet nabo • «Milkomeda»',
    image: cosmosImg('gal_step5_andromeda_collision.jpg'),
    imageCaption:
      'Når to store spiralgalakser møtes, trekker tyngdekraften ut lange lysende tidevannshaler av stjerner og gass før kjernene etter hundrevis av millioner år roer seg til én stor ellipsegalakse.',
    summaryTitle:
      'Hundrevis av milliarder stjerner krysser rett gjennom hverandre – uten at to eneste stjerner krasjer front mot front!',
    whatHappens:
      'Mens fjerne galakser fjerner seg med universets utvidelse, trekker den lokale tyngdekraften Melkeveien og vår store søstergalakse ANDROMEDAGALAKSEN (M31, ca. 2,5 millioner lysår unna) rett mot hverandre med rundt 110 km/s (~400 000 km/t)! Om rundt 4–5 milliarder år – omtrent samtidig som Sola går inn i sin siste fase som rød kjempe – vil de to galaksene sveipe gjennom hverandre, slynge ut gigantiske tidevannshaler av stjerner og til slutt smelte sammen til én svær ellipsegalakse som astronomene på spøk kaller «Milkomeda»!',
    keyTraits: [
      {
        title: 'Hvorfor krasjer ikke stjernene i hverandre?',
        description:
          'Avstanden mellom enkeltstjerner er så ufattelig enorm i forhold til stjernenes størrelse at de to stjernesvermene passerer gjennom hverandre som to svermer av mygg med kilometers mellomrom!',
        icon: 'scale',
      },
      {
        title: 'Gasskyene krasjer – og utløser et fyrverkeri av nye stjerner!',
        description:
          'Enorme gasskyer er så utstrakte at de faktisk kolliderer, komprimeres voldsomt og utløser en eksplosiv bølge av stjernefødsler («starburst»)!',
        icon: 'flame',
      },
      {
        title: 'De to supermassive sorte hullene smelter sammen i midten',
        description:
          'Innerst i den nye kjempegalaksen vil Sagittarius A* og Andromedas langt tyngre sorte hull (~100 mill. M☉) til slutt gå i spiral inn i hverandre og sende ut kraftige gravitasjonsbølger!',
        icon: 'waves',
      },
    ],
    classroomTest:
      'Konkret skala-bilde til klassen: Hvis Sola krympes til en femkroning midt i Oslo, ligger nærmeste nabostjerne (Proxima Centauri) som en ert helt nede i Roma! Da skjønner elevene umiddelbart hvorfor to galakser kan gli gjennom hverandre uten at stjerner kolliderer!',
    didYouKnow:
      'Melkeveien er allerede en «kannibal» på mindre skala: Gaia-romteleskopet fant spor etter en dverggalakse («Gaia-Enceladus») som kolliderte med og ble slukt av den unge Melkeveien for rundt 10 milliarder år siden!',
    examples: [
      'Andromedagalaksen (M31)',
      'Galaksesammensmelting',
      'Tidevannshaler & Starburst',
      '«Milkomeda»',
    ],
  },

  {
    id: 'gal_dark_matter_halo',
    stepIndex: 5,
    isMainPath: true,
    parentId: 'gal_andromeda_collision',
    stepNumber: 6,
    title: 'Mørk materie-haloen – Det usynlige skjelettet som holder galaksene sammen',
    shortLabel: 'Mørk materie-haloen',
    subtitleTag:
      'Ytterst i galaksene suser stjernene altfor raskt rundt – 85 % av all materie er helt usynlig!',
    timeAfterBB: '~5× mer mørk enn vanlig materie',
    eraLabel: 'Sone 2 • Typer & Mørk materie',
    temperatureLabel: 'Flat rotasjonskurve!',
    x: 1455,
    y: 440,
    cardSide: 'above',
    zoneCategory: 'types_and_dark_matter',
    epochCategory: 'modern_cosmos',
    cosmicTag: 'Uten den enorme mørk-materie-haloen ville spinnende galakser blitt slynget i oppløsning!',
    traceBadge: 'Vera Rubin (1970-tallet) • Kosmisk lim',
    image: cosmosImg('gal_step6_dark_matter_halo.jpg'),
    imageCaption:
      'Den lysende stjerneskiven vi ser i teleskoper er bare en liten juvel midt inni en mye større, kuleformet sky (halo) av usynlig mørk materie som strekker seg hundrevis av tusen lysår utover.',
    summaryTitle:
      'Når vi veier en galakse med tyngdekraft, er den rundt SEKS ganger tyngre enn alle stjernene og gassen vi kan se!',
    whatHappens:
      'På 1970-tallet målte astronomen VERA RUBIN hastigheten til gass og stjerner på ulik avstand fra sentrum i spiralgalakser (ved hjelp av dopplerforskyvning i spektrallinjene!). I Solsystemet går de ytterste planetene mye saktere enn de innerste fordi nesten all massen ligger i midten. Alle forventet det samme ytterst i galaksene – men Rubin oppdaget noe sjokkerende: Stjernene helt ytterst suste av gårde like fort som stjernene lenger inne (en «flat rotasjonskurve»)! Med bare den synlige stjernemassen skulle sentrifugaleffekten ha slynget galaksen i fillebiter for milliarder av år siden. Konklusjonen var uunngåelig: Hver galakse ligger begravd inni en gigantisk, usynlig HALO AV MØRK MATERIE!',
    keyTraits: [
      {
        title: 'Hva betyr egentlig «mørk» i mørk materie?',
        description:
          'Den er ikke svart støv som skygger for lys – den er fullstendig GJENNOMSIKTIG! Den verken sender ut, absorberer eller reflekterer noen del av det elektromagnetiske spekteret.',
        icon: 'eye',
      },
      {
        title: 'Tre uavhengige bevis peker på nøyaktig samme mengde',
        description:
          '1) Flate rotasjonskurver i spiralgalakser, 2) sterke gravitasjonslinser rundt galaksehoper (Bullet Cluster), og 3) mønsteret i den kosmiske bakgrunnsstrålingen (CMB)!',
        icon: 'compass',
      },
      {
        title: 'En av moderne fysikks største uløste gåter',
        description:
          'Forskerne vet hvor den mørke materien ligger og hvor mye den veier via tyngdekraften, men jakter fortsatt i dype underjordiske detektorer på hvilken ny elementærpartikkel den består av!',
        icon: 'atom',
      },
    ],
    classroomTest:
      'Tegn den lille rotasjonskurve-grafen på tavla eller pek på midtpanelet i modellen: Spør elevene hva som skjer på en karusell på tivoli hvis den snurrer altfor fort rundt og du slipper taket! (Du slynges rett ut – og det eneste som holder ytterkanten av Melkeveien på plass i 220 km/s er tyngdekraften fra den usynlige mørk-materie-haloen!)',
    didYouKnow:
      'Allerede i 1933 la den sveitsiske astronomen Fritz Zwicky merke til at galaksene i Coma-hopen beveget seg altfor fort til å holdes samlet av stjernene alene, og kalte det skjulte stoffet «dunkle Materie» – men det tok over 40 år før Vera Rubins presise målinger overbeviste hele forskerverdenen!',
    examples: [
      'Mørk materie (~27 % av universet)',
      'Vera Rubin & rotasjonskurver',
      'Mørk materie-halo',
      'Gravitasjonslinser (Bullet Cluster)',
    ],
  },

  {
    id: 'gal_quasars_agn',
    stepIndex: 6,
    isMainPath: true,
    parentId: 'gal_dark_matter_halo',
    stepNumber: 7,
    title: 'Aktive galaksekjerner & Kvasarer – Når sorte hull overstråler hele galaksen',
    shortLabel: 'Kvasarer & Jetstråler',
    subtitleTag:
      'Supermassive sorte hull i etegilde som sender ut stråling og plasma-jetter over hundrevis av tusen lysår',
    timeAfterBB: 'Opptil 1 000× Melkeveiens lysstyrke!',
    eraLabel: 'Sone 2 • Typer & Mørk materie',
    temperatureLabel: 'Sorte hull på milliarder M☉',
    x: 1700,
    y: 652,
    cardSide: 'below',
    zoneCategory: 'types_and_dark_matter',
    epochCategory: 'stellar_dawn',
    cosmicTag: 'Gassen utenfor hendelseshorisonten blir så glovarm at den lyser tvers gjennom universet!',
    traceBadge: 'Universets fyrtårn • AGN & Kvasarer',
    image: cosmosImg('gal_step7_quasar_jets.jpg'),
    imageCaption:
      'I en aktiv galaksekjerne virvler enorme gassmengder ned i en glovarm akkresjonsskive rundt et supermassivt sort hull og skyter tvilling-jetstråler av ladde partikler langt ut i verdensrommet.',
    summaryTitle:
      'Hvordan kan de mest «sorte» objektene i universet samtidig skape de aller MEST LYSSTERKE fyrtårnene som finnes?',
    whatHappens:
      'På 1960-tallet fant radioastronomer mystiske lysprikker som så ut som vanlige enkeltstjerner på bilder, men som hadde gigantisk rødforskyvning – de lå milliarder av lysår unna! De fikk navnet KVASARER («quasi-stellar objects»). For å skinne så sterkt på så enorm avstand måtte et område ikke mye større enn Solsystemet vårt lyse opp mot TUSEN GANGER sterkere enn alle de 200 milliarder stjernene i Melkeveien til sammen! Forklaringen er ekstrem fysikk: Når gassrik galaksekollisjon fôrer et supermassivt sort hull med store mengder gass, gnisser gassen i en spinnende AKKRESJONSSKIVE UTVENDIG for hendelseshorisonten til millioner av grader, mens magnetfelt skyter ut smale jetstråler med nesten lysets fart!',
    keyTraits: [
      {
        title: 'Lyset kommer fra skiven UTENFOR det sorte hullet',
        description:
          'Ingenting slipper ut fra selve hendelseshorisonten – men friksjon og magnetkrefter i gassen som står i kø på utsiden gjør om opptil 10–40 % av massens hvileenergi (E = mc²) til stråling!',
        icon: 'zap',
      },
      {
        title: 'Vanligere i det unge universet enn i dag',
        description:
          'For 8–11 milliarder år siden var galaksene fullere av kald gass og kolliderte mye oftere. Derfor var «kvasar-epoken» på sitt mest intense i universets ungdom!',
        icon: 'clock',
      },
      {
        title: 'Jetstrålene regulerer stjernefødslene i vertsgalaksen',
        description:
          'De voldsomme vinden og jetstrålene fra et aktivt sort hull kan faktisk blåse kald gass ut av galaksen og skru AV videre stjernefødsler!',
        icon: 'flame',
      },
    ],
    classroomTest:
      'Sammenlign effektiviteten med klassen: Kjernefusjon inne i Sola gjør bare 0,7 % av hydrogenmassen om til energi. En akkresjonsskive rundt et roterende supermassivt sort hull kan gjøre over 30 % av den fallende massen om til ren strålingsenergi – over 40 ganger mer effektivt enn kjernefusjon!',
    didYouKnow:
      'Den lyssterkeste kjente kvasaren (J0529-4351, beskrevet i 2024) sluker gass tilsvarende ÉN HEL SOL HVER ENESTE DAG, og akkresjonsskiven dens skinner 500 billioner (500 000 milliarder) ganger sterkere enn Sola vår!',
    examples: [
      'Kvasar (Quasar)',
      'Aktiv galaksekjerne (AGN)',
      'Akkresjonsskive',
      'Relativistiske jetstråler',
    ],
  },

  // ====================================================================
  // SONE 3 (STEG 8–10): FRA URGALAKSER TIL DET KOSMISKE NETTVERKET
  // ====================================================================
  {
    id: 'gal_first_baby_galaxies',
    stepIndex: 7,
    isMainPath: true,
    parentId: 'gal_quasars_agn',
    stepNumber: 8,
    title: 'Universets første «babygalakser» – Byggesteinene James Webb ser i urtiden',
    shortLabel: 'De første urgalaksene',
    subtitleTag:
      'Kompakte, gassrike og overraskende lyssterke dverggalakser bare 200–400 millioner år etter Big Bang',
    timeAfterBB: 't ≈ 200–400 mill. år',
    eraLabel: 'Sone 3 • Det kosmiske nettverket',
    temperatureLabel: 'Rødforskyvning z > 10–14!',
    x: 1945,
    y: 440,
    cardSide: 'above',
    zoneCategory: 'cosmic_web_scale',
    epochCategory: 'stellar_dawn',
    cosmicTag: 'Små urgalakser smeltet steg for steg sammen til store galakser som Melkeveien!',
    traceBadge: 'James Webb-rekorder • Kosmisk daggry',
    image: cosmosImg('gal_step8_baby_proto_galaxies.jpg'),
    imageCaption:
      'I det unge universet var galaksene mye mindre, tettere og mer klumpete enn dagens elegante spiraler – og de vokste raskt langs trådene av mørk materie og ur-hydrogengass.',
    summaryTitle:
      'Store galakser ble ikke født ferdig utvokst – de ble murt opp av hundrevis av små urgalakser!',
    whatHappens:
      'Etter de «mørke århundrene» etter Big Bang begynte tyngdekraften fra de tetteste lommene av mørk materie å trekke ur-gass av hydrogen og helium sammen. Rundt 200–400 millioner år etter Big Bang tentes de aller første, små URGALAKSENE! Takket være James Webb-romteleskopets store infrarøde gullspeil kan vi i dag se lyset fra galakser som JADES-GS-z14-0 fra da universet bare var rundt 290 millioner år gammelt (2 % av sin nåværende alder!). Disse «babygalaksene» var bare en brøkdel så brede som Melkeveien, men sydet av intense stjernefødsler som sendte ut UV-stråling og gjorde verdensrommet ionisert og klart igjen («reioniseringen»).',
    keyTraits: [
      {
        title: 'Hierarkisk vekst: Fra små klosser til store spiraler',
        description:
          'Gjennom milliarder av år fløt kald gass inn langs gassfilamenter mens små dverggalakser kolliderte og smeltet sammen til stadig større skive- og ellipsegalakser.',
        icon: 'layers',
      },
      {
        title: 'James Webb fant uventet modne og lyssterke urgalakser',
        description:
          'Et av nåtidens mest spennende forskningsfelt er at James Webb har oppdaget flere overraskende lyssterke galakser og tunge sorte hull tidligere etter Big Bang enn gamle modeller spådde!',
        icon: 'telescope',
      },
      {
        title: 'Kjemisk rene i starten – beriket av supernovaer etter hvert',
        description:
          'De aller første galaksene inneholdt nesten bare hydrogen og helium fra Big Bang, før raske supernovaer begynte å krydre gassen med karbon, oksygen og støv.',
        icon: 'atom',
      },
    ],
    classroomTest:
      'Vis hvor kult naturvitenskap i sanntid er: Fortell elevene at rekorden for «universets eldste kjente galakse» har blitt slått flere ganger de siste årene av James Webb – vitenskap er ikke en ferdigskrevet bok, men et detektivarbeid som pågår akkurat nå!',
    didYouKnow:
      'Lyset fra urgalaksen JADES-GS-z14-0 ble sendt ut for over 13,5 milliarder år siden – men fordi universet har utvidet seg hele veien mens lyset var i fart, ligger selve galaksen i dag over 33 milliarder lysår unna oss!',
    examples: [
      'Urgalakser (Protogalakser)',
      'Hierarkisk galaksevekst',
      'Reioniseringsepoken',
      'JADES-GS-z14 (James Webb)',
    ],
  },

  {
    id: 'gal_clusters_laniakea',
    stepIndex: 8,
    isMainPath: true,
    parentId: 'gal_first_baby_galaxies',
    stepNumber: 9,
    title: 'Den lokale gruppen, Galaksehoper & Laniakea – Vår fulle kosmiske adresse',
    shortLabel: 'Hoper & Laniakea',
    subtitleTag:
      'Galakser bor sjelden alene – fra våre ~80 naboer i Den lokale gruppen til superhopen Laniakea!',
    timeAfterBB: 'Laniakea ≈ 100 000 galakser',
    eraLabel: 'Sone 3 • Det kosmiske nettverket',
    temperatureLabel: 'Bredde ≈ 520 mill. lysår',
    x: 2190,
    y: 652,
    cardSide: 'below',
    zoneCategory: 'cosmic_web_scale',
    epochCategory: 'modern_cosmos',
    cosmicTag: 'Jorda → Solsystemet → Melkeveien → Den lokale gruppen → Laniakea!',
    traceBadge: 'Kosmisk adresse • Galaksehoper',
    image: cosmosImg('gal_step9_galaxy_cluster.jpg'),
    imageCaption:
      'En rik galaksehop rommer hundrevis eller tusenvis av galakser pakket i glovarm, røntgenlysende gass og en enorm felles brønn av mørk materie som bøyer lyset fra enda fjernere galakser.',
    summaryTitle:
      'Skulle et postbud fra andre siden av universet levere et brev til klasserommet ditt, må det ha hele den kosmiske adressen!',
    whatHappens:
      'Akkurat som stjerner samler seg i galakser, samler galaksene seg i familier og storbyer styrt av tyngdekraften! Melkeveien, Andromedagalaksen, Triangelgalaksen (M33) og rundt 80 mindre dverggalakser utgjør sammen vårt nærmeste nabolag: DEN LOKALE GRUPPEN (~10 millioner lysår bred). Lenger ut samles hundrevis til tusenvis av galakser i tette GALAKSEHOPER (som Virgo-hopen med over 1 300 galakser) – de største enkeltstrukturene i universet som holdes permanent samlet mot rommets utvidelse. Og i 2014 kartla astronomen Brent Tully og teamet hans hvordan vår lokale gruppe og Virgo-hopen inngår i en gigantisk elvestrøm av over 100 000 galakser kalt superhopen LANIAKEA!',
    keyTraits: [
      {
        title: 'Den lokale gruppen: To store søstre og et følge av dverggalakser',
        description:
          'Andromeda og Melkeveien står for over 90 % av massen i vårt lokale nabolag, omgitt av satellittgalakser som Den store og lille magellanske sky.',
        icon: 'compass',
      },
      {
        title: 'Galaksehoper bader i 100 millioner graders røntgengass!',
        description:
          'Mellom galaksene i en stor galaksehop er det faktisk mer vanlig masse i form av tynn, ekstremt glovarm gass (som kun syns med røntgenteleskoper!) enn inne i selve stjernene!',
        icon: 'thermometer',
      },
      {
        title: 'Laniakea betyr «umålelig himmel» på hawaiisk',
        description:
          'Streker seg over 520 millioner lysår og rommer massen til hundre millioner milliarder (10¹⁷) soler!',
        icon: 'globe',
      },
    ],
    classroomTest:
      'La elevene skrive sin fulle kosmiske postadresse øverst i skriveboka: Skolen → Kommunen → Norge → Jorda → Solsystemet → Orion-armen → Melkeveien → Den lokale gruppen → Virgo-superhopen → Laniakea → Det observerbare universet!',
    didYouKnow:
      'Mens Den lokale gruppen vår er gravitasjonsbundet og kommer til å holde sammen for alltid, er den enorme superhopen Laniakea så vidstrakt at mørk energi på veldig lang sikt vil trekke ytterdelene av Laniakea fra hverandre!',
    examples: [
      'Den lokale gruppen (~80 galakser)',
      'Virgo-galaksehopen',
      'Superhopen Laniakea',
      'Kosmisk adresse',
    ],
  },

  {
    id: 'gal_cosmic_web',
    stepIndex: 9,
    isMainPath: true,
    parentId: 'gal_clusters_laniakea',
    stepNumber: 10,
    title: 'Det kosmiske nettverket – Universets største struktur og alle tråder samlet',
    shortLabel: 'Det kosmiske nettverket',
    subtitleTag:
      'Milliarder av galakser perlet langs glødende tråder av mørk materie rundt enorme kosmiske tomrom',
    timeAfterBB: 'Skala: Milliarder av lysår',
    eraLabel: 'Sone 3 • Det kosmiske nettverket',
    temperatureLabel: 'Filamenter • Hoper • Tomrom',
    x: 2435,
    y: 440,
    cardSide: 'above',
    zoneCategory: 'cosmic_web_scale',
    epochCategory: 'modern_cosmos',
    cosmicTag: 'Fra ørsmå kvantefluktuasjoner i Big Bang → CMB-frø → Det kosmiske nettverket!',
    traceBadge: 'Hele bildet samlet • 13,8 mrd. år',
    image: cosmosImg('gal_step10_cosmic_web.jpg'),
    imageCaption:
      'Når vi kartlegger posisjonen til millioner av galakser i 3D, trer DET KOSMISKE NETTVERKET frem: Lange lysende filamenter av galakser, tette knutepunkter av superhoper og veldige mørke tomrom imellom.',
    summaryTitle:
      'Zoomer vi helt ut til milliarder av lysår, ligner universet et gigantisk tredimensjonalt edderkoppnett av lys!',
    whatHappens:
      'Her ved aller siste steg møtes ALLE de seks sirklene i tankekartet vårt! Når kartleggingsteleskoper som Sloan Digital Sky Survey, DESI og Euclid måler avstanden (via rødforskyvning!) til titalls millioner galakser, ser vi at galaksene slett ikke er strødd tilfeldig utover: De ligger som duggdråper langs lange, sammenvevde tråder kalt FILAMENTER, med rike galaksehoper der trådene krysser hverandre, og gigantiske nesten folketomme KOSMISKE TOMROM (voids, hundrevis av millioner lysår brede!) imellom. Og hvor kommer dette mønsteret fra? Direkte fra de mikroskopiske tetthetsforskjellene etter inflasjonen i BIG BANG – som vi ser fotografiet av i BAKGRUNNSSTRÅLINGEN (CMB), forsterket gjennom 13,8 milliarder år av MØRK MATERIE i en voksende ROMTID, og opplyst av STJERNER som smir GRUNNSTOFFENE til liv!',
    keyTraits: [
      {
        title: 'Mørk materie bygde stillaset – vanlig gass flyttet inn',
        description:
          'Fordi mørk materie ikke ble dyttet bort av strålingstrykket i det tidlige universet, begynte den å klumpe seg i et nettverk først – og trakk deretter hydrogengassen inn i trådene etter 380 000 år!',
        icon: 'layers',
      },
      {
        title: 'Kosmiske tomrom (Voids) utgjør ~80 % av volumet i universet',
        description:
          'Mellom trådene ligger veldige bobleformede tomrom som er 100–300 millioner lysår brede og nesten helt støvsugd for galakser, mens mørk energi får tomrommene til å ese ut!',
        icon: 'expand',
      },
      {
        title: 'Hele Vg1-kosmologien henger sammen i én ubrutt kjede!',
        description:
          'Big Bang → Romtid → Mørk materie-nettverk → Galakser → Stjerner → Grunnstoffer → Planeter & Stråling → Oss som kikker ut og forstår vår egen opprinnelse!',
        icon: 'sparkles',
      },
    ],
    classroomTest:
      'Avslutt hele kosmologitemaet ved å gå tilbake til UNIVERSET-tankekartet på storskjermen og la elevene i par forklare sammenhengen langs strekene: Hvordan henger en ring av gull på fingeren eller kalsiumet i skjelettet vårt sammen med både Big Bang, stjerner, stråling, romtid og galaksen vår?',
    didYouKnow:
      'Romteleskopet EUCLID (skutt opp av den europeiske romorganisasjonen ESA i 2023) kartlegger nå formen og rødforskyvningen til over EN MILLIARD galakser bakover gjennom 10 milliarder år for å lage tidenes mest nøyaktige 3D-kart av det kosmiske nettverket!',
    examples: [
      'Det kosmiske nettverket (Cosmic Web)',
      'Galaksefilamenter',
      'Kosmiske tomrom (Voids)',
      'ESA Euclid & DESI-kartlegging',
    ],
  },
];

export const GALAXIES_NODE_MAP: Record<string, GalaxyNodeData> =
  Object.fromEntries(GALAXIES_NODES.map((n) => [n.id, n]));

export const GALAXIES_CONTROL_QUESTIONS: ControlQuestionItem[] = [
  {
    id: 'gal-q1',
    number: 1,
    question:
      'Beskriv oppbygningen til vår egen galakse Melkeveien: Hvilken galaksetype er den, hvor ligger Solsystemet vårt, og hva skjuler seg helt innerst i sentrum?',
    contextHint:
      'Se på Steg 2 og Steg 3 i Sone 1 (kartet over Melkeveien og Sagittarius A*)!',
    points: [
      {
        heading: 'En stavspiralgalakse med 100–400 milliarder stjerner',
        badge: '~100 000 lysår bred',
        detail:
          'Melkeveien har en avlang sentralstav av eldre stjerner, en tynn roterende skive (~1 000 lysår tykk) med blå spiralarmer, gass og støv, og en ytre sfærisk halo.',
      },
      {
        heading: 'Solsystemet bor i Orion-armen ~26 000 lysår fra sentrum',
        badge: '1 kosmisk år ≈ 230 mill. år',
        detail:
          'Vi ser skiven innenfra og fra kanten som et lysende bånd over nattehimmelen, mens Sola bruker ca. 230 millioner år på én runde rundt sentrum i 220 km/s.',
      },
      {
        heading: 'Sagittarius A*: Et supermassivt sort hull på ~4,1 millioner solmasser i kjernen',
        badge: 'Infrarødt & radio',
        detail:
          'Avslørt ved å følge raske stjernebaner i infrarødt lys gjennom støvskyene og fotografert av Event Horizon Telescope i 2022.',
      },
    ],
    takeaway:
      'Vi bor omtrent halvveis ut i skiven på en roterende stavspiral med 100–400 milliarder stjerner og et supermassivt sort hull i hjertet!',
  },
  {
    id: 'gal-q2',
    number: 2,
    question:
      'Hva kjennetegner spiralgalakser sammenlignet med ellipsegalakser (form, gassinnhold, farge og stjernefødsler) – og hva skjer når to store spiralgalakser som Melkeveien og Andromeda kolliderer?',
    contextHint:
      'Sammenlign Steg 4 (galaksetyper) og Steg 5 (galaksekollisjoner)!',
    points: [
      {
        heading: 'Spiralgalakser har kald gass, støv og pågående stjernefødsler (blåhvite armer)',
        badge: 'Aktive stjernefabrikker',
        detail:
          'Kortlivede, varme og tunge unge stjerner lyser sterkt blåhvitt i spiralarmene.',
      },
      {
        heading: 'Ellipsegalakser har lite kald gass og består mest av eldre gulrøde stjerner',
        badge: 'Eldre stjernebefolkning',
        detail:
          'Stjernene kretser i alle retninger i en rund/oval sverm, og få nye stjerner dannes.',
      },
      {
        heading: 'Ved kollisjon treffer gasskyene hverandre – men enkeltstjernene glir forbi hverandre!',
        badge: 'Danner ny ellipsegalakse',
        detail:
          'Enorme avstander mellom stjernene gjør at stjernekollisjoner nesten aldri skjer, mens gasskollisjoner utløser intens stjernedannelse før galaksene smelter sammen til en stor ellipsegalakse.',
      },
    ],
    comparisonTable: {
      headers: [
        'Kjennetegn',
        'Spiralgalakse (S / SB)',
        'Ellipsegalakse (E)',
      ],
      rows: [
        [
          'Form & stjernebaner',
          'Flat roterende skive med spiralarmer rundt sentralbule',
          'Rund eller eggformet kule der stjerner kretser i kryssende baner',
        ],
        [
          'Kald gass & støv',
          'Rikelig med gass og støv i skiven',
          'Svært lite kald gass og støv igjen',
        ],
        [
          'Stjernefødsler & farge',
          'Mange nye stjerner → Blåhvite armer og gul kjerne',
          'Nesten bare eldre, seiglivede stjerner → Varm gulrød glød',
        ],
      ],
    },
    takeaway:
      'Blå spiralarmer betyr ferske stjernefødsler i gassrike skiver – gylne ellipsegalakser er ofte sluttresultatet etter tidligere galaksekollisjoner!',
  },
  {
    id: 'gal-q3',
    number: 3,
    question:
      'Hvordan beviste Vera Rubins målinger av galaksenes rotasjon at galaksene må ligge inni en enorm halo av usynlig mørk materie?',
    contextHint:
      'Se på rotasjonskurve-grafen i Sone 2 og Steg 6!',
    points: [
      {
        heading: 'Forventning fra synlig masse: Ytre stjerner burde gå mye saktere enn indre',
        badge: 'Som planetene rundt Sola',
        detail:
          'Mesteparten av det synlige stjernelyset i en galakse er samlet nær midten, så tyngdekraften burde avta raskt utover mot kanten.',
      },
      {
        heading: 'Faktisk måling: Rotasjonskurven er FLAT – stjernene ytterst suser like raskt!',
        badge: 'Dopplermålinger',
        detail:
          'Med bare de synlige stjernene og gassen ville galaksene ha slynget ytterkantene sine ut i verdensrommet for lengst.',
      },
      {
        heading: 'Konklusjon: Hver galakse er pakket inn i ~5 ganger mer mørk enn vanlig materie',
        badge: 'Mørk materie-halo',
        detail:
          'Mørk materie vekselvirker ikke med elektromagnetisk stråling (helt usynlig/gjennomsiktig), men røper seg tydelig gjennom tyngdekraft og gravitasjonslinser.',
      },
    ],
    takeaway:
      'Den lysende galaksen vi ser på bilder er bare det opplyste sentrum inni en mye større, usynlig sky av mørk materie!',
  },
  {
    id: 'gal-q4',
    number: 4,
    question:
      'Sett opp vår «kosmiske adresse» fra Solsystemet og helt ut til Det kosmiske nettverket – og forklar hvordan de ørsmå flekkene i bakgrunnsstrålingen (CMB) henger sammen med nettverket av galakser i dag!',
    contextHint:
      'Følg skalastigen gjennom Steg 9 og Steg 10 i Sone 3!',
    points: [
      {
        heading: 'Hierarkiet av strukturer fra smått til størst',
        badge: 'Kosmisk adresse',
        detail:
          'Jorda → Solsystemet → Melkeveien → Den lokale gruppen (~80 galakser) → Virgo-superhopen / Laniakea (~100 000 galakser) → Det kosmiske nettverket.',
      },
      {
        heading: 'Det kosmiske nettverket består av filamenter, knutepunkter (hoper) og tomrom',
        badge: 'Universets storstruktur',
        detail:
          'Milliarder av galakser følger lange tråder av mørk materie rundt enorme kosmiske tomrom (voids) som er hundrevis av millioner lysår brede.',
      },
      {
        heading: 'Fra kvantefluktuasjoner og CMB-flekker til dagens galaksevev',
        badge: '13,8 mrd. års tyngdekraft',
        detail:
          'De ørsmå tetthetsforskjellene vi ser i CMB ved 380 000 år var selve «frøene» der mørk materie og hydrogengass samlet seg til trådene og galaksehopene vi ser i dag!',
      },
    ],
    comparisonTable: {
      headers: [
        'Nivå i hierarkiet',
        'Omtrentlig utstrekning',
        'Hva det inneholder',
      ],
      rows: [
        [
          'Melkeveien (vår galakse)',
          '~100 000 lysår',
          '100–400 milliarder stjerner, gass, støv, Sgr A* og mørk materie-halo',
        ],
        [
          'Den lokale gruppen → Laniakea',
          '~10 mill. → 520 mill. lysår',
          '~80 nabogalakser lokalt; over 100 000 galakser i superhopen vår',
        ],
        [
          'Det kosmiske nettverket',
          'Milliarder av lysår',
          'Filamenter av galakser og mørk materie rundt enorme kosmiske tomrom',
        ],
      ],
    },
    takeaway:
      'Når vi ser på det kosmiske nettverket av galakser i dag, ser vi de forstørrede fotavtrykkene etter universets aller første brøkdel av et sekund!',
  },
];
