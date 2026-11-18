export interface McqQuestionItem {
  id: string;
  number: number;
  /** 0..9 step index in the theme so students can jump straight to the relevant visual step */
  relatedStepIndex: number;
  topicBadge: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
}

export const BIG_BANG_MCQ_QUESTIONS: McqQuestionItem[] = [
  {
    id: 'bb-mcq-1',
    number: 1,
    relatedStepIndex: 0,
    topicBadge: 'Steg 1 • Big Bang & Kosmisk inflasjon',
    question:
      'Hva er den mest presise naturvitenskapelige beskrivelsen av Big Bang for 13,8 milliarder år siden?',
    options: [
      'En kjempeeksplosjon av gass midt inne i et ellers uendelig stort og tomt verdensrom',
      'Starten på en utvidelse av selve tidrommet overalt samtidig fra en ekstremt tett og varm tilstand',
      'En kollisjon mellom to eldre spiralgalakser som skapte Sola og alle planetene samtidig',
      'Øyeblikket da en gigantisk ur-stjerne eksploderte som en supernova og spredte jern og karbon',
    ],
    correctIndex: 1,
    explanation:
      'Big Bang var ikke en bombe på ett bestemt sted i et ferdig tomrom – det var selve rommet (og tiden) som oppsto og begynte å utvide seg overalt samtidig.',
  },
  {
    id: 'bb-mcq-2',
    number: 2,
    relatedStepIndex: 1,
    topicBadge: 'Steg 2 • Det første sekundet',
    question:
      'Hva skjedde da det glovarme uruniverset kjølte seg nok ned i løpet av det aller første sekundet etter Big Bang?',
    options: [
      'Kvarker bandt seg sammen tre og tre og dannet universets første protoner og nøytroner',
      'Elektroner la seg i rolige baner rundt kjerner av karbon og oksygen',
      'De første steinplanetene og asteroidene begynte å klumpe seg sammen',
      'Lyset slapp fritt ut som den kosmiske mikrobølge-bakgrunnsstrålingen',
    ],
    correctIndex: 0,
    explanation:
      'Etter rundt ett mikrosekund bandt kvarkene seg sammen til protoner og nøytroner. Hele atomer med elektroner rundt kom først 380 000 år senere!',
  },
  {
    id: 'bb-mcq-3',
    number: 3,
    relatedStepIndex: 2,
    topicBadge: 'Steg 3 • De første 3–20 minuttene',
    question:
      'Hvilke grunnstoffer (atomkjerner) ble dannet i den raske fusjonen mellom 3 og 20 minutter etter Big Bang – og som i dag utgjør ett av hovedbevisene for Big Bang?',
    options: [
      'Like deler hydrogen, oksygen, karbon og jern',
      'Kun rent gull, uran og andre tunge grunnstoffer',
      'Omtrent 75 % hydrogen, 25 % helium og et bittelite spor av litium',
      '99 % nitrogen og oksygen slik som i jordatmosfæren i dag',
    ],
    correctIndex: 2,
    explanation:
      'Universet kjølte seg så fort ned at fusjonen stoppet etter ca. 20 minutter med rundt 75 % hydrogen og 25 % helium (målt etter masse). At vi måler nettopp dette i urgamle gasskyer er et sterkt bevis for Big Bang!',
  },
  {
    id: 'bb-mcq-4',
    number: 4,
    relatedStepIndex: 3,
    topicBadge: 'Steg 4 • 380 000 år etter Big Bang',
    question:
      'Hvorfor ble universet plutselig gjennomsiktig 380 000 år etter Big Bang, slik at den kosmiske bakgrunnsstrålingen (CMB) slapp fri?',
    options: [
      'Fordi de aller første supermassive svarte hullene sugde til seg all tåken i verdensrommet',
      'Fordi de første stjernene tente og blåste bort støvskyene med solvind',
      'Fordi mørk energi plutselig skrudde seg på og oppløste alle nøytronene',
      'Fordi temperaturen sank til ca. 3000 K slik at frie elektroner festet seg til atomkjernene og dannet nøytrale atomer',
    ],
    correctIndex: 3,
    explanation:
      'Så lenge elektronene fløy fritt i plasmaet, krasjet lyset hele tiden i dem. Da elektronene ble fanget inn i atomer ved ca. 3000 K (rekombinasjon), slapp lyset fritt gjennom rommet som CMB!',
  },
  {
    id: 'bb-mcq-5',
    number: 5,
    relatedStepIndex: 4,
    topicBadge: 'Steg 5 • Den mørke tidsalderen',
    question:
      'Hvilken avgjørende rolle spilte mørk materie under «den kosmiske mørke tidsalderen» før de første stjernene ble født?',
    options: [
      'Den lyste svakt i infrarødt lys og varmet opp gasskyene slik at vann kunne bli flytende',
      'Tyngdekraften fra mørk materie dannet et kosmisk nettverk som trakk hydrogengassen sammen i tette skyer',
      'Den presset galaksene fra hverandre slik at ingen stjerner kunne kollidere',
      'Den fusjonerte direkte til karbon og jern uten å trenge stjerner',
    ],
    correctIndex: 1,
    explanation:
      'Mørk materie sender ikke ut lys, men har tyngdekraft – og fungerte som et usynlig skjelett som samlet hydrogengassen raskt nok til at stjerner og galakser kunne oppstå.',
  },
  {
    id: 'bb-mcq-6',
    number: 6,
    relatedStepIndex: 5,
    topicBadge: 'Steg 6 • Kosmisk daggry (~100–200 mill. år)',
    question:
      'Hva kjennetegnet universets aller første stjerner (Populasjon III) sammenlignet med Sola vår?',
    options: [
      'De besto kun av hydrogen og helium, var ofte hundrevis av ganger tyngre enn Sola og levde svært kort',
      'De var små, kjølige røde dvergstjerner med mange jordlignende steinplaneter rundt seg',
      'De brant kull og oksygen i kjernen og levde i over 20 milliarder år',
      'De fantes bare inne i Solsystemet vårt før Melkeveien ble dannet',
    ],
    correctIndex: 0,
    explanation:
      'De første stjernene hadde ingen tyngre grunnstoffer, ble enorme blåhvite giganter og slukte brenselet sitt på bare noen få millioner år før de eksploderte.',
  },
  {
    id: 'bb-mcq-7',
    number: 7,
    relatedStepIndex: 6,
    topicBadge: 'Steg 7 • Stjernesmia & Supernovaer',
    question:
      'Hvor kommer karbonet i cellene dine, oksygenet du puster og jernet i blodet ditt fra?',
    options: [
      'Alt sammen ble ferdig dannet i løpet av de tre første minuttene etter Big Bang',
      'Det ble dannet av lynnedslag i Jordas tidlige atmosfære for 4 milliarder år siden',
      'Det er smidd ved fusjon inne i tunge stjerner og spredt ut i rommet gjennom supernova-eksplosjoner',
      'Det oppstår kontinuerlig av mørk energi i tomrommet mellom galaksene',
    ],
    correctIndex: 2,
    explanation:
      'Big Bang lagde bare H, He og spor av Li. Grunnstoffer som karbon, oksygen, silisium og jern bygges inne i stjerner, og tyngre stoffer som gull skapes i supernovaer og nøytronstjerne-kollisjoner!',
  },
  {
    id: 'bb-mcq-8',
    number: 8,
    relatedStepIndex: 8,
    topicBadge: 'Steg 9 • Solsystemet & Jorda',
    question:
      'Når oppsto Solsystemet og planeten Jorda på tidslinjen over universets 13,8 milliarder år lange historie?',
    options: [
      'Samtidig med Big Bang for 13,8 milliarder år siden',
      'Rett etter at bakgrunnsstrålingen slapp fri, 380 000 år etter Big Bang',
      'For omtrent 65 millioner år siden da dinosaurene døde ut',
      'For ca. 4,6 milliarder år siden – altså da universet allerede var 9,2 milliarder år gammelt',
    ],
    correctIndex: 3,
    explanation:
      'Universet eksisterte i over 9 milliarder år uten Sola og Jorda! Først for 4,6 milliarder år siden kollapset en sky beriket med stjernestøv i Melkeveien og dannet Solsystemet vårt.',
  },
  {
    id: 'bb-mcq-9',
    number: 9,
    relatedStepIndex: 9,
    topicBadge: 'Steg 10 • Rødforskyvning & Hubbles lov',
    question:
      'Hva viser den kosmologiske rødforskyvningen i lyset fra fjerne galakser?',
    options: [
      'At alle fjerne galakser bare består av kalde, røde kjempe-stjerner',
      'At lysbølgene er blitt strukket mot lengre (rødere) bølgelengder fordi rommet utvider seg og galaksene fjerner seg fra oss',
      'At lyset bremses ned av støv i Solsystemet vårt slik at blått lys forsvinner',
      'At galaksene er på vei rett mot Melkeveien i stadig høyere fart',
    ],
    correctIndex: 1,
    explanation:
      'Jo lenger unna en galakse befinner seg, desto mer er lyset hennes rødforskjøvet og desto raskere øker avstanden til oss (Hubbles lov) – et direkte bevis på at rommet utvider seg!',
  },
  {
    id: 'bb-mcq-10',
    number: 10,
    relatedStepIndex: 9,
    topicBadge: 'Steg 10 • Universet i dag',
    question:
      'Hvordan er energi- og masseinnholdet i universet fordelt i dag ifølge moderne kosmologiske målinger?',
    options: [
      'Ca. 5 % vanlig synlig stoff, ca. 27 % mørk materie og ca. 68 % mørk energi',
      'Ca. 75 % vanlig synlig stoff, ca. 20 % svarte hull og ca. 5 % mørk energi',
      'Ca. 50 % materie og ca. 50 % antimaterie i perfekt balanse',
      'Ca. 95 % stjerner og planeter og ca. 5 % kosmisk bakgrunnsstråling',
    ],
    correctIndex: 0,
    explanation:
      'Alt av atomer, stjerner, gasskyer, planeter og liv utgjør bare rundt 5 % av universet! Resten er ca. 27 % mørk materie og ca. 68 % mørk energi som får utvidelsen til å akselerere.',
  },
];

