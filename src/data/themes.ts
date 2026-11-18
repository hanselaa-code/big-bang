import {
  BIG_BANG_CONTROL_QUESTIONS,
  BIG_BANG_MAIN_STEP_IDS,
  BIG_BANG_NODE_MAP,
  BIG_BANG_NODES,
  type ControlQuestionItem,
  type CosmicNodeData,
} from './bigBangData';
import {
  ELEMENTS_CONTROL_QUESTIONS,
  ELEMENTS_MAIN_STEP_IDS,
  ELEMENTS_NODE_MAP,
  ELEMENTS_NODES,
} from './elementsData';
import {
  GALAXIES_CONTROL_QUESTIONS,
  GALAXIES_MAIN_STEP_IDS,
  GALAXIES_NODE_MAP,
  GALAXIES_NODES,
} from './galaxiesData';
import {
  BIG_BANG_MCQ_QUESTIONS,
  ELEMENTS_MCQ_QUESTIONS,
  GALAXIES_MCQ_QUESTIONS,
  RADIATION_MCQ_QUESTIONS,
  SPACETIME_MCQ_QUESTIONS,
  STARS_MCQ_QUESTIONS,
  type McqQuestionItem,
} from './mcqQuestionsData';
import {
  RADIATION_CONTROL_QUESTIONS,
  RADIATION_MAIN_STEP_IDS,
  RADIATION_NODE_MAP,
  RADIATION_NODES,
} from './radiationData';
import {
  SPACETIME_CONTROL_QUESTIONS,
  SPACETIME_MAIN_STEP_IDS,
  SPACETIME_NODE_MAP,
  SPACETIME_NODES,
} from './spacetimeData';
import {
  STARS_CONTROL_QUESTIONS,
  STARS_MAIN_STEP_IDS,
  STARS_NODE_MAP,
  STARS_NODES,
} from './starsData';

export type ThemeId =
  | 'big-bang'
  | 'stjerner'
  | 'grunnstoffer'
  | 'straling'
  | 'galakser'
  | 'romtid';
export type AppView = 'universet' | ThemeId;

export interface ThemeConfig {
  id: ThemeId;
  hash: string;
  title: string;
  dropdownTitle: string;
  dropdownBadge: string;
  dropdownDescription: string;
  subtitle: string;
  stepWord: string;
  showAllLabel: string;
  progressiveLabel: string;
  quizTitle: string;
  backFromQuizLabel: string;
  summaryHeadingPrefix: string;
  traitsHeading: string;
  classroomBoxHeading: string;
  examplesHeading: string;
  mainStepIds: string[];
  allNodes: CosmicNodeData[];
  nodeMap: Record<string, CosmicNodeData>;
  controlQuestions: ControlQuestionItem[];
  mcqQuestions: McqQuestionItem[];
  quizShortcuts: { label: string; idx: number }[];
}

