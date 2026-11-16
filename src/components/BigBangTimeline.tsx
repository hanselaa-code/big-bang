import { Focus, Maximize2, Minus, Plus, Sparkles } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  BIG_BANG_NODE_MAP,
  BIG_BANG_NODES,
  type CosmicEpochCategory,
  type CosmicNodeData,
} from '../data/bigBangData';

interface BigBangTimelineProps {
  unlockedStepIndex: number;
  showAllSteps: boolean;
  selectedNodeId: string;
  onSelectNode: (nodeId: string) => void;
}

function getEpochPalette(epoch: CosmicEpochCategory) {
  switch (epoch) {
    case 'primordial':
      return {
        accent: '#F59E0B',
        stroke: '#FDE68A',
        badgeBg: 'rgba(120, 53, 15, 0.88)',
        badgeBorder: 'rgba(251, 191, 36, 0.58)',
        text: '#FEF3C7',
        epochLabel: 'Uruniverset',
      };
    case 'recombination':
      return {
        accent: '#FB923C',
        stroke: '#FED7AA',
        badgeBg: 'rgba(124, 45, 18, 0.88)',
        badgeBorder: 'rgba(251, 146, 60, 0.58)',
        text: '#FFEDD5',
        epochLabel: '380 000 år • CMB',
      };
    case 'stellar_dawn':
      return {
        accent: '#38BDF8',
        stroke: '#BAE6FD',
        badgeBg: 'rgba(12, 74, 110, 0.88)',
        badgeBorder: 'rgba(56, 189, 248, 0.55)',
        text: '#E0F2FE',
        epochLabel: 'Stjerner & Stoff',
      };
    case 'galactic_solar':
      return {
        accent: '#14B8A6',
        stroke: '#99F6E4',
        badgeBg: 'rgba(19, 78, 74, 0.88)',
        badgeBorder: 'rgba(45, 212, 191, 0.55)',
        text: '#CCFBF1',
        epochLabel: 'Galakser & Jorda',
      };
    case 'modern_cosmos':
    default:
      return {
        accent: '#10B981',
        stroke: '#A7F3D0',
        badgeBg: 'rgba(6, 78, 59, 0.88)',
        badgeBorder: 'rgba(52, 211, 153, 0.58)',
        text: '#D1FAE5',
        epochLabel: '13,8 mrd. år',
      };
  }
}

function buildSegmentPath(a: CosmicNodeData, b: CosmicNodeData): string {
  const dx = b.x - a.x;
  const c1x = a.x + dx * 0.45;
  const c2x = b.x - dx * 0.45;
  return `M ${a.x} ${a.y} C ${c1x} ${a.y}, ${c2x} ${b.y}, ${b.x} ${b.y}`;
}

const TEMPERATURE_SCALE_STOPS: {
  x: number;
  temp: string;
  note: string;
  color: string;
}[] = [
  { x: 240, temp: '> 10²⁷ K', note: 'Inflasjon', color: '#FEF08A' },
  { x: 555, temp: '~10¹³ K', note: 'Kvarker → p⁺/n⁰', color: '#FBBF24' },
  { x: 870, temp: '~10⁹ K', note: '75 % H • 25 % He', color: '#FB923C' },
  { x: 1185, temp: '3000 K', note: 'CMB slipper fri', color: '#F97316' },
  { x: 1675, temp: '~100 K', note: 'Første stjerner', color: '#38BDF8' },
  { x: 2295, temp: '~20 K', note: 'Tunge grunnstoffer', color: '#2DD4BF' },
  { x: 2775, temp: '~4 K i rommet', note: 'Solsystemet (9,2 mrd.)', color: '#34D399' },
  { x: 3115, temp: '2,725 K i dag', note: 'Rødforskyvning & mørk energi', color: '#10B981' },
];

