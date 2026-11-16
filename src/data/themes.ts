import {
  BIG_BANG_CONTROL_QUESTIONS,
  BIG_BANG_MAIN_STEP_IDS,
  BIG_BANG_NODE_MAP,
  BIG_BANG_NODES,
  type ControlQuestionItem,
  type CosmicNodeData,
} from './bigBangData';
import {
  BIG_BANG_MCQ_QUESTIONS,
  STARS_MCQ_QUESTIONS,
  type McqQuestionItem,
} from './mcqQuestionsData';
import {
  STARS_CONTROL_QUESTIONS,
  STARS_MAIN_STEP_IDS,
  STARS_NODE_MAP,
  STARS_NODES,
} from './starsData';

export type ThemeId = 'big-bang' | 'stjerner';
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
};

export const THEME_LIST: ThemeConfig[] = [THEMES['big-bang'], THEMES.stjerner];

export function parseViewFromHash(hash: string): AppView {
  const clean = hash.replace(/^#/, '').trim().toLowerCase();
  if (clean === 'big-bang' || clean === 'tidslinje') {
    return 'big-bang';
  }
  if (clean === 'stjerner' || clean === 'stars') {
    return 'stjerner';
  }
  return 'universet';
}

export function parseThemeFromHash(hash: string): ThemeId {
  const view = parseViewFromHash(hash);
  return view === 'universet' ? 'big-bang' : view;
}