export const THEMES: Record<ThemeId, ThemeConfig> = {
  'big-bang': {
    id: 'big-bang',
    hash: '#big-bang',
    title: 'Big Bang – Universets historie (De store linjene)',
    dropdownTitle: 'Big Bang – De store linjene',
    dropdownBadge: 'Tidslinje • t = 0 → 13,8 mrd. år',
    dropdownDescription:
      'Interaktiv kosmisk tidslinje gjennom 10 hovedsteg fra Big Bang, de første atomene og bakgrunnsstrålingen til stjerner, supernovaer, Solsystemet og universet i dag.',
    subtitle:
      'Interaktiv klasseromspresentasjon • 13,8 milliarder års kosmisk historie (Vg1 Naturfag)',
    stepWord: 'Steg',
    showAllLabel: 'Vis hele tidslinjen',
    progressiveLabel: 'Stegvis modus',
    quizTitle: 'Kontrollspørsmål: Big Bang – De store linjene',
    backFromQuizLabel: 'Tilbake til tidslinjen',
    summaryHeadingPrefix: 'Hva skjer i universet?',
    traitsHeading: 'Fysiske mekanismer og nøkkelpunkter',
    classroomBoxHeading: 'Klasseromstriks & tankeeksperiment',
    examplesHeading: 'Nøkkelbegreper på dette steget',
    mainStepIds: BIG_BANG_MAIN_STEP_IDS,
    allNodes: BIG_BANG_NODES,
    nodeMap: BIG_BANG_NODE_MAP,
    controlQuestions: BIG_BANG_CONTROL_QUESTIONS,
    mcqQuestions: BIG_BANG_MCQ_QUESTIONS,
    quizShortcuts: [
      { label: 'Steg 1: Big Bang & Inflasjon', idx: 0 },
      { label: 'Steg 3: Hydrogen & Helium (3 min)', idx: 2 },
      { label: 'Steg 4: Bakgrunnsstrålingen (380 000 år)', idx: 3 },
      { label: 'Steg 6: De første stjernene', idx: 5 },
      { label: 'Steg 7: Supernovaer & grunnstoffer', idx: 6 },
      { label: 'Steg 9: Solsystemet & Jorda', idx: 8 },
      { label: 'Steg 10: Rødforskyvning & mørk energi', idx: 9 },
    ],
  },

  stjerner: {
    id: 'stjerner',
    hash: '#stjerner',
    title: 'Stjerner – Fødsel, fusjonsmotor og forgrenet livsløp',
    dropdownTitle: 'Stjerner – Livsløp & fusjon',
    dropdownBadge: 'Forgrenet tidslinje • Masse avgjør skjebnen',
    dropdownDescription:
      'Forgrenet utviklingslinje fra stjernetåke og hovedseriestjerne til to ulike skjebner: sol-lignende stjerner (hvit dverg) og tunge stjerner (supernova, nøytronstjerne og sort hull).',
    subtitle:
      'Interaktivt forgrenet livsløp • Fra stjernetåke og kjernefusjon til hvit dverg, supernova og sort hull (Vg1 Naturfag)',
    stepWord: 'Steg',
    showAllLabel: 'Vis hele livsløpet',
    progressiveLabel: 'Stegvis modus',
    quizTitle: 'Kontrollspørsmål: Stjernenes livsløp & fusjon',
    backFromQuizLabel: 'Tilbake til stjernetreet',
    summaryHeadingPrefix: 'Hva skjer i stjernen?',
    traitsHeading: 'Fysiske mekanismer og kjennetegn',
    classroomBoxHeading: 'Klasseromstriks & tankeeksperiment',
    examplesHeading: 'Nøkkelbegreper på dette steget',
    mainStepIds: STARS_MAIN_STEP_IDS,
    allNodes: STARS_NODES,
    nodeMap: STARS_NODE_MAP,
    controlQuestions: STARS_CONTROL_QUESTIONS,
    mcqQuestions: STARS_MCQ_QUESTIONS,
    quizShortcuts: [
      { label: 'Steg 1: Stjernetåke', idx: 0 },
      { label: 'Steg 3: Hovedserien & likevekt', idx: 2 },
      { label: 'Steg 4: Rød kjempe (< 8 M☉)', idx: 3 },
      { label: 'Steg 6: Hvit dverg', idx: 5 },
      { label: 'Steg 7: Rød superkjempe & jern', idx: 6 },
      { label: 'Steg 8: Supernova', idx: 7 },
      { label: 'Steg 9–10: Pulsar & Sort hull', idx: 9 },
    ],
  },

  grunnstoffer: {
    id: 'grunnstoffer',
    hash: '#grunnstoffer',
    title: 'Grunnstoffer – Atomet, periodesystemet og de 4 kosmiske smiene',
    dropdownTitle: 'Grunnstoffer – Atomet & smia',
    dropdownBadge: 'Modell • Nr. 1 (H) → Nr. 92 (U)',
    dropdownDescription:
      'Utforsk atomkjernen, isotoper, elektronskall, spektrallinjer og de fire kosmiske smiene (Big Bang, stjerner, supernovaer og kilonovaer) som skapte grunnstoffene i oss.',
    subtitle:
      'Interaktiv modell • Fra protoner, skall og spektrallinjer til stjernestøv i menneskekroppen (Vg1 Naturfag)',
    stepWord: 'Del',
    showAllLabel: 'Vis hele modellen',
    progressiveLabel: 'Stegvis modus',
    quizTitle:
      'Kontrollspørsmål: Atomet, periodesystemet & grunnstoffenes opprinnelse',
    backFromQuizLabel: 'Tilbake til grunnstoff-modellen',
    summaryHeadingPrefix: 'Hva skjer her?',
    traitsHeading: 'Viktige prinsipper og nøkkelpunkter',
    classroomBoxHeading: 'Klasseromstriks & tankeeksperiment',
    examplesHeading: 'Nøkkelbegreper på denne delen',
    mainStepIds: ELEMENTS_MAIN_STEP_IDS,
    allNodes: ELEMENTS_NODES,
    nodeMap: ELEMENTS_NODE_MAP,
    controlQuestions: ELEMENTS_CONTROL_QUESTIONS,
    mcqQuestions: ELEMENTS_MCQ_QUESTIONS,
    quizShortcuts: [
      { label: 'Del 1: Atomkjernen & protoner', idx: 0 },
      { label: 'Del 2: Nøytroner & isotoper', idx: 1 },
      { label: 'Del 3: Elektronskall & periodesystemet', idx: 2 },
      { label: 'Del 4: Spektrallinjer (strekkode)', idx: 3 },
      { label: 'Del 5: Smie 1 – Big Bang (H & He)', idx: 4 },
      { label: 'Del 6–7: Stjerner & Jernmuren (Fe)', idx: 6 },
      { label: 'Del 8–9: Supernova & Kilonova (Au)', idx: 8 },
      { label: 'Del 10: Stjernestøv i mennesket', idx: 9 },
    ],
  },

  straling: {
    id: 'straling',
    hash: '#straling',
    title: 'Stråling – Bølgespekteret, stjernelysets kode, CMB og Jordas atmosfære',
    dropdownTitle: 'Stråling – Spekter, CMB & klima',
    dropdownBadge: 'Bølgespekteret • Radio → Gamma & CMB',
    dropdownDescription:
      'Utforsk elektromagnetiske bølger og fotoner, ioniserende vs. ikke-ioniserende stråling, spektrallinjer, rødforskyvning, bakgrunnsstrålingen (CMB) og drivhuseffekten.',
    subtitle:
      'Interaktivt bølgespekter • Fra fotoner og spektrallinjer til kosmisk bakgrunnsstråling og drivhuseffekt (Vg1 Naturfag)',
    stepWord: 'Steg',
    showAllLabel: 'Vis hele bølgespekteret',
    progressiveLabel: 'Stegvis modus',
    quizTitle:
      'Kontrollspørsmål: Elektromagnetisk stråling, spekter, CMB & atmosfæren',
    backFromQuizLabel: 'Tilbake til bølgespekteret',
    summaryHeadingPrefix: 'Hva skjer med strålingen?',
    traitsHeading: 'Fysiske mekanismer og nøkkelpunkter',
    classroomBoxHeading: 'Klasseromstriks & forsøk',
    examplesHeading: 'Nøkkelbegreper på dette steget',
    mainStepIds: RADIATION_MAIN_STEP_IDS,
    allNodes: RADIATION_NODES,
    nodeMap: RADIATION_NODE_MAP,
    controlQuestions: RADIATION_CONTROL_QUESTIONS,
    mcqQuestions: RADIATION_MCQ_QUESTIONS,
    quizShortcuts: [
      { label: 'Steg 1: Bølger & fotoner (c = λ·f)', idx: 0 },
      { label: 'Steg 2: Radio- & mikrobølger', idx: 1 },
      { label: 'Steg 3: Infrarød & synlig lys', idx: 2 },
      { label: 'Steg 4: Ioniserende (UV, røntgen, gamma)', idx: 3 },
      { label: 'Steg 5: Stjernefarge & temperatur', idx: 4 },
      { label: 'Steg 6–7: Spektrallinjer & rødforskyvning', idx: 6 },
      { label: 'Steg 8: Bakgrunnsstrålingen (CMB)', idx: 7 },
      { label: 'Steg 9–10: Ozonlag & drivhuseffekt', idx: 9 },
      { label: 'Steg 11: Bølgefenomener (refleksjon–interferens)', idx: 10 },
      { label: 'Steg 12: Trådløs kommunikasjon (5G/WiFi)', idx: 11 },
      { label: 'Steg 13–14: Radioaktivitet, helse & strålevern', idx: 13 },
    ],
  },

  galakser: {
    id: 'galakser',
    hash: '#galakser',
    title:
      'Galakser – Melkeveien, galaksetyper, mørk materie og det kosmiske nettverket',
    dropdownTitle: 'Galakser – Melkeveien & nettverket',
    dropdownBadge: 'Kosmisk atlas • Melkeveien → Laniakea',
    dropdownDescription:
      'Utforsk stjerneøyer i rommet, hjemmegalaksen Melkeveien med Sagittarius A*, spiral- og ellipsegalakser, kollisjonen med Andromeda, mørk materie, kvasarer og det kosmiske nettverket.',
    subtitle:
      'Interaktivt kosmisk atlas • Fra Melkeveien og mørk materie til galaksehoper og Laniakea (Vg1 Naturfag)',
    stepWord: 'Steg',
    showAllLabel: 'Vis hele galakse-atlaset',
    progressiveLabel: 'Stegvis modus',
    quizTitle:
      'Kontrollspørsmål: Galakser, Melkeveien, mørk materie & det kosmiske nettverket',
    backFromQuizLabel: 'Tilbake til galakse-atlaset',
    summaryHeadingPrefix: 'Hva skjer på denne skalaen?',
    traitsHeading: 'Kjennetegn og fysiske mekanismer',
    classroomBoxHeading: 'Klasseromstriks & tankeeksperiment',
    examplesHeading: 'Nøkkelbegreper på dette steget',
    mainStepIds: GALAXIES_MAIN_STEP_IDS,
    allNodes: GALAXIES_NODES,
    nodeMap: GALAXIES_NODE_MAP,
    controlQuestions: GALAXIES_CONTROL_QUESTIONS,
    mcqQuestions: GALAXIES_MCQ_QUESTIONS,
    quizShortcuts: [
      { label: 'Steg 1: Stjerneøyer (Hubble 1924)', idx: 0 },
      { label: 'Steg 2: Melkeveien & Sola (26 000 ly)', idx: 1 },
      { label: 'Steg 3: Sagittarius A* (4,1 mill. M☉)', idx: 2 },
      { label: 'Steg 4: Spiral, ellipse & irregulær', idx: 3 },
      { label: 'Steg 5: Andromeda-kollisjonen', idx: 4 },
      { label: 'Steg 6: Vera Rubin & mørk materie', idx: 5 },
      { label: 'Steg 7–8: Kvasarer & JWST-urgalakser', idx: 7 },
      { label: 'Steg 9–10: Laniakea & kosmisk nettverk', idx: 9 },
    ],
  },

  romtid: {
    id: 'romtid',
    hash: '#romtid',
    title: 'Romtid – Krummet rom, sorte hull, gravitasjonsbølger og utvidelse',
    dropdownTitle: 'Romtid – Gravitasjon & utvidelse',
    dropdownBadge: 'Romtidsduk • 4D, linser & mørk energi',
    dropdownDescription:
      'Reis langs den krummede romtidsduken fra 4 dimensjoner, lysfarten c og GPS til gravitasjonsbrønner, gravitasjonslinser, sorte hull, bølger i duken og rommet som utvider seg.',
    subtitle:
      'Interaktiv romtidsduk • Fra Einsteins relativitetsteori og sorte hull til kosmisk utvidelse (Vg1 Naturfag)',
    stepWord: 'Steg',
    showAllLabel: 'Vis hele romtidsduken',
    progressiveLabel: 'Stegvis modus',
    quizTitle: 'Kontrollspørsmål: Romtid, tyngdekraft & universets utvidelse',
    backFromQuizLabel: 'Tilbake til romtidsduken',
    summaryHeadingPrefix: 'Hva skjer i romtiden?',
    traitsHeading: 'Fysiske mekanismer og nøkkelpunkter',
    classroomBoxHeading: 'Klasseromstriks & tankeeksperiment',
    examplesHeading: 'Nøkkelbegreper på dette steget',
    mainStepIds: SPACETIME_MAIN_STEP_IDS,
    allNodes: SPACETIME_NODES,
    nodeMap: SPACETIME_NODE_MAP,
    controlQuestions: SPACETIME_CONTROL_QUESTIONS,
    mcqQuestions: SPACETIME_MCQ_QUESTIONS,
    quizShortcuts: [
      { label: 'Steg 1: 4 dimensjoner (Rom + Tid)', idx: 0 },
      { label: 'Steg 2: Lysfarten c & lysår', idx: 1 },
      { label: 'Steg 3: Relativ tid & GPS', idx: 2 },
      { label: 'Steg 4–5: Krummet romtid & baner', idx: 4 },
      { label: 'Steg 6: Gravitasjonslinser', idx: 5 },
      { label: 'Steg 7: Sorte hull', idx: 6 },
      { label: 'Steg 8: Gravitasjonsbølger', idx: 7 },
      { label: 'Steg 9–10: Utvidelse & mørk energi', idx: 8 },
    ],
  },
};

