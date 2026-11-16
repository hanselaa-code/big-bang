import { Focus, Maximize2, Minus, Plus, Sparkles } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  SPACETIME_NODE_MAP,
  SPACETIME_NODES,
  type SpacetimeNodeData,
  type SpacetimeZoneCategory,
} from '../data/spacetimeData';

interface SpacetimeExplorerProps {
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

function getZonePalette(node: SpacetimeNodeData): ZonePalette {
  const cat: SpacetimeZoneCategory = node.zoneCategory;
  if (cat === 'space_and_time') {
    return {
      accent: '#38BDF8',
      stroke: '#BAE6FD',
      badgeBg: 'rgba(12, 74, 110, 0.92)',
      badgeBorder: 'rgba(56, 189, 248, 0.65)',
      text: '#E0F2FE',
    };
  }
  if (cat === 'gravity_well') {
    if (node.id === 'st_black_hole_horizon') {
      return {
        accent: '#C084FC',
        stroke: '#E9D5FF',
        badgeBg: 'rgba(88, 28, 135, 0.92)',
        badgeBorder: 'rgba(192, 132, 252, 0.68)',
        text: '#F3E8FF',
      };
    }
    return {
      accent: '#F59E0B',
      stroke: '#FDE68A',
      badgeBg: 'rgba(120, 53, 15, 0.92)',
      badgeBorder: 'rgba(251, 191, 36, 0.68)',
      text: '#FEF3C7',
    };
  }
  return {
    accent: '#2DD4BF',
    stroke: '#99F6E4',
    badgeBg: 'rgba(19, 78, 74, 0.92)',
    badgeBorder: 'rgba(45, 212, 191, 0.65)',
    text: '#CCFBF1',
  };
}

function buildStepCurve(a: SpacetimeNodeData, b: SpacetimeNodeData): string {
  const dx = b.x - a.x;
  const c1x = a.x + dx * 0.48;
  const c2x = b.x - dx * 0.45;
  return `M ${a.x} ${a.y} C ${c1x} ${a.y}, ${c2x} ${b.y}, ${b.x} ${b.y}`;
}

/**
 * Mathematical 3D-perspective warped spacetime grid:
 * - Zone 1 (left): flat Minkowski-like grid
 * - Zone 2 (center): smooth gravitational well + deep black-hole throat around (1585, 815)
 * - Zone 3 (right): stretching grid cells illustrating expanding space
 */
function computeWarpedSpacetimePoint(
  rawX: number,
  rowIndex: number,
  totalRows: number,
): { x: number; y: number } {
  const tRow = rowIndex / (totalRows - 1); // 0 (top) -> 1 (bottom)
  const baseY = 235 + tRow * 645;

  // Mild solar/planetary well + deep black hole gravitational funnel
  const solarWell =
    54 *
    Math.exp(-((rawX - 1160) ** 2) / (2 * 165 ** 2)) *
    (0.3 + 0.7 * tRow);
  const bhWell =
    215 *
    Math.exp(-((rawX - 1575) ** 2) / (2 * 195 ** 2)) *
    (0.28 + 0.72 * tRow);

  // Subtle upward-and-outward trumpet flare in cosmic expansion zone (rawX > 1880)
  const expandProgress = Math.max(0, (rawX - 1880) / 620);
  const cosmicFlareY = (tRow - 0.5) * 95 * expandProgress ** 1.35;

  // Horizontal pinch toward the black-hole funnel throat
  const pinchStrength =
    Math.exp(-((rawX - 1585) ** 2) / (2 * 230 ** 2)) * (0.22 * tRow);
  const pinchedX = rawX - (rawX - 1585) * pinchStrength;

  return {
    x: Math.round(pinchedX * 10) / 10,
    y: Math.round((baseY + solarWell + bhWell + cosmicFlareY) * 10) / 10,
  };
}

function generateSpacetimeMesh() {
  const colPositions: number[] = [];
  let cx = 90;
  while (cx <= 2515) {
    colPositions.push(cx);
    // Progressively wider grid cells in Zone 3 to visualize expanding space!
    const step =
      cx < 1760 ? 64 : Math.round(64 + ((cx - 1760) / 760) * 58);
    cx += step;
  }

  const totalRows = 11;
  const grid: { x: number; y: number }[][] = [];
  for (let r = 0; r < totalRows; r++) {
    const rowPts = colPositions.map((gx) =>
      computeWarpedSpacetimePoint(gx, r, totalRows),
    );
    grid.push(rowPts);
  }

  const horizontalPaths = grid.map((rowPts) =>
    rowPts.map((pt, idx) => `${idx === 0 ? 'M' : 'L'} ${pt.x} ${pt.y}`).join(' '),
  );

  const verticalPaths: { d: string; rawX: number }[] = colPositions.map(
    (rawX, cIdx) => {
      const d = grid
        .map((rowPts, rIdx) => {
          const pt = rowPts[cIdx];
          return `${rIdx === 0 ? 'M' : 'L'} ${pt.x} ${pt.y}`;
        })
        .join(' ');
      return { d, rawX };
    },
  );

  return { horizontalPaths, verticalPaths };
}

const CARD_W = 248;
const CARD_H = 186;
const CARD_OFFSET_Y = 148;

export function SpacetimeExplorer({
  unlockedStepIndex,
  showAllSteps,
  selectedNodeId,
  onSelectNode,
}: SpacetimeExplorerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [viewport, setViewport] = useState({ width: 960, height: 680 });
  const [camera, setCamera] = useState({ x: 240, y: 375, scale: 0.79 });
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
    ? SPACETIME_NODES.length - 1
    : unlockedStepIndex;

  const mesh = useMemo(() => generateSpacetimeMesh(), []);

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
    const worldW = 2520;
    const worldH = 1140;
    const scale = Math.max(
      0.24,
      Math.min(
        0.86,
        Math.min(viewport.width / worldW, viewport.height / worldH) * 0.95,
      ),
    );
    return {
      x: 1300,
      y: 555,
      scale,
    };
  }, [viewport.height, viewport.width]);

  const computeFollowCamera = useCallback(
    (targetNodeId: string) => {
      if (showAllSteps) {
        return computeOverviewCamera();
      }
      const selected = SPACETIME_NODE_MAP[targetNodeId] ?? SPACETIME_NODES[0];
      const prevNode = selected.parentId
        ? SPACETIME_NODE_MAP[selected.parentId]
        : null;

      const cardCenterY =
        selected.cardSide === 'above'
          ? selected.y - CARD_OFFSET_Y
          : selected.y + CARD_OFFSET_Y;

      let minX = selected.x - 370;
      const maxX = selected.x + 390;
      let minY = Math.min(selected.y, cardCenterY) - 195;
      let maxY = Math.max(selected.y, cardCenterY) + 195;

      // Keep top zone banner cleanly below the floating top overlay controls
      minY = Math.min(minY, -85);

      // Include previous step smoothly when diving into or climbing out of the black-hole funnel
      if (
        prevNode &&
        (selected.id === 'st_black_hole_horizon' ||
          selected.id === 'st_gravitational_waves')
      ) {
        minX = Math.min(minX, prevNode.x - 130);
        minY = Math.min(minY, prevNode.y - 120);
        maxY = Math.max(maxY, prevNode.y + 120);
      }

      const spanX = Math.max(780, maxX - minX);
      const spanY = Math.max(620, maxY - minY);
      const rawScale = Math.min(
        viewport.width / spanX,
        viewport.height / spanY,
      );
      const clampedScale = Math.max(0.42, Math.min(0.88, rawScale));

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
            <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span>Romtidsduken</span>
            <span className="hidden xl:inline text-slate-400">
              • Dra for å panorere, skroll for zoom
            </span>
          </div>

          <div className="hidden md:flex flex-wrap items-center gap-2.5 px-3 py-1 rounded-xl bg-slate-950/80 border border-slate-800/90 text-[11px] text-slate-300">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              Rom + tid &amp; c
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Gravitasjonsbrønn
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              Sort hull
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              Bølger &amp; utvidelse
            </span>
          </div>
        </div>

        {/* Top-right camera controls */}
        <div className="flex items-center gap-1.5 shrink-0 pointer-events-auto">
        <button
          id="btn-spacetime-follow"
          type="button"
          onClick={() => setCameraMode('follow')}
          title="Følg valgt steg i romtiden"
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
          id="btn-spacetime-overview"
          type="button"
          onClick={() => setCameraMode('overview')}
          title="Vis hele romtidsduken fra 4D til mørk energi"
          className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all cursor-pointer ${
            cameraMode === 'overview'
              ? 'bg-sky-500/25 border-sky-400/70 text-sky-200 shadow-md'
              : 'bg-slate-950/80 hover:bg-slate-900 border-slate-700/80 text-slate-300'
          }`}
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Hele romtidsduken</span>
        </button>

        <div className="flex items-center rounded-xl bg-slate-950/85 border border-slate-700/80 overflow-hidden">
          <button
            id="btn-spacetime-zoom-in"
            type="button"
            onClick={() => zoomBy(1.2)}
            title="Zoom inn"
            className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
          </button>
          <div className="w-px h-4 bg-slate-800" />
          <button
            id="btn-spacetime-zoom-out"
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
        id="spacetime-explorer-svg"
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
            id="st-glow-strong"
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

          <linearGradient id="st-mesh-horiz-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.22" />
            <stop offset="38%" stopColor="#F59E0B" stopOpacity="0.26" />
            <stop offset="60%" stopColor="#C084FC" stopOpacity="0.34" />
            <stop offset="78%" stopColor="#2DD4BF" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#818CF8" stopOpacity="0.26" />
          </linearGradient>

          <radialGradient id="st-bh-throat-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A855F7" stopOpacity="0.32" />
            <stop offset="55%" stopColor="#F59E0B" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#050814" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="st-wave-ripple-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#050814" stopOpacity="0" />
          </radialGradient>

          {SPACETIME_NODES.map((node) => {
            const cardY =
              node.cardSide === 'above'
                ? -CARD_OFFSET_Y - CARD_H / 2
                : CARD_OFFSET_Y - CARD_H / 2;
            return (
              <clipPath
                key={`clip-st-${node.id}`}
                id={`clip-st-${node.id}`}
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
          {/* Ambient glow under gravitational funnel & gravitational wave zone */}
          <ellipse
            cx={1575}
            cy={795}
            rx={320}
            ry={240}
            fill="url(#st-bh-throat-glow)"
          />
          <circle
            cx={1865}
            cy={560}
            r={230}
            fill="url(#st-wave-ripple-glow)"
          />

          {/* Mathematical Warped Spacetime Grid Fabric */}
          <g aria-hidden="true">
            {mesh.horizontalPaths.map((d, idx) => (
              <path
                key={`st-h-${idx}`}
                d={d}
                fill="none"
                stroke="url(#st-mesh-horiz-grad)"
                strokeWidth={idx === 0 || idx === mesh.horizontalPaths.length - 1 ? 1.8 : 1.3}
              />
            ))}

            {mesh.verticalPaths.map(({ d, rawX }, idx) => {
              const stroke =
                rawX < 880
                  ? 'rgba(56, 189, 248, 0.16)'
                  : rawX < 1760
                    ? 'rgba(251, 191, 36, 0.2)'
                    : 'rgba(45, 212, 191, 0.18)';
              return (
                <path
                  key={`st-v-${idx}`}
                  d={d}
                  fill="none"
                  stroke={stroke}
                  strokeWidth={1.25}
                />
              );
            })}

            {/* Concentric gravitational-wave rings around Step 8 */}
            {[56, 96, 140, 188].map((rx, idx) => (
              <ellipse
                key={`gw-ring-${rx}`}
                cx={1865}
                cy={560}
                rx={rx}
                ry={rx * 0.62}
                fill="none"
                stroke="#2DD4BF"
                strokeOpacity={0.28 - idx * 0.05}
                strokeWidth={1.6}
                strokeDasharray="8 8"
              />
            ))}
          </g>

          {/* Top 3 Zone Banners (high clearance above all cards) */}
          <g transform="translate(490, 72)">
            <rect
              x={-250}
              y={-22}
              width={500}
              height={44}
              rx={14}
              fill="rgba(12, 74, 110, 0.42)"
              stroke="rgba(56, 189, 248, 0.5)"
              strokeWidth={1.4}
            />
            <text
              x={0}
              y={5}
              textAnchor="middle"
              fill="#BAE6FD"
              fontSize={13}
              fontWeight={800}
              letterSpacing={0.7}
            >
              SONE 1 • ROM + TID = ROMTID &amp; LYSFARTEN c (STEG 1–3)
            </text>
          </g>

          <g transform="translate(1320, 72)">
            <rect
              x={-285}
              y={-22}
              width={570}
              height={44}
              rx={14}
              fill="rgba(120, 53, 15, 0.42)"
              stroke="rgba(251, 191, 36, 0.52)"
              strokeWidth={1.4}
            />
            <text
              x={0}
              y={5}
              textAnchor="middle"
              fill="#FDE68A"
              fontSize={13}
              fontWeight={800}
              letterSpacing={0.7}
            >
              SONE 2 • GRAVITASJONSBRØNNEN &amp; SORTE HULL (STEG 4–7)
            </text>
          </g>

          <g transform="translate(2120, 72)">
            <rect
              x={-275}
              y={-22}
              width={550}
              height={44}
              rx={14}
              fill="rgba(19, 78, 74, 0.42)"
              stroke="rgba(45, 212, 191, 0.52)"
              strokeWidth={1.4}
            />
            <text
              x={0}
              y={5}
              textAnchor="middle"
              fill="#99F6E4"
              fontSize={13}
              fontWeight={800}
              letterSpacing={0.7}
            >
              SONE 3 • BØLGER I DUKEN &amp; ROMMET SOM VOKSER (STEG 8–10)
            </text>
          </g>

          {/* Connecting trajectory curves between steps 1 -> 10 */}
          {SPACETIME_NODES.slice(1).map((node, idx) => {
            const prev = SPACETIME_NODES[idx];
            const isEdgeUnlocked = node.stepIndex <= effectiveMaxStep;
            const isActivePrefix =
              SPACETIME_NODE_MAP[selectedNodeId]?.stepIndex >= node.stepIndex;
            const palette = getZonePalette(node);
            const d = buildStepCurve(prev, node);

            if (!isEdgeUnlocked) {
              return (
                <path
                  key={`edge-locked-${node.id}`}
                  d={d}
                  fill="none"
                  stroke="rgba(100, 116, 139, 0.36)"
                  strokeWidth={2.6}
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
                    strokeWidth={10}
                    strokeLinecap="round"
                    opacity={0.28}
                  />
                )}
                <path
                  d={d}
                  fill="none"
                  stroke={isActivePrefix ? palette.stroke : palette.accent}
                  strokeWidth={isActivePrefix ? 4.2 : 3}
                  strokeLinecap="round"
                  opacity={isActivePrefix ? 0.96 : 0.72}
                />
              </g>
            );
          })}

          {/* Nodes & Visual Callout Cards */}
          {SPACETIME_NODES.map((node) => {
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
                id={`spacetime-node-${node.id}`}
                transform={`translate(${node.x}, ${node.y})`}
                onClick={(e) => {
                  e.stopPropagation();
                  if (dragRef.current?.moved) return;
                  onSelectNode(node.id);
                }}
                className="cursor-pointer"
              >
                {/* Vertical stem between node on spacetime fabric and its card */}
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

                {/* Node beacon on the curved spacetime trajectory */}
                {isSelected && (
                  <circle
                    r={33}
                    fill="none"
                    stroke={palette.accent}
                    strokeWidth={2.6}
                    opacity={0.78}
                    filter="url(#st-glow-strong)"
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
                        filter="url(#st-glow-strong)"
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

                    {/* Card illustration */}
                    <image
                      href={node.image}
                      x={-CARD_W / 2 + 8}
                      y={cardTopY + 8}
                      width={CARD_W - 16}
                      height={114}
                      preserveAspectRatio="xMidYMid slice"
                      clipPath={`url(#clip-st-${node.id})`}
                    />

                    {/* Time/physics badge over top-left of card image */}
                    <rect
                      x={-CARD_W / 2 + 14}
                      y={cardTopY + 14}
                      width={Math.min(212, Math.max(108, node.timeAfterBB.length * 7 + 20))}
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
                      fontSize={10.5}
                      fontWeight={700}
                      className="font-mono-time"
                    >
                      {node.timeAfterBB}
                    </text>

                    {/* Card title & cosmic pill */}
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
