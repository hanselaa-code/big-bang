import { cosmosImg } from './bigBangData';
import type { ThemeId } from './themes';

export type HubNodeId =
  | 'big-bang'
  | 'stjerner'
  | 'grunnstoffer'
  | 'straling'
  | 'galakser'
  | 'romtid';

export interface UniverseHubNode {
  id: HubNodeId;
  title: string;
  badge: string;
  shortDescription: string;
  imageUrl: string;
  cx: number;
  cy: number;
  r: number;
  /** Non-null when the sub-theme page has been built and can be opened */
  linkedThemeId: ThemeId | null;
}

export const UNIVERSE_CENTER_NODE = {
  id: 'universet' as const,
  title: 'UNIVERSET',
  subtitle: 'Interaktivt tankekart • Velg et tema i sirklene for å utforske sammenhengene',
  dropdownTitle: 'Universet – Tankekart',
  dropdownBadge: 'Hovedside • 6 sammenkoblede temaer',
  dropdownDescription:
    'Visuelt tankekart over universet der elevene kan orientere seg mellom Big Bang, stjerner, grunnstoffer, stråling, galakser og romtid.',
  imageUrl: cosmosImg('hub_universet.jpg'),
  cx: 540,
  cy: 375,
  r: 132,
  haloR: 152,
};

export const UNIVERSE_HUB_NODES: UniverseHubNode[] = [
  {
    id: 'big-bang',
    title: 'Big Bang',
    badge: 'Tidslinje • t = 0 → 13,8 mrd. år',
    shortDescription:
      'De store linjene i universets historie fra kosmisk inflasjon og de første atomene til Solsystemet og universet i dag.',
    imageUrl: cosmosImg('hub_big_bang.jpg'),
    cx: 235,
    cy: 145,
    r: 98,
    linkedThemeId: 'big-bang',
  },
  {
    id: 'stjerner',
    title: 'Stjerner',
    badge: 'Forgrenet livsløp • Masse avgjør skjebnen',
    shortDescription:
      'Stjerners fødsel i gasskyer, fusjon i stjernekjernen, livsløp og supernovaeksplosjoner.',
    imageUrl: cosmosImg('hub_stjerner.jpg'),
    cx: 845,
    cy: 145,
    r: 98,
    linkedThemeId: 'stjerner',
  },
  {
    id: 'grunnstoffer',
    title: 'Grunnstoffer',
    badge: 'Interaktiv modell • Atomet & de 4 smiene',
    shortDescription:
      'Hvordan hydrogen, helium og alle tyngre grunnstoffer i periodesystemet og kroppen vår ble smidd.',
    imageUrl: cosmosImg('hub_grunnstoffer.jpg'),
    cx: 155,
    cy: 405,
    r: 98,
    linkedThemeId: 'grunnstoffer',
  },
  {
    id: 'straling',
    title: 'Stråling',
    badge: 'Bølgespekteret • EM-bølger, spekter & CMB',
    shortDescription:
      'Elektromagnetisk stråling, bølgelengde, spekter, rødforskyvning og den kosmiske bakgrunnsstrålingen.',
    imageUrl: cosmosImg('hub_straling.jpg'),
    cx: 925,
    cy: 405,
    r: 98,
    linkedThemeId: 'straling',
  },
  {
    id: 'galakser',
    title: 'Galakser',
    badge: 'Kosmisk atlas • Melkeveien, mørk materie & nettverk',
    shortDescription:
      'Melkeveien, spiral- og ellipsegalakser, mørk materie og det kosmiske nettverket.',
    imageUrl: cosmosImg('hub_galakser.jpg'),
    cx: 295,
    cy: 630,
    r: 98,
    linkedThemeId: 'galakser',
  },
  {
    id: 'romtid',
    title: 'Romtid',
    badge: 'Romtidsduken • Gravitasjon, linser & utvidelse',
    shortDescription:
      'Rom og tid vevd sammen, gravitasjon, sorte hull og hvordan selve rommet utvider seg.',
    imageUrl: cosmosImg('hub_romtid.jpg'),
    cx: 785,
    cy: 630,
    r: 98,
    linkedThemeId: 'romtid',
  },
];

/**
 * Dashed curved connections matching the mindmap principle sketch:
 * - Grunnstoffer ╌ Big Bang
 * - Big Bang ╌ Stjerner
 * - Stjerner ╌ Stråling
 * - Galakser ╌ Romtid
 */
export const UNIVERSE_DASHED_ARCS: {
  id: string;
  from: HubNodeId;
  to: HubNodeId;
  d: string;
}[] = [
  {
    id: 'arc-grunnstoffer-bigbang',
    from: 'grunnstoffer',
    to: 'big-bang',
    d: 'M 155 405 Q 152 255 235 145',
  },
  {
    id: 'arc-bigbang-stjerner',
    from: 'big-bang',
    to: 'stjerner',
    d: 'M 235 145 Q 540 62 845 145',
  },
  {
    id: 'arc-stjerner-straling',
    from: 'stjerner',
    to: 'straling',
    d: 'M 845 145 Q 928 255 925 405',
  },
  {
    id: 'arc-galakser-romtid',
    from: 'galakser',
    to: 'romtid',
    d: 'M 295 630 Q 540 706 785 630',
  },
];
