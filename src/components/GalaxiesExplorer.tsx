import { Compass, Focus, Maximize2, Minus, Plus } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  GALAXIES_NODE_MAP,
  GALAXIES_NODES,
  type GalaxyNodeData,
  type GalaxyZoneCategory,
} from '../data/galaxiesData';

interface GalaxiesExplorerProps {
  unlockedStepIndex: number;
  showAllSteps: boolean;
  selectedNodeId: string;
  onSelectNode: (nodeId: string) => void;
}

interface ZonePalette {
  accent: string;
  stroke: string;
  badgeBg: string;
  badgeBorder: string;
  text: string;
}

function getZonePalette(node: GalaxyNodeData): ZonePalette {
  const cat: GalaxyZoneCategory = node.zoneCategory;
  if (cat === 'milky_way_home') {
    return {
      accent: '#F59E0B',
      stroke: '#FDE68A',
      badgeBg: 'rgba(120, 53, 15, 0.92)',
      badgeBorder: 'rgba(251, 191, 36, 0.68)',
      text: '#FEF3C7',
    };
  }
  if (cat === 'types_and_dark_matter') {
    if (node.id === 'gal_dark_matter_halo') {
      return {
        accent: '#A855F7',
        stroke: '#E9D5FF',
        badgeBg: 'rgba(88, 28, 135, 0.92)',
        badgeBorder: 'rgba(192, 132, 252, 0.68)',
        text: '#F3E8FF',
      };
    }
    return {
      accent: '#38BDF8',
      stroke: '#BAE6FD',
      badgeBg: 'rgba(12, 74, 110, 0.92)',
      badgeBorder: 'rgba(56, 189, 248, 0.68)',
      text: '#E0F2FE',
    };
  }
  return {
    accent: '#2DD4BF',
    stroke: '#99F6E4',
    badgeBg: 'rgba(19, 78, 74, 0.92)',
    badgeBorder: 'rgba(45, 212, 191, 0.68)',
    text: '#CCFBF1',
  };
}

function buildStepCurve(a: GalaxyNodeData, b: GalaxyNodeData): string {
  const dx = b.x - a.x;
  const c1x = a.x + dx * 0.48;
  const c2x = b.x - dx * 0.45;
  return `M ${a.x} ${a.y} C ${c1x} ${a.y}, ${c2x} ${b.y}, ${b.x} ${b.y}`;
}

/**
 * Generates a tilted logarithmic spiral arm SVG path around (cx, cy)
 * for the Milky Way barred-spiral atlas diagram.
 */
function generateSpiralArmPath(
  cx: number,
  cy: number,
  startAngle: number,
  sweepRad: number,
  rStart: number,
  rEnd: number,
  tiltY: number,
): string {
  const steps = 42;
  const pts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const theta = startAngle + t * sweepRad;
    const r = rStart * Math.pow(rEnd / rStart, t);
    const x = cx + Math.cos(theta) * r;
    const y = cy + Math.sin(theta) * r * tiltY;
    pts.push(
      `${i === 0 ? 'M' : 'L'} ${Math.round(x * 10) / 10} ${Math.round(y * 10) / 10}`,
    );
  }
  return pts.join(' ');
}

const CARD_W = 248;
const CARD_H = 186;
const CARD_OFFSET_Y = 158;

const COSMIC_WEB_NODES: { x: number; y: number; r: number }[] = [
  { x: 2205, y: 526, r: 4.5 },
  { x: 2268, y: 568, r: 5.5 },
  { x: 2324, y: 522, r: 6 },
  { x: 2386, y: 572, r: 5 },
  { x: 2448, y: 530, r: 6.2 },
  { x: 2508, y: 566, r: 4.5 },
  { x: 2232, y: 576, r: 3.5 },
  { x: 2495, y: 520, r: 3.8 },
];

const COSMIC_WEB_EDGES: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 6],
  [1, 2],
  [1, 3],
  [1, 6],
  [2, 3],
  [2, 4],
  [3, 4],
  [3, 5],
  [4, 5],
  [4, 7],
  [5, 7],
];