const STARFIELD_DOTS: { cx: number; cy: number; r: number; op: number }[] = [
  { cx: 1490, cy: 220, r: 1.4, op: 0.45 },
  { cx: 1620, cy: 310, r: 1.8, op: 0.55 },
  { cx: 1760, cy: 245, r: 2.1, op: 0.7 },
  { cx: 1910, cy: 195, r: 2.4, op: 0.75 },
  { cx: 1995, cy: 380, r: 1.6, op: 0.5 },
  { cx: 2085, cy: 825, r: 2.0, op: 0.6 },
  { cx: 2260, cy: 265, r: 2.2, op: 0.65 },
  { cx: 2375, cy: 340, r: 1.5, op: 0.5 },
  { cx: 2540, cy: 225, r: 2.3, op: 0.7 },
  { cx: 2645, cy: 810, r: 1.9, op: 0.6 },
  { cx: 2890, cy: 275, r: 2.2, op: 0.72 },
  { cx: 2980, cy: 390, r: 1.7, op: 0.55 },
  { cx: 3180, cy: 235, r: 2.4, op: 0.78 },
  { cx: 3210, cy: 790, r: 1.9, op: 0.65 },
];

export function BigBangTimeline({
  unlockedStepIndex,
  showAllSteps,
  selectedNodeId,
  onSelectNode,
}: BigBangTimelineProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [viewport, setViewport] = useState({ width: 960, height: 680 });
  const [camera, setCamera] = useState({ x: 390, y: 495, scale: 0.86 });
  const [cameraMode, setCameraMode] = useState<'follow' | 'overview' | 'manual'>(
    'follow',
  );
  const [isDragging, setIsDragging] = useState(false);

  const dragRef = useRef<{
    startX: number;
    startY: number;
    camStartX: number;
    camStartY: number;
    moved: boolean;
  } | null>(null);

  const effectiveMaxStep = showAllSteps
    ? BIG_BANG_NODES.length - 1
    : unlockedStepIndex;

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

  const computeFollowCamera = useCallback(
    (targetNodeId: string) => {
      const selected = BIG_BANG_NODE_MAP[targetNodeId] ?? BIG_BANG_NODES[0];
      const prevNode = BIG_BANG_NODES[Math.max(0, selected.stepIndex - 1)];
      const nextNode =
        BIG_BANG_NODES[
          Math.min(BIG_BANG_NODES.length - 1, selected.stepIndex + 1)
        ];

      const minX = Math.min(selected.x - 220, prevNode.x - 135);
      const maxX = Math.max(selected.x + 220, nextNode.x + 135);

      const spanX = Math.max(850, maxX - minX + 120);
      const spanY = 790;

      const rawScale = Math.min(
        viewport.width / spanX,
        viewport.height / spanY,
      );
      const clampedScale = Math.max(0.5, Math.min(1.04, rawScale));

      const focusCenterX =
        selected.x * 0.64 + ((prevNode.x + nextNode.x) / 2) * 0.36;
      const focusCenterY = selected.cardSide === 'above' ? 490 : 565;

      return {
        x: focusCenterX,
        y: focusCenterY,
        scale: clampedScale,
      };
    },
    [viewport.height, viewport.width],
  );

  const computeOverviewCamera = useCallback(() => {
    const minX = 65;
    const maxX = 3290;
    const spanX = maxX - minX + 110;
    const spanY = 910;
    const rawScale = Math.min(viewport.width / spanX, viewport.height / spanY);
    const scale = Math.max(0.22, Math.min(0.84, rawScale));

    return {
      x: (minX + maxX) / 2,
      y: 540,
      scale,
    };
  }, [viewport.height, viewport.width]);

  useEffect(() => {
    if (showAllSteps) {
      setCameraMode('overview');
    } else {
      setCameraMode('follow');
    }
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
    if (Math.abs(dx) > 8 || Math.abs(dy) > 8) {
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
      scale: Math.max(0.2, Math.min(2.1, prev.scale * factor)),
    }));
  };

  const segments = useMemo(() => {
    const list: {
      from: CosmicNodeData;
      to: CosmicNodeData;
      path: string;
      unlocked: boolean;
    }[] = [];
    for (let i = 0; i < BIG_BANG_NODES.length - 1; i += 1) {
      const from = BIG_BANG_NODES[i];
      const to = BIG_BANG_NODES[i + 1];
      list.push({
        from,
        to,
        path: buildSegmentPath(from, to),
        unlocked: to.stepIndex <= effectiveMaxStep,
      });
    }
    return list;
  }, [effectiveMaxStep]);

  const selectedNode = BIG_BANG_NODE_MAP[selectedNodeId] ?? BIG_BANG_NODES[0];
  const translateX = viewport.width / 2 - camera.x * camera.scale;
  const translateY = viewport.height / 2 - camera.y * camera.scale;

  return (
    <div
      ref={containerRef}
      id="big-bang-timeline-canvas"
      className="relative w-full h-full overflow-hidden rounded-2xl glass-panel select-none"
    >
      {/* Top-left cosmic epoch legend */}
      <div className="absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 z-10 flex flex-wrap items-center gap-2 sm:gap-2.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl glass-subtle text-[11px] sm:text-xs text-slate-200 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 font-semibold text-amber-300">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>1–4: Uruniverset & CMB</span>
        </span>
        <span className="text-slate-600 hidden sm:inline">→</span>
        <span className="inline-flex items-center gap-1.5 font-semibold text-sky-300">
          <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.85)]" />
          <span>5–7: Første stjerner & stoff</span>
        </span>
        <span className="text-slate-600 hidden md:inline">→</span>
        <span className="hidden md:inline-flex items-center gap-1.5 font-semibold text-emerald-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>8–10: Galakser, Jorda & i dag</span>
        </span>
      </div>

      {/* Top-right camera controls */}
      <div className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 z-10 flex items-center gap-1.5">
        <button
          id="btn-bb-camera-follow"
          type="button"
          onClick={() => setCameraMode('follow')}
          title="Følg aktivt steg langs tidslinjen"
          className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
            cameraMode === 'follow'
              ? 'bg-amber-500/25 text-amber-200 border border-amber-400/50 shadow-[0_0_16px_rgba(245,158,11,0.25)]'
              : 'glass-subtle text-slate-300 hover:text-white'
          }`}
        >
          <Focus className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Følg steg</span>
        </button>

        <button
          id="btn-bb-camera-overview"
          type="button"
          onClick={() => setCameraMode('overview')}
          title="Zoom ut og se hele tidslinjen (0 → 13,8 mrd. år)"
          className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
            cameraMode === 'overview'
              ? 'bg-amber-500/25 text-amber-200 border border-amber-400/50 shadow-[0_0_16px_rgba(245,158,11,0.25)]'
              : 'glass-subtle text-slate-300 hover:text-white'
          }`}
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Hele tidslinjen</span>
        </button>

        <div className="hidden md:flex items-center rounded-lg glass-subtle overflow-hidden">
          <button
            type="button"
            aria-label="Zoom inn"
            onClick={() => {
              setCameraMode('manual');
              setCamera((prev) => ({
                ...prev,
                scale: Math.min(2.1, prev.scale * 1.2),
              }));
            }}
            className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            aria-label="Zoom ut"
            onClick={() => {
              setCameraMode('manual');
              setCamera((prev) => ({
                ...prev,
                scale: Math.max(0.2, prev.scale / 1.2),
              }));
            }}
            className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer border-l border-slate-700/60"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Bottom-left cosmic scale & interaction hint */}
      <div className="hidden sm:flex absolute bottom-3 left-3.5 z-10 items-center gap-2 px-3 py-1.5 rounded-lg glass-subtle text-[11px] text-slate-300 pointer-events-none">
        <span className="font-mono-time text-amber-300 font-semibold">t = 0</span>
        <span className="text-slate-500">→</span>
        <span className="font-mono-time text-orange-300 font-semibold">
          380 000 år
        </span>
        <span className="text-slate-500">→</span>
        <span className="font-mono-time text-sky-300 font-semibold">
          Stjerner
        </span>
        <span className="text-slate-500">→</span>
        <span className="font-mono-time text-emerald-300 font-semibold">
          13,8 mrd. år
        </span>
        <span className="text-slate-600 mx-1">•</span>
        <span className="text-slate-400">
          Dra for å panorere • Scroll for å zoome
        </span>
      </div>

      <svg
        role="img"
        aria-label="Interaktiv tidslinje over Big Bang fra t = 0 til 13,8 milliarder år"
        className={`w-full h-full touch-none ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onWheel={handleWheel}
      >
        <defs>
          <filter
            id="cosmosGlowStrong"
            x="-45%"
            y="-45%"
            width="190%"
            height="190%"
          >
            <feGaussianBlur stdDeviation="6.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <radialGradient id="bigBangOriginFlare" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFBEB" stopOpacity="1" />
            <stop offset="32%" stopColor="#FDE047" stopOpacity="0.88" />
            <stop offset="68%" stopColor="#F97316" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
          </radialGradient>

          <linearGradient
            id="expansionConeFill"
            x1="0%"
            y1="50%"
            x2="100%"
            y2="50%"
          >
            <stop offset="0%" stopColor="#FDE047" stopOpacity="0.22" />
            <stop offset="14%" stopColor="#F59E0B" stopOpacity="0.14" />
            <stop offset="38%" stopColor="#EA580C" stopOpacity="0.10" />
            <stop offset="44%" stopColor="#080D1A" stopOpacity="0.55" />
            <stop offset="64%" stopColor="#0EA5E9" stopOpacity="0.09" />
            <stop offset="84%" stopColor="#14B8A6" stopOpacity="0.09" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.12" />
          </linearGradient>

          <linearGradient
            id="primordialZoneGrad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#EA580C" stopOpacity="0.06" />
          </linearGradient>

          <linearGradient
            id="stellarZoneGrad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#0284C7" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#0F172A" stopOpacity="0.05" />
          </linearGradient>

          <linearGradient
            id="galacticZoneGrad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.07" />
          </linearGradient>

          <linearGradient
            id="cosmicSpineGrad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="28%" stopColor="#FB923C" />
            <stop offset="56%" stopColor="#38BDF8" />
            <stop offset="82%" stopColor="#2DD4BF" />
            <stop offset="100%" stopColor="#34D399" />
          </linearGradient>

          {BIG_BANG_NODES.map((node) => {
            const cardY = node.cardSide === 'above' ? node.y - 304 : node.y + 84;
            return (
              <clipPath key={`clip-${node.id}`} id={`clip-card-img-${node.id}`}>
                <rect
                  x={node.x - 122}
                  y={cardY + 10}
                  width={244}
                  height={114}
                  rx={11}
                />
              </clipPath>
            );
          })}
        </defs>

        <g
          style={{
            transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${camera.scale})`,
            transformOrigin: '0 0',
            transition: isDragging
              ? 'none'
              : 'transform 620ms cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {/* ========================================================== */}
          {/* NASA/PLANCK-STYLE COSMIC EXPANSION CONE ENVELOPE           */}
          {/* ========================================================== */}
          <g>
            <path
              d="M 90 540 C 120 230, 215 160, 420 142 L 2680 124 C 2920 120, 3110 98, 3265 76 L 3265 1004 C 3110 982, 2920 960, 2680 956 L 420 938 C 215 920, 120 850, 90 540 Z"
              fill="url(#expansionConeFill)"
              stroke="rgba(251, 191, 36, 0.24)"
              strokeWidth={1.8}
            />

            {/* Spacetime cross-section rings showing expanding universe radius */}
            {[240, 870, 1350, 2145, 2775, 3230].map((rxX, idx) => {
              const halfH =
                idx === 0
                  ? 375
                  : idx === 1
                    ? 398
                    : idx === 2
                      ? 404
                      : idx === 3
                        ? 410
                        : idx === 4
                          ? 416
                          : 454;
              return (
                <ellipse
                  key={`ring-${rxX}`}
                  cx={rxX}
                  cy={540}
                  rx={22}
                  ry={halfH}
                  fill="none"
                  stroke={
                    rxX === 1350
                      ? 'rgba(251, 146, 60, 0.42)'
                      : 'rgba(148, 163, 184, 0.13)'
                  }
                  strokeWidth={rxX === 1350 ? 2 : 1.2}
                  strokeDasharray={rxX === 1350 ? '7 5' : '4 7'}
                />
              );
            })}

            {/* Quantum origin Big Bang burst at (92, 540) */}
            <circle
              cx={92}
              cy={540}
              r={68}
              fill="url(#bigBangOriginFlare)"
            />
            <circle
              cx={92}
              cy={540}
              r={10}
              fill="#FFFBEB"
              filter="url(#cosmosGlowStrong)"
            />
            <text
              x={92}
              y={462}
              textAnchor="middle"
              fill="#FEF08A"
              fontSize={12}
              fontWeight={800}
              fontFamily="JetBrains Mono, monospace"
            >
              t = 0
            </text>

            {/* Subtle starfield dots in stellar & galactic epochs */}
            {STARFIELD_DOTS.map((s, i) => (
              <circle
                key={`star-${i}`}
                cx={s.cx}
                cy={s.cy}
                r={s.r}
                fill="#E0F2FE"
                opacity={s.op}
              />
            ))}
          </g>

          {/* ========================================================== */}
          {/* EPOCH ZONE BACKDROPS & HEADERS                             */}
          {/* ========================================================== */}

          {/* EPOCH 1: DET TETTE, GLØDENDE URUNIVERSET (STEG 1-4) */}
          <g>
            <rect
              x={95}
              y={128}
              width={1240}
              height={756}
              rx={38}
              fill="url(#primordialZoneGrad)"
              stroke="rgba(251, 191, 36, 0.30)"
              strokeWidth={1.8}
            />
            <rect
              x={124}
              y={146}
              width={510}
              height={40}
              rx={12}
              fill="rgba(120, 53, 15, 0.78)"
              stroke="rgba(251, 191, 36, 0.5)"
              strokeWidth={1.2}
            />
            <text
              x={144}
              y={171}
              fill="#FDE68A"
              fontSize={13}
              fontWeight={800}
              fontFamily="Plus Jakarta Sans, Inter, sans-serif"
              letterSpacing="0.05em"
            >
              EPOKE 1 • DET GLØDENDE URUNIVERSET (0 → 380 000 ÅR)
            </text>
          </g>

          {/* RECOMBINATION / CMB TRANSPARENCY BOUNDARY AT x = 1350 */}
          <g>
            <line
              x1={1350}
              y1={136}
              x2={1350}
              y2={488}
              stroke="rgba(251, 146, 60, 0.72)"
              strokeWidth={4}
              strokeDasharray="10 6"
            />
            <line
              x1={1350}
              y1={592}
              x2={1350}
              y2={876}
              stroke="rgba(251, 146, 60, 0.72)"
              strokeWidth={4}
              strokeDasharray="10 6"
            />
            <ellipse
              cx={1350}
              cy={540}
              rx={24}
              ry={46}
              fill="rgba(251, 146, 60, 0.18)"
              stroke="#FDBA74"
              strokeWidth={2.6}
              filter="url(#cosmosGlowStrong)"
            />
            <rect
              x={1248}
              y={452}
              width={204}
              height={26}
              rx={8}
              fill="rgba(124, 45, 18, 0.94)"
              stroke="rgba(251, 146, 60, 0.65)"
              strokeWidth={1.2}
            />
            <text
              x={1350}
              y={469}
              textAnchor="middle"
              fill="#FED7AA"
              fontSize={10.5}
              fontWeight={800}
              fontFamily="JetBrains Mono, monospace"
            >
              LYSET SLIPPER FRI (CMB) →
            </text>
          </g>

          {/* EPOCH 2: MØRKE TIDSALDER, FØRSTE STJERNER & SUPERNOVAER (STEG 5-7) */}
          <g>
            <rect
              x={1368}
              y={128}
              width={935}
              height={756}
              rx={38}
              fill="url(#stellarZoneGrad)"
              stroke="rgba(56, 189, 248, 0.28)"
              strokeWidth={1.8}
            />
            <rect
              x={1396}
              y={146}
              width={545}
              height={40}
              rx={12}
              fill="rgba(12, 74, 110, 0.78)"
              stroke="rgba(56, 189, 248, 0.48)"
              strokeWidth={1.2}
            />
            <text
              x={1416}
              y={171}
              fill="#BAE6FD"
              fontSize={13}
              fontWeight={800}
              fontFamily="Plus Jakarta Sans, Inter, sans-serif"
              letterSpacing="0.05em"
            >
              EPOKE 2 • MØRKE TIDSALDER, STJERNER & GRUNNSTOFFSMIA
            </text>
          </g>

          {/* EPOCH 3: GALAKSER, SOLSYSTEMET & UNIVERSET I DAG (STEG 8-10) */}
          <g>
            <rect
              x={2318}
              y={128}
              width={935}
              height={756}
              rx={38}
              fill="url(#galacticZoneGrad)"
              stroke="rgba(52, 211, 153, 0.30)"
              strokeWidth={1.8}
            />
            <rect
              x={2346}
              y={146}
              width={575}
              height={40}
              rx={12}
              fill="rgba(6, 78, 59, 0.80)"
              stroke="rgba(52, 211, 153, 0.5)"
              strokeWidth={1.2}
            />
            <text
              x={2366}
              y={171}
              fill="#A7F3D0"
              fontSize={13}
              fontWeight={800}
              fontFamily="Plus Jakarta Sans, Inter, sans-serif"
              letterSpacing="0.05em"
            >
              EPOKE 3 • GALAKSER, SOLSYSTEMET & UNIVERSET I DAG (13,8 MRD. ÅR)
            </text>

            {/* Acceleration label on the right flare */}
            <text
              x={3228}
              y={112}
              textAnchor="end"
              fill="#6EE7B7"
              fontSize={11.5}
              fontWeight={800}
              fontFamily="JetBrains Mono, monospace"
            >
              ↗ AKSELERERENDE UTVIDELSE (MØRK ENERGI 68 %)
            </text>
          </g>

          {/* ========================================================== */}
          {/* BOTTOM TEMPERATURE COOLING & REDSHIFT STRIP                */}
          {/* ========================================================== */}
          <g opacity={0.95}>
            <line
              x1={150}
              y1={924}
              x2={3200}
              y2={924}
              stroke="url(#cosmicSpineGrad)"
              strokeWidth={3}
              strokeOpacity={0.55}
            />
            {TEMPERATURE_SCALE_STOPS.map((stop) => (
              <g
                key={stop.temp}
                transform={`translate(${stop.x}, 904)`}
              >
                <rect
                  x={-88}
                  y={0}
                  width={176}
                  height={40}
                  rx={10}
                  fill="rgba(8, 13, 26, 0.94)"
                  stroke={stop.color}
                  strokeWidth={1.3}
                />
                <text
                  x={0}
                  y={16}
                  textAnchor="middle"
                  fill="#F8FAFC"
                  fontSize={11}
                  fontWeight={800}
                  fontFamily="JetBrains Mono, monospace"
                >
                  {stop.temp}
                </text>
                <text
                  x={0}
                  y={31}
                  textAnchor="middle"
                  fill={stop.color}
                  fontSize={9.5}
                  fontWeight={700}
                  fontFamily="Inter, sans-serif"
                >
                  {stop.note}
                </text>
              </g>
            ))}
          </g>

          {/* ========================================================== */}
          {/* TIMELINE SPINE SEGMENTS (LOCKED GHOST + UNLOCKED GLOWING)  */}
          {/* ========================================================== */}
          {/* Initial origin beam from (92, 540) to Step 1 */}
          <path
            d={`M 92 540 C 145 540, 185 ${BIG_BANG_NODES[0].y}, ${BIG_BANG_NODES[0].x} ${BIG_BANG_NODES[0].y}`}
            fill="none"
            stroke="#FEF08A"
            strokeWidth={6}
            strokeLinecap="round"
          />

          {segments.map((seg) => (
            <g key={`${seg.from.id}-${seg.to.id}`}>
              <path
                d={seg.path}
                fill="none"
                stroke="rgba(148, 163, 184, 0.2)"
                strokeWidth={8}
                strokeLinecap="round"
              />

              {seg.unlocked ? (
                <>
                  <path
                    d={seg.path}
                    fill="none"
                    stroke="url(#cosmicSpineGrad)"
                    strokeWidth={12}
                    strokeOpacity={0.25}
                    strokeLinecap="round"
                  />
                  <path
                    d={seg.path}
                    fill="none"
                    stroke="url(#cosmicSpineGrad)"
                    strokeWidth={5}
                    strokeLinecap="round"
                  />
                  <g
                    transform={`translate(${(seg.from.x + seg.to.x) / 2}, ${
                      (seg.from.y + seg.to.y) / 2
                    })`}
                  >
                    <circle
                      r={11}
                      fill="#0B1324"
                      stroke="rgba(148, 163, 184, 0.45)"
                      strokeWidth={1.2}
                    />
                    <path
                      d="M -3 -4 L 3 0 L -3 4"
                      fill="none"
                      stroke="#F8FAFC"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </>
              ) : (
                <path
                  d={seg.path}
                  fill="none"
                  stroke="rgba(148, 163, 184, 0.35)"
                  strokeWidth={2.5}
                  strokeDasharray="8 8"
                  strokeLinecap="round"
                />
              )}
            </g>
          ))}

          {/* ========================================================== */}
          {/* TIMELINE STATIONS (1..10) & MILESTONE CARDS                */}
          {/* ========================================================== */}
          {BIG_BANG_NODES.map((node) => {
            const isUnlocked = node.stepIndex <= effectiveMaxStep;
            const isSelected = node.id === selectedNode.id;
            const palette = getEpochPalette(node.epochCategory);

            const cardWidth = 264;
            const cardHeight = 220;
            const cardX = node.x - cardWidth / 2;
            const cardY = node.cardSide === 'above' ? node.y - 304 : node.y + 84;
            const stemY1 = node.cardSide === 'above' ? node.y - 24 : node.y + 24;
            const stemY2 =
              node.cardSide === 'above' ? cardY + cardHeight : cardY;

            return (
              <g
                key={node.id}
                id={`timeline-node-${node.id}`}
                onClick={(e) => {
                  e.stopPropagation();
                  if (dragRef.current?.moved) return;
                  onSelectNode(node.id);
                }}
                className="cursor-pointer"
              >
                {/* Connector stem */}
                <line
                  x1={node.x}
                  y1={stemY1}
                  x2={node.x}
                  y2={stemY2}
                  stroke={
                    isSelected
                      ? palette.stroke
                      : isUnlocked
                        ? palette.accent
                        : 'rgba(148, 163, 184, 0.3)'
                  }
                  strokeWidth={isSelected ? 3.2 : 2}
                  strokeDasharray={isUnlocked ? undefined : '5 5'}
                />

                {/* Pulse halo around selected station */}
                {isSelected && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={32}
                    fill="none"
                    stroke={palette.accent}
                    strokeWidth={2.5}
                    className="node-pulse-ring"
                  />
                )}

                {/* Station circle */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isSelected ? 24 : 20}
                  fill={isUnlocked ? palette.accent : 'rgba(15, 23, 42, 0.94)'}
                  stroke={
                    isSelected
                      ? '#FFFFFF'
                      : isUnlocked
                        ? palette.stroke
                        : 'rgba(148, 163, 184, 0.45)'
                  }
                  strokeWidth={isSelected ? 3.5 : 2.2}
                  filter={isSelected ? 'url(#cosmosGlowStrong)' : undefined}
                />

                {/* Step number inside station circle */}
                <text
                  x={node.x}
                  y={node.y + 5}
                  textAnchor="middle"
                  fill={isUnlocked ? '#06101E' : '#94A3B8'}
                  fontSize={isSelected ? 15 : 13.5}
                  fontWeight={900}
                  fontFamily="JetBrains Mono, monospace"
                >
                  {node.stepNumber}
                </text>

                {/* Milestone card */}
                {isUnlocked ? (
                  <g>
                    <rect
                      x={cardX}
                      y={cardY}
                      width={cardWidth}
                      height={cardHeight}
                      rx={16}
                      fill={
                        isSelected
                          ? 'rgba(15, 23, 42, 0.98)'
                          : 'rgba(8, 13, 26, 0.93)'
                      }
                      stroke={isSelected ? palette.stroke : palette.badgeBorder}
                      strokeWidth={isSelected ? 2.8 : 1.5}
                      filter={isSelected ? 'url(#cosmosGlowStrong)' : undefined}
                    />

                    {/* 16:9 Step Illustration Thumbnail */}
                    <image
                      href={node.image}
                      x={node.x - 122}
                      y={cardY + 10}
                      width={244}
                      height={114}
                      preserveAspectRatio="xMidYMid slice"
                      clipPath={`url(#clip-card-img-${node.id})`}
                    />
                    <rect
                      x={node.x - 122}
                      y={cardY + 10}
                      width={244}
                      height={114}
                      rx={11}
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.15)"
                      strokeWidth={1}
                    />

                    {/* Top-left time badge overlaid on thumbnail */}
                    <rect
                      x={node.x - 114}
                      y={cardY + 18}
                      width={142}
                      height={22}
                      rx={7}
                      fill={palette.badgeBg}
                      stroke={palette.badgeBorder}
                      strokeWidth={1}
                    />
                    <text
                      x={node.x - 43}
                      y={cardY + 33}
                      textAnchor="middle"
                      fill={palette.text}
                      fontSize={9.8}
                      fontWeight={800}
                      fontFamily="JetBrains Mono, monospace"
                    >
                      {node.timeAfterBB}
                    </text>

                    {/* Step Short Title */}
                    <text
                      x={node.x}
                      y={cardY + 149}
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize={15}
                      fontWeight={800}
                      fontFamily="Plus Jakarta Sans, Inter, sans-serif"
                    >
                      {node.shortLabel}
                    </text>

                    {/* Era / lookback subtitle */}
                    <text
                      x={node.x}
                      y={cardY + 169}
                      textAnchor="middle"
                      fill="#CBD5E1"
                      fontSize={11.5}
                      fontWeight={500}
                      fontFamily="Inter, sans-serif"
                    >
                      {node.eraLabel}
                    </text>

                    {/* Cosmic summary pill */}
                    <rect
                      x={node.x - 118}
                      y={cardY + 182}
                      width={236}
                      height={25}
                      rx={8}
                      fill="rgba(30, 41, 59, 0.92)"
                      stroke={palette.badgeBorder}
                      strokeWidth={1}
                    />
                    <text
                      x={node.x}
                      y={cardY + 198}
                      textAnchor="middle"
                      fill={palette.stroke}
                      fontSize={10.2}
                      fontWeight={700}
                      fontFamily="JetBrains Mono, monospace"
                    >
                      {node.cosmicTag}
                    </text>
                  </g>
                ) : (
                  /* Locked future step ghost card (clickable to jump straight to that step) */
                  <g opacity={0.65}>
                    <rect
                      x={node.x - 112}
                      y={
                        node.cardSide === 'above'
                          ? node.y - 152
                          : node.y + 84
                      }
                      width={224}
                      height={68}
                      rx={14}
                      fill="rgba(15, 23, 42, 0.8)"
                      stroke="rgba(148, 163, 184, 0.36)"
                      strokeWidth={1.3}
                      strokeDasharray="6 4"
                    />
                    <text
                      x={node.x}
                      y={
                        (node.cardSide === 'above'
                          ? node.y - 152
                          : node.y + 84) + 27
                      }
                      textAnchor="middle"
                      fill="#E2E8F0"
                      fontSize={12.5}
                      fontWeight={700}
                      fontFamily="Plus Jakarta Sans, Inter, sans-serif"
                    >
                      Steg {node.stepNumber}: {node.shortLabel}
                    </text>
                    <text
                      x={node.x}
                      y={
                        (node.cardSide === 'above'
                          ? node.y - 152
                          : node.y + 84) + 47
                      }
                      textAnchor="middle"
                      fill="#94A3B8"
                      fontSize={10.5}
                      fontFamily="JetBrains Mono, monospace"
                    >
                      {node.timeAfterBB} • klikk for å åpne
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
