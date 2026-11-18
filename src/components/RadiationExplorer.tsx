import { Focus, Maximize2, Minus, Plus, Waves } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  RADIATION_NODE_MAP,
  RADIATION_NODES,
  type RadiationNodeData,
  type RadiationZoneCategory,
} from '../data/radiationData';

interface RadiationExplorerProps {
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

function getZonePalette(node: RadiationNodeData): ZonePalette {
  const cat: RadiationZoneCategory = node.zoneCategory;
  if (cat === 'em_spectrum') {
    if (node.id === 'rad_uv_xray_gamma') {
      return {
        accent: '#C084FC',
        stroke: '#F3E8FF',
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
  if (cat === 'cosmic_decoding') {
    return {
      accent: '#38BDF8',
      stroke: '#BAE6FD',
      badgeBg: 'rgba(12, 74, 110, 0.92)',
      badgeBorder: 'rgba(56, 189, 248, 0.68)',
      text: '#E0F2FE',
    };
  }
  if (cat === 'earth_tech_health') {
    return {
      accent: '#34D399',
      stroke: '#A7F3D0',
      badgeBg: 'rgba(6, 78, 59, 0.92)',
      badgeBorder: 'rgba(52, 211, 153, 0.68)',
      text: '#D1FAE5',
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

function buildStepCurve(a: RadiationNodeData, b: RadiationNodeData): string {
  const dx = b.x - a.x;
  const c1x = a.x + dx * 0.48;
  const c2x = b.x - dx * 0.45;
  return `M ${a.x} ${a.y} C ${c1x} ${a.y}, ${c2x} ${b.y}, ${b.x} ${b.y}`;
}

/**
 * Generates a continuous sinusoidal electromagnetic wave from xStart to xEnd
 * whose wavelength continuously compresses (chirps) from long radio waves on the left
 * to tight high-frequency gamma oscillations on the right.
 */
function generateChirpedEmWavePath(
  xStart: number,
  xEnd: number,
  yCenter: number,
  amplitude: number,
): string {
  const pts: string[] = [];
  const totalW = xEnd - xStart;
  let phase = 0;
  const dx = 1.5;

  for (let x = xStart; x <= xEnd; x += dx) {
    const t = (x - xStart) / totalW; // 0 (radio) -> 1 (gamma)
    // Wavelength shrinks smoothly from ~105px (radio) down to ~13px (gamma)
    const localWavelength = 105 * Math.pow(0.125, t ** 1.25);
    phase += (2 * Math.PI * dx) / localWavelength;
    const env =
      Math.min(1, (x - xStart) / 24) * Math.min(1, (xEnd - x) / 20);
    const y = yCenter - Math.sin(phase) * amplitude * env;
    pts.push(
      `${pts.length === 0 ? 'M' : 'L'} ${Math.round(x * 10) / 10} ${Math.round(y * 10) / 10}`,
    );
  }
  return pts.join(' ');
}

/**
 * Generates the CMB stretching wave in Zone 3A: tight 3000K primal wave on the left
 * stretching smoothly into long 2.725K microwaves on the right.
 */
function generateCmbStretchWavePath(
  xStart: number,
  xEnd: number,
  yCenter: number,
  amplitude: number,
): string {
  const pts: string[] = [];
  const totalW = xEnd - xStart;
  let phase = 0;
  const dx = 1.5;

  for (let x = xStart; x <= xEnd; x += dx) {
    const t = (x - xStart) / totalW; // 0 (3000K) -> 1 (2.725K)
    const localWavelength = 13 + t * 44;
    phase += (2 * Math.PI * dx) / localWavelength;
    const y = yCenter - Math.sin(phase) * amplitude;
    pts.push(
      `${pts.length === 0 ? 'M' : 'L'} ${Math.round(x * 10) / 10} ${Math.round(y * 10) / 10}`,
    );
  }
  return pts.join(' ');
}

const CARD_W = 248;
const CARD_H = 186;
const CARD_OFFSET_Y = 160;

const FRAUNHOFER_LINE_OFFSETS = [18, 34, 59, 86, 94, 126, 151, 172];

export function RadiationExplorer({
  unlockedStepIndex,
  showAllSteps,
  selectedNodeId,
  onSelectNode,
}: RadiationExplorerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [viewport, setViewport] = useState({ width: 960, height: 680 });
  const [camera, setCamera] = useState({ x: 505, y: 450, scale: 0.69 });
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
    ? RADIATION_NODES.length - 1
    : unlockedStepIndex;

  const emWavePath = useMemo(
    () => generateChirpedEmWavePath(142, 1072, 545, 21),
    [],
  );
  const cmbWavePath = useMemo(
    () => generateCmbStretchWavePath(1892, 2058, 545, 16),
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
    const worldW = 3540;
    const worldH = 1080;
    const scale = Math.max(
      0.19,
      Math.min(
        0.86,
        Math.min(viewport.width / worldW, viewport.height / worldH) * 0.95,
      ),
    );
    return {
      x: 1825,
      y: 505,
      scale,
    };
  }, [viewport.height, viewport.width]);

  const computeFollowCamera = useCallback(
    (targetNodeId: string) => {
      if (showAllSteps) {
        return computeOverviewCamera();
      }
      const selected = RADIATION_NODE_MAP[targetNodeId] ?? RADIATION_NODES[0];

      const minX = selected.x - 360;
      const maxX = selected.x + 420;
      // Keep top zone banner cleanly below top overlay controls while showing central physics strip + active card
      const minY = -45;
      const maxY = selected.cardSide === 'below' ? 945 : 705;

      const spanX = Math.max(780, maxX - minX);
      const spanY = Math.max(660, maxY - minY);
      const rawScale = Math.min(
        viewport.width / spanX,
        viewport.height / spanY,
      );
      const clampedScale = Math.max(0.42, Math.min(0.86, rawScale));
      const rawCenterX = (minX + maxX) / 2;
      const clampedCenterX = Math.max(505, Math.min(3175, rawCenterX));

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
            <Waves className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Bølgespekteret &amp; Lysets kode</span>
            <span className="hidden xl:inline text-slate-400">
              • Dra for å panorere, skroll for zoom
            </span>
          </div>

          <div className="hidden md:flex flex-wrap items-center gap-2.5 px-3 py-1 rounded-xl bg-slate-950/80 border border-slate-800/90 text-[11px] text-slate-300">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Ikke-ioniserende
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              Ioniserende
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              Spektroskopi &amp; z
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              CMB &amp; atmosfære
            </span>
          </div>
        </div>

        {/* Top-right camera controls */}
        <div className="flex items-center gap-1.5 shrink-0 pointer-events-auto">
          <button
            id="btn-radiation-follow"
            type="button"
            onClick={() => setCameraMode('follow')}
            title="Følg valgt steg i strålingsmodellen"
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
            id="btn-radiation-overview"
            type="button"
            onClick={() => setCameraMode('overview')}
            title="Vis hele strålingsmodellen fra radiobølger til drivhuseffekt"
            className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all cursor-pointer ${
              cameraMode === 'overview'
                ? 'bg-sky-500/25 border-sky-400/70 text-sky-200 shadow-md'
                : 'bg-slate-950/80 hover:bg-slate-900 border-slate-700/80 text-slate-300'
            }`}
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Hele spekteret</span>
          </button>

          <div className="flex items-center rounded-xl bg-slate-950/85 border border-slate-700/80 overflow-hidden">
            <button
              id="btn-radiation-zoom-in"
              type="button"
              onClick={() => zoomBy(1.2)}
              title="Zoom inn"
              className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" />
            </button>
            <div className="w-px h-4 bg-slate-800" />
            <button
              id="btn-radiation-zoom-out"
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
        id="radiation-explorer-svg"
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
            id="rad-glow-strong"
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

          {/* Full EM Spectrum background gradient (Radio -> Mikro -> IR -> Rainbow -> UV -> X-ray -> Gamma) */}
          <linearGradient
            id="rad-em-spectrum-bg"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#DC2626" stopOpacity="0.34" />
            <stop offset="28%" stopColor="#F59E0B" stopOpacity="0.32" />
            <stop offset="48%" stopColor="#FB7185" stopOpacity="0.34" />
            <stop offset="56%" stopColor="#EF4444" stopOpacity="0.52" />
            <stop offset="60%" stopColor="#FACC15" stopOpacity="0.52" />
            <stop offset="63%" stopColor="#22C55E" stopOpacity="0.52" />
            <stop offset="66%" stopColor="#38BDF8" stopOpacity="0.52" />
            <stop offset="69%" stopColor="#8B5CF6" stopOpacity="0.54" />
            <stop offset="77%" stopColor="#A855F7" stopOpacity="0.4" />
            <stop offset="89%" stopColor="#38BDF8" stopOpacity="0.38" />
            <stop offset="100%" stopColor="#E879F9" stopOpacity="0.44" />
          </linearGradient>

          {/* Bright stroke gradient for the chirped oscillating EM wave */}
          <linearGradient
            id="rad-em-wave-stroke"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#F87171" />
            <stop offset="28%" stopColor="#FBBF24" />
            <stop offset="50%" stopColor="#FDA4AF" />
            <stop offset="58%" stopColor="#FDE047" />
            <stop offset="63%" stopColor="#4ADE80" />
            <stop offset="68%" stopColor="#38BDF8" />
            <stop offset="78%" stopColor="#C084FC" />
            <stop offset="90%" stopColor="#7DD3FC" />
            <stop offset="100%" stopColor="#F0ABFC" />
          </linearGradient>

          {/* Visible rainbow gradient (Blå/Fiolett 400 nm -> Rød 700 nm) for spectroscopy bench */}
          <linearGradient
            id="rad-visible-rainbow"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="20%" stopColor="#2563EB" />
            <stop offset="40%" stopColor="#06B6D4" />
            <stop offset="58%" stopColor="#22C55E" />
            <stop offset="76%" stopColor="#EAB308" />
            <stop offset="90%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>

          {/* CMB stretch stroke gradient (3000K warm orange -> 2.725K cool cyan) */}
          <linearGradient
            id="rad-cmb-wave-grad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#FB923C" />
            <stop offset="45%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#2DD4BF" />
          </linearGradient>

          {RADIATION_NODES.map((node) => {
            const cardY =
              node.cardSide === 'above'
                ? -CARD_OFFSET_Y - CARD_H / 2
                : CARD_OFFSET_Y - CARD_H / 2;
            return (
              <clipPath
                key={`clip-rad-${node.id}`}
                id={`clip-rad-${node.id}`}
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
          {/* Subtle background horizontal guide rails */}
          <g aria-hidden="true" opacity={0.32}>
            <line
              x1={110}
              y1={444}
              x2={3525}
              y2={444}
              stroke="#475569"
              strokeWidth={1.2}
              strokeDasharray="6 8"
            />
            <line
              x1={110}
              y1={648}
              x2={3525}
              y2={648}
              stroke="#475569"
              strokeWidth={1.2}
              strokeDasharray="6 8"
            />
          </g>

          {/* ========================================================== */}
          {/* TOP 3 ZONE BANNERS (y = 58..104, high clearance above cards) */}
          {/* ========================================================== */}
          <g transform="translate(607, 80)">
            <rect
              x={-315}
              y={-22}
              width={630}
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
              SONE 1 • DET ELEKTROMAGNETISKE SPEKTERET &amp; c = λ · f (STEG 1–4)
            </text>
          </g>

          <g transform="translate(1470, 80)">
            <rect
              x={-295}
              y={-22}
              width={590}
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
              SONE 2 • SLIK DEKODES STJERNELYSET (STEG 5–7)
            </text>
          </g>

          <g transform="translate(2205, 80)">
            <rect
              x={-305}
              y={-22}
              width={610}
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
              SONE 3 • BAKGRUNNSSTRÅLING (CMB) &amp; JORDAS ATMOSFÆRE (STEG 8–10)
            </text>
          </g>

          <g transform="translate(3048, 80)">
            <rect
              x={-355}
              y={-22}
              width={710}
              height={44}
              rx={14}
              fill="rgba(6, 78, 59, 0.44)"
              stroke="rgba(52, 211, 153, 0.55)"
              strokeWidth={1.4}
            />
            <text
              x={0}
              y={5}
              textAnchor="middle"
              fill="#A7F3D0"
              fontSize={13}
              fontWeight={800}
              letterSpacing={0.65}
            >
              SONE 4 • BØLGER, TRÅDLØS TEKNOLOGI, RADIOAKTIVITET &amp; HELSE (STEG 11–14)
            </text>
          </g>

          {/* ================================================================ */}
          {/* CENTRAL PHYSICS INSTRUMENT STRIP (y = 486..606 across all zones) */}
          {/* ================================================================ */}
          <g aria-hidden="true">
            {/* PANEL 1: Continuous Chirped EM Spectrum (x = 120..1095) */}
            <rect
              x={120}
              y={486}
              width={975}
              height={120}
              rx={18}
              fill="rgba(7, 13, 28, 0.9)"
              stroke="rgba(251, 191, 36, 0.42)"
              strokeWidth={1.5}
            />
            <text
              x={140}
              y={506}
              fill="#FDE68A"
              fontSize={10.5}
              fontWeight={800}
              letterSpacing={0.5}
            >
              ← LANG BØLGELENGDE (λ) • IKKE-IONISERENDE (LAV FOTONENERGI)
            </text>
            <text
              x={1076}
              y={506}
              textAnchor="end"
              fill="#E9D5FF"
              fontSize={10.5}
              fontWeight={800}
              letterSpacing={0.5}
            >
              IONISERENDE (KAN SKADE DNA) • HØY ENERGI →
            </text>

            {/* Color spectrum track + chirped oscillating wave */}
            <rect
              x={134}
              y={515}
              width={947}
              height={60}
              rx={11}
              fill="url(#rad-em-spectrum-bg)"
              stroke="rgba(148, 163, 184, 0.28)"
              strokeWidth={1}
            />
            {/* Highlight box around narrow visible light sliver */}
            <rect
              x={670}
              y={513}
              width={122}
              height={64}
              rx={7}
              fill="none"
              stroke="#FEF08A"
              strokeOpacity={0.65}
              strokeWidth={1.4}
            />
            {/* Ionizing radiation boundary line */}
            <line
              x1={836}
              y1={492}
              x2={836}
              y2={600}
              stroke="#E879F9"
              strokeWidth={1.8}
              strokeDasharray="4 4"
            />
            {/* Chirped EM sinusoidal wave */}
            <path
              d={emWavePath}
              fill="none"
              stroke="url(#rad-em-wave-stroke)"
              strokeWidth={2.7}
              strokeLinecap="round"
            />

            {/* Bottom scale labels inside Panel 1 */}
            <text
              x={215}
              y={594}
              textAnchor="middle"
              fill="#FCD34D"
              fontSize={10}
              fontWeight={700}
              className="font-mono-time"
            >
              c = λ · f
            </text>
            <text
              x={375}
              y={594}
              textAnchor="middle"
              fill="#FCA5A5"
              fontSize={10}
              fontWeight={700}
              className="font-mono-time"
            >
              Radio (m–km)
            </text>
            <text
              x={520}
              y={594}
              textAnchor="middle"
              fill="#FCD34D"
              fontSize={10}
              fontWeight={700}
              className="font-mono-time"
            >
              Mikro (mm–cm)
            </text>
            <text
              x={628}
              y={594}
              textAnchor="middle"
              fill="#FDA4AF"
              fontSize={10}
              fontWeight={700}
              className="font-mono-time"
            >
              IR (µm)
            </text>
            <text
              x={731}
              y={594}
              textAnchor="middle"
              fill="#FEF9C3"
              fontSize={10}
              fontWeight={800}
              className="font-mono-time"
            >
              700–400 nm
            </text>
            <text
              x={875}
              y={594}
              textAnchor="middle"
              fill="#D8B4FE"
              fontSize={10}
              fontWeight={700}
              className="font-mono-time"
            >
              UV
            </text>
            <text
              x={955}
              y={594}
              textAnchor="middle"
              fill="#7DD3FC"
              fontSize={10}
              fontWeight={700}
              className="font-mono-time"
            >
              Røntgen
            </text>
            <text
              x={1040}
              y={594}
              textAnchor="middle"
              fill="#F5D0FE"
              fontSize={10}
              fontWeight={700}
              className="font-mono-time"
            >
              Gamma
            </text>

            {/* PANEL 2: Spectroscopy & Redshift Bench (x = 1125..1835) */}
            <rect
              x={1125}
              y={486}
              width={710}
              height={120}
              rx={18}
              fill="rgba(7, 15, 32, 0.9)"
              stroke="rgba(56, 189, 248, 0.45)"
              strokeWidth={1.5}
            />

            {/* 2A: Star color temperature thermometer */}
            <text
              x={1232}
              y={506}
              textAnchor="middle"
              fill="#BAE6FD"
              fontSize={10.5}
              fontWeight={800}
            >
              FARGE = TEMPERATUR
            </text>
            <circle
              cx={1172}
              cy={545}
              r={14}
              fill="#EF4444"
              stroke="#FDBA74"
              strokeWidth={2}
            />
            <circle
              cx={1232}
              cy={545}
              r={15.5}
              fill="#FDE047"
              stroke="#FEF9C3"
              strokeWidth={2}
            />
            <circle
              cx={1294}
              cy={545}
              r={17}
              fill="#60A5FA"
              stroke="#E0F2FE"
              strokeWidth={2.2}
            />
            <text
              x={1172}
              y={592}
              textAnchor="middle"
              fill="#FCA5A5"
              fontSize={9.5}
              fontWeight={700}
              className="font-mono-time"
            >
              3 200 K
            </text>
            <text
              x={1232}
              y={592}
              textAnchor="middle"
              fill="#FEF08A"
              fontSize={9.5}
              fontWeight={700}
              className="font-mono-time"
            >
              5 800 K
            </text>
            <text
              x={1294}
              y={592}
              textAnchor="middle"
              fill="#BAE6FD"
              fontSize={9.5}
              fontWeight={700}
              className="font-mono-time"
            >
              25 000 K
            </text>

            <line
              x1={1340}
              y1={498}
              x2={1340}
              y2={594}
              stroke="rgba(100, 116, 139, 0.35)"
              strokeWidth={1}
            />

            {/* 2B: Fraunhofer absorption barcode */}
            <text
              x={1458}
              y={506}
              textAnchor="middle"
              fill="#BAE6FD"
              fontSize={10.5}
              fontWeight={800}
            >
              ATOMETS STREKKODE
            </text>
            <rect
              x={1362}
              y={519}
              width={192}
              height={50}
              rx={7}
              fill="url(#rad-visible-rainbow)"
              stroke="rgba(226, 232, 240, 0.4)"
              strokeWidth={1}
            />
            {FRAUNHOFER_LINE_OFFSETS.map((off, idx) => (
              <line
                key={`fraunhofer-${off}`}
                x1={1362 + off}
                y1={520}
                x2={1362 + off}
                y2={568}
                stroke="#020617"
                strokeWidth={idx % 2 === 0 ? 3 : 2}
              />
            ))}
            <text
              x={1458}
              y={592}
              textAnchor="middle"
              fill="#CBD5E1"
              fontSize={9.5}
              fontWeight={700}
              className="font-mono-time"
            >
              Mørke linjer = Grunnstoffer
            </text>

            <line
              x1={1574}
              y1={498}
              x2={1574}
              y2={594}
              stroke="rgba(100, 116, 139, 0.35)"
              strokeWidth={1}
            />

            {/* 2C: Redshift line shift comparison */}
            <text
              x={1704}
              y={506}
              textAnchor="middle"
              fill="#BAE6FD"
              fontSize={10.5}
              fontWeight={800}
            >
              RØDFORSKYVNING (Δλ → RØD)
            </text>
            {/* Lab reference bar */}
            <rect
              x={1592}
              y={516}
              width={176}
              height={21}
              rx={4}
              fill="url(#rad-visible-rainbow)"
            />
            {[34, 78, 122].map((off) => (
              <line
                key={`lab-line-${off}`}
                x1={1592 + off}
                y1={516}
                x2={1592 + off}
                y2={537}
                stroke="#020617"
                strokeWidth={2.6}
              />
            ))}
            <text
              x={1778}
              y={530}
              fill="#94A3B8"
              fontSize={9.5}
              fontWeight={700}
              className="font-mono-time"
            >
              I ro
            </text>

            {/* Redshifted galaxy bar (lines shifted right toward red!) */}
            <rect
              x={1592}
              y={548}
              width={176}
              height={21}
              rx={4}
              fill="url(#rad-visible-rainbow)"
            />
            {[56, 100, 144].map((off) => (
              <line
                key={`z-line-${off}`}
                x1={1592 + off}
                y1={548}
                x2={1592 + off}
                y2={569}
                stroke="#020617"
                strokeWidth={2.6}
              />
            ))}
            <text
              x={1778}
              y={562}
              fill="#FCA5A5"
              fontSize={9.5}
              fontWeight={800}
              className="font-mono-time"
            >
              z &gt; 0
            </text>
            <text
              x={1680}
              y={592}
              textAnchor="middle"
              fill="#FCA5A5"
              fontSize={9.5}
              fontWeight={700}
              className="font-mono-time"
            >
              Blå (400 nm) → Rød (700 nm)
            </text>

            {/* PANEL 3: CMB & Earth's Atmosphere / Radiation Balance (x = 1865..2545) */}
            <rect
              x={1865}
              y={486}
              width={680}
              height={120}
              rx={18}
              fill="rgba(6, 20, 24, 0.9)"
              stroke="rgba(45, 212, 191, 0.45)"
              strokeWidth={1.5}
            />

            {/* 3A: CMB stretched x1100 */}
            <text
              x={1975}
              y={506}
              textAnchor="middle"
              fill="#99F6E4"
              fontSize={10.5}
              fontWeight={800}
            >
              CMB STRUKKET × 1 100
            </text>
            <path
              d={cmbWavePath}
              fill="none"
              stroke="url(#rad-cmb-wave-grad)"
              strokeWidth={2.6}
              strokeLinecap="round"
            />
            <text
              x={1975}
              y={592}
              textAnchor="middle"
              fill="#99F6E4"
              fontSize={9.5}
              fontWeight={700}
              className="font-mono-time"
            >
              3 000 K → 2,725 K (Mikro)
            </text>

            <line
              x1={2082}
              y1={498}
              x2={2082}
              y2={594}
              stroke="rgba(100, 116, 139, 0.35)"
              strokeWidth={1}
            />

            {/* 3B: Atmospheric shield & windows */}
            <text
              x={2195}
              y={506}
              textAnchor="middle"
              fill="#99F6E4"
              fontSize={10.5}
              fontWeight={800}
            >
              ATMOSFÆRESKJOLD (O₃)
            </text>
            {/* Ozone / upper atmosphere arc */}
            <path
              d="M 2100 546 Q 2195 524 2290 546"
              fill="none"
              stroke="#38BDF8"
              strokeWidth={4}
              strokeOpacity={0.55}
            />
            {/* Earth surface line */}
            <path
              d="M 2105 573 Q 2195 562 2285 573"
              fill="none"
              stroke="#34D399"
              strokeWidth={3}
            />
            {/* Blocked UV/X-ray ray */}
            <line
              x1={2132}
              y1={514}
              x2={2148}
              y2={537}
              stroke="#C084FC"
              strokeWidth={2.4}
            />
            <circle cx={2148} cy={537} r={3.5} fill="#E879F9" />
            {/* Transmitted visible & radio rays */}
            <line
              x1={2202}
              y1={514}
              x2={2212}
              y2={567}
              stroke="#FDE047"
              strokeWidth={2.5}
            />
            <line
              x1={2244}
              y1={514}
              x2={2252}
              y2={568}
              stroke="#FB923C"
              strokeWidth={2.2}
              strokeDasharray="4 3"
            />
            <text
              x={2195}
              y={592}
              textAnchor="middle"
              fill="#CBD5E1"
              fontSize={9.5}
              fontWeight={700}
              className="font-mono-time"
            >
              UV/X stoppes • Lys/Radio inn
            </text>

            <line
              x1={2308}
              y1={498}
              x2={2308}
              y2={594}
              stroke="rgba(100, 116, 139, 0.35)"
              strokeWidth={1}
            />

            {/* 3C: Greenhouse radiation balance */}
            <text
              x={2426}
              y={506}
              textAnchor="middle"
              fill="#99F6E4"
              fontSize={10.5}
              fontWeight={800}
            >
              DRIVHUSBALANSE
            </text>
            {/* Greenhouse layer + ground */}
            <path
              d="M 2328 538 Q 2426 525 2524 538"
              fill="none"
              stroke="#94A3B8"
              strokeWidth={3}
              strokeDasharray="6 4"
            />
            <path
              d="M 2332 573 Q 2426 562 2520 573"
              fill="none"
              stroke="#38BDF8"
              strokeWidth={3}
            />
            {/* Incoming shortwave sunlight */}
            <line
              x1={2364}
              y1={514}
              x2={2382}
              y2={567}
              stroke="#FACC15"
              strokeWidth={2.8}
            />
            {/* Outgoing & back-radiated longwave IR */}
            <path
              d="M 2430 566 Q 2448 532 2468 566"
              fill="none"
              stroke="#FB7185"
              strokeWidth={2.6}
            />
            <line
              x1={2486}
              y1={567}
              x2={2502}
              y2={515}
              stroke="#F97316"
              strokeWidth={2}
              strokeDasharray="3 3"
            />
            <text
              x={2426}
              y={592}
              textAnchor="middle"
              fill="#FDA4AF"
              fontSize={9.5}
              fontWeight={700}
              className="font-mono-time"
            >
              Sollys inn • CO₂/H₂O fanger IR
            </text>
          </g>

          {/* ========================================================== */}
          {/* CONNECTING TRAJECTORY CURVES BETWEEN STEPS 1 -> 10         */}
          {/* ========================================================== */}
          {RADIATION_NODES.slice(1).map((node, idx) => {
            const prev = RADIATION_NODES[idx];
            const isEdgeUnlocked = node.stepIndex <= effectiveMaxStep;
            const isActivePrefix =
              RADIATION_NODE_MAP[selectedNodeId]?.stepIndex >= node.stepIndex;
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
          {RADIATION_NODES.map((node) => {
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
                id={`radiation-node-${node.id}`}
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
                    filter="url(#rad-glow-strong)"
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
                        filter="url(#rad-glow-strong)"
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
                      clipPath={`url(#clip-rad-${node.id})`}
                    />

                    {/* Physics / wavelength badge over top-left of card image */}
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