export const STARS_MCQ_QUESTIONS: McqQuestionItem[] = [
  {
    id: 'star-mcq-1',
    number: 1,
    relatedStepIndex: 0,
    topicBadge: 'Steg 1 • Stjernetåke',
    question:
      'Hvorfor må gass- og støvskyen i en stjernetåke være svært kald (10–100 K) for at en ny stjerne skal kunne begynne å dannes?',
    options: [
      'Fordi kjernefusjon av hydrogen bare kan starte ved temperaturer under frysepunktet',
      'Fordi lav temperatur gir lavt gasstrykk utover, slik at tyngdekraften klarer å trekke gassen sammen',
      'Fordi mørk energi bare finnes inne i kalde skyer i Melkeveien',
      'Fordi varme gasskyer umiddelbart fryser til isplaneter før det rekker å bli en stjerne',
    ],
    correctIndex: 1,
    explanation:
      'I varm gass har partiklene så høy fart at gasstrykket presser skyen fra hverandre. Først når gassen er iskald, vinner tyngdekraften slik at skyen kan kollapse.',
  },
  {
    id: 'star-mcq-2',
    number: 2,
    relatedStepIndex: 1,
    topicBadge: 'Steg 2 • Protostjerne',
    question:
      'Hva er hovedforskjellen på en protostjerne og en ferdig hovedseriestjerne som Sola?',
    options: [
      'En protostjerne består utelukkende av jern og nikkel, mens en stjerne består av oksygen',
      'En protostjerne har ingen tyngdekraft før planetene rundt den er ferdig dannet',
      'En protostjerne er en utbrent rest etter en supernovaeksplosjon',
      'En protostjerne lyser av varme fra gravitasjonskompresjon, men kjernen er ennå ikke varm nok til å fusjonere vanlig hydrogen til helium',
    ],
    correctIndex: 3,
    explanation:
      'Protostjernen varmes opp når gassen klemmes sammen av tyngdekraften, men den blir først en ekte hovedseriestjerne når kjernetemperaturen når ca. 10–15 millioner K og hydrogenfusjonen tenner.',
  },
  {
    id: 'star-mcq-3',
    number: 3,
    relatedStepIndex: 2,
    topicBadge: 'Steg 3 • Hovedseriestjerne & balanse',
    question:
      'Hvilke to krefter holder en hovedseriestjerne (som Sola) i stabil hydrostatisk likevekt gjennom milliarder av år?',
    options: [
      'Tyngdekraften som trekker innover og strålings-/gasstrykket fra kjernefusjonen som presser utover',
      'Magnetfeltet fra planetene utover og solvinden innover',
      'Sentrifugalkraften fra Melkeveien og kosmisk bakgrunnsstråling utenfra',
      'Kjemisk forbrenning av oksygen i kjernen og kulde fra verdensrommet',
    ],
    correctIndex: 0,
    explanation:
      'Så lenge hydrogen fusjonerer til helium i kjernen, balanserer det enorme trykket utover nøyaktig tyngdekraften som trekker alle gasslagene innover.',
  },
  {
    id: 'star-mcq-4',
    number: 4,
    relatedStepIndex: 2,
    topicBadge: 'Steg 3 • Farge, temperatur og levetid',
    question:
      'Hvilken sammenheng gjelder for stjerner på hovedserien når vi sammenligner farge, overflatetemperatur og levetid?',
    options: [
      'Røde stjerner er varmest på overflaten og lever kortest av alle stjerner',
      'Alle stjerner har nøyaktig samme overflatetemperatur, men får ulik farge av støv i rommet',
      'Tunge blåhvite stjerner er varmest på overflaten (> 25 000 K), men brenner opp drivstoffet raskest og lever kortest',
      'Gule stjerner som Sola er tyngst i universet og lever bare i noen få tusen år',
    ],
    correctIndex: 2,
    explanation:
      'Blåhvite hovedseriestjerner har størst masse og høyest temperatur, men den voldsomme tyngdekraften tvinger dem til å fusjonere drivstoffet i rekordfart – så de lever bare noen få millioner år!',
  },
  {
    id: 'star-mcq-5',
    number: 5,
    relatedStepIndex: 3,
    topicBadge: 'Steg 4 • Rød kjempe (Øvre gren)',
    question:
      'Hva skjer med Sola om rundt 5 milliarder år når hydrogenet innerst i kjernen er brukt opp?',
    options: [
      'Den slukner på ett sekund og blir direkte til et sort hull',
      'Kjernen trekker seg sammen og blir varm nok til å fusjonere helium til karbon, mens ytterlagene eser ut til en rød kjempe',
      'Den deler seg i to mindre gule stjerner som fortsetter å lyse evig',
      'Den eksploderer som en supernova og danner en ny nøytronstjerne',
    ],
    correctIndex: 1,
    explanation:
      'Når hydrogenet i kjernen tar slutt, krymper kjernen til heliumfusjon tenner (~100 mill. K), mens skallfusjon presser ytterlagene opp til en enorm, kjøligere rød kjempe.',
  },
  {
    id: 'star-mcq-6',
    number: 6,
    relatedStepIndex: 5,
    topicBadge: 'Steg 5–6 • Planetarisk tåke & Hvit dverg',
    question:
      'Hvordan ender livet for en stjerne på størrelse med Sola etter fasen som rød kjempe?',
    options: [
      'Den fusjonerer karbon videre til jern og gull før den eksploderer som supernova',
      'Den fryser til en kjempeplanet av stein og is på størrelse med Jupiter',
      'Den kollapser til et supermassivt sort hull i sentrum av Solsystemet',
      'Den blåser ytterlagene rolig ut som en planetarisk tåke, mens den tette kjernen blir igjen som en hvit dverg på størrelse med Jorda',
    ],
    correctIndex: 3,
    explanation:
      'Sol-lignende stjerner (< 8 solmasser) er for lette til å eksplodere som supernova. De kaster ytterkappen som en planetarisk tåke og etterlater en glødende hvit dverg uten fusjon.',
  },
  {
    id: 'star-mcq-7',
    number: 7,
    relatedStepIndex: 6,
    topicBadge: 'Steg 7 • Rød superkjempe & Jernkjernen',
    question:
      'Hvorfor stopper fusjonsmotoren brått når en tung rød superkjempe har bygd opp en kjerne av jern (Fe, atomnummer 26)?',
    options: [
      'Fordi fusjon av jern ikke frigjør energi, men krever tilført energi – dermed forsvinner strålingstrykket utover',
      'Fordi jern er magnetisk og skyver alle de andre lagene i stjernen rolig vekk',
      'Fordi jern umiddelbart fordamper til rent hydrogen igjen ved høyt trykk',
      'Fordi det ikke finnes nok nøytroner i universet til å lage grunnstoffer med høyere nummer enn 26',
    ],
    correctIndex: 0,
    explanation:
      'Jern har den tettest bundne atomkjernen. Alle fusjoner opp til jern gir energioverskudd, men å fusjonere jern videre sluker energi – så motoren mister trykket på under ett sekund!',
  },
  {
    id: 'star-mcq-8',
    number: 8,
    relatedStepIndex: 7,
    topicBadge: 'Steg 8 • Supernova',
    question:
      'Hvilken helt avgjørende rolle spiller supernovaeksplosjoner for at planeter som Jorda og liv skal kunne eksistere?',
    options: [
      'De skaper alt hydrogenet i universet fra ingenting',
      'De kjøler ned verdensrommet til 2,725 K slik at bakgrunnsstrålingen oppstår',
      'De både smir grunnstoffer tyngre enn jern og slynger grunnstoffene fra stjernens indre ut i rommet til nye solsystemer',
      'De hindrer alle gasskyer i galaksen fra å trekke seg sammen til nye stjerner',
    ],
    correctIndex: 2,
    explanation:
      'Supernovaer smir tunge grunnstoffer (som kobber, jod og uran) og sprer samtidig karbonet, oksygenet, silisiumet og jernet som den tunge stjernen bygde opp før den døde.',
  },
  {
    id: 'star-mcq-9',
    number: 9,
    relatedStepIndex: 8,
    topicBadge: 'Steg 9 • Nøytronstjerne & Pulsar',
    question:
      'Hva kjennetegner en nøytronstjerne som blir igjen etter en supernova fra en stjerne på ca. 8–20 solmasser?',
    options: [
      'En kald gasskule som er hundre ganger større enn Sola, men nesten vektløs',
      'En vanlig steinplanet uten tyngdekraft som svever fritt mellom galaksene',
      'En sky av frittflygende elektroner uten noen kjerne i midten',
      'En ekstremt tett kule på bare ~20 km i diameter med mer masse enn Sola, som ofte spinner raskt som en pulsar',
    ],
    correctIndex: 3,
    explanation:
      'Under kollapsen presses protoner og elektroner sammen til nøytroner. Over én solmasse pakkes inn på ~20 km (som en by!), slik at én teskje veier rundt en milliard tonn.',
  },
  {
    id: 'star-mcq-10',
    number: 10,
    relatedStepIndex: 9,
    topicBadge: 'Steg 10 • Sort hull',
    question:
      'Når ender en døende stjerne som et stellart sort hull, og hva menes med «hendelseshorisonten»?',
    options: [
      'Når alle stjerner under 1 solmasse går tomme for helium i kjernen',
      'Når de aller tyngste stjernene (> 20–25 solmasser) kollapser slik at ingenting stopper tyngdekraften, og hendelseshorisonten er grensen der selv ikke lys slipper ut',
      'Når en planetarisk tåke fryser til is ytterst i Solsystemet',
      'Når et sort hull suger inn alle galakser i hele universet som en støvsuger uansett avstand',
    ],
    correctIndex: 1,
    explanation:
      'Er restkjernen over ~3 solmasser, klarer selv ikke nøytrontrykket å stoppe kollapsen. Innenfor hendelseshorisonten overstiger unnslipningsfarten lysfarten c!',
  },
];

