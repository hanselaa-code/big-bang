import { Focus, Maximize2, Minus, Plus, Sparkles } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  CENTRAL_ELEMENTS_HUB_IMAGE,
  ELEMENTS_NODE_MAP,
  ELEMENTS_NODES,
  type ElementNodeData,
  type ElementRoleCategory,
} from '../data/elementsData';

interface ElementsExplorerProps {
  unlockedStepIndex: number;
  showAllSteps: boolean;
  selectedNodeId: string;
  onSelectNode: (nodeId: string) => void;
}

interface RolePalette {
  accent: string;
  stroke: string;
  badgeBg: string;
  badgeBorder: string;
  text: string;
  glow: string;
}

function getRolePalette(category: ElementRoleCategory): RolePalette {
  switch (category) {
    case 'atom_structure':
      return {
        accent: '#38BDF8',
        stroke: '#BAE6FD',
        badgeBg: 'rgba(12, 74, 110, 0.92)',
        badgeBorder: 'rgba(56, 189, 248, 0.65)',
        text: '#E0F2FE',
        glow: 'rgba(56, 189, 248, 0.35)',
      };
    case 'periodic_spectra':
      return {
        accent: '#2DD4BF',
        stroke: '#99F6E4',
        badgeBg: 'rgba(19, 78, 74, 0.92)',
        badgeBorder: 'rgba(45, 212, 191, 0.65)',
        text: '#CCFBF1',
        glow: 'rgba(45, 212, 191, 0.35)',
      };
    case 'extreme_cosmos':
      return {
        accent: '#C084FC',
        stroke: '#E9D5FF',
        badgeBg: 'rgba(88, 28, 135, 0.92)',
        badgeBorder: 'rgba(192, 132, 252, 0.68)',
        text: '#F3E8FF',
        glow: 'rgba(192, 132, 252, 0.38)',
      };
    case 'stellar_forge':
    default:
      return {
        accent: '#F59E0B',
        stroke: '#FDE68A',
        badgeBg: 'rgba(120, 53, 15, 0.92)',
        badgeBorder: 'rgba(251, 191, 36, 0.68)',
        text: '#FEF3C7',
        glow: 'rgba(245, 158, 11, 0.38)',
      };
  }
}

const CENTER_X = 840;
const CENTER_Y = 550;
const HUB_RADIUS = 336;

const CARD_W = 370;
const CARD_H = 116;

function buildLeaderPath(node: ElementNodeData): string {
  const cardInnerX =
    node.side === 'left' ? node.x + CARD_W / 2 : node.x - CARD_W / 2;
  const dx = node.anchorX - cardInnerX;
  const c1x = cardInnerX + dx * 0.45;
  const c2x = node.anchorX - dx * 0.38;
  return `M ${cardInnerX} ${node.y} C ${c1x} ${node.y}, ${c2x} ${node.anchorY}, ${node.anchorX} ${node.anchorY}`;
}

const AMBIENT_STARS: { cx: number; cy: number; r: number; op: number }[] = [
  { cx: 495, cy: 135, r: 1.8, op: 0.55 },
  { cx: 1185, cy: 145, r: 2.1, op: 0.6 },
  { cx: 465, cy: 335, r: 1.6, op: 0.45 },
  { cx: 1218, cy: 350, r: 1.9, op: 0.5 },
  { cx: 472, cy: 790, r: 2.0, op: 0.55 },
  { cx: 1205, cy: 810, r: 1.7, op: 0.5 },
  { cx: 560, cy: 965, r: 1.9, op: 0.5 },
  { cx: 1130, cy: 960, r: 2.2, op: 0.6 },
];

