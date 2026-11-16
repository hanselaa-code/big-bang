import {
  Check,
  ChevronDown,
  Eye,
  EyeOff,
  HelpCircle,
  Keyboard,
  Maximize,
  Minimize,
  Network,
  Orbit,
  QrCode,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import {
  THEMES,
  type AppView,
  type ThemeConfig,
} from '../data/themes';
import {
  UNIVERSE_CENTER_NODE,
  UNIVERSE_HUB_NODES,
} from '../data/universeHubData';

interface TopBarProps {
  activeView: AppView;
  activeTheme: ThemeConfig;
  currentStepIndex: number;
  showAllSteps: boolean;
  isQuizOpen: boolean;
  isFullscreen: boolean;
  onSelectView: (view: AppView) => void;
  onToggleShowAll: () => void;
  onToggleQuiz: () => void;
  onOpenQrModal: () => void;
  onToggleFullscreen: () => void;
  onResetPresentation: () => void;
}

export function TopBar({
  activeView,
  activeTheme,
  currentStepIndex,
  showAllSteps,
  isQuizOpen,
  isFullscreen,
  onSelectView,
  onToggleShowAll,
  onToggleQuiz,
  onOpenQrModal,
  onToggleFullscreen,
  onResetPresentation,
}: TopBarProps) {
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const isMindMap = activeView === 'universet';

  useEffect(() => {
    if (!themeMenuOpen) return;
    const handleOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setThemeMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [themeMenuOpen]);

  const ActiveIcon = isMindMap ? Orbit : Sparkles;
  const headerBadge = isMindMap
    ? UNIVERSE_CENTER_NODE.dropdownBadge
    : activeTheme.dropdownBadge;
  const headerTitle = isMindMap
    ? UNIVERSE_CENTER_NODE.dropdownTitle
    : activeTheme.dropdownTitle;
  const headerSubtitle = isMindMap
    ? UNIVERSE_CENTER_NODE.subtitle
    : activeTheme.subtitle;

  return (
    <header className="relative z-30 flex items-center justify-between gap-2 sm:gap-3 px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 border-b border-slate-800/80 bg-[#070B16]/90 backdrop-blur-md">
      {/* Left: Brand & Interactive Theme Switcher Dropdown */}
      <div
        ref={dropdownRef}
        className="relative flex items-center gap-2 sm:gap-2.5 min-w-0"
      >
        <button
          id="btn-theme-switcher"
          type="button"
          onClick={() => setThemeMenuOpen((prev) => !prev)}
          aria-expanded={themeMenuOpen}
          aria-haspopup="listbox"
          title="Velg tema eller gå til tankekartet"
          className="group flex items-center gap-2.5 sm:gap-3 px-2 sm:px-3 py-1.5 rounded-2xl bg-slate-900/85 hover:bg-slate-800/90 border border-amber-400/35 hover:border-amber-400/65 transition-all cursor-pointer min-w-0 text-left shadow-[0_0_24px_rgba(245,158,11,0.12)]"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-amber-500/25 to-sky-500/20 border border-amber-400/35 flex items-center justify-center shrink-0">
            <ActiveIcon className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300/90 hidden sm:inline">
                {isMindMap ? 'Oversikt' : 'Tema'}
              </span>
              <span className="hidden sm:inline text-slate-600">•</span>
              <span className="text-[10px] font-mono-time text-sky-300/90 truncate hidden sm:inline">
                {headerBadge}
              </span>
            </div>
            <div className="flex items-center gap-1.5 min-w-0">
              <h1 className="text-xs sm:text-base lg:text-lg font-extrabold text-white truncate font-display">
                {headerTitle}
              </h1>
              <ChevronDown
                className={`w-4 h-4 text-amber-300 shrink-0 transition-transform duration-200 ${
                  themeMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </div>
          </div>
        </button>

        {/* Quick 1-click button back to Tankekart when viewing a sub-theme */}
        {!isMindMap && (
          <button
            id="btn-back-to-mindmap"
            type="button"
            onClick={() => onSelectView('universet')}
            title="Tilbake til hovedsiden med tankekartet over Universet"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-sky-400/35 hover:border-sky-400/65 text-xs font-bold text-sky-200 transition-all cursor-pointer shrink-0"
          >
            <Network className="w-3.5 h-3.5 text-sky-300" />
            <span>Tankekart</span>
          </button>
        )}

        <p className="text-xs text-slate-400 hidden 2xl:block truncate max-w-md">
          {headerSubtitle}
        </p>

        {/* Dropdown menu panel: Main Mindmap + All 6 Sub-themes */}
        {themeMenuOpen && (
          <div
            role="listbox"
            aria-label="Velg tema"
            className="absolute left-0 top-full mt-2 w-[min(92vw,26rem)] max-h-[82vh] overflow-y-auto p-2 rounded-2xl glass-panel border border-slate-700/90 shadow-2xl z-50 space-y-1.5 animate-card-enter"
          >
            <div className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Hovedside
            </div>

            {/* Option 0: Universet – Tankekart */}
            <button
              id="theme-option-universet"
              type="button"
              role="option"
              aria-selected={isMindMap}
              onClick={() => {
                onSelectView('universet');
                setThemeMenuOpen(false);
              }}
              className={`w-full flex items-start gap-3 p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                isMindMap
                  ? 'bg-amber-500/18 border-amber-400/50 text-white'
                  : 'bg-slate-900/75 hover:bg-slate-800/90 border-slate-800 hover:border-slate-600 text-slate-200'
              }`}
            >
              <img
                src={UNIVERSE_CENTER_NODE.imageUrl}
                alt=""
                className="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-amber-400 mt-0.5"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-extrabold font-display text-white">
                    {UNIVERSE_CENTER_NODE.dropdownTitle}
                  </span>
                  {isMindMap && (
                    <Check className="w-4 h-4 text-amber-300 shrink-0" />
                  )}
                </div>
                <div className="text-[11px] font-mono-time text-amber-300/90 mt-0.5">
                  {UNIVERSE_CENTER_NODE.dropdownBadge}
                </div>
                <p className="text-xs text-slate-300 mt-1 leading-snug">
                  {UNIVERSE_CENTER_NODE.dropdownDescription}
                </p>
              </div>
            </button>

            <div className="px-2.5 pt-2 pb-0.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-t border-slate-800/90">
              Undertemaer i tankekartet ({UNIVERSE_HUB_NODES.length})
            </div>

            {UNIVERSE_HUB_NODES.map((hubNode) => {
              const linkedTheme = hubNode.linkedThemeId
                ? THEMES[hubNode.linkedThemeId]
                : null;
              const isCurrent =
                linkedTheme !== null && activeView === linkedTheme.id;

              if (linkedTheme) {
                return (
                  <button
                    key={hubNode.id}
                    id={`theme-option-${hubNode.id}`}
                    type="button"
                    role="option"
                    aria-selected={isCurrent}
                    onClick={() => {
                      onSelectView(linkedTheme.id);
                      setThemeMenuOpen(false);
                    }}
                    className={`w-full flex items-start gap-3 p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                      isCurrent
                        ? 'bg-amber-500/18 border-amber-400/50 text-white'
                        : 'bg-slate-900/75 hover:bg-slate-800/90 border-slate-800 hover:border-slate-600 text-slate-200'
                    }`}
                  >
                    <img
                      src={hubNode.imageUrl}
                      alt=""
                      className="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-sky-400 mt-0.5"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-extrabold font-display text-white">
                          {linkedTheme.dropdownTitle}
                        </span>
                        {isCurrent && (
                          <Check className="w-4 h-4 text-amber-300 shrink-0" />
                        )}
                      </div>
                      <div className="text-[11px] font-mono-time text-sky-300/90 mt-0.5">
                        {linkedTheme.dropdownBadge}
                      </div>
                      <p className="text-xs text-slate-300 mt-1 leading-snug">
                        {linkedTheme.dropdownDescription}
                      </p>
                    </div>
                  </button>
                );
              }

              return (
                <div
                  key={hubNode.id}
                  id={`theme-option-${hubNode.id}`}
                  aria-disabled="true"
                  className="w-full flex items-center gap-3 px-2.5 py-2 rounded-xl border border-slate-800/80 bg-slate-950/55 opacity-75 select-none"
                >
                  <img
                    src={hubNode.imageUrl}
                    alt=""
                    className="w-8 h-8 rounded-full object-cover shrink-0 border border-sky-400/60"
                  />
                  <div className="min-w-0 flex-1 flex items-center justify-between gap-2">
                    <span className="text-xs sm:text-sm font-bold font-display text-slate-200 truncate">
                      {hubNode.title}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-[10px] font-semibold text-slate-400 shrink-0">
                      Kommer snart
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Right toolbar controls */}
      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
        {!isMindMap && (
          <div className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300">
            <span>{activeTheme.stepWord}:</span>
            <span className="font-mono-time font-bold text-amber-300">
              {currentStepIndex + 1} / {activeTheme.mainStepIds.length}
            </span>
          </div>
        )}

        {/* QR Code button for sharing with students on mobile */}
        <button
          id="btn-open-qr"
          type="button"
          onClick={onOpenQrModal}
          title="Vis QR-kode for deling med elever (K)"
          className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 border border-sky-400/40 text-sky-200 text-xs font-bold transition-all cursor-pointer"
        >
          <QrCode className="w-4 h-4 text-sky-300" />
          <span className="hidden xs:inline sm:inline">QR-kode</span>
        </button>

        {!isMindMap && (
          <>
            {/* Toggle progressive reveal vs full timeline */}
            <button
              id="btn-toggle-all-steps"
              type="button"
              onClick={onToggleShowAll}
              className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                showAllSteps
                  ? 'bg-emerald-500/20 border-emerald-400/40 text-emerald-200'
                  : 'bg-slate-900/80 hover:bg-slate-800 border-slate-700/80 text-slate-200'
              }`}
              title={`Veksle mellom stegvis fremføring og ${activeTheme.showAllLabel.toLowerCase()}`}
            >
              {showAllSteps ? (
                <EyeOff className="w-3.5 h-3.5" />
              ) : (
                <Eye className="w-3.5 h-3.5" />
              )}
              <span className="hidden lg:inline">
                {showAllSteps
                  ? activeTheme.progressiveLabel
                  : activeTheme.showAllLabel}
              </span>
            </button>

            {/* Restart presentation */}
            {currentStepIndex > 0 && (
              <button
                id="btn-reset-presentation"
                type="button"
                onClick={onResetPresentation}
                title="Start fremføringen fra første steg"
                className="hidden sm:inline-flex p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}

            {/* Kontrollspørsmål button */}
            <button
              id="btn-open-quiz"
              type="button"
              onClick={onToggleQuiz}
              className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                isQuizOpen
                  ? 'bg-amber-500 text-slate-950 border-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.4)]'
                  : 'bg-amber-500/15 hover:bg-amber-500/25 border-amber-400/40 text-amber-200'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Kontrollspørsmål</span>
              <span className="sm:hidden">Spørsmål</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] rounded bg-black/25 font-mono-time">
                Q
              </kbd>
            </button>

            {/* Keyboard shortcuts help */}
            <div className="relative hidden sm:block">
              <button
                id="btn-shortcuts-help"
                type="button"
                onClick={() => setShowShortcuts((prev) => !prev)}
                title="Hurtigtaster for klasserom"
                className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <Keyboard className="w-4 h-4" />
              </button>

              {showShortcuts && (
                <div className="absolute right-0 mt-2 w-72 p-4 rounded-2xl glass-panel z-50 text-xs space-y-2.5 shadow-2xl">
                  <div className="font-bold text-white text-sm flex items-center justify-between">
                    <span>Klasserom-hurtigtaster</span>
                    <button
                      type="button"
                      onClick={() => setShowShortcuts(false)}
                      className="text-slate-400 hover:text-white cursor-pointer"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="space-y-1.5 text-slate-300">
                    <div className="flex items-center justify-between">
                      <span>Neste steg langs tidslinjen</span>
                      <span className="font-mono-time text-amber-300">
                        Space / → / ↓
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Forrige steg</span>
                      <span className="font-mono-time text-amber-300">
                        ← / ↑
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Vis QR-kode for elever</span>
                      <span className="font-mono-time text-sky-300">K</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Fullskjerm av/på</span>
                      <span className="font-mono-time text-emerald-300">F</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Kontrollspørsmål & MCQ</span>
                      <span className="font-mono-time text-amber-300">Q</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Lukk vindu / bilde</span>
                      <span className="font-mono-time text-slate-400">Esc</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {/* Fullscreen button */}
        <button
          id="btn-toggle-fullscreen"
          type="button"
          onClick={onToggleFullscreen}
          title="Fullskjermmodus (F)"
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-xs font-semibold text-slate-200 transition-colors cursor-pointer"
        >
          {isFullscreen ? (
            <Minimize className="w-4 h-4 text-amber-300" />
          ) : (
            <Maximize className="w-4 h-4 text-slate-300" />
          )}
          <span className="hidden xl:inline">
            {isFullscreen ? 'Avslutt' : 'Fullskjerm'}
          </span>
          <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] rounded bg-slate-800 text-slate-300 font-mono-time">
            F
          </kbd>
        </button>
      </div>
    </header>
  );
}