export const ELEMENTS_MCQ_QUESTIONS: McqQuestionItem[] = [
  {
    id: 'elem-mcq-1',
    number: 1,
    relatedStepIndex: 0,
    topicBadge: 'Del 1 • Atomkjernen & Atomnummer',
    question:
      'Hvilken partikkel i atomet bestemmer med 100 % sikkerhet hvilket grunnstoff atomet er (atomnummeret Z)?',
    options: [
      'Antall nøytroner i atomkjernen',
      'Antall elektroner som til enhver tid er i det ytterste skallet',
      'Antall protoner i atomkjernen',
      'Summen av elektroner og fotoner rundt atomet',
    ],
    correctIndex: 2,
    explanation:
      'Atomnummeret Z er antall protoner i kjernen: 1 proton er alltid hydrogen, 6 protoner er alltid karbon, og 79 protoner er alltid gull!',
  },
  {
    id: 'elem-mcq-2',
    number: 2,
    relatedStepIndex: 1,
    topicBadge: 'Del 2 • Nøytroner & Isotoper',
    question:
      'Hva kalles atomer av samme grunnstoff som har nøyaktig like mange protoner, men ulikt antall nøytroner i kjernen (som ¹²C og ¹⁴C)?',
    options: [
      'Isotoper',
      'Edelgasser',
      'Kilonovaer',
      'Spektrallinjer',
    ],
    correctIndex: 0,
    explanation:
      'Isotoper er ulike utgaver av samme grunnstoff med likt antall protoner, men ulikt antall nøytroner (og dermed ulik atommasse og ofte ulik stabilitet).',
  },
  {
    id: 'elem-mcq-3',
    number: 3,
    relatedStepIndex: 2,
    topicBadge: 'Del 3 • Elektronskall & Periodesystemet',
    question:
      'Hva forteller de vannrette radene (periodene) og de loddrette kolonnene (hovedgruppene) i periodesystemet om oppbygningen av et atom?',
    options: [
      'Perioden viser hvor gammelt atomet er, og gruppen viser hvilken stjerne det kom fra',
      'Perioden viser antall nøytroner, og gruppen viser kokepunktet i kelvin',
      'Perioden viser antall protoner i ytterste skall, og gruppen viser antall kjerner',
      'Perioden viser antall elektronskall rundt kjernen, og hovedgruppen viser antall ytterelektroner',
    ],
    correctIndex: 3,
    explanation:
      'Raden (perioden) angir antall elektronskall, mens hovedgruppen angir antall elektroner i ytterste skall – som bestemmer grunnstoffets kjemiske egenskaper!',
  },
  {
    id: 'elem-mcq-4',
    number: 4,
    relatedStepIndex: 3,
    topicBadge: 'Del 4 • Spektrallinjer',
    question:
      'Hvordan kan astronomer vite nøyaktig hvilke grunnstoffer en stjerne mange hundre lysår unna består av?',
    options: [
      'Ved å måle hvor rund stjernen ser ut gjennom et vanlig speilteleskop',
      'Ved å splitte stjernelyset i et spekter og lese av det unike mønsteret av spektrallinjer som elektronovergangene i hvert grunnstoff lager',
      'Ved å sende ubemannede romsonder ut for å hente gassprøver fra stjernen',
      'Ved å telle hvor mange planeter som går i bane rundt stjernen',
    ],
    correctIndex: 1,
    explanation:
      'Hvert grunnstoff har helt bestemte avstander mellom elektronskallene sine og gir derfor en unik «strekkode» av linjer i lyset fra stjernen.',
  },
  {
    id: 'elem-mcq-5',
    number: 5,
    relatedStepIndex: 4,
    topicBadge: 'Del 5 • Smie 1: Big Bang',
    question:
      'Hvor kommer hydrogenatomene (H) i drikkevannet og i kroppen din opprinnelig fra?',
    options: [
      'De ble dannet i de første minuttene etter Big Bang for 13,8 milliarder år siden',
      'De ble fusjonert inne i kjernen på Sola for 1000 år siden og sendt hit med solvinden',
      'De ble lagd da to nøytronstjerner kolliderte i Melkeveien rett før Jorda ble til',
      'De skapes hele tiden på nytt av vulkaner dypt nede i jordskorpa',
    ],
    correctIndex: 0,
    explanation:
      'Stjerner bruker opp hydrogen – de lager det ikke! Alt hydrogen i universet (og ~25 % helium) stammer direkte fra uruniverset rett etter Big Bang.',
  },
  {
    id: 'elem-mcq-6',
    number: 6,
    relatedStepIndex: 5,
    topicBadge: 'Del 6 • Smie 2: Stjernefusjon',
    question:
      'Hvordan ble karbonatomene (nr. 6) i DNA-et vårt og oksygenet (nr. 8) vi puster inn opprinnelig dannet?',
    options: [
      'Under de tre første sekundene etter Big Bang før universet rakk å utvide seg',
      'Ved kjemiske reaksjoner mellom sollys og støv på overflaten av Mars',
      'Ved kjernefusjon av helium inne i kjernen på tidligere generasjoner av stjerner',
      'Utelukkende ved radioaktiv spalting av uran nede i Jordas mantel',
    ],
    correctIndex: 2,
    explanation:
      'Når tre heliumkjerner smelter sammen ved over 100 millioner kelvin inne i kjempestjerner (trippel-alfa-prosessen), dannes karbon (6), og videre fusjon gir oksygen (8).',
  },
  {
    id: 'elem-mcq-7',
    number: 7,
    relatedStepIndex: 6,
    topicBadge: 'Del 7 • Jernmuren (nr. 26)',
    question:
      'Hvorfor er jern (Fe, atomnummer 26) det tyngste grunnstoffet som kan dannes gjennom vanlig energiproduserende fusjon i en stjernekjerne?',
    options: [
      'Fordi jern smelter ved så lav temperatur at det renner ut av stjernen',
      'Fordi jern har den mest stabilt bundne atomkjernen, slik at videre fusjon krever tilført energi i stedet for å frigjøre energi',
      'Fordi elektronskallene rundt jern stopper alle nøytroner fra å nærme seg',
      'Fordi ingen stjerner i universet kan bli varmere enn 5800 kelvin i kjernen',
    ],
    correctIndex: 1,
    explanation:
      'Opp til jern (nr. 26) gir fusjon energioverskudd. Over nr. 26 krever sammensmelting tilført energi, så vanlige stjernekjerner stopper ved jern!',
  },
  {
    id: 'elem-mcq-8',
    number: 8,
    relatedStepIndex: 7,
    topicBadge: 'Del 8 • Smie 3: Supernovaer',
    question:
      'Hvorfor spiller frie nøytroner hovedrollen når grunnstoffer tyngre enn jern bygges i supernovaeksplosjoner?',
    options: [
      'Fordi nøytroner er tusen ganger lettere enn elektroner og beveger seg baklengs i tid',
      'Fordi nøytroner har sterk positiv ladning som trekker til seg alle protonene rundt',
      'Fordi nøytroner bare finnes inne i hvite dverger på størrelse med Jorda',
      'Fordi nøytroner er elektrisk nøytrale og derfor kan trenge rett inn i positivt ladde atomkjerner uten elektrisk frastøting',
    ],
    correctIndex: 3,
    explanation:
      'Siden nøytroner har ladning 0, frastøtes de ikke av de mange plussladde protonene i jernkjernen. Etter nøytronfangst omdannes nøytroner til protoner og øker atomnummeret!',
  },
  {
    id: 'elem-mcq-9',
    number: 9,
    relatedStepIndex: 8,
    topicBadge: 'Del 9 • Smie 4: Kilonova',
    question:
      'Hvilken ekstrem kosmisk hendelse er hovedkilden til mange av de aller tyngste grunnstoffene våre, som gull (Au), platina (Pt), jod (I) og uran (U)?',
    options: [
      'Små røde dvergstjerner som sakte kjøles ned over milliarder av år',
      'Kollisjoner mellom kometer og asteroider i asteroidebeltet mellom Mars og Jupiter',
      'Kollisjoner mellom to ultrakompakte nøytronstjerner (kilonova)',
      'Solvind fra vanlige hovedseriestjerner som Sola',
    ],
    correctIndex: 2,
    explanation:
      'Når to nøytronstjerner kolliderer i en kilonova, kastes ekstremt nøytronrik materie ut og smir enorme mengder gull, platina, jod og uran på få sekunder!',
  },
  {
    id: 'elem-mcq-10',
    number: 10,
    relatedStepIndex: 9,
    topicBadge: 'Del 10 • Stjernestøv i oss',
    question:
      'Hvilke fire grunnstoffer utgjør til sammen rundt 96 % av massen i menneskekroppen – og hva har tre av dem til felles?',
    options: [
      'Oksygen, karbon, hydrogen og nitrogen – der O, C og N ble smidd i stjerner mens H stammer fra Big Bang',
      'Jern, gull, uran og silisium – som alle stammer utelukkende fra Big Bang',
      'Helium, neon, argon og krypton – som binder seg sammen i lange DNA-kjeder',
      'Kalsium, bly, kvikksølv og litium – som lages i Jordas atmosfære av lynnedslag',
    ],
    correctIndex: 0,
    explanation:
      'Kroppen vår består av ca. 65 % oksygen, 18 % karbon, 10 % hydrogen og 3 % nitrogen: ur-hydrogen fra Big Bang kombinert med O, C og N smidd i stjerner!',
  },
];