export const THEME_LIST: ThemeConfig[] = [
  THEMES['big-bang'],
  THEMES.stjerner,
  THEMES.grunnstoffer,
  THEMES.straling,
  THEMES.galakser,
  THEMES.romtid,
];

export function parseViewFromHash(hash: string): AppView {
  const clean = decodeURIComponent(hash.replace(/^#/, '').trim().toLowerCase());
  if (clean === 'big-bang' || clean === 'tidslinje') {
    return 'big-bang';
  }
  if (clean === 'stjerner' || clean === 'stars') {
    return 'stjerner';
  }
  if (
    clean === 'grunnstoffer' ||
    clean === 'grunnstoff' ||
    clean === 'elements'
  ) {
    return 'grunnstoffer';
  }
  if (
    clean === 'straling' ||
    clean === 'stråling' ||
    clean === 'radiation'
  ) {
    return 'straling';
  }
  if (
    clean === 'galakser' ||
    clean === 'galakse' ||
    clean === 'galaxies'
  ) {
    return 'galakser';
  }
  if (clean === 'romtid' || clean === 'spacetime') {
    return 'romtid';
  }
  return 'universet';
}

export function parseThemeFromHash(hash: string): ThemeId {
  const view = parseViewFromHash(hash);
  return view === 'universet' ? 'big-bang' : view;
}