export function GalaxiesExplorer({
  unlockedStepIndex,
  showAllSteps,
  selectedNodeId,
  onSelectNode,
}: GalaxiesExplorerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [viewport, setViewport] = useState({ width: 960, height: 680 });
  const [camera, setCamera] = useState({ x: 505, y: 452, scale: 0.69 });
  const [cameraMode, setCameraMode] = useState<
    'follow' | 'overview' | 'manual'
  >('follow');
  const [isDragging, setIsDragging] = useState(false);

  const dragRef = useRef<{
    startX: number;
    startY: number;
    camStartX: number;
    camStartY: number;
    moved: boolean;
  } | null>(null);

  const effectiveMaxStep = showAllSteps
    ? GALAXIES_NODES.length - 1
    : unlockedStepIndex;

  const milkyWayArms = useMemo(
    () => [
      generateSpiralArmPath(305, 548, 0.15, 2.85, 24, 128, 0.36),
      generateSpiralArmPath(305, 548, Math.PI + 0.15, 2.85, 24, 128, 0.36),
      generateSpiralArmPath(305, 548, 1.55, 2.55, 28, 114, 0.36),
      generateSpiralArmPath(305, 548, Math.PI + 1.55, 2.55, 28, 114, 0.36),
    ],
    [],
  );

  const miniSpiralArms = useMemo(
    () => [
      generateSpiralArmPath(968, 548, 0, 2.9, 6, 30, 0.72),
      generateSpiralArmPath(968, 548, Math.PI, 2.9, 6, 30, 0.72),
    ],
    [],
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateSize = () => {
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        setViewport({ width: rect.width, height: rect.height });
      }
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const computeOverviewCamera = useCallback(() => {
    const worldW = 2560;
    const worldH = 1080;
    const scale = Math.max(
      0.24,
      Math.min(
        0.86,
        Math.min(viewport.width / worldW, viewport.height / worldH) * 0.95,
      ),
    );
    return {
      x: 1335,
      y: 505,
      scale,
    };
  }, [viewport.height, viewport.width]);

  const computeFollowCamera = useCallback(
    (targetNodeId: string) => {
      if (showAllSteps) {
        return computeOverviewCamera();
      }
      const selected = GALAXIES_NODE_MAP[targetNodeId] ?? GALAXIES_NODES[0];

      const minX = selected.x - 360;
      const maxX = selected.x + 420;
      const minY = -45;
      const maxY = selected.cardSide === 'below' ? 948 : 708;

      const spanX = Math.max(780, maxX - minX);
      const spanY = Math.max(660, maxY - minY);
      const rawScale = Math.min(
        viewport.width / spanX,
        viewport.height / spanY,
      );
      const clampedScale = Math.max(0.42, Math.min(0.86, rawScale));
      const rawCenterX = (minX + maxX) / 2;
      const clampedCenterX = Math.max(505, Math.min(2195, rawCenterX));

      return {
        x: clampedCenterX,
        y: (minY + maxY) / 2,
        scale: clampedScale,
      };
    },
    [computeOverviewCamera, showAllSteps, viewport.height, viewport.width],
  );

  useEffect(() => {
    setCameraMode(showAllSteps ? 'overview' : 'follow');
  }, [selectedNodeId, unlockedStepIndex, showAllSteps]);

  useEffect(() => {
    if (cameraMode === 'follow') {
      setCamera(computeFollowCamera(selectedNodeId));
    } else if (cameraMode === 'overview') {
      setCamera(computeOverviewCamera());
    }
  }, [cameraMode, computeFollowCamera, computeOverviewCamera, selectedNodeId]);

  const handlePointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    if (e.button !== 0) return;
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      camStartX: camera.x,
      camStartY: camera.y,
      moved: false,
    };
    setIsDragging(true);
  };

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    const drag = dragRef.current;
    if (!drag) return;
    const dx = e.clientX - drag.startX;
    const dy = e.clientY - drag.startY;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
      drag.moved = true;
      setCameraMode('manual');
      setCamera((prev) => ({
        ...prev,
        x: drag.camStartX - dx / prev.scale,
        y: drag.camStartY - dy / prev.scale,
      }));
    }
  };

  const handlePointerUp = () => {
    dragRef.current = null;
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent<SVGSVGElement>) => {
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.12 : 1 / 1.12;
    setCameraMode('manual');
    setCamera((prev) => ({
      ...prev,
      scale: Math.max(0.22, Math.min(1.85, prev.scale * factor)),
    }));
  };

  const zoomBy = (factor: number) => {
    setCameraMode('manual');
    setCamera((prev) => ({
      ...prev,
      scale: Math.max(0.22, Math.min(1.85, prev.scale * factor)),
    }));
  };

  const transformStr = `translate(${viewport.width / 2} ${viewport.height / 2}) scale(${camera.scale}) translate(${-camera.x} ${-camera.y})`;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full rounded-2xl overflow-hidden glass-panel select-none"
    >
      {/* Top overlay bar: left legend stacked cleanly + right camera buttons */}
      <div className="absolute inset-x-3 top-3 z-20 flex items-start justify-between gap-2 pointer-events-none">
        <div className="flex flex-col items-start gap-1.5 min-w-0">
          <div className="px-3 py-1.5 rounded-xl bg-slate-950/85 border border-slate-700/80 text-xs font-medium text-slate-200 flex items-center gap-2 shadow-lg">
            <Compass className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Kosmisk atlas &amp; Nettverk</span>
            <span className="hidden xl:inline text-slate-400">
              • Dra for å panorere, skroll for zoom
            </span>
          </div>

          <div className="hidden md:flex flex-wrap items-center gap-2.5 px-3 py-1 rounded-xl bg-slate-950/80 border border-slate-800/90 text-[11px] text-slate-300">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Melkeveien
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              Galaksetyper &amp; kvasarer
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              Mørk materie
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              Kosmisk nettverk
            </span>
          </div>
        </div>

        {/* Top-right camera controls */}
        <div className="flex items-center gap-1.5 shrink-0 pointer-events-auto">
          <button
            id="btn-galaxies-follow"
            type="button"
            onClick={() => setCameraMode('follow')}
            title="Følg valgt steg i galakse-atlaset"
            className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all cursor-pointer ${
              cameraMode === 'follow'
                ? 'bg-amber-500/25 border-amber-400/70 text-amber-200 shadow-md'
                : 'bg-slate-950/80 hover:bg-slate-900 border-slate-700/80 text-slate-300'
            }`}
          >
            <Focus className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Følg steg</span>
          </button>

          <button
            id="btn-galaxies-overview"
            type="button"
            onClick={() => setCameraMode('overview')}
            title="Vis hele reisen fra Melkeveien til Det kosmiske nettverket"
            className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all cursor-pointer ${
              cameraMode === 'overview'
                ? 'bg-sky-500/25 border-sky-400/70 text-sky-200 shadow-md'
                : 'bg-slate-950/80 hover:bg-slate-900 border-slate-700/80 text-slate-300'
            }`}
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Hele atlaset</span>
          </button>

          <div className="flex items-center rounded-xl bg-slate-950/85 border border-slate-700/80 overflow-hidden">
            <button
              id="btn-galaxies-zoom-in"
              type="button"
              onClick={() => zoomBy(1.2)}
              title="Zoom inn"
              className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" />
            </button>
            <div className="w-px h-4 bg-slate-800" />
            <button
              id="btn-galaxies-zoom-out"
              type="button"
              onClick={() => zoomBy(1 / 1.2)}
              title="Zoom ut"
              className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
            >
              <Minus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Interactive SVG Canvas */}
      <svg
        id="galaxies-explorer-svg"
        width="100%"
        height="100%"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onWheel={handleWheel}
        className={isDragging ? 'cursor-grabbing' : 'cursor-grab'}
        style={{ touchAction: 'none' }}
      >
        <defs>
          <filter
            id="gal-glow-strong"
            x="-45%"
            y="-45%"
            width="190%"
            height="190%"
          >
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <radialGradient id="gal-bulge-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#F59E0B" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#091124" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="gal-elliptical-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FEF3C7" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#F59E0B" stopOpacity="0.48" />
            <stop offset="100%" stopColor="#091124" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="gal-dm-halo-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A855F7" stopOpacity="0.22" />
            <stop offset="70%" stopColor="#6366F1" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#050814" stopOpacity="0" />
          </radialGradient>

          {GALAXIES_NODES.map((node) => {
            const cardY =
              node.cardSide === 'above'
                ? -CARD_OFFSET_Y - CARD_H / 2
                : CARD_OFFSET_Y - CARD_H / 2;
            return (
              <clipPath
                key={`clip-gal-${node.id}`}
                id={`clip-gal-${node.id}`}
              >
                <rect
                  x={-CARD_W / 2 + 8}
                  y={cardY + 8}
                  width={CARD_W - 16}
                  height={114}
                  rx={12}
                />
              </clipPath>
            );
          })}
        </defs>

        <g
          transform={transformStr}
          style={{
            transition: isDragging
              ? 'none'
              : 'transform 620ms cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {/* Ambient background cosmic-web filaments & dark-matter halo aura */}
          <g aria-hidden="true">
            <ellipse
              cx={1455}
              cy={546}
              rx={320}
              ry={240}
              fill="url(#gal-dm-halo-glow)"
            />
            <path
              d="M 1810 380 Q 2040 460 2220 395 T 2550 435"
              fill="none"
              stroke="rgba(45, 212, 191, 0.12)"
              strokeWidth={4}
            />
            <path
              d="M 1830 715 Q 2080 635 2290 700 T 2555 660"
              fill="none"
              stroke="rgba(251, 191, 36, 0.1)"
              strokeWidth={3.5}
            />
          </g>

          {/* ========================================================== */}
          {/* TOP 3 ZONE BANNERS (y = 58..102, high clearance above cards) */}
          {/* ========================================================== */}
          <g transform="translate(485, 80)">
            <rect
              x={-285}
              y={-22}
              width={570}
              height={44}
              rx={14}
              fill="rgba(120, 53, 15, 0.44)"
              stroke="rgba(251, 191, 36, 0.55)"
              strokeWidth={1.4}
            />
            <text
              x={0}
              y={5}
              textAnchor="middle"
              fill="#FDE68A"
              fontSize={13}
              fontWeight={800}
              letterSpacing={0.65}
            >
              SONE 1 • HJEMMEGALAKSEN MELKEVEIEN &amp; SENTRUM (STEG 1–3)
            </text>
          </g>

          <g transform="translate(1335, 80)">
            <rect
              x={-315}
              y={-22}
              width={630}
              height={44}
              rx={14}
              fill="rgba(12, 74, 110, 0.44)"
              stroke="rgba(56, 189, 248, 0.55)"
              strokeWidth={1.4}
            />
            <text
              x={0}
              y={5}
              textAnchor="middle"
              fill="#BAE6FD"
              fontSize={13}
              fontWeight={800}
              letterSpacing={0.65}
            >
              SONE 2 • GALAKSETYPER, KOLLISJONER &amp; MØRK MATERIE (STEG 4–7)
            </text>
          </g>

          <g transform="translate(2195, 80)">
            <rect
              x={-320}
              y={-22}
              width={640}
              height={44}
              rx={14}
              fill="rgba(19, 78, 74, 0.44)"
              stroke="rgba(45, 212, 191, 0.55)"
              strokeWidth={1.4}
            />
            <text
              x={0}
              y={5}
              textAnchor="middle"
              fill="#99F6E4"
              fontSize={13}
              fontWeight={800}
              letterSpacing={0.65}
            >
              SONE 3 • URGALAKSER, HOPER &amp; DET KOSMISKE NETTVERKET (STEG 8–10)
            </text>
          </g>

          {/* ================================================================ */}
          {/* CENTRAL COSMIC ATLAS BAND (y = 482..610 across all 3 scales)     */}
          {/* ================================================================ */}
          <g aria-hidden="true">
            {/* ATLAS PANEL 1: Milky Way Top-Down + Edge-On Cross-Section (x = 120..855) */}
            <rect
              x={120}
              y={482}
              width={735}
              height={128}
              rx={18}
              fill="rgba(8, 14, 29, 0.9)"
              stroke="rgba(251, 191, 36, 0.45)"
              strokeWidth={1.5}
            />
            <text
              x={305}
              y={502}
              textAnchor="middle"
              fill="#FDE68A"
              fontSize={10.5}
              fontWeight={800}
              letterSpacing={0.5}
            >
              MELKEVEIEN OVENFRA (STAVSPIRAL)
            </text>

            {/* 4 Logarithmic Spiral Arms */}
            {milkyWayArms.map((d, idx) => (
              <path
                key={`mw-arm-${idx}`}
                d={d}
                fill="none"
                stroke={idx < 2 ? '#60A5FA' : '#93C5FD'}
                strokeOpacity={idx < 2 ? 0.8 : 0.55}
                strokeWidth={idx < 2 ? 4.2 : 3}
                strokeLinecap="round"
              />
            ))}
            {/* Central Golden Bar + Bulge + Sagittarius A* */}
            <ellipse
              cx={305}
              cy={548}
              rx={38}
              ry={11}
              transform="rotate(-14 305 548)"
              fill="url(#gal-bulge-glow)"
            />
            <circle
              cx={305}
              cy={548}
              r={4}
              fill="#020617"
              stroke="#FBBF24"
              strokeWidth={1.6}
            />
            {/* Sun marker in Orion arm (~26 000 ly from center) */}
            <circle
              cx={364}
              cy={562}
              r={5}
              fill="#FACC15"
              stroke="#FFFFFF"
              strokeWidth={1.5}
            />
            <text
              x={375}
              y={566}
              fill="#FEF08A"
              fontSize={9.8}
              fontWeight={800}
              className="font-mono-time"
            >
              ★ Sola (26 000 ly)
            </text>
            <text
              x={305}
              y={599}
              textAnchor="middle"
              fill="#CBD5E1"
              fontSize={9.5}
              fontWeight={700}
              className="font-mono-time"
            >
              ← Diameter ≈ 100 000 lysår →
            </text>

            <line
              x1={505}
              y1={495}
              x2={505}
              y2={598}
              stroke="rgba(100, 116, 139, 0.35)"
              strokeWidth={1}
            />

            {/* Milky Way Edge-On Cross-Section */}
            <text
              x={680}
              y={502}
              textAnchor="middle"
              fill="#FDE68A"
              fontSize={10.5}
              fontWeight={800}
              letterSpacing={0.5}
            >
              MELKEVEIEN FRA SIDEN (TVERRSNITT)
            </text>
            {/* Outer faint spherical halo */}
            <ellipse
              cx={680}
              cy={548}
              rx={118}
              ry={34}
              fill="none"
              stroke="rgba(148, 163, 184, 0.32)"
              strokeWidth={1.2}
              strokeDasharray="4 4"
            />
            {/* Bulge */}
            <ellipse
              cx={680}
              cy={548}
              rx={34}
              ry={18}
              fill="url(#gal-bulge-glow)"
            />
            {/* Thin starry disk */}
            <rect
              x={556}
              y={544}
              width={248}
              height={8}
              rx={4}
              fill="#93C5FD"
              fillOpacity={0.85}
            />
            {/* Dust lane */}
            <line
              x1={562}
              y1={548}
              x2={798}
              y2={548}
              stroke="#1E293B"
              strokeWidth={2}
            />
            {/* Sgr A* at core */}
            <circle
              cx={680}
              cy={548}
              r={4.2}
              fill="#020617"
              stroke="#F59E0B"
              strokeWidth={1.6}
            />
            <text
              x={680}
              y={599}
              textAnchor="middle"
              fill="#FCD34D"
              fontSize={9.5}
              fontWeight={700}
              className="font-mono-time"
            >
              Skive ~1 000 ly • Kjerne: Sgr A* (4,1 mill. M☉)
            </text>

            {/* ATLAS PANEL 2: Hubble Types & Vera Rubin Flat Rotation Curve (x = 890..1785) */}
            <rect
              x={890}
              y={482}
              width={895}
              height={128}
              rx={18}
              fill="rgba(7, 15, 32, 0.9)"
              stroke="rgba(56, 189, 248, 0.45)"
              strokeWidth={1.5}
            />
            <text
              x={1102}
              y={502}
              textAnchor="middle"
              fill="#BAE6FD"
              fontSize={10.5}
              fontWeight={800}
              letterSpacing={0.5}
            >
              HUBBLES 3 HOVEDFAMILIER
            </text>

            {/* Mini Spiral */}
            {miniSpiralArms.map((d, idx) => (
              <path
                key={`mini-sp-${idx}`}
                d={d}
                fill="none"
                stroke="#60A5FA"
                strokeWidth={3.2}
                strokeLinecap="round"
              />
            ))}
            <circle cx={968} cy={548} r={7} fill="#FDE68A" />
            <text
              x={968}
              y={598}
              textAnchor="middle"
              fill="#93C5FD"
              fontSize={9.5}
              fontWeight={700}
              className="font-mono-time"
            >
              Spiral (blå)
            </text>

            {/* Mini Elliptical */}
            <ellipse
              cx={1102}
              cy={548}
              rx={32}
              ry={21}
              fill="url(#gal-elliptical-glow)"
            />
            <text
              x={1102}
              y={598}
              textAnchor="middle"
              fill="#FDE68A"
              fontSize={9.5}
              fontWeight={700}
              className="font-mono-time"
            >
              Ellipse (gulrød)
            </text>

            {/* Mini Irregular */}
            <g transform="translate(1234, 548)">
              <circle cx={-12} cy={-5} r={8} fill="#2DD4BF" fillOpacity={0.45} />
              <circle cx={8} cy={4} r={10} fill="#F472B6" fillOpacity={0.42} />
              <circle cx={-3} cy={8} r={7} fill="#60A5FA" fillOpacity={0.5} />
              <circle cx={-10} cy={-4} r={2} fill="#F8FAFC" />
              <circle cx={7} cy={2} r={2.2} fill="#FDE047" />
              <circle cx={2} cy={-8} r={1.8} fill="#BAE6FD" />
            </g>
            <text
              x={1234}
              y={598}
              textAnchor="middle"
              fill="#99F6E4"
              fontSize={9.5}
              fontWeight={700}
              className="font-mono-time"
            >
              Uregelmessig
            </text>

            <line
              x1={1315}
              y1={495}
              x2={1315}
              y2={598}
              stroke="rgba(100, 116, 139, 0.35)"
              strokeWidth={1}
            />

            {/* Vera Rubin Rotation Curve Graph */}
            <text
              x={1548}
              y={502}
              textAnchor="middle"
              fill="#E9D5FF"
              fontSize={10.5}
              fontWeight={800}
              letterSpacing={0.5}
            >
              ROTASJONSKURVE → BEVIS FOR MØRK MATERIE
            </text>
            {/* Axes */}
            <line
              x1={1360}
              y1={578}
              x2={1740}
              y2={578}
              stroke="#64748B"
              strokeWidth={1.5}
            />
            <line
              x1={1360}
              y1={578}
              x2={1360}
              y2={514}
              stroke="#64748B"
              strokeWidth={1.5}
            />
            {/* Expected curve from visible stars alone (drops off!) */}
            <path
              d="M 1360 578 Q 1405 520 1455 538 T 1725 570"
              fill="none"
              stroke="#FBBF24"
              strokeWidth={2.2}
              strokeDasharray="5 4"
            />
            {/* Measured flat curve with Dark Matter halo! */}
            <path
              d="M 1360 578 Q 1405 522 1465 524 L 1728 523"
              fill="none"
              stroke="#C084FC"
              strokeWidth={3}
              strokeLinecap="round"
            />
            <text
              x={1635}
              y={518}
              textAnchor="middle"
              fill="#E9D5FF"
              fontSize={9.2}
              fontWeight={800}
              className="font-mono-time"
            >
              Målt fart (med mørk materie!)
            </text>
            <text
              x={1635}
              y={562}
              textAnchor="middle"
              fill="#FCD34D"
              fontSize={9}
              fontWeight={700}
              className="font-mono-time"
            >
              Kun synlige stjerner
            </text>
            <text
              x={1548}
              y={598}
              textAnchor="middle"
              fill="#CBD5E1"
              fontSize={9.5}
              fontWeight={700}
              className="font-mono-time"
            >
              Avstand fra galaksesenteret (r) →
            </text>

            {/* ATLAS PANEL 3: Cosmic Address & The Cosmic Web (x = 1820..2545) */}
            <rect
              x={1820}
              y={482}
              width={725}
              height={128}
              rx={18}
              fill="rgba(6, 20, 24, 0.9)"
              stroke="rgba(45, 212, 191, 0.45)"
              strokeWidth={1.5}
            />
            <text
              x={1995}
              y={502}
              textAnchor="middle"
              fill="#99F6E4"
              fontSize={10.5}
              fontWeight={800}
              letterSpacing={0.5}
            >
              VÅR KOSMISKE ADRESSE
            </text>

            {/* Stepped scale ladder */}
            <rect
              x={1842}
              y={516}
              width={306}
              height={24}
              rx={7}
              fill="rgba(15, 118, 110, 0.3)"
              stroke="rgba(45, 212, 191, 0.45)"
              strokeWidth={1}
            />
            <text
              x={1995}
              y={532}
              textAnchor="middle"
              fill="#CCFBF1"
              fontSize={9.8}
              fontWeight={700}
              className="font-mono-time"
            >
              Solsystemet → Melkeveien (100 000 ly)
            </text>

            <rect
              x={1842}
              y={548}
              width={306}
              height={24}
              rx={7}
              fill="rgba(12, 74, 110, 0.35)"
              stroke="rgba(56, 189, 248, 0.45)"
              strokeWidth={1}
            />
            <text
              x={1995}
              y={564}
              textAnchor="middle"
              fill="#E0F2FE"
              fontSize={9.8}
              fontWeight={700}
              className="font-mono-time"
            >
              Lokale gruppe (~80) → Laniakea (100 000)
            </text>

            <text
              x={1995}
              y={598}
              textAnchor="middle"
              fill="#99F6E4"
              fontSize={9.5}
              fontWeight={700}
              className="font-mono-time"
            >
              Laniakea ≈ 520 millioner lysår bred!
            </text>

            <line
              x1={2168}
              y1={495}
              x2={2168}
              y2={598}
              stroke="rgba(100, 116, 139, 0.35)"
              strokeWidth={1}
            />

            {/* Procedural Mini Cosmic Web Diagram */}
            <text
              x={2356}
              y={502}
              textAnchor="middle"
              fill="#99F6E4"
              fontSize={10.5}
              fontWeight={800}
              letterSpacing={0.5}
            >
              DET KOSMISKE NETTVERKET
            </text>
            {COSMIC_WEB_EDGES.map(([i, j]) => {
              const a = COSMIC_WEB_NODES[i];
              const b = COSMIC_WEB_NODES[j];
              return (
                <line
                  key={`cw-edge-${i}-${j}`}
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke="#2DD4BF"
                  strokeOpacity={0.62}
                  strokeWidth={2.2}
                />
              );
            })}
            {COSMIC_WEB_NODES.map((pt, idx) => (
              <circle
                key={`cw-node-${idx}`}
                cx={pt.x}
                cy={pt.y}
                r={pt.r}
                fill="#FDE047"
                stroke="#FEF9C3"
                strokeWidth={1.2}
              />
            ))}
            <text
              x={2384}
              y={548}
              textAnchor="middle"
              fill="#64748B"
              fontSize={9}
              fontWeight={800}
              className="font-mono-time"
            >
              TOMROM
            </text>
            <text
              x={2356}
              y={598}
              textAnchor="middle"
              fill="#CCFBF1"
              fontSize={9.5}
              fontWeight={700}
              className="font-mono-time"
            >
              Filamenter • Knutepunkter • Tomrom
            </text>
          </g>

          {/* ========================================================== */}
          {/* CONNECTING TRAJECTORY CURVES BETWEEN STEPS 1 -> 10         */}
          {/* ========================================================== */}
          {GALAXIES_NODES.slice(1).map((node, idx) => {
            const prev = GALAXIES_NODES[idx];
            const isEdgeUnlocked = node.stepIndex <= effectiveMaxStep;
            const isActivePrefix =
              GALAXIES_NODE_MAP[selectedNodeId]?.stepIndex >= node.stepIndex;
            const palette = getZonePalette(node);
            const d = buildStepCurve(prev, node);

            if (!isEdgeUnlocked) {
              return (
                <path
                  key={`edge-locked-${node.id}`}
                  d={d}
                  fill="none"
                  stroke="rgba(100, 116, 139, 0.34)"
                  strokeWidth={2.4}
                  strokeDasharray="8 9"
                />
              );
            }

            return (
              <g key={`edge-${node.id}`}>
                {isActivePrefix && (
                  <path
                    d={d}
                    fill="none"
                    stroke={palette.accent}
                    strokeWidth={9}
                    strokeLinecap="round"
                    opacity={0.22}
                  />
                )}
                <path
                  d={d}
                  fill="none"
                  stroke={isActivePrefix ? palette.stroke : palette.accent}
                  strokeWidth={isActivePrefix ? 3.8 : 2.8}
                  strokeLinecap="round"
                  opacity={isActivePrefix ? 0.92 : 0.68}
                />
              </g>
            );
          })}

          {/* ========================================================== */}
          {/* NODES & VISUAL CALLOUT CARDS                               */}
          {/* ========================================================== */}
          {GALAXIES_NODES.map((node) => {
            const isUnlocked = node.stepIndex <= effectiveMaxStep;
            const isSelected = node.id === selectedNodeId;
            const palette = getZonePalette(node);

            const cardCenterY =
              node.cardSide === 'above' ? -CARD_OFFSET_Y : CARD_OFFSET_Y;
            const cardTopY = cardCenterY - CARD_H / 2;
            const stemY1 = node.cardSide === 'above' ? -24 : 24;
            const stemY2 =
              node.cardSide === 'above'
                ? cardCenterY + CARD_H / 2
                : cardCenterY - CARD_H / 2;

            return (
              <g
                key={node.id}
                id={`galaxy-node-${node.id}`}
                transform={`translate(${node.x}, ${node.y})`}
                onClick={(e) => {
                  e.stopPropagation();
                  if (dragRef.current?.moved) return;
                  onSelectNode(node.id);
                }}
                className="cursor-pointer"
              >
                {/* Vertical stem between node and its visual callout card */}
                <line
                  x1={0}
                  y1={stemY1}
                  x2={0}
                  y2={stemY2}
                  stroke={
                    !isUnlocked
                      ? 'rgba(100, 116, 139, 0.35)'
                      : isSelected
                        ? palette.stroke
                        : palette.accent
                  }
                  strokeWidth={isSelected ? 3 : 2}
                  strokeDasharray={isUnlocked ? undefined : '4 5'}
                  opacity={isUnlocked ? 0.9 : 0.6}
                />

                {/* Active halo around selected step node */}
                {isSelected && (
                  <circle
                    r={32}
                    fill="none"
                    stroke={palette.accent}
                    strokeWidth={2.6}
                    opacity={0.78}
                    filter="url(#gal-glow-strong)"
                  />
                )}

                <circle
                  r={isSelected ? 23 : isUnlocked ? 19 : 16}
                  fill={
                    isSelected
                      ? palette.accent
                      : isUnlocked
                        ? '#091124'
                        : 'rgba(15, 23, 42, 0.85)'
                  }
                  stroke={
                    isSelected
                      ? '#FFFFFF'
                      : isUnlocked
                        ? palette.accent
                        : 'rgba(148, 163, 184, 0.45)'
                  }
                  strokeWidth={isSelected ? 3.2 : 2.5}
                />

                <text
                  x={0}
                  y={0.5}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill={
                    isSelected
                      ? '#050814'
                      : isUnlocked
                        ? '#F8FAFC'
                        : '#94A3B8'
                  }
                  fontSize={isSelected ? 15 : 13}
                  fontWeight={800}
                  className="font-mono-time"
                >
                  {node.stepNumber}
                </text>

                {/* Locked mystery card */}
                {!isUnlocked ? (
                  <g className="opacity-70 hover:opacity-95 transition-opacity">
                    {(() => {
                      const lockedH = 96;
                      const lockedTopY =
                        node.cardSide === 'above' ? stemY2 - lockedH : stemY2;
                      return (
                        <>
                          <rect
                            x={-CARD_W / 2}
                            y={lockedTopY}
                            width={CARD_W}
                            height={lockedH}
                            rx={16}
                            fill="rgba(8, 15, 30, 0.84)"
                            stroke="rgba(100, 116, 139, 0.45)"
                            strokeWidth={1.5}
                            strokeDasharray="6 5"
                          />
                          <text
                            x={0}
                            y={lockedTopY + 26}
                            textAnchor="middle"
                            fill="#94A3B8"
                            fontSize={10.5}
                            fontWeight={800}
                            className="font-mono-time"
                          >
                            STEG {node.stepNumber}
                          </text>
                          <text
                            x={0}
                            y={lockedTopY + 50}
                            textAnchor="middle"
                            fill="#CBD5E1"
                            fontSize={13}
                            fontWeight={700}
                          >
                            {node.shortLabel}
                          </text>
                          <text
                            x={0}
                            y={lockedTopY + 73}
                            textAnchor="middle"
                            fill="#64748B"
                            fontSize={11}
                            fontWeight={600}
                          >
                            Klikk eller trykk Neste steg →
                          </text>
                        </>
                      );
                    })()}
                  </g>
                ) : (
                  <g>
                    {isSelected && (
                      <rect
                        x={-CARD_W / 2 - 5}
                        y={cardTopY - 5}
                        width={CARD_W + 10}
                        height={CARD_H + 10}
                        rx={21}
                        fill="none"
                        stroke={palette.accent}
                        strokeWidth={2.5}
                        opacity={0.72}
                        filter="url(#gal-glow-strong)"
                      />
                    )}

                    <rect
                      x={-CARD_W / 2}
                      y={cardTopY}
                      width={CARD_W}
                      height={CARD_H}
                      rx={17}
                      fill={
                        isSelected
                          ? 'rgba(13, 24, 46, 0.97)'
                          : 'rgba(8, 15, 30, 0.93)'
                      }
                      stroke={
                        isSelected ? palette.accent : 'rgba(71, 85, 105, 0.75)'
                      }
                      strokeWidth={isSelected ? 2.8 : 1.5}
                    />

                    {/* Card 16:9 illustration */}
                    <image
                      href={node.image}
                      x={-CARD_W / 2 + 8}
                      y={cardTopY + 8}
                      width={CARD_W - 16}
                      height={114}
                      preserveAspectRatio="xMidYMid slice"
                      clipPath={`url(#clip-gal-${node.id})`}
                    />

                    {/* Scale / physics badge over top-left of card image */}
                    <rect
                      x={-CARD_W / 2 + 14}
                      y={cardTopY + 14}
                      width={Math.min(
                        220,
                        Math.max(106, node.timeAfterBB.length * 6.8 + 20),
                      )}
                      height={22}
                      rx={7}
                      fill="rgba(5, 8, 20, 0.86)"
                      stroke={palette.badgeBorder}
                      strokeWidth={1}
                    />
                    <text
                      x={-CARD_W / 2 + 23}
                      y={cardTopY + 29}
                      textAnchor="start"
                      fill={palette.stroke}
                      fontSize={10.2}
                      fontWeight={700}
                      className="font-mono-time"
                    >
                      {node.timeAfterBB}
                    </text>

                    {/* Card title & zone pill */}
                    <text
                      x={0}
                      y={cardTopY + 145}
                      textAnchor="middle"
                      fill="#F8FAFC"
                      fontSize={14}
                      fontWeight={800}
                    >
                      {node.shortLabel}
                    </text>

                    <rect
                      x={-CARD_W / 2 + 12}
                      y={cardTopY + 155}
                      width={CARD_W - 24}
                      height={22}
                      rx={7}
                      fill={palette.badgeBg}
                      stroke={palette.badgeBorder}
                      strokeWidth={1}
                    />
                    <text
                      x={0}
                      y={cardTopY + 169.5}
                      textAnchor="middle"
                      fill={palette.text}
                      fontSize={10}
                      fontWeight={700}
                    >
                      {node.eraLabel}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