export const SPACETIME_MCQ_QUESTIONS: McqQuestionItem[] = [
  {
    id: 'st-mcq-1',
    number: 1,
    relatedStepIndex: 0,
    topicBadge: 'Steg 1 • 4 dimensjoner (Romtid)',
    question:
      'Hva mener fysikere når de sier at vi lever i en firedimensjonal «romtid»?',
    options: [
      'At det finnes fire ulike solsystemer oppå hverandre på samme sted',
      'At de tre romdimensjonene (lengde, bredde, høyde) og tiden (1D) er vevd sammen og påvirker hverandre',
      'At tiden alltid går baklengs så snart man forlater Jordas atmosfære',
      'At universet er formet som en firkantet kasse med rette vegger',
    ],
    correctIndex: 1,
    explanation:
      'Einstein viste at rom (3D) og tid (1D) ikke er adskilte størrelser, men én elastisk firedimensjonal vev der bevegelse og masse påvirker både avstander og klokker.',
  },
  {
    id: 'st-mcq-2',
    number: 2,
    relatedStepIndex: 1,
    topicBadge: 'Steg 2 • Lysfarten c & Lysår',
    question:
      'Hva måler enheten «ett lysår», og hvorfor fungerer et romteleskop som en tidsmaskin?',
    options: [
      'Ett lysår måler tid (ca. 365 millioner år), og teleskopet spoler frem i fremtiden',
      'Ett lysår måler lysstyrke, og teleskopet gjør unge stjerner eldre',
      'Ett lysår måler avstand (ca. 9 460 milliarder km), og siden lyset bruker tid på reisen ser vi alltid himmellegemer slik de var i fortiden',
      'Ett lysår måler temperaturen inne i kjernen på Sola',
    ],
    correctIndex: 2,
    explanation:
      'Lysår er strekningen lyset reiser på ett år med c ≈ 300 000 km/s. Når lyset fra en galakse bruker millioner eller milliarder av år hit, ser vi galaksen slik den så ut da lyset dro!',
  },
  {
    id: 'st-mcq-3',
    number: 3,
    relatedStepIndex: 2,
    topicBadge: 'Steg 3 • Relativ tid & GPS',
    question:
      'Hvorfor må GPS-satellitter rundt Jorda korrigere klokkene sine ved hjelp av Einsteins relativitetsteori?',
    options: [
      'Fordi både satellittenes høye fart og den svakere tyngdekraften 20 200 km oppe gjør at satellittklokkene går ~38 mikrosekunder raskere per døgn enn på bakken',
      'Fordi sollys dytter satellittene ut av bane hvert tiende sekund',
      'Fordi radiosignaler ikke kan bevege seg gjennom vakuum i verdensrommet',
      'Fordi tidssonene i Europa og Amerika bytter plass om natten',
    ],
    correctIndex: 0,
    explanation:
      'Uten relativistisk korreksjon av de 38 mikrosekundene per døgn ville GPS-posisjonen på mobilen bommet med over 10 kilometer allerede etter én dag!',
  },
  {
    id: 'st-mcq-4',
    number: 4,
    relatedStepIndex: 3,
    topicBadge: 'Steg 4 • Masse krummer romtiden',
    question:
      'Hvordan forklarer Einsteins generelle relativitetsteori (1915) hva tyngdekraft (gravitasjon) egentlig er?',
    options: [
      'En elektrisk strøm mellom nordpolen og sørpolen på planetene',
      'Lufttrykk fra gasskyer mellom stjernene som presser planetene nedover',
      'En øyeblikkelig magnetisk gnist som hopper raskere enn lyset',
      'Masse og energi krummer selve romtiden rundt seg, og gjenstander følger denne krumningen',
    ],
    correctIndex: 3,
    explanation:
      'Tyngdekraft er ikke en mystisk fjernkraft gjennom stivt tomrom, men selve geometrien i romtiden som bøyes av masse og energi!',
  },
  {
    id: 'st-mcq-5',
    number: 5,
    relatedStepIndex: 4,
    topicBadge: 'Steg 5 • Gravitasjonsbrønn & Baner',
    question:
      'Hvorfor svever astronautene vektløse inne på Den internasjonale romstasjonen (ISS) ca. 400 km over Jorda?',
    options: [
      'Fordi det er 0 % tyngdekraft så snart man kommer over skyene',
      'Fordi både romstasjonen og astronautene går med ~27 600 km/t i kontinuerlig fritt fall langs Jordas krummede romtid',
      'Fordi draktene deres er fylt med heliumgass',
      'Fordi Månen opphever all tyngdekraft fra Jorda i lav jordbane',
    ],
    correctIndex: 1,
    explanation:
      '400 km oppe er tyngdekraften fortsatt nesten 90 % like sterk som på bakken! Astronautene svever fordi de og romstasjonen faller fritt i bane rundt Jorda med stor sidefart.',
  },
  {
    id: 'st-mcq-6',
    number: 6,
    relatedStepIndex: 5,
    topicBadge: 'Steg 6 • Gravitasjonslinser',
    question:
      'Hvordan kan en tung galaksehop virke som en «gravitasjonslinse» som bøyer og forstørrer lys, når lyspartikler (fotoner) ikke har masse?',
    options: [
      'Fordi lyset følger selve romtiden – og når galaksehopen krummer romtiden, bøyes også lysets bane',
      'Fordi gassen mellom galaksene er lagd av polert kvartsglass',
      'Fordi fotoner får stor masse hver gang de passerer en stjerne',
      'Fordi lyset spretter tilbake som et ekko fra måneoverflaten',
    ],
    correctIndex: 0,
    explanation:
      'Lys tar alltid den raskeste/retteste veien gjennom romtiden. Når tunge galaksehoper (og mørk materie!) krummer rommet, bøyes lyset til buer og Einstein-ringer.',
  },
  {
    id: 'st-mcq-7',
    number: 7,
    relatedStepIndex: 6,
    topicBadge: 'Steg 7 • Sorte hull & Hendelseshorisont',
    question:
      'Hva skjer med romtiden og tiden ved «hendelseshorisonten» til et sort hull?',
    options: [
      'Romtiden blir helt flat, og klokker tikker tusen ganger raskere enn på Jorda',
      'Alle nærliggende planeter uansett avstand suges inn på få sekunder',
      'Romtiden krummes så ekstremt at unnslipningsfarten passerer lysfarten c, og sett utenfra ser tiden ut til å bremse kraftig opp',
      'Det sorte hullet tenner kjernefusjon på nytt og blir til en gul stjerne',
    ],
    correctIndex: 2,
    explanation:
      'Innenfor hendelseshorisonten kreves større fart enn lysfarten c for å slippe ut, og ekstrem gravitasjonell tidsdilatasjon gjør at klokker der nede går voldsomt sakte sett utenfra.',
  },
  {
    id: 'st-mcq-8',
    number: 8,
    relatedStepIndex: 7,
    topicBadge: 'Steg 8 • Gravitasjonsbølger',
    question:
      'Hva var det LIGO-observatoriet målte direkte for første gang i 2015?',
    options: [
      'Lydbølger gjennom lufta fra et vulkanutbrudd på Venus',
      'Gravitasjonsbølger – ørsmå krusninger som strekker og krymper selve romtiden etter to kolliderende sorte hull',
      'Radiosignaler fra den første stjernen i Melkeveien',
      'Solvind fra en solstorm rett mot Jorda',
    ],
    correctIndex: 1,
    explanation:
      'Hundre år etter at Einstein spådde dem, målte LIGO gravitasjonsbølger fra sammensmeltende sorte hull – en lengdeendring mindre enn en tusendels protonbredde over 4 km!',
  },
  {
    id: 'st-mcq-9',
    number: 9,
    relatedStepIndex: 8,
    topicBadge: 'Steg 9 • Rommet selv utvider seg',
    question:
      'Hva er hovedpoenget med «rosinbolle-modellen» (eller ballongmodellen) for universets utvidelse?',
    options: [
      'At Melkeveien ligger helt alene i det eksakte midtpunktet av et tomt rom mens alle andre galakser flyr vekk fra bare oss',
      'At Jorda og menneskekroppen vokser til dobbel størrelse hvert milliardte år',
      'At det er selve rommet MELLOM galaksehopene som utvider seg overalt uten noe midtpunkt, og strekker lysbølgene mot rødt',
      'At universet har en hard skorpe ytterst laget av stein og is',
    ],
    correctIndex: 2,
    explanation:
      'Lokale systemer som oss og Melkeveien holdes samlet av krefter og tyngdekraft, mens selve rommet mellom galaksehopene vokser overalt og gir kosmisk rødforskyvning!',
  },
  {
    id: 'st-mcq-10',
    number: 10,
    relatedStepIndex: 9,
    topicBadge: 'Steg 10 • Mørk materie vs. Mørk energi',
    question:
      'Hvordan skiller virkningen av mørk materie (~27 %) seg fra mørk energi (~68 %) på stor skala i romtiden?',
    options: [
      'Mørk materie lyser kraftig i røntgen, mens mørk energi lyser i synlig grønt lys',
      'Begge to består av vanlige hydrogenatomer fra Big Bang',
      'Mørk materie skyver galaksene fra hverandre, mens mørk energi samler støv til planeter',
      'Mørk materie krummer romtiden og holder galakser/hoper samlet («lim»), mens mørk energi får universets utvidelse til å akselerere («gasspedal»)',
    ],
    correctIndex: 3,
    explanation:
      'Mørk materie bidrar med ekstra tiltrekkende gravitasjonsbrønner rundt galaksene, mens mørk energi driver den akselererende utvidelsen av tomrommet mellom galaksehopene!',
  },
];

