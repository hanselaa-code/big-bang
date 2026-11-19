import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  Clock,
  FlaskConical,
  Lightbulb,
  Maximize2,
  Sparkles,
  Tag,
  Thermometer,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import type { CosmicNodeData } from '../data/bigBangData';
import { getTermDefinition } from '../data/termGlossary';
import type { ThemeConfig } from '../data/themes';
import { NodeVideoPlayer } from './NodeVideoPlayer';
import { TraitIcon } from './TraitIcon';

interface InfoPanelProps {
  activeTheme: ThemeConfig;
  node: CosmicNodeData;
  isFullscreen?: boolean;
  onOpenLightbox: (node: CosmicNodeData) => void;
}

export function InfoPanel({
  activeTheme,
  node,
  isFullscreen = false,
  onOpenLightbox,
}: InfoPanelProps) {
  const [activeTerm, setActiveTerm] = useState<string | null>(null);
  const [showAllInFullscreen, setShowAllInFullscreen] = useState(false);

  useEffect(() => {
    setActiveTerm(null);
    setShowAllInFullscreen(false);
  }, [node.id, isFullscreen]);

  const isCompactFullscreen = isFullscreen && !showAllInFullscreen;

  return (
    <aside
      key={node.id}
      id="cosmic-info-panel"
      className="h-full flex flex-col rounded-2xl glass-panel overflow-hidden animate-card-enter"
    >
      {/* Scrollable content body */}
      <div
        className={`flex-1 overflow-y-auto custom-scrollbar ${
          isCompactFullscreen
            ? 'p-3.5 lg:p-4 flex flex-col gap-2.5'
            : 'p-5 lg:p-6 space-y-5'
        }`}
      >
        {/* Header badges + Title + Subtitle */}
        <header className={isCompactFullscreen ? 'space-y-1 shrink-0' : 'space-y-2'}>
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span
              className={`inline-flex items-center gap-1.5 rounded-md bg-amber-500/20 border border-amber-400/35 text-amber-300 font-bold tracking-wide uppercase ${
                isCompactFullscreen ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs'
              }`}
            >
              {activeTheme.stepWord} {node.stepNumber} av{' '}
              {activeTheme.mainStepIds.length}
            </span>

            {node.traceBadge && (
              <span
                className={`inline-flex items-center gap-1.5 rounded-md bg-emerald-500/15 border border-emerald-400/35 text-emerald-200 font-bold ${
                  isCompactFullscreen ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs'
                }`}
              >
                {node.traceBadge}
              </span>
            )}

            <span
              className={`inline-flex items-center gap-1.5 rounded-md bg-sky-500/15 border border-sky-400/30 text-sky-200 font-semibold font-mono-time ${
                isCompactFullscreen ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs'
              }`}
            >
              <Clock className="w-3 h-3 text-sky-300" />
              {node.timeAfterBB}
            </span>

            {!isCompactFullscreen && (
              <>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800/90 border border-slate-700 text-slate-200 text-xs font-medium font-mono-time">
                  <Thermometer className="w-3.5 h-3.5 text-amber-300" />
                  {node.temperatureLabel}
                </span>

                <span className="text-xs text-slate-400 font-medium">
                  {node.eraLabel}
                </span>
              </>
            )}

            {isFullscreen && (
              <button
                id="btn-toggle-fullscreen-details"
                type="button"
                onClick={() => setShowAllInFullscreen((prev) => !prev)}
                className="ml-auto inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800/90 hover:bg-slate-700/90 border border-slate-600/80 text-[11px] font-semibold text-amber-200 transition-colors cursor-pointer"
                title={
                  isCompactFullscreen
                    ? 'Vis alle detaljer på kortet'
                    : 'Tilbake til kompakt fullskjermvisning'
                }
              >
                {isCompactFullscreen ? (
                  <>
                    <span>Vis alt</span>
                    <ChevronDown className="w-3 h-3" />
                  </>
                ) : (
                  <>
                    <span>Kompakt</span>
                    <ChevronUp className="w-3 h-3" />
                  </>
                )}
              </button>
            )}
          </div>

          <div>
            <h2
              className={`font-extrabold text-white leading-tight font-display ${
                isCompactFullscreen
                  ? 'text-[clamp(1.1rem,2.3vh,1.55rem)]'
                  : 'text-2xl lg:text-[1.72rem]'
              }`}
            >
              {node.title}
            </h2>
            <p
              className={`italic text-slate-300 font-medium ${
                isCompactFullscreen
                  ? 'text-[clamp(0.74rem,1.4vh,0.88rem)] mt-0.5 truncate'
                  : 'text-sm lg:text-[15px] mt-1'
              }`}
            >
              {node.subtitleTag}
            </p>
          </div>
        </header>

        {/* Hero 16:9 Illustration (or click-to-play Video over the Illustration) */}
        {node.videoUrl ? (
          <NodeVideoPlayer
            node={node}
            videoUrl={node.videoUrl}
            compact={isCompactFullscreen}
            onOpenLightbox={onOpenLightbox}
          />
        ) : (
          <figure className="relative group rounded-xl overflow-hidden border border-slate-700/70 bg-slate-900 shadow-lg shrink-0">
            <div
              className={`w-full overflow-hidden bg-slate-950 ${
                isCompactFullscreen ? 'h-[clamp(135px,27vh,260px)]' : 'aspect-video'
              }`}
            >
              <img
                src={node.image}
                alt={node.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03] cursor-zoom-in"
                onClick={() => onOpenLightbox(node)}
              />
            </div>
            <button
              id="btn-expand-image"
              type="button"
              onClick={() => onOpenLightbox(node)}
              title="Forstørr bilde for storskjerm"
              className="absolute top-2 right-2 inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-slate-950/75 hover:bg-slate-900/95 text-slate-200 text-xs font-medium border border-white/15 opacity-90 group-hover:opacity-100 transition-all cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Storskjermbilde</span>
            </button>
            {!isCompactFullscreen && (
              <figcaption className="px-3.5 py-2 bg-slate-950/85 text-xs text-slate-300 border-t border-slate-800/80 leading-relaxed">
                {node.imageCaption}
              </figcaption>
            )}
          </figure>
        )}

        {/* Main pedagogical summary */}
        <section className={isCompactFullscreen ? 'space-y-1 shrink-0' : 'space-y-2'}>
          <div
            className={`flex items-center gap-1.5 font-bold uppercase tracking-wider text-amber-300 ${
              isCompactFullscreen ? 'text-[11px]' : 'text-xs gap-2'
            }`}
          >
            <Sparkles
              className={`text-amber-400 shrink-0 ${
                isCompactFullscreen ? 'w-3.5 h-3.5' : 'w-4 h-4'
              }`}
            />
            <h3 className={isCompactFullscreen ? 'truncate' : ''}>
              {activeTheme.summaryHeadingPrefix} — {node.summaryTitle}
            </h3>
          </div>
          <p
            className={`text-slate-200 ${
              isCompactFullscreen
                ? 'text-[clamp(0.82rem,1.65vh,0.98rem)] leading-snug'
                : 'text-[15px] lg:text-base leading-relaxed'
            }`}
          >
            {node.whatHappens}
          </p>
        </section>

        {!isCompactFullscreen && (
          <>
            {/* Classroom experiment / thought hook */}
            {node.classroomTest && (
              <section className="p-4 rounded-xl bg-gradient-to-br from-sky-500/15 via-teal-500/10 to-transparent border border-sky-400/35 space-y-1.5">
                <div className="flex items-center gap-2 text-sky-300 text-xs font-bold uppercase tracking-wider">
                  <FlaskConical className="w-4 h-4 text-sky-400 shrink-0" />
                  <h3>{activeTheme.classroomBoxHeading}</h3>
                </div>
                <p className="text-sm text-sky-50/95 leading-relaxed">
                  {node.classroomTest}
                </p>
              </section>
            )}

            {/* Key physical mechanisms & evidence */}
            <section className="space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                {activeTheme.traitsHeading}
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {node.keyTraits.map((trait) => (
                  <div
                    key={trait.title}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/75 border border-slate-700/60 hover:border-amber-400/35 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/25 shrink-0 mt-0.5">
                      <TraitIcon name={trait.icon} className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm lg:text-[15px] font-bold text-white">
                        {trait.title}
                      </h4>
                      <p className="text-xs lg:text-sm text-slate-300 mt-0.5 leading-relaxed">
                        {trait.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Visste du at? */}
            <section className="p-4 rounded-xl bg-gradient-to-br from-amber-500/14 via-amber-500/8 to-transparent border border-amber-400/30 space-y-1.5">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Lightbulb className="w-4 h-4 text-amber-400 shrink-0" />
                <h3>Visste du at?</h3>
              </div>
              <p className="text-sm text-amber-50/95 leading-relaxed">
                {node.didYouKnow}
              </p>
            </section>
          </>
        )}

        {/* Nøkkelbegreper (klikkbar ordbok) */}
        <section
          className={
            isCompactFullscreen
              ? 'space-y-1.5 mt-auto pt-1 shrink-0'
              : 'space-y-2.5 pb-1'
          }
        >
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div
              className={`flex items-center gap-1.5 font-bold uppercase tracking-wider text-slate-400 ${
                isCompactFullscreen ? 'text-[11px]' : 'text-xs'
              }`}
            >
              <Tag className="w-3.5 h-3.5" />
              <h3>{activeTheme.examplesHeading}</h3>
            </div>
            {!isCompactFullscreen && (
              <span className="inline-flex items-center gap-1 text-[11px] text-sky-300/85 font-medium">
                <BookOpen className="w-3 h-3" />
                Trykk for ordbok-forklaring
              </span>
            )}
          </div>

          {activeTerm && (
            <div
              role="dialog"
              aria-label={`Ordbok: ${activeTerm}`}
              className="p-3.5 rounded-xl bg-slate-900/95 border border-sky-400/50 shadow-[0_10px_30px_rgba(2,132,199,0.22)] space-y-1.5 animate-card-enter"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-sky-500/20 border border-sky-400/35 text-sky-200 text-[10px] font-bold uppercase tracking-wider shrink-0">
                    <BookOpen className="w-3 h-3" />
                    Ordbok
                  </span>
                  <h4 className="text-sm font-extrabold text-white truncate">
                    {activeTerm}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTerm(null)}
                  aria-label="Lukk begrepsforklaring"
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs lg:text-sm text-slate-200 leading-relaxed">
                {getTermDefinition(activeTerm)}
              </p>
            </div>
          )}

          <div className="flex flex-wrap gap-1.5">
            {node.examples.map((example) => {
              const isSelected = activeTerm === example;
              return (
                <button
                  key={example}
                  type="button"
                  aria-expanded={isSelected}
                  onClick={() =>
                    setActiveTerm((prev) => (prev === example ? null : example))
                  }
                  className={`inline-flex items-center gap-1.5 rounded-lg border font-medium transition-all cursor-pointer text-left ${
                    isCompactFullscreen
                      ? 'px-2 py-1 text-[11px]'
                      : 'px-2.5 py-1 text-xs lg:text-sm'
                  } ${
                    isSelected
                      ? 'bg-sky-500/25 border-sky-400 text-white shadow-[0_0_14px_rgba(56,189,248,0.28)]'
                      : 'bg-slate-800/90 hover:bg-slate-700/90 border-slate-700/80 hover:border-sky-400/55 text-slate-200 hover:text-white'
                  }`}
                >
                  <span>{example}</span>
                </button>
              );
            })}
          </div>
        </section>
      </div>
    </aside>
  );
}
