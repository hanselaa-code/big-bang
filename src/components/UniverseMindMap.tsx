import {
  ArrowRight,
  BookOpen,
  Clock,
  Download,
  ExternalLink,
  Sparkles,
  X,
} from 'lucide-react';
import { useState } from 'react';
import type { ThemeId } from '../data/themes';
import {
  UNIVERSE_CENTER_NODE,
  UNIVERSE_DASHED_ARCS,
  UNIVERSE_HUB_NODES,
  type HubNodeId,
  type UniverseHubNode,
} from '../data/universeHubData';

interface UniverseMindMapProps {
  onSelectTheme: (themeId: ThemeId) => void;
}

export function UniverseMindMap({ onSelectTheme }: UniverseMindMapProps) {
  const [hoveredId, setHoveredId] = useState<HubNodeId | 'universet' | null>(
    null,
  );
  const [comingSoonNode, setComingSoonNode] = useState<UniverseHubNode | null>(
    null,
  );

  const handleNodeActivate = (node: UniverseHubNode) => {
    if (node.linkedThemeId) {
      setComingSoonNode(null);
      onSelectTheme(node.linkedThemeId);
      return;
    }
    setComingSoonNode(node);
  };

  return (
    <div className="relative flex-1 min-h-0 w-full flex flex-col items-center justify-between px-2 py-2 sm:px-5 sm:py-3 lg:px-8 lg:py-4 max-w-[1680px] mx-auto select-none">
      {/* Subtle top classroom prompt */}
      <div className="w-full flex items-center justify-center pt-0.5 pb-1 shrink-0">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/75 text-[11px] sm:text-xs text-slate-300 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
          <span>
            Alle 6 undertemaene er klare:{' '}
            <button
              type="button"
              onClick={() => onSelectTheme('big-bang')}
              className="font-bold text-amber-300 hover:text-amber-200 underline underline-offset-2 cursor-pointer"
            >
              Big Bang
            </button>
            ,{' '}
            <button
              type="button"
              onClick={() => onSelectTheme('stjerner')}
              className="font-bold text-sky-300 hover:text-sky-200 underline underline-offset-2 cursor-pointer"
            >
              Stjerner
            </button>
            ,{' '}
            <button
              type="button"
              onClick={() => onSelectTheme('grunnstoffer')}
              className="font-bold text-teal-300 hover:text-teal-200 underline underline-offset-2 cursor-pointer"
            >
              Grunnstoffer
            </button>
            ,{' '}
            <button
              type="button"
              onClick={() => onSelectTheme('straling')}
              className="font-bold text-rose-300 hover:text-rose-200 underline underline-offset-2 cursor-pointer"
            >
              Stråling
            </button>
            ,{' '}
            <button
              type="button"
              onClick={() => onSelectTheme('galakser')}
              className="font-bold text-indigo-300 hover:text-indigo-200 underline underline-offset-2 cursor-pointer"
            >
              Galakser
            </button>{' '}
            og{' '}
            <button
              type="button"
              onClick={() => onSelectTheme('romtid')}
              className="font-bold text-purple-300 hover:text-purple-200 underline underline-offset-2 cursor-pointer"
            >
              Romtid
            </button>
          </span>
        </div>
      </div>

      {/* Interactive SVG Mindmap matching the classroom sketch */}
      <div className="flex-1 min-h-0 w-full flex items-center justify-center">
        <svg
          id="universe-mindmap-svg"
          viewBox="42 30 996 714"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full max-h-[calc(100vh-8.75rem)] max-w-[1220px] overflow-visible drop-shadow-[0_16px_45px_rgba(0,0,0,0.55)]"
          role="img"
          aria-label="Tankekart over Universet med seks tilknyttede undertemaer: Big Bang, Stjerner, Grunnstoffer, Stråling, Galakser og Romtid"
        >
          <defs>
            {/* Clip paths for center and 6 satellite circles */}
            <clipPath id="clip-hub-universet">
              <circle
                cx={UNIVERSE_CENTER_NODE.cx}
                cy={UNIVERSE_CENTER_NODE.cy}
                r={UNIVERSE_CENTER_NODE.r}
              />
            </clipPath>

            {UNIVERSE_HUB_NODES.map((node) => (
              <clipPath key={node.id} id={`clip-hub-${node.id}`}>
                <circle cx={node.cx} cy={node.cy} r={node.r} />
              </clipPath>
            ))}

            {/* Warm golden vignette for UNIVERSET center circle */}
            <radialGradient id="scrim-universet" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="#1C1206" stopOpacity="0.68" />
              <stop offset="62%" stopColor="#1A1105" stopOpacity="0.46" />
              <stop offset="100%" stopColor="#090D1A" stopOpacity="0.62" />
            </radialGradient>

            {/* Dark cosmic readability scrim for satellite circles */}
            <radialGradient id="scrim-satellite" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="#050B18" stopOpacity="0.66" />
              <stop offset="58%" stopColor="#071022" stopOpacity="0.38" />
              <stop offset="100%" stopColor="#050914" stopOpacity="0.58" />
            </radialGradient>

            {/* Ambient glow behind UNIVERSET */}
            <radialGradient id="glow-universet" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.24" />
              <stop offset="65%" stopColor="#F59E0B" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* 1. Dashed curved outer arcs connecting related themes */}
          <g aria-hidden="true">
            {UNIVERSE_DASHED_ARCS.map((arc) => {
              const isHighlighted =
                hoveredId === arc.from || hoveredId === arc.to;
              return (
                <path
                  key={arc.id}
                  d={arc.d}
                  fill="none"
                  stroke={isHighlighted ? '#7DD3FC' : '#7C96C2'}
                  strokeOpacity={isHighlighted ? 0.88 : 0.55}
                  strokeWidth={isHighlighted ? 4.5 : 3.8}
                  strokeDasharray="11 11"
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />
              );
            })}
          </g>

          {/* 2. Solid radial lines from UNIVERSET to each of the 6 themes */}
          <g aria-hidden="true">
            {UNIVERSE_HUB_NODES.map((node) => {
              const isHighlighted =
                hoveredId === node.id || hoveredId === 'universet';
              const isReady = Boolean(node.linkedThemeId);
              return (
                <line
                  key={`line-${node.id}`}
                  x1={UNIVERSE_CENTER_NODE.cx}
                  y1={UNIVERSE_CENTER_NODE.cy}
                  x2={node.cx}
                  y2={node.cy}
                  stroke={
                    hoveredId === node.id && isReady
                      ? '#FBBF24'
                      : isHighlighted
                        ? '#93C5FD'
                        : '#869CC9'
                  }
                  strokeOpacity={isHighlighted ? 0.92 : 0.65}
                  strokeWidth={isHighlighted ? 5 : 4}
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />
              );
            })}
          </g>

          {/* 3. Center circle: UNIVERSET */}
          <g
            id="hub-node-universet"
            onMouseEnter={() => setHoveredId('universet')}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => setComingSoonNode(null)}
            className="cursor-default"
          >
            {/* Ambient radial glow */}
            <circle
              cx={UNIVERSE_CENTER_NODE.cx}
              cy={UNIVERSE_CENTER_NODE.cy}
              r={UNIVERSE_CENTER_NODE.haloR + 36}
              fill="url(#glow-universet)"
            />

            {/* Outer delicate halo ring matching reference sketch */}
            <circle
              cx={UNIVERSE_CENTER_NODE.cx}
              cy={UNIVERSE_CENTER_NODE.cy}
              r={UNIVERSE_CENTER_NODE.haloR}
              fill="none"
              stroke="#FCD34D"
              strokeOpacity={hoveredId === 'universet' ? 0.45 : 0.28}
              strokeWidth="2.2"
              className="transition-all duration-300"
            />

            {/* Clipped Nano Banana cosmic illustration */}
            <g clipPath="url(#clip-hub-universet)">
              <circle
                cx={UNIVERSE_CENTER_NODE.cx}
                cy={UNIVERSE_CENTER_NODE.cy}
                r={UNIVERSE_CENTER_NODE.r}
                fill="#291B09"
              />
              <image
                href={UNIVERSE_CENTER_NODE.imageUrl}
                x={UNIVERSE_CENTER_NODE.cx - UNIVERSE_CENTER_NODE.r - 4}
                y={UNIVERSE_CENTER_NODE.cy - UNIVERSE_CENTER_NODE.r - 4}
                width={(UNIVERSE_CENTER_NODE.r + 4) * 2}
                height={(UNIVERSE_CENTER_NODE.r + 4) * 2}
                preserveAspectRatio="xMidYMid slice"
              />
              <circle
                cx={UNIVERSE_CENTER_NODE.cx}
                cy={UNIVERSE_CENTER_NODE.cy}
                r={UNIVERSE_CENTER_NODE.r}
                fill="url(#scrim-universet)"
              />
            </g>

            {/* Golden border */}
            <circle
              cx={UNIVERSE_CENTER_NODE.cx}
              cy={UNIVERSE_CENTER_NODE.cy}
              r={UNIVERSE_CENTER_NODE.r}
              fill="none"
              stroke="#F59E0B"
              strokeWidth="5.5"
            />

            {/* Center title */}
            <text
              x={UNIVERSE_CENTER_NODE.cx}
              y={UNIVERSE_CENTER_NODE.cy}
              textAnchor="middle"
              dominantBaseline="central"
              fill="#FDE68A"
              fontSize="33"
              fontWeight="800"
              letterSpacing="1.5"
              className="font-display"
              style={{
                paintOrder: 'stroke',
                stroke: 'rgba(10, 8, 4, 0.85)',
                strokeWidth: '6px',
                strokeLinejoin: 'round',
              }}
            >
              {UNIVERSE_CENTER_NODE.title}
            </text>
          </g>

          {/* 4. Six surrounding theme circles */}
          {UNIVERSE_HUB_NODES.map((node) => {
            const isHovered = hoveredId === node.id;
            const isSelectedSoon = comingSoonNode?.id === node.id;
            const isReady = Boolean(node.linkedThemeId);

            return (
              <g
                key={node.id}
                id={`hub-node-${node.id}`}
                role="button"
                tabIndex={0}
                aria-label={
                  isReady
                    ? `${node.title} – Åpne tema`
                    : `${node.title} – Kommer snart`
                }
                onMouseEnter={() => setHoveredId(node.id)}
                onMouseLeave={() => setHoveredId(null)}
                onFocus={() => setHoveredId(node.id)}
                onBlur={() => setHoveredId(null)}
                onClick={() => handleNodeActivate(node)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleNodeActivate(node);
                  }
                }}
                style={{
                  transformOrigin: `${node.cx}px ${node.cy}px`,
                  transform: isHovered ? 'scale(1.045)' : 'scale(1)',
                  transition: 'transform 220ms cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className="cursor-pointer focus:outline-none"
              >
                {/* Outer active / hover ring */}
                {(isReady || isHovered || isSelectedSoon) && (
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={node.r + 10}
                    fill="none"
                    stroke={isReady ? '#38BDF8' : '#7DD3FC'}
                    strokeOpacity={
                      isHovered ? 0.55 : isSelectedSoon ? 0.45 : 0.25
                    }
                    strokeWidth={isHovered ? 3 : 2}
                  />
                )}

                {/* Clipped Nano Banana illustration */}
                <g clipPath={`url(#clip-hub-${node.id})`}>
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={node.r}
                    fill="#0B192E"
                  />
                  <image
                    href={node.imageUrl}
                    x={node.cx - node.r - 4}
                    y={node.cy - node.r - 4}
                    width={(node.r + 4) * 2}
                    height={(node.r + 4) * 2}
                    preserveAspectRatio="xMidYMid slice"
                  />
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={node.r}
                    fill="url(#scrim-satellite)"
                  />
                </g>

                {/* Crisp sky-blue circle border matching image.png */}
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r={node.r}
                  fill="none"
                  stroke={
                    isHovered && isReady
                      ? '#FBBF24'
                      : isHovered || isSelectedSoon
                        ? '#7DD3FC'
                        : '#38BDF8'
                  }
                  strokeWidth={isHovered ? 5.5 : 4.5}
                />

                {/* Circle main label */}
                <text
                  x={node.cx}
                  y={isReady ? node.cy - 6 : node.cy}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="#F8FAFC"
                  fontSize="26"
                  fontWeight="700"
                  className="font-display"
                  style={{
                    paintOrder: 'stroke',
                    stroke: 'rgba(5, 10, 22, 0.9)',
                    strokeWidth: '5.5px',
                    strokeLinejoin: 'round',
                  }}
                >
                  {node.title}
                </text>

                {/* Subtle clickable pill inside Big Bang so students see it's ready */}
                {isReady && (
                  <g transform={`translate(${node.cx}, ${node.cy + 34})`}>
                    <rect
                      x="-54"
                      y="-13"
                      width="108"
                      height="26"
                      rx="13"
                      fill={isHovered ? '#F59E0B' : 'rgba(8, 15, 30, 0.84)'}
                      stroke={isHovered ? '#FDE68A' : '#F59E0B'}
                      strokeWidth="1.5"
                    />
                    <text
                      x="0"
                      y="0.5"
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill={isHovered ? '#080D1A' : '#FDE68A'}
                      fontSize="12.5"
                      fontWeight="800"
                      className="font-display"
                    >
                      Åpne tema →
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Bottom caption (or gentle "Kommer snart" notice when clicking one of the 5 upcoming nodes) */}
      <div className="w-full flex items-center justify-center pt-1 shrink-0 min-h-[2.5rem]">
        {comingSoonNode ? (
          <div
            role="status"
            className="max-w-xl w-full flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 px-4 py-2.5 rounded-2xl glass-panel border border-sky-400/40 shadow-2xl animate-card-enter"
          >
            <div className="flex items-start gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-xl bg-sky-500/15 border border-sky-400/35 flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-4 h-4 text-sky-300" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-extrabold text-white font-display">
                    {comingSoonNode.title}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-sky-500/20 border border-sky-400/35 text-[10px] font-bold uppercase tracking-wider text-sky-200">
                    Kommer snart
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-snug mt-0.5">
                  {comingSoonNode.shortDescription}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 ml-auto">
              <button
                type="button"
                onClick={() => {
                  setComingSoonNode(null);
                  onSelectTheme('big-bang');
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-extrabold transition-colors cursor-pointer"
              >
                <span>Åpne Big Bang</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setComingSoonNode(null)}
                aria-label="Lukk melding"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 px-3.5 py-2 rounded-2xl bg-slate-900/80 border border-slate-700/75 shadow-lg">
            <div className="flex items-center gap-2 text-xs text-slate-200">
              <BookOpen className="w-4 h-4 text-emerald-300 shrink-0" />
              <span className="font-bold text-white">Komplett lærebok (PDF):</span>
              <span className="hidden md:inline text-slate-400">
                Hele pensumet for Vg1 Naturfag (108 s.)
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <a
                id="mindmap-textbook-open"
                href="./Universet-Laerebok-Vg1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/45 text-emerald-200 text-xs font-bold transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Åpne i nettleser</span>
              </a>
              <a
                id="mindmap-textbook-download"
                href="./Universet-Laerebok-Vg1.pdf"
                download="Universet-Laerebok-Vg1.pdf"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-amber-500/18 hover:bg-amber-500/28 border border-amber-400/45 text-amber-200 text-xs font-bold transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Last ned PDF</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