export const RADIATION_MCQ_QUESTIONS: McqQuestionItem[] = [
  {
    id: 'rad-mcq-1',
    number: 1,
    relatedStepIndex: 0,
    topicBadge: 'Steg 1 • Bølger & fotoner (c = λ · f)',
    question:
      'Hva skjer med frekvensen og energien til hvert foton når bølgelengden til elektromagnetisk stråling blir kortere?',
    options: [
      'Frekvensen øker, og energien i hvert enkelt foton øker',
      'Frekvensen minker, og lyset beveger seg langsommere i vakuum',
      'Både frekvensen og energien i hvert foton blir halvert',
      'Frekvensen er uendret fordi kun lydbølger har frekvens',
    ],
    correctIndex: 0,
    explanation:
      'Siden alt lys i vakuum reiser med samme fart (c = λ · f), gir kortere bølgelengde (λ) automatisk høyere frekvens (f) og mer energi i hvert foton!',
  },
  {
    id: 'rad-mcq-2',
    number: 2,
    relatedStepIndex: 1,
    topicBadge: 'Steg 2 • Radio- & mikrobølger',
    question:
      'Hvorfor regnes radiobølger og mikrobølger (f.eks. fra mobilnett, Wi-Fi og radioteleskoper) som ikke-ioniserende stråling?',
    options: [
      'Fordi radiobølger trenger luft for å bevege seg og stopper ved bakken',
      'Fordi bølgelengden er så lang at hvert enkelt foton har altfor lav energi til å slå løs elektroner i atomer eller skade DNA direkte',
      'Fordi radiobølger beveger seg tusen ganger saktere enn synlig lys',
      'Fordi radiobølger bare består av nøytroner uten elektrisk felt',
    ],
    correctIndex: 1,
    explanation:
      'Lang bølgelengde betyr lav frekvens og svært lav fotonenergi – strålingen kan gi oppvarming ved høy effekt, men kan ikke ionisere atomer eller klippe DNA-tråder.',
  },
  {
    id: 'rad-mcq-3',
    number: 3,
    relatedStepIndex: 2,
    topicBadge: 'Steg 3 • Infrarød & Synlig lys',
    question:
      'Hvorfor er James Webb-romteleskopet spesiallaget for å observere infrarød stråling i stedet for bare vanlig synlig lys?',
    options: [
      'Fordi det ikke finnes stjerner i universet som sender ut synlig lys',
      'Fordi infrarøde bølger reiser dobbelt så raskt gjennom rommet som blått lys',
      'Fordi lengre infrarøde bølger slipper gjennom tette støvskyer og fanger opp sterkt rødforskjøvet lys fra de aller første galaksene',
      'Fordi infrarød stråling er den mest ioniserende strålingen i spekteret',
    ],
    correctIndex: 2,
    explanation:
      'Infrarødt lys smetter forbi kosmiske støvkorn som blokkerer synlig lys, og fanger i tillegg opp lyset fra uruniversets galakser som er strukket over i IR!',
  },
  {
    id: 'rad-mcq-4',
    number: 4,
    relatedStepIndex: 3,
    topicBadge: 'Steg 4 • Ioniserende stråling',
    question:
      'Hvilke tre typer stråling i det elektromagnetiske spekteret har kortest bølgelengde og er ioniserende?',
    options: [
      'Radiobølger, mikrobølger og infrarød varmestråling',
      'Rødt lys, gult lys og grønt lys',
      'Lydbølger, vannbølger og radiobølger',
      'Kortbølget ultrafiolett (UV), røntgenstråling og gammastråling',
    ],
    correctIndex: 3,
    explanation:
      'Fra kortbølget UV gjennom røntgen til gammastråling har hvert enkelt foton høy nok energi til å rive løs elektroner fra atomer (ionisere) og endre DNA.',
  },
  {
    id: 'rad-mcq-5',
    number: 5,
    relatedStepIndex: 4,
    topicBadge: 'Steg 5 • Temperaturstråling',
    question:
      'På nattehimmelen ser vi en rød-oransje stjerne og en blåhvit stjerne. Hvilken av dem har høyest overflatetemperatur?',
    options: [
      'Den rød-oransje stjernen er alltid varmest, akkurat som rød merking på vannkrana',
      'Den blåhvite stjernen er klart varmest, fordi høyere temperatur forskyver strålingstoppen mot kortere, blåere bølgelengder',
      'Alle stjerner har nøyaktig samme overflatetemperatur på 5 800 kelvin',
      'Fargen avhenger bare av hvor mye oksygengass stjernen har rundt seg',
    ],
    correctIndex: 1,
    explanation:
      'Etter Wiens forskyvningslov gløder kjøligere stjerner (~3 200 K) rødt, Sola (~5 800 K) gulhvitt, og de aller varmeste stjernene (> 12 000–25 000 K) blåhvitt!',
  },
  {
    id: 'rad-mcq-6',
    number: 6,
    relatedStepIndex: 5,
    topicBadge: 'Steg 6 • Spektrallinjer',
    question:
      'Hva skyldes de mørke absorpsjonslinjene (Fraunhofer-linjene) i regnbuespekteret fra en stjerne?',
    options: [
      'At elektroner i grunnstoffene i stjerneatmosfæren absorberer fotoner med helt bestemte bølgelengder for å hoppe opp til høyere elektronskall',
      'At kosmiske støvkorn lager tilfeldige skygger som skifter plass hvert minutt',
      'At teleskopspeilet mangler evnen til å reflektere grønt og gult lys',
      'At sorte hull mellom oss og stjernen sluker annenhver farge i regnbuen',
    ],
    correctIndex: 0,
    explanation:
      'Hvert grunnstoff har unike energisprang mellom elektronskallene sine og etterlater derfor et unikt mønster av mørke linjer («strekkode») i stjernelyset.',
  },
  {
    id: 'rad-mcq-7',
    number: 7,
    relatedStepIndex: 6,
    topicBadge: 'Steg 7 • Doppler & Rødforskyvning',
    question:
      'Astronomer ser at hele mønsteret av spektrallinjer fra Andromedagalaksen er litt blåforskjøvet, mens fjerne galakser er sterkt rødforskjøvet. Hva betyr det?',
    options: [
      'At Andromedagalaksen mangler hydrogen, mens fjerne galakser bare består av jern',
      'At Andromedagalaksen er på vei bort fra oss, mens fjerne galakser står helt stille',
      'At Andromedagalaksen beveger seg mot Melkeveien, mens de fjerne galaksene fjerner seg fordi rommet utvider seg',
      'At lyset fra Andromedagalaksen går raskere enn 300 000 km/s',
    ],
    correctIndex: 2,
    explanation:
      'Bevegelse mot oss presser lysbølgene sammen (blåforskyvning), mens rommets utvidelse strekker lysbølgene fra fjerne galakser mot lengre bølgelengder (rødforskyvning).',
  },
  {
    id: 'rad-mcq-8',
    number: 8,
    relatedStepIndex: 7,
    topicBadge: 'Steg 8 • Kosmisk bakgrunnsstråling (CMB)',
    question:
      'Hvorfor fanger vi opp den kosmiske bakgrunnsstrålingen fra det tidlige universet som kalde mikrobølger (2,725 K) i dag?',
    options: [
      'Fordi universet var 2,725 K kaldt allerede ett sekund etter Big Bang',
      'Fordi strålingen ble sendt ut av moderne radioteleskoper på Jorda',
      'Fordi ozonlaget gjør alt synlig stjernelys om til mikrobølger',
      'Fordi varmelyset fra da universet ble gjennomsiktig ved ~3 000 K har blitt strukket ~1 100 ganger i bølgelengde av rommets utvidelse',
    ],
    correctIndex: 3,
    explanation:
      'Ved t = 380 000 år slapp varmestrålingen ved 3 000 K fri da de første atomene ble dannet; 13,8 milliarder års kosmisk utvidelse har strukket bølgene 1 100 ganger til mikrobølger!',
  },
  {
    id: 'rad-mcq-9',
    number: 9,
    relatedStepIndex: 8,
    topicBadge: 'Steg 9 • Atmosfærens skjold & vinduer',
    question:
      'Hvilke to typer elektromagnetisk stråling slipper lettest helt ned til bakken gjennom Jordas «atmosfæriske vinduer»?',
    options: [
      'Gammastråling og røntgenstråling',
      'Synlig lys og radiobølger',
      'Kortbølget UV-C og røntgenstråling',
      'Kun gammastråling fra fjerne pulsarer',
    ],
    correctIndex: 1,
    explanation:
      'Atmosfæren og ozonlaget stopper heldigvis gamma, røntgen og UV-C, men slipper gjennom synlig lys og radiobølger – derfor må røntgen- og gammateleskoper opp i verdensrommet!',
  },
  {
    id: 'rad-mcq-10',
    number: 10,
    relatedStepIndex: 9,
    topicBadge: 'Steg 10 • Strålingsbalanse & Drivhus',
    question:
      'Hva er selve kjernen i drivhuseffekten ut fra det elektromagnetiske spekteret?',
    options: [
      'Drivhusgassene (som H₂O, CO₂ og CH₄) slipper kortbølget synlig sollys inn, men absorberer og holder igjen deler av den utgående langbølgede infrarøde varmestrålingen fra Jorda',
      'Drivhusgassene slipper bare inn røntgenstråling fra Sola og gjør den om til radiobølger',
      'Ozonlaget reflekterer 100 % av alt synlig sollys tilbake til verdensrommet',
      'Nitrogen (N₂) og oksygen (O₂) fanger opp all gammastråling fra jordskorpa',
    ],
    correctIndex: 0,
    explanation:
      'Sola (5 800 K) stråler mest i kortbølget synlig lys som går gjennom lufta og varmer bakken, mens den lunkne Jorda (~288 K) stråler ut langbølget IR som absorberes av drivhusgasser!',
  },
  {
    id: 'rad-mcq-11',
    number: 11,
    relatedStepIndex: 10,
    topicBadge: 'Steg 11 • Bølgefenomener',
    question:
      'Hvorfor bøyes radiobølger lettere rundt fjelltopper og bygninger enn synlig lys?',
    options: [
      'Fordi radiobølger har mye kortere bølgelengde enn lys',
      'Fordi radiobølger har lang bølgelengde (meter til kilometer) på størrelse med hindringer, slik at bøyning (diffraksjon) blir sterk',
      'Fordi radiobølger reiser raskere enn lysfarten c',
      'Fordi synlig lys ikke kan reflekteres eller brytes',
    ],
    correctIndex: 1,
    explanation:
      'Bøyning (diffraksjon) er sterkest når bølgelengden er omtrent like stor som spalten eller hindringen. Radiobølger (meterlange) runder derfor bygninger og åser lett, mens lys (~500 nm) kaster skarpe skygger.',
  },
  {
    id: 'rad-mcq-12',
    number: 12,
    relatedStepIndex: 11,
    topicBadge: 'Steg 12 • Trådløs kommunikasjon',
    question:
      'Hva betyr «modulasjon» i trådløs kommunikasjon som 5G, WiFi og radio?',
    options: [
      'At man endrer amplituden, frekvensen eller fasen til en høyfrekvent bærebølge i takt med informasjonen (0 og 1 / lyd) som skal sendes',
      'At man gjør radiobølger om til ioniserende gammastråling for å øke rekkevidden',
      'At mottakeren stopper all bakgrunnsstråling fra verdensrommet',
      'At antennen bremser lyset ned til lydens hastighet',
    ],
    correctIndex: 0,
    explanation:
      'En ren bærebølge bærer ingen melding i seg selv. Ved modulasjon koder senderen informasjon inn på bærebølgen ved å variere amplitude (AM), frekvens (FM) eller digitale tilstander.',
  },
  {
    id: 'rad-mcq-13',
    number: 13,
    relatedStepIndex: 12,
    topicBadge: 'Steg 13 • Radioaktivitet (α, β, γ)',
    question:
      'Hvilken rekkefølge viser økende gjennomtrengningsevne (fra svakest til sterkest) for de tre typene radioaktiv stråling?',
    options: [
      'Gammastråling (γ) → Betastråling (β) → Alfastråling (α)',
      'Betastråling (β) → Alfastråling (α) → Gammastråling (γ)',
      'Alfastråling (α) → Betastråling (β) → Gammastråling (γ)',
      'Alle tre stoppes like lett av et tynt papirark',
    ],
    correctIndex: 2,
    explanation:
      'Alfastråling (tunge heliumkjerner) stoppes av et papirark eller hud, betastråling (raske elektroner) stoppes av en tynn aluminiumsplate, mens gammastråling (fotoner) krever tykt bly eller betong.',
  },
  {
    id: 'rad-mcq-14',
    number: 14,
    relatedStepIndex: 13,
    topicBadge: 'Steg 14 • Stråling, helse & kildekritikk',
    question:
      'Hvorfor gir mobilstråling og WiFi (2,4–5 GHz) ikke direkte DNA-skader slik UV-B, røntgen eller radongass gjør?',
    options: [
      'Fordi menneskeskapt stråling alltid er svakere enn naturlig stråling',
      'Fordi hvert foton i radiobølger/mikrobølger har altfor lav energi (ikke-ioniserende) til å slå løs elektroner fra DNA-molekyler',
      'Fordi mobilmaster bare sender når ingen er i nærheten',
      'Fordi huden vår er laget av bly',
    ],
    correctIndex: 1,
    explanation:
      'Det er fotonenergien (E = h · f) som avgjør om stråling er ioniserende. Mobil/WiFi-fotoner har over en million ganger for lav energi til å ionisere atomer eller klippe over DNA-tråder.',
  },
];

