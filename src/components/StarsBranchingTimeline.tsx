import { Focus, Maximize2, Minus, Plus, Sparkles } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { CosmicNodeData } from '../data/bigBangData';
import { STARS_NODE_MAP, STARS_NODES } from '../data/starsData';

interface StarsBranchingTimelineProps {
  unlockedStepIndex: number;
  showAllSteps: boolean;
  selectedNodeId: string;
  onSelectNode: (nodeId: string) => void;
}

type BranchKind = 'common' | 'solar' | 'massive';

function getNodeBranchKind(nodeId: string): BranchKind {
  if (
    nodeId === 'star_red_giant' ||
    nodeId === 'star_planetary_nebula' ||
    nodeId === 'star_white_dwarf'
  ) {
    return 'solar';
  }
  if (
    nodeId === 'star_red_supergiant' ||
    nodeId === 'star_supernova' ||
    nodeId === 'star_neutron_star' ||
    nodeId === 'star_black_hole'
  ) {
    return 'massive';
  }
  return 'common';
}

function getBranchPalette(node: CosmicNodeData) {
  const kind = getNodeBranchKind(node.id);
  if (kind === 'solar') {
    return {
      accent: '#2DD4BF',
      stroke: '#99F6E4',
      badgeBg: 'rgba(19, 78, 74, 0.9)',
      badgeBorder: 'rgba(45, 212, 191, 0.6)',
      text: '#CCFBF1',
    };
  }
  if (kind === 'massive') {
    if (node.id === 'star_black_hole') {
      return {
        accent: '#A855F7',
        stroke: '#E9D5FF',
        badgeBg: 'rgba(88, 28, 135, 0.9)',
        badgeBorder: 'rgba(192, 132, 252, 0.62)',
        text: '#F3E8FF',
      };
    }
    return {
      accent: '#38BDF8',
      stroke: '#BAE6FD',
      badgeBg: 'rgba(12, 74, 110, 0.9)',
      badgeBorder: 'rgba(56, 189, 248, 0.6)',
      text: '#E0F2FE',
    };
  }
  return {
    accent: '#F59E0B',
    stroke: '#FDE68A',
    badgeBg: 'rgba(120, 53, 15, 0.9)',
    badgeBorder: 'rgba(251, 191, 36, 0.62)',
    text: '#FEF3C7',
  };
}

function buildBranchCurve(a: CosmicNodeData, b: CosmicNodeData): string {
  const dx = b.x - a.x;
  const c1x = a.x + dx * 0.46;
  const c2x = b.x - dx * 0.44;
  return `M ${a.x} ${a.y} C ${c1x} ${a.y}, ${c2x} ${b.y}, ${b.x} ${b.y}`;
}

function getAncestorEdgeSet(selectedId: string): Set<string> {
  const activeEdges = new Set<string>();
  let cur: CosmicNodeData | undefined = STARS_NODE_MAP[selectedId];
  while (cur && cur.parentId) {
    activeEdges.add(`${cur.parentId}->${cur.id}`);
    cur = STARS_NODE_MAP[cur.parentId];
  }
  return activeEdges;
}

const CARD_W = 246;
const CARD_H = 186;
const CARD_OFFSET_Y = 140;

const STARFIELD_DOTS: { cx: number; cy: number; r: number; op: number }[] = [
  { cx: 145, cy: 180, r: 1.6, op: 0.45 },
  { cx: 420, cy: 250, r: 2.0, op: 0.55 },
  { cx: 760, cy: 190, r: 1.8, op: 0.5 },
  { cx: 410, cy: 990, r: 2.1, op: 0.55 },
  { cx: 830, cy: 1030, r: 1.7, op: 0.45 },
  { cx: 1580, cy: 120, r: 2.2, op: 0.65 },
  { cx: 1970, cy: 460, r: 1.8, op: 0.5 },
  { cx: 2360, cy: 190, r: 2.3, op: 0.7 },
  { cx: 1590, cy: 1160, r: 2.0, op: 0.6 },
  { cx: 2010, cy: 640, r: 1.9, op: 0.55 },
  { cx: 2390, cy: 890, r: 2.4, op: 0.7 },
];

