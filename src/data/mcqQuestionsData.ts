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