export function ElementsExplorer({
  unlockedStepIndex,
  showAllSteps,
  selectedNodeId,
  onSelectNode,
}: ElementsExplorerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [viewport, setViewport] = useState({ width: 960, height: 680 });
  const [camera, setCamera] = useState({ x: 560, y: 420, scale: 0.72 });
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
    ? ELEMENTS_NODES.length - 1
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

  const computeOverviewCamera = useCallback(() => {
    const worldW = 1660;
    const worldH = 1040;
    const scale = Math.max(
      0.28,
      Math.min(
        0.92,
        Math.min(viewport.width / worldW, viewport.height / worldH) * 0.95,
      ),
    );
    return {
      x: CENTER_X,
      y: 540,
      scale,
    };
  }, [viewport.height, viewport.width]);

  const computeFollowCamera = useCallback(
    (targetNodeId: string) => {
      if (showAllSteps) {
        return computeOverviewCamera();
      }
      const selected = ELEMENTS_NODE_MAP[targetNodeId] ?? ELEMENTS_NODES[0];
      const cardLeft = selected.x - CARD_W / 2 - 34;
      const cardRight = selected.x + CARD_W / 2 + 34;

      // Frame both the selected side callout card AND the entire central circular hub + header
      const minX = Math.min(cardLeft, CENTER_X - 356, selected.anchorX - 140);
      const maxX = Math.max(cardRight, CENTER_X + 356, selected.anchorX + 140);
      const minY = Math.min(
        selected.y - 180,
        selected.anchorY - 190,
        CENTER_Y - 370,
      );
      const maxY = Math.max(
        selected.y + 135,
        selected.anchorY + 190,
        CENTER_Y + 365,
      );

      const spanX = Math.max(880, maxX - minX);
      const spanY = Math.max(640, maxY - minY);
      const rawScale = Math.min(
        viewport.width / spanX,
        viewport.height / spanY,
      );
      const clampedScale = Math.max(0.42, Math.min(0.9, rawScale));

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
      scale: Math.max(0.25, Math.min(1.85, prev.scale * factor)),
    }));
  };

  const zoomBy = (factor: number) => {
    setCameraMode('manual');
    setCamera((prev) => ({
      ...prev,
      scale: Math.max(0.25, Math.min(1.85, prev.scale * factor)),
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
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Grunnstoff-modell</span>
            <span className="hidden xl:inline text-slate-400">
              • Dra for å panorere, skroll for zoom
            </span>
          </div>

          <div className="hidden md:flex flex-wrap items-center gap-2.5 px-3 py-1 rounded-xl bg-slate-950/80 border border-slate-800/90 text-[11px] text-slate-300">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              Atomkjerne
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              Skall &amp; spekter
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Big Bang &amp; stjerner
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              Supernova &amp; kilonova
            </span>
          </div>
        </div>

        {/* Top-right camera controls */}
        <div className="flex items-center gap-1.5 shrink-0 pointer-events-auto">
        <button
          id="btn-elements-follow"
          type="button"
          onClick={() => setCameraMode('follow')}
          title="Fokuser på valgt del og modellpunkt"
          className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all cursor-pointer ${
            cameraMode === 'follow'
              ? 'bg-amber-500/25 border-amber-400/70 text-amber-200 shadow-md'
              : 'bg-slate-950/80 hover:bg-slate-900 border-slate-700/80 text-slate-300'
          }`}
        >
          <Focus className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Følg del</span>
        </button>

        <button
          id="btn-elements-overview"
          type="button"
          onClick={() => setCameraMode('overview')}
          title="Vis hele modellen med alle 10 deler"
          className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all cursor-pointer ${
            cameraMode === 'overview'
              ? 'bg-sky-500/25 border-sky-400/70 text-sky-200 shadow-md'
              : 'bg-slate-950/80 hover:bg-slate-900 border-slate-700/80 text-slate-300'
          }`}
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Hele modellen</span>
        </button>

        <div className="flex items-center rounded-xl bg-slate-950/85 border border-slate-700/80 overflow-hidden">
          <button
            id="btn-elements-zoom-in"
            type="button"
            onClick={() => zoomBy(1.2)}
            title="Zoom inn"
            className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
          </button>
          <div className="w-px h-4 bg-slate-800" />
          <button
            id="btn-elements-zoom-out"
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
        id="elements-explorer-svg"
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
            id="elem-glow-strong"
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

          <radialGradient id="elem-hub-ambient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.22" />
            <stop offset="52%" stopColor="#F59E0B" stopOpacity="0.14" />
            <stop offset="78%" stopColor="#A855F7" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#050814" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="elem-hub-vignette" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#050814" stopOpacity="0" />
            <stop offset="82%" stopColor="#050814" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#050814" stopOpacity="0.52" />
          </radialGradient>

          <clipPath id="clip-central-elem-hub">
            <circle cx={CENTER_X} cy={CENTER_Y} r={HUB_RADIUS} />
          </clipPath>

          {ELEMENTS_NODES.map((node) => {
            const thumbX = -CARD_W / 2 + 11;
            const thumbY = -CARD_H / 2 + 11;
            return (
              <clipPath key={`clip-elem-${node.id}`} id={`clip-elem-${node.id}`}>
                <rect x={thumbX} y={thumbY} width={94} height={94} rx={13} />
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
          {/* Subtle ambient stars around central hub */}
          {AMBIENT_STARS.map((s, idx) => (
            <circle
              key={idx}
              cx={s.cx}
              cy={s.cy}
              r={s.r}
              fill="#E2E8F0"
              opacity={s.op}
            />
          ))}

          {/* Top centerpiece header */}
          <g transform={`translate(${CENTER_X}, 102)`}>
            <rect
              x={-285}
              y={-30}
              width={570}
              height={62}
              rx={18}
              fill="rgba(8, 15, 30, 0.86)"
              stroke="rgba(251, 191, 36, 0.42)"
              strokeWidth={1.6}
            />
            <text
              x={0}
              y={-6}
              textAnchor="middle"
              fill="#FDE68A"
              fontSize={16.5}
              fontWeight={800}
              letterSpacing={0.9}
            >
              ATOMET &amp; DE 4 KOSMISKE GRUNNSTOFF-SMIENE
            </text>
            <text
              x={0}
              y={17}
              textAnchor="middle"
              fill="#CBD5E1"
              fontSize={12}
              fontWeight={600}
            >
              Venstre: Atomet, spekter &amp; Big Bang • Høyre: Stjerner,
              supernova, kilonova &amp; oss
            </text>
          </g>

          {/* Column headers above left & right stacks */}
          <g transform="translate(225, 96)">
            <rect
              x={-168}
              y={-18}
              width={336}
              height={34}
              rx={12}
              fill="rgba(12, 74, 110, 0.32)"
              stroke="rgba(56, 189, 248, 0.4)"
              strokeWidth={1.3}
            />
            <text
              x={0}
              y={4}
              textAnchor="middle"
              fill="#BAE6FD"
              fontSize={12}
              fontWeight={800}
              letterSpacing={0.6}
            >
              DEL 1–5 • ATOMET, SYSTEMET &amp; URSTOFFET
            </text>
          </g>

          <g transform="translate(1455, 96)">
            <rect
              x={-168}
              y={-18}
              width={336}
              height={34}
              rx={12}
              fill="rgba(120, 53, 15, 0.34)"
              stroke="rgba(251, 191, 36, 0.44)"
              strokeWidth={1.3}
            />
            <text
              x={0}
              y={4}
              textAnchor="middle"
              fill="#FDE68A"
              fontSize={12}
              fontWeight={800}
              letterSpacing={0.6}
            >
              DEL 6–10 • STJERNER, KILONOVA &amp; MENNESKET
            </text>
          </g>

          {/* Central model ambient glow & reticle rings */}
          <g>
            <circle
              cx={CENTER_X}
              cy={CENTER_Y}
              r={HUB_RADIUS + 82}
              fill="url(#elem-hub-ambient)"
            />
            <circle
              cx={CENTER_X}
              cy={CENTER_Y}
              r={HUB_RADIUS + 26}
              fill="none"
              stroke="rgba(148, 163, 184, 0.22)"
              strokeWidth={1.5}
              strokeDasharray="7 9"
            />
            <circle
              cx={CENTER_X}
              cy={CENTER_Y}
              r={HUB_RADIUS + 10}
              fill="none"
              stroke="rgba(56, 189, 248, 0.32)"
              strokeWidth={2}
            />

            {/* Clipped Nano Banana central illustration */}
            <g clipPath="url(#clip-central-elem-hub)">
              <circle
                cx={CENTER_X}
                cy={CENTER_Y}
                r={HUB_RADIUS}
                fill="#070D1D"
              />
              <image
                href={CENTRAL_ELEMENTS_HUB_IMAGE}
                x={CENTER_X - HUB_RADIUS - 4}
                y={CENTER_Y - HUB_RADIUS - 4}
                width={(HUB_RADIUS + 4) * 2}
                height={(HUB_RADIUS + 4) * 2}
                preserveAspectRatio="xMidYMid slice"
              />
              <circle
                cx={CENTER_X}
                cy={CENTER_Y}
                r={HUB_RADIUS}
                fill="url(#elem-hub-vignette)"
              />
            </g>

            {/* Outer crisp golden-blue rim */}
            <circle
              cx={CENTER_X}
              cy={CENTER_Y}
              r={HUB_RADIUS}
              fill="none"
              stroke="rgba(251, 191, 36, 0.62)"
              strokeWidth={3.5}
            />
          </g>

          {/* Bottom helper caption under central model */}
          <g transform={`translate(${CENTER_X}, 946)`}>
            <rect
              x={-235}
              y={-17}
              width={470}
              height={34}
              rx={17}
              fill="rgba(8, 15, 30, 0.84)"
              stroke="rgba(71, 85, 105, 0.6)"
              strokeWidth={1.2}
            />
            <text
              x={0}
              y={4}
              textAnchor="middle"
              fill="#94A3B8"
              fontSize={12}
              fontWeight={600}
            >
              Klikk på et tallpunkt (1–10) i modellen eller et kort på sidene
            </text>
          </g>

          {/* 1. Leader curves connecting cards to hotspots */}
          {ELEMENTS_NODES.map((node) => {
            const isUnlocked = node.stepIndex <= effectiveMaxStep;
            const isSelected = node.id === selectedNodeId;
            const palette = getRolePalette(node.roleCategory);
            const d = buildLeaderPath(node);

            if (!isUnlocked) {
              return (
                <path
                  key={`leader-locked-${node.id}`}
                  d={d}
                  fill="none"
                  stroke="rgba(100, 116, 139, 0.34)"
                  strokeWidth={2}
                  strokeDasharray="6 8"
                />
              );
            }

            return (
              <g key={`leader-${node.id}`}>
                {isSelected && (
                  <path
                    d={d}
                    fill="none"
                    stroke={palette.accent}
                    strokeWidth={8}
                    strokeLinecap="round"
                    opacity={0.34}
                  />
                )}
                <path
                  d={d}
                  fill="none"
                  stroke={isSelected ? palette.stroke : palette.accent}
                  strokeWidth={isSelected ? 3.4 : 2.2}
                  strokeLinecap="round"
                  opacity={isSelected ? 1 : 0.72}
                />
              </g>
            );
          })}

          {/* 2. Numbered hotspot beacons inside central model */}
          {ELEMENTS_NODES.map((node) => {
            const isUnlocked = node.stepIndex <= effectiveMaxStep;
            const isSelected = node.id === selectedNodeId;
            const palette = getRolePalette(node.roleCategory);

            return (
              <g
                key={`beacon-${node.id}`}
                id={`elem-beacon-${node.id}`}
                transform={`translate(${node.anchorX}, ${node.anchorY})`}
                onClick={(e) => {
                  e.stopPropagation();
                  if (dragRef.current?.moved) return;
                  onSelectNode(node.id);
                }}
                className="cursor-pointer"
              >
                {/* Generous invisible hit area for touch / projector board */}
                <circle r={24} fill="transparent" />

                {isSelected && (
                  <circle
                    r={25}
                    fill="none"
                    stroke={palette.accent}
                    strokeWidth={2.5}
                    opacity={0.75}
                    filter="url(#elem-glow-strong)"
                  />
                )}

                <circle
                  r={isSelected ? 17.5 : isUnlocked ? 15 : 13.5}
                  fill={
                    isSelected
                      ? palette.accent
                      : isUnlocked
                        ? 'rgba(7, 12, 26, 0.92)'
                        : 'rgba(15, 23, 42, 0.82)'
                  }
                  stroke={
                    isSelected
                      ? '#FFFFFF'
                      : isUnlocked
                        ? palette.accent
                        : 'rgba(148, 163, 184, 0.45)'
                  }
                  strokeWidth={isSelected ? 3 : 2.4}
                  strokeDasharray={isUnlocked ? undefined : '3 3'}
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
                  fontSize={isSelected ? 13.5 : 12}
                  fontWeight={800}
                  className="font-mono-time"
                >
                  {node.stepNumber}
                </text>
              </g>
            );
          })}

          {/* 3. Left & Right Callout Cards (Del 1–10) */}
          {ELEMENTS_NODES.map((node) => {
            const isUnlocked = node.stepIndex <= effectiveMaxStep;
            const isSelected = node.id === selectedNodeId;
            const palette = getRolePalette(node.roleCategory);
            const innerDotX =
              node.side === 'left' ? CARD_W / 2 : -CARD_W / 2;

            if (!isUnlocked) {
              return (
                <g
                  key={`card-locked-${node.id}`}
                  id={`elem-card-${node.id}`}
                  transform={`translate(${node.x}, ${node.y})`}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (dragRef.current?.moved) return;
                    onSelectNode(node.id);
                  }}
                  className="cursor-pointer opacity-68 hover:opacity-95 transition-opacity"
                >
                  <rect
                    x={-CARD_W / 2}
                    y={-CARD_H / 2}
                    width={CARD_W}
                    height={CARD_H}
                    rx={18}
                    fill="rgba(8, 15, 30, 0.78)"
                    stroke="rgba(100, 116, 139, 0.42)"
                    strokeWidth={1.6}
                    strokeDasharray="6 5"
                  />
                  <circle
                    cx={-CARD_W / 2 + 42}
                    cy={0}
                    r={22}
                    fill="rgba(15, 23, 42, 0.95)"
                    stroke="rgba(148, 163, 184, 0.45)"
                    strokeWidth={1.8}
                  />
                  <text
                    x={-CARD_W / 2 + 42}
                    y={0.5}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#94A3B8"
                    fontSize={14}
                    fontWeight={800}
                    className="font-mono-time"
                  >
                    {node.stepNumber}
                  </text>

                  <text
                    x={-CARD_W / 2 + 80}
                    y={-8}
                    textAnchor="start"
                    fill="#CBD5E1"
                    fontSize={14.5}
                    fontWeight={700}
                  >
                    {node.shortLabel}
                  </text>
                  <text
                    x={-CARD_W / 2 + 80}
                    y={14}
                    textAnchor="start"
                    fill="#64748B"
                    fontSize={11.5}
                    fontWeight={600}
                  >
                    Klikk for å åpne del {node.stepNumber} →
                  </text>

                  <circle
                    cx={innerDotX}
                    cy={0}
                    r={5}
                    fill="#475569"
                  />
                </g>
              );
            }

            const thumbX = -CARD_W / 2 + 11;
            const thumbY = -CARD_H / 2 + 11;
            const textX = -CARD_W / 2 + 118;

            return (
              <g
                key={`card-${node.id}`}
                id={`elem-card-${node.id}`}
                transform={`translate(${node.x}, ${node.y})`}
                onClick={(e) => {
                  e.stopPropagation();
                  if (dragRef.current?.moved) return;
                  onSelectNode(node.id);
                }}
                className="cursor-pointer"
              >
                {isSelected && (
                  <rect
                    x={-CARD_W / 2 - 5}
                    y={-CARD_H / 2 - 5}
                    width={CARD_W + 10}
                    height={CARD_H + 10}
                    rx={22}
                    fill="none"
                    stroke={palette.accent}
                    strokeWidth={2.5}
                    opacity={0.72}
                    filter="url(#elem-glow-strong)"
                  />
                )}

                {/* Card body */}
                <rect
                  x={-CARD_W / 2}
                  y={-CARD_H / 2}
                  width={CARD_W}
                  height={CARD_H}
                  rx={18}
                  fill={
                    isSelected
                      ? 'rgba(13, 24, 46, 0.97)'
                      : 'rgba(8, 15, 30, 0.93)'
                  }
                  stroke={
                    isSelected ? palette.accent : 'rgba(71, 85, 105, 0.72)'
                  }
                  strokeWidth={isSelected ? 2.8 : 1.5}
                />

                {/* Thumbnail image */}
                <image
                  href={node.image}
                  x={thumbX}
                  y={thumbY}
                  width={94}
                  height={94}
                  preserveAspectRatio="xMidYMid slice"
                  clipPath={`url(#clip-elem-${node.id})`}
                />
                <rect
                  x={thumbX}
                  y={thumbY}
                  width={94}
                  height={94}
                  rx={13}
                  fill="none"
                  stroke={
                    isSelected
                      ? palette.stroke
                      : 'rgba(148, 163, 184, 0.35)'
                  }
                  strokeWidth={1.4}
                />

                {/* Number pill over top-left of thumbnail */}
                <rect
                  x={thumbX + 5}
                  y={thumbY + 5}
                  width={48}
                  height={21}
                  rx={7}
                  fill="rgba(5, 8, 20, 0.88)"
                  stroke={palette.badgeBorder}
                  strokeWidth={1}
                />
                <text
                  x={thumbX + 29}
                  y={thumbY + 19}
                  textAnchor="middle"
                  fill={palette.stroke}
                  fontSize={10.5}
                  fontWeight={800}
                  className="font-mono-time"
                >
                  Del {node.stepNumber}
                </text>

                {/* Role / Era eyebrow */}
                <text
                  x={textX}
                  y={-26}
                  textAnchor="start"
                  fill={palette.stroke}
                  fontSize={10.5}
                  fontWeight={700}
                  opacity={0.92}
                >
                  {node.eraLabel}
                </text>

                {/* Main title */}
                <text
                  x={textX}
                  y={-3}
                  textAnchor="start"
                  fill="#F8FAFC"
                  fontSize={15}
                  fontWeight={800}
                >
                  {node.shortLabel}
                </text>

                {/* Bottom cosmic tag pill */}
                <rect
                  x={textX}
                  y={12}
                  width={236}
                  height={25}
                  rx={8}
                  fill={palette.badgeBg}
                  stroke={palette.badgeBorder}
                  strokeWidth={1}
                />
                <text
                  x={textX + 118}
                  y={28.5}
                  textAnchor="middle"
                  fill={palette.text}
                  fontSize={10.5}
                  fontWeight={700}
                  className="font-mono-time"
                >
                  {node.cosmicTag}
                </text>

                {/* Connection anchor dot on inner edge of card */}
                <circle
                  cx={innerDotX}
                  cy={0}
                  r={isSelected ? 6.5 : 5}
                  fill={isSelected ? palette.stroke : palette.accent}
                  stroke="#050814"
                  strokeWidth={2}
                />
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