export const GALAXIES_MCQ_QUESTIONS: McqQuestionItem[] = [
  {
    id: 'gal-mcq-1',
    number: 1,
    relatedStepIndex: 0,
    topicBadge: 'Steg 1 • Stjerneøyer i rommet',
    question:
      'Hva beviste Edwin Hubble i 1924 da han målte avstanden til Andromedatåken?',
    options: [
      'At Andromedatåken var en liten gassky inne i vårt eget solsystem rett utenfor Neptun',
      'At Andromedatåken var en egen, gigantisk galakse millioner av lysår utenfor Melkeveien',
      'At Melkeveien kun inneholder rundt tusen stjerner til sammen',
      'At det ikke finnes gass eller støv mellom stjernene i en galakse',
    ],
    correctIndex: 1,
    explanation:
      'Hubbles avstandsmåling med kefeide-stjerner viste at «spiraltåkene» var egne galakser langt utenfor Melkeveien – og åpnet døren til et univers med tusenvis av milliarder galakser!',
  },
  {
    id: 'gal-mcq-2',
    number: 2,
    relatedStepIndex: 1,
    topicBadge: 'Steg 2 • Melkeveien',
    question:
      'Hvilken galaksetype er Melkeveien, og omtrent hvor i galaksen ligger Solsystemet vårt?',
    options: [
      'En stavspiralgalakse (~100 000 lysår bred), med Sola i en spiralarm rundt 26 000 lysår fra sentrum',
      'En kuleformet ellipsegalakse der Sola ligger helt stille i det eksakte midtpunktet',
      'En liten uregelmessig dverggalakse med bare én million stjerner',
      'En ring av steinplaneter uten stjerner eller interstellart støv',
    ],
    correctIndex: 0,
    explanation:
      'Melkeveien er en stavspiralgalakse med 100–400 milliarder stjerner, og Solsystemet ligger i Orion-armen omtrent halvveis ut fra sentrum (~26 000 lysår).',
  },
  {
    id: 'gal-mcq-3',
    number: 3,
    relatedStepIndex: 2,
    topicBadge: 'Steg 3 • Sagittarius A*',
    question:
      'Hvordan oppdaget astronomene det supermassive sorte hullet Sagittarius A* (~4,1 millioner solmasser) midt i Melkeveien?',
    options: [
      'Fordi det sorte hullet sender ut sterkere grønt lys enn alle andre stjerner på nattehimmelen',
      'Ved å reise dit med romsonden Voyager 1 og ta nærbilder',
      'Ved å bruke infrarøde teleskoper til å følge stjerner som suser i skarpe baner med enorm fart rundt et usynlig, kompakt punkt',
      'Fordi det sluker tusenvis av planeter i Solsystemet vårt hvert eneste år',
    ],
    correctIndex: 2,
    explanation:
      'Infrarødt lys trenger gjennom støvskyene mot galaksesenteret og avslørte stjernebaner (som stjernen S2) rundt en usynlig masse på 4,1 millioner solmasser – senere også avbildet i radiobølger av EHT!',
  },
  {
    id: 'gal-mcq-4',
    number: 4,
    relatedStepIndex: 3,
    topicBadge: 'Steg 4 • Galaksetyper',
    question:
      'Hvorfor lyser armene i en spiralgalakse ofte blåhvitt, mens store ellipsegalakser gjerne har en jevn gulrød farge?',
    options: [
      'Fordi spiralgalakser er dekket av flytende vann og is',
      'Fordi ellipsegalakser bare består av nøytroner uten elektroner',
      'Fordi spiralgalakser alltid beveger seg mot Jorda, mens ellipsegalakser står i ro',
      'Fordi spiralarmene har rikelig med kald gass som danner unge, brennhete blå stjerner, mens ellipsegalakser har lite gass og domineres av eldre, kjøligere gulrøde stjerner',
    ],
    correctIndex: 3,
    explanation:
      'Store blå stjerner lever svært kort, så blåhvite spiralarmer viser at nye stjerner fødes akkurat nå – mens gassfattige ellipsegalakser lyser med seiglivede gule og røde eldre stjerner.',
  },
  {
    id: 'gal-mcq-5',
    number: 5,
    relatedStepIndex: 4,
    topicBadge: 'Steg 5 • Galaksekollisjoner',
    question:
      'Hva skjer med enkeltstjernene når Melkeveien og Andromedagalaksen kolliderer om rundt 4,5 milliarder år?',
    options: [
      'Nesten ingen enkeltstjerner krasjer i hverandre fordi avstandene mellom stjernene er enorme, men gasskyene kolliderer og utløser kraftig stjernedannelse',
      'Alle stjernene i begge galaksene knuses mot hverandre i løpet av noen få timer',
      'Begge galaksene forsvinner sporløst uten at noen nye stjerner dannes',
      'Stjernene stopper helt opp og legger seg på én rett linje',
    ],
    correctIndex: 0,
    explanation:
      'Stjerner er ørsmå sammenlignet med lysårene imellom dem, så stjernene glir forbi hverandre mens gasskyene komprimeres og galaksene etter hvert smelter sammen til en stor ellipsegalakse!',
  },
  {
    id: 'gal-mcq-6',
    number: 6,
    relatedStepIndex: 5,
    topicBadge: 'Steg 6 • Mørk materie-haloen',
    question:
      'Hva var det Vera Rubin oppdaget da hun målte rotasjonshastigheten til stjerner og gass ytterst i spiralgalakser?',
    options: [
      'At ytterkantene av alle galakser står helt stille uten å rotere',
      'At stjernene ytterst beveger seg altfor raskt til at den synlige stjernemassen alene kan holde dem på plass – galaksene må ligge inni en enorm halo av mørk materie',
      'At galakser bare inneholder synlige stjerner og overhodet ingen usynlig masse',
      'At stjernene ytterst roterer raskere enn lysfarten c',
    ],
    correctIndex: 1,
    explanation:
      'De flate rotasjonskurvene viste at hver galakse er omgitt av en vidstrakt, usynlig glorie av mørk materie med omtrent fem ganger mer masse enn den vanlige materien!',
  },
  {
    id: 'gal-mcq-7',
    number: 7,
    relatedStepIndex: 6,
    topicBadge: 'Steg 7 • Kvasarer & AGN',
    question:
      'Hva er det som gjør en kvasar (aktiv galaksekjerne) i stand til å lyse sterkere enn en hel galakse med hundrevis av milliarder stjerner?',
    options: [
      'En enkelt vanlig hovedseriestjerne på størrelse med Sola',
      'Reflektert sollys fra store isfjell ute i galaksens spiralarmer',
      'Enorme mengder gass som virvler og varmes til millioner av grader i en akkresjonsskive utenfor et supermassivt sort hull',
      'Lydbølger fra kolliderende steinplaneter i galaksens ytterkant',
    ],
    correctIndex: 2,
    explanation:
      'Når et supermassivt sort hull fôres med store gassmengder, gjør friksjon og magnetfelt i skiven utenfor hendelseshorisonten enorm energi om til intens stråling og jetstråler!',
  },
  {
    id: 'gal-mcq-8',
    number: 8,
    relatedStepIndex: 7,
    topicBadge: 'Steg 8 • De første urgalaksene',
    question:
      'Hvordan skiller de aller første galaksene 200–400 millioner år etter Big Bang seg fra dagens store spiralgalakser som Melkeveien?',
    options: [
      'De var nøyaktig like store og inneholdt like mye gull og uran som dagens galakser',
      'De besto utelukkende av kalde hvite dverger uten hydrogengass',
      'De inneholdt ingen stjerner, bare ferdige steinplaneter som Jorda',
      'De var mindre, mer kompakte og klumpete «babygalakser» av nesten ren hydrogen- og heliumgass som senere vokste ved sammensmeltinger',
    ],
    correctIndex: 3,
    explanation:
      'Store galakser vokste hierarkisk over milliarder av år ved at mange små, gassrike urgalakser trakk til seg gass og smeltet sammen!',
  },
  {
    id: 'gal-mcq-9',
    number: 9,
    relatedStepIndex: 8,
    topicBadge: 'Steg 9 • Kosmisk adresse & Laniakea',
    question:
      'Hvilken rekkefølge viser vår «kosmiske adresse» riktig fra minst til størst struktur?',
    options: [
      'Solsystemet → Laniakea → Melkeveien → Den lokale gruppen',
      'Solsystemet → Melkeveien → Den lokale gruppen → Superhopen Laniakea → Det kosmiske nettverket',
      'Den lokale gruppen → Solsystemet → Melkeveien → Jorda',
      'Melkeveien → Solsystemet → Det kosmiske nettverket → Den lokale gruppen',
    ],
    correctIndex: 1,
    explanation:
      'Solsystemet ligger i Melkeveien (~100 000 lysår), som tilhører Den lokale gruppen (~80 galakser), som igjen inngår i superhopen Laniakea (~100 000 galakser) i Det kosmiske nettverket!',
  },
  {
    id: 'gal-mcq-10',
    number: 10,
    relatedStepIndex: 9,
    topicBadge: 'Steg 10 • Det kosmiske nettverket',
    question:
      'Hvordan er galaksene fordelt når vi kartlegger universet på sin aller største skala (milliarder av lysår)?',
    options: [
      'I «Det kosmiske nettverket» – lange lysende tråder (filamenter) og knutepunkter av galaksehoper langs et skjelett av mørk materie, med enorme tomrom imellom',
      'Samlet i én eneste tett kule midt i universet med helt tomt rom utenfor',
      'Ordnet i helt rette firkantede ruter med nøyaktig lik avstand mellom alle galakser',
      'Kun langs en tynn ring rundt Solsystemet vårt',
    ],
    correctIndex: 0,
    explanation:
      'Små tetthetsvariasjoner fra det tidlige universet (synlige i CMB) vokste gjennom tyngdekraften fra mørk materie frem til dagens kosmiske nettverk av filamenter, hoper og tomrom!',
  },
];