export function StarsBranchingTimeline({
  unlockedStepIndex,
  showAllSteps,
  selectedNodeId,
  onSelectNode,
}: StarsBranchingTimelineProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [viewport, setViewport] = useState({ width: 960, height: 680 });
  const [camera, setCamera] = useState({ x: 430, y: 560, scale: 0.82 });
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

  const effectiveMaxStep = showAllSteps ? STARS_NODES.length - 1 : unlockedStepIndex;

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
    const worldW = 2480;
    const worldH = 1280;
    const scale = Math.max(
      0.24,
      Math.min(0.86, Math.min(viewport.width / worldW, viewport.height / worldH) * 0.95),
    );
    return {
      x: 1275,
      y: 650,
      scale,
    };
  }, [viewport.height, viewport.width]);

  const computeFollowCamera = useCallback(
    (targetNodeId: string) => {
      if (showAllSteps) {
        return computeOverviewCamera();
      }
      const selected = STARS_NODE_MAP[targetNodeId] ?? STARS_NODES[0];
      const parent = selected.parentId
        ? STARS_NODE_MAP[selected.parentId]
        : null;

      const cardCenterY =
        selected.cardSide === 'above'
          ? selected.y - CARD_OFFSET_Y
          : selected.y + CARD_OFFSET_Y;

      let minX = selected.x - 360;
      let maxX = selected.x + 380;
      let minY = Math.min(selected.y, cardCenterY) - 195;
      let maxY = Math.max(selected.y, cardCenterY) + 195;

      // When crossing a fork (Step 3 -> 4, Step 3 -> 7, or Step 8 -> 9/10), include parent fork for clear spatial orientation
      if (
        parent &&
        (selected.id === 'star_red_giant' ||
          selected.id === 'star_red_supergiant' ||
          selected.id === 'star_neutron_star' ||
          selected.id === 'star_black_hole')
      ) {
        minX = Math.min(minX, parent.x - 140);
        minY = Math.min(minY, parent.y - 120);
        maxY = Math.max(maxY, parent.y + 120);
      }

      const spanX = Math.max(760, maxX - minX);
      const spanY = Math.max(540, maxY - minY);
      const rawScale = Math.min(viewport.width / spanX, viewport.height / spanY);
      const clampedScale = Math.max(0.42, Math.min(0.95, rawScale));

      return {
        x: (minX + maxX) / 2,
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

  const activeLineageEdges = useMemo(
    () => getAncestorEdgeSet(selectedNodeId),
    [selectedNodeId],
  );

  const translateX = viewport.width / 2 - camera.x * camera.scale;
  const translateY = viewport.height / 2 - camera.y * camera.scale;

  return (
    <div
      ref={containerRef}
      id="stars-branching-timeline-canvas"
      className="relative w-full h-full overflow-hidden rounded-2xl glass-panel select-none"
    >
      {/* Top-left concise legend */}
      <div className="absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 z-10 flex items-center gap-2 sm:gap-2.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl glass-subtle text-[11px] sm:text-xs text-slate-300 pointer-events-none max-w-[58%]">
        <span className="inline-flex items-center gap-1.5 font-semibold text-amber-300 truncate">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>Fødsel</span>
        </span>
        <span className="text-slate-600">→</span>
        <span className="inline-flex items-center gap-1 font-semibold text-teal-300 truncate">
          <span className="w-2 h-2 rounded-full bg-teal-400 shrink-0" />
          <span>&lt; 8 M☉ (Sola)</span>
        </span>
        <span className="text-slate-600 hidden md:inline">/</span>
        <span className="hidden md:inline-flex items-center gap-1 font-semibold text-sky-300 truncate">
          <span className="w-2 h-2 rounded-full bg-sky-400 shrink-0" />
          <span>&gt; 8 M☉ (Tunge)</span>
        </span>
      </div>

      {/* Top-right camera controls */}
      <div className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 z-10 flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-xl glass-subtle">
        <button
          id="btn-stars-follow"
          type="button"
          onClick={() => {
            setCameraMode('follow');
            setCamera(computeFollowCamera(selectedNodeId));
          }}
          title="Følg valgt steg i livsløpet"
          className={`inline-flex items-center gap-1 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold transition-colors cursor-pointer ${
            cameraMode === 'follow'
              ? 'bg-amber-500/25 text-amber-200 border border-amber-400/40'
              : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
          }`}
        >
          <Focus className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Følg steg</span>
        </button>
        <button
          id="btn-stars-overview"
          type="button"
          onClick={() => {
            setCameraMode('overview');
            setCamera(computeOverviewCamera());
          }}
          title="Vis hele det forgrenede livsløpet"
          className={`inline-flex items-center gap-1 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold transition-colors cursor-pointer ${
            cameraMode === 'overview'
              ? 'bg-amber-500/25 text-amber-200 border border-amber-400/40'
              : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
          }`}
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Hele treet</span>
        </button>
        <div className="w-px h-4 bg-slate-700/80 mx-0.5 hidden sm:block" />
        <button
          id="btn-stars-zoom-in"
          type="button"
          onClick={() => {
            setCameraMode('manual');
            setCamera((prev) => ({
              ...prev,
              scale: Math.min(1.85, prev.scale * 1.2),
            }));
          }}
          title="Zoom inn"
          className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" />
        </button>
        <button
          id="btn-stars-zoom-out"
          type="button"
          onClick={() => {
            setCameraMode('manual');
            setCamera((prev) => ({
              ...prev,
              scale: Math.max(0.22, prev.scale / 1.2),
            }));
          }}
          title="Zoom ut"
          className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
        >
          <Minus className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Bottom-left classroom hint */}
      <div className="absolute bottom-2.5 left-2.5 sm:bottom-3.5 sm:left-3.5 z-10 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl glass-subtle text-[11px] text-slate-400 pointer-events-none">
        <span className="font-mono-time text-amber-300 font-semibold">
          Massen avgjør:
        </span>
        <span>
          &lt; 8 M☉ → Hvit dverg • 8–20 M☉ → Nøytronstjerne • &gt; 20 M☉ → Sort hull
        </span>
      </div>

      {/* Interactive Pan/Zoom SVG Canvas */}
      <svg
        width="100%"
        height="100%"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onWheel={handleWheel}
        className={`w-full h-full touch-none ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
      >
        <defs>
          <radialGradient id="stars-nebula-glow" cx="20%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.22" />
            <stop offset="55%" stopColor="#D97706" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#080D1A" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="stars-upper-zone" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.04" />
          </linearGradient>

          <linearGradient id="stars-lower-zone" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284C7" stopOpacity="0.11" />
            <stop offset="100%" stopColor="#9333EA" stopOpacity="0.09" />
          </linearGradient>

          {STARS_NODES.map((node) => {
            const cardY =
              node.cardSide === 'above'
                ? node.y - CARD_OFFSET_Y - CARD_H / 2
                : node.y + CARD_OFFSET_Y - CARD_H / 2;
            return (
              <clipPath key={`clip-${node.id}`} id={`clip-star-img-${node.id}`}>
                <rect
                  x={node.x - CARD_W / 2 + 8}
                  y={cardY + 8}
                  width={CARD_W - 16}
                  height={98}
                  rx={10}
                />
              </clipPath>
            );
          })}
        </defs>

        <g
          transform={`translate(${translateX}, ${translateY}) scale(${camera.scale})`}
          style={{
            transition: isDragging
              ? 'none'
              : 'transform 420ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Ambient starfield */}
          {STARFIELD_DOTS.map((s, idx) => (
            <circle
              key={`bgstar-${idx}`}
              cx={s.cx}
              cy={s.cy}
              r={s.r}
              fill="#E2E8F0"
              opacity={s.op}
            />
          ))}

          {/* Zone 1: Common Birth & Main Sequence */}
          <rect
            x="92"
            y="290"
            width="1030"
            height="620"
            rx="32"
            fill="url(#stars-nebula-glow)"
            stroke="rgba(251, 191, 36, 0.24)"
            strokeWidth="1.5"
          />
          <g transform="translate(122, 314)">
            <rect
              x="0"
              y="0"
              width="430"
              height="30"
              rx="10"
              fill="rgba(120, 53, 15, 0.55)"
              stroke="rgba(251, 191, 36, 0.4)"
            />
            <text
              x="16"
              y="19"
              fill="#FDE68A"
              fontSize="12"
              fontWeight="800"
              letterSpacing="0.8"
              className="font-display"
            >
              FELLES START • STJERNEFØDSEL &amp; HOVEDSERIEN (STEG 1–3)
            </text>
          </g>

          {/* Zone 2: Upper Branch – Solar-like Stars (< 8 M☉) */}
          <rect
            x="1190"
            y="8"
            width="1215"
            height="534"
            rx="32"
            fill="url(#stars-upper-zone)"
            stroke="rgba(45, 212, 191, 0.32)"
            strokeWidth="1.6"
          />
          <g transform="translate(1222, 20)">
            <rect
              x="0"
              y="0"
              width="520"
              height="30"
              rx="10"
              fill="rgba(19, 78, 74, 0.72)"
              stroke="rgba(45, 212, 191, 0.48)"
            />
            <text
              x="16"
              y="19"
              fill="#99F6E4"
              fontSize="12"
              fontWeight="800"
              letterSpacing="0.8"
              className="font-display"
            >
              ØVRE GREN • SOL-LIGNENDE STJERNER (&lt; 8 SOLMASSER) → HVIT DVERG
            </text>
          </g>

          {/* Zone 3: Lower Branch – Massive Stars (> 8 M☉) */}
          <rect
            x="1190"
            y="552"
            width="1215"
            height="716"
            rx="32"
            fill="url(#stars-lower-zone)"
            stroke="rgba(56, 189, 248, 0.32)"
            strokeWidth="1.6"
          />
          <g transform="translate(1222, 568)">
            <rect
              x="0"
              y="0"
              width="585"
              height="30"
              rx="10"
              fill="rgba(12, 74, 110, 0.75)"
              stroke="rgba(56, 189, 248, 0.48)"
            />
            <text
              x="16"
              y="19"
              fill="#BAE6FD"
              fontSize="12"
              fontWeight="800"
              letterSpacing="0.8"
              className="font-display"
            >
              NEDRE GREN • TUNGE STJERNER (&gt; 8 SOLMASSER) → SUPERNOVA, PULSAR &amp; SORT HULL
            </text>
          </g>

          {/* Branch Connector Curves (parent -> child) */}
          {STARS_NODES.map((node) => {
            if (!node.parentId) return null;
            const parent = STARS_NODE_MAP[node.parentId];
            if (!parent) return null;

            const d = buildBranchCurve(parent, node);
            const isUnlocked = node.stepIndex <= effectiveMaxStep;
            const edgeKey = `${parent.id}->${node.id}`;
            const isInActiveLineage = activeLineageEdges.has(edgeKey);
            const palette = getBranchPalette(node);

            return (
              <g key={`edge-${edgeKey}`}>
                {/* Base track */}
                <path
                  d={d}
                  fill="none"
                  stroke="#334155"
                  strokeWidth="8"
                  strokeLinecap="round"
                  opacity="0.55"
                />
                {isUnlocked ? (
                  <path
                    d={d}
                    fill="none"
                    stroke={isInActiveLineage ? palette.stroke : palette.accent}
                    strokeWidth={isInActiveLineage ? 6.5 : 4.2}
                    strokeLinecap="round"
                    opacity={isInActiveLineage ? 0.98 : 0.62}
                  />
                ) : (
                  <path
                    d={d}
                    fill="none"
                    stroke="#64748B"
                    strokeWidth="3"
                    strokeDasharray="9 9"
                    strokeLinecap="round"
                    opacity="0.55"
                  />
                )}
              </g>
            );
          })}

          {/* Fork Callout Labels at Main-Sequence Split (x ~ 1150) & Supernova Split (x ~ 1995) */}
          <g transform="translate(1145, 425)">
            <rect
              x="-92"
              y="-15"
              width="184"
              height="30"
              rx="15"
              fill="#081C24"
              stroke="#2DD4BF"
              strokeWidth="1.6"
            />
            <text
              x="0"
              y="4"
              textAnchor="middle"
              fill="#99F6E4"
              fontSize="12"
              fontWeight="800"
              className="font-mono-time"
            >
              Masse &lt; 8 solmasser ↗
            </text>
          </g>

          <g transform="translate(1145, 765)">
            <rect
              x="-92"
              y="-15"
              width="184"
              height="30"
              rx="15"
              fill="#08182E"
              stroke="#38BDF8"
              strokeWidth="1.6"
            />
            <text
              x="0"
              y="4"
              textAnchor="middle"
              fill="#BAE6FD"
              fontSize="12"
              fontWeight="800"
              className="font-mono-time"
            >
              Masse &gt; 8 solmasser ↘
            </text>
          </g>

          <g transform="translate(2005, 830)">
            <rect
              x="-58"
              y="-13"
              width="116"
              height="26"
              rx="13"
              fill="#08182E"
              stroke="#38BDF8"
              strokeWidth="1.4"
            />
            <text
              x="0"
              y="4"
              textAnchor="middle"
              fill="#BAE6FD"
              fontSize="11"
              fontWeight="700"
              className="font-mono-time"
            >
              8–20 M☉ ↗
            </text>
          </g>

          <g transform="translate(2005, 975)">
            <rect
              x="-58"
              y="-13"
              width="116"
              height="26"
              rx="13"
              fill="#1E0B36"
              stroke="#A855F7"
              strokeWidth="1.4"
            />
            <text
              x="0"
              y="4"
              textAnchor="middle"
              fill="#E9D5FF"
              fontSize="11"
              fontWeight="700"
              className="font-mono-time"
            >
              &gt; 20 M☉ ↘
            </text>
          </g>

          {/* Milestone Nodes & Cards */}
          {STARS_NODES.map((node) => {
            const isUnlocked = node.stepIndex <= effectiveMaxStep;
            const isSelected = node.id === selectedNodeId;
            const palette = getBranchPalette(node);

            const cardCenterY =
              node.cardSide === 'above'
                ? node.y - CARD_OFFSET_Y
                : node.y + CARD_OFFSET_Y;
            const cardX = node.x - CARD_W / 2;
            const cardY = cardCenterY - CARD_H / 2;
            const stemEndY =
              node.cardSide === 'above'
                ? cardY + CARD_H
                : cardY;

            if (!isUnlocked) {
              return (
                <g
                  key={node.id}
                  id={`star-node-locked-${node.id}`}
                  onClick={() => onSelectNode(node.id)}
                  className="cursor-pointer opacity-60 hover:opacity-90 transition-opacity"
                >
                  <line
                    x1={node.x}
                    y1={node.y}
                    x2={node.x}
                    y2={stemEndY}
                    stroke="#475569"
                    strokeWidth="2"
                    strokeDasharray="5 5"
                  />
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="21"
                    fill="#0F172A"
                    stroke="#475569"
                    strokeWidth="2.5"
                  />
                  <text
                    x={node.x}
                    y={node.y + 5}
                    textAnchor="middle"
                    fill="#94A3B8"
                    fontSize="14"
                    fontWeight="800"
                    className="font-mono-time"
                  >
                    {node.stepNumber}
                  </text>

                  <rect
                    x={node.x - 106}
                    y={cardCenterY - 30}
                    width="212"
                    height="60"
                    rx="14"
                    fill="rgba(15, 23, 42, 0.82)"
                    stroke="#334155"
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                  />
                  <text
                    x={node.x}
                    y={cardCenterY - 4}
                    textAnchor="middle"
                    fill="#CBD5E1"
                    fontSize="13"
                    fontWeight="700"
                    className="font-display"
                  >
                    Steg {node.stepNumber}: {node.shortLabel}
                  </text>
                  <text
                    x={node.x}
                    y={cardCenterY + 15}
                    textAnchor="middle"
                    fill="#64748B"
                    fontSize="11"
                    className="font-mono-time"
                  >
                    Klikk eller trykk Neste →
                  </text>
                </g>
              );
            }

            return (
              <g
                key={node.id}
                id={`star-node-${node.id}`}
                onClick={() => onSelectNode(node.id)}
                className="cursor-pointer"
              >
                {/* Connector stem from dot to card */}
                <line
                  x1={node.x}
                  y1={node.y}
                  x2={node.x}
                  y2={stemEndY}
                  stroke={isSelected ? palette.stroke : palette.accent}
                  strokeWidth={isSelected ? 3.5 : 2.2}
                  opacity={isSelected ? 1 : 0.78}
                />

                {/* Outer pulse halo when selected */}
                {isSelected && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="34"
                    fill={palette.accent}
                    opacity="0.22"
                  />
                )}

                {/* Milestone circle */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isSelected ? 25 : 21}
                  fill={isSelected ? palette.accent : '#0B1325'}
                  stroke={isSelected ? '#FFFFFF' : palette.accent}
                  strokeWidth={isSelected ? 3.5 : 2.8}
                />
                <text
                  x={node.x}
                  y={node.y + 5}
                  textAnchor="middle"
                  fill={isSelected ? '#080D1A' : '#F8FAFC'}
                  fontSize="15"
                  fontWeight="800"
                  className="font-mono-time"
                >
                  {node.stepNumber}
                </text>

                {/* Milestone card */}
                <rect
                  x={cardX}
                  y={cardY}
                  width={CARD_W}
                  height={CARD_H}
                  rx="16"
                  fill={
                    isSelected
                      ? 'rgba(13, 23, 44, 0.97)'
                      : 'rgba(10, 17, 34, 0.93)'
                  }
                  stroke={isSelected ? palette.stroke : palette.accent}
                  strokeWidth={isSelected ? 3 : 1.6}
                />

                {/* Card 16:9 thumbnail */}
                <image
                  href={node.image}
                  x={cardX + 8}
                  y={cardY + 8}
                  width={CARD_W - 16}
                  height="98"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath={`url(#clip-star-img-${node.id})`}
                />

                {/* Top-left badge over thumbnail */}
                <rect
                  x={cardX + 14}
                  y={cardY + 14}
                  width="124"
                  height="22"
                  rx="7"
                  fill="rgba(7, 11, 22, 0.84)"
                  stroke={palette.badgeBorder}
                  strokeWidth="1"
                />
                <text
                  x={cardX + 76}
                  y={cardY + 29}
                  textAnchor="middle"
                  fill={palette.text}
                  fontSize="10.5"
                  fontWeight="700"
                  className="font-mono-time"
                >
                  Steg {node.stepNumber} • {node.id === 'star_main_sequence' ? 'Veiskille' : getNodeBranchKind(node.id) === 'solar' ? '< 8 M☉' : getNodeBranchKind(node.id) === 'massive' ? '> 8 M☉' : 'Fødsel'}
                </text>

                {/* Card Title */}
                <text
                  x={node.x}
                  y={cardY + 128}
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="15"
                  fontWeight="800"
                  className="font-display"
                >
                  {node.shortLabel}
                </text>

                {/* Card cosmicTag pill */}
                <rect
                  x={cardX + 14}
                  y={cardY + 142}
                  width={CARD_W - 28}
                  height="28"
                  rx="9"
                  fill={palette.badgeBg}
                  stroke={palette.badgeBorder}
                  strokeWidth="1"
                />
                <text
                  x={node.x}
                  y={cardY + 160}
                  textAnchor="middle"
                  fill={palette.text}
                  fontSize="11.5"
                  fontWeight="700"
                  className="font-mono-time"
                >
                  {node.cosmicTag}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
