import { ArrowLeft, ArrowRight, ChevronUp, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import type { ThemeConfig } from '../data/themes';

interface TimelineDockProps {
  activeTheme: ThemeConfig;
  currentStepIndex: number;
  unlockedStepIndex: number;
  showAllSteps: boolean;
  onPrev: () => void;
  onNext: () => void;
  onJumpToStep: (stepIndex: number) => void;
}

export function TimelineDock({
  activeTheme,
  currentStepIndex,
  unlockedStepIndex,
  showAllSteps,
  onPrev,
  onNext,
  onJumpToStep,
}: TimelineDockProps) {
  const [mobileStepMenuOpen, setMobileStepMenuOpen] = useState(false);

  const mainStepIds = activeTheme.mainStepIds;
  const nodeMap = activeTheme.nodeMap;

  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === mainStepIds.length - 1;
  const currentStepNode = nodeMap[mainStepIds[currentStepIndex]];

  return (
    <footer className="fixed bottom-0 inset-x-0 lg:static z-30 border-t border-slate-700/80 lg:border-slate-800/85 bg-[#070B16]/95 backdrop-blur-xl shadow-[0_-10px_30px_rgba(0,0,0,0.65)] lg:shadow-none pb-[max(0.65rem,env(safe-area-inset-bottom))] pt-2.5 px-3 sm:px-5 lg:py-3 lg:px-6">
      {/* Mobile quick-jump step drawer */}
      {mobileStepMenuOpen && (
        <div className="md:hidden mb-2.5 p-2.5 rounded-2xl bg-slate-900/95 border border-slate-700/80 max-h-56 overflow-y-auto custom-scrollbar grid grid-cols-2 gap-1.5 animate-card-enter">
          {mainStepIds.map((id, idx) => {
            const stepNode = nodeMap[id];
            const isCurrent = idx === currentStepIndex;
            return (
              <button
                key={id}
                type="button"
                onClick={() => {
                  onJumpToStep(idx);
                  setMobileStepMenuOpen(false);
                }}
                className={`flex items-center gap-2 px-2.5 py-2 rounded-xl text-left text-xs border transition-colors cursor-pointer ${
                  isCurrent
                    ? 'bg-amber-500/20 border-amber-400/50 text-white font-bold'
                    : 'bg-slate-950/70 border-slate-800 text-slate-300'
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full text-[11px] font-extrabold flex items-center justify-center shrink-0 ${
                    isCurrent
                      ? 'bg-amber-400 text-slate-950'
                      : 'bg-slate-800 text-amber-300'
                  }`}
                >
                  {idx + 1}
                </span>
                <div className="min-w-0">
                  <div className="truncate">{stepNode.shortLabel}</div>
                  <div className="text-[10px] font-mono-time text-sky-300/90 truncate">
                    {stepNode.timeAfterBB}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      )}

      <div className="max-w-[1920px] mx-auto flex items-center justify-between gap-2 sm:gap-3">
        {/* Previous button */}
        <button
          id="btn-prev-step"
          type="button"
          onClick={onPrev}
          disabled={isFirstStep}
          aria-label="Forrige steg"
          className={`inline-flex items-center justify-center gap-1.5 sm:gap-2 min-h-[46px] px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all shrink-0 ${
            isFirstStep
              ? 'bg-slate-900/40 border-slate-800/60 text-slate-600 cursor-not-allowed'
              : 'bg-slate-900 hover:bg-slate-800 active:bg-slate-800 border-slate-700 text-slate-100 cursor-pointer active:scale-[0.97]'
          }`}
        >
          <ArrowLeft className="w-4 h-4 shrink-0" />
          <span className="hidden xs:inline sm:inline">Forrige</span>
        </button>

        {/* Desktop interactive 10-step bar */}
        <nav
          aria-label={activeTheme.title}
          className="hidden md:flex items-center flex-1 min-w-0 overflow-x-auto custom-scrollbar py-0.5"
        >
          <div className="mx-auto flex items-center gap-1 lg:gap-1.5 px-0.5">
            {mainStepIds.map((id, idx) => {
              const stepNode = nodeMap[id];
              const isCurrent = idx === currentStepIndex;
              const isUnlocked = showAllSteps || idx <= unlockedStepIndex;

              return (
                <button
                  key={id}
                  id={`timeline-step-${idx + 1}`}
                  type="button"
                  onClick={() => onJumpToStep(idx)}
                  title={`${activeTheme.stepWord} ${idx + 1}: ${stepNode.title} (${stepNode.timeAfterBB})`}
                  className={`group flex flex-col items-center shrink-0 px-2 lg:px-2.5 py-1 rounded-xl border transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-amber-500/20 border-amber-400/55 text-white shadow-[0_0_16px_rgba(245,158,11,0.22)]'
                      : isUnlocked
                        ? 'bg-slate-900/65 hover:bg-slate-800/80 border-slate-800 text-slate-300'
                        : 'bg-slate-950/40 hover:bg-slate-900/60 border-slate-800/40 text-slate-500'
                  }`}
                >
                  <div className="flex items-center gap-1">
                    <span
                      className={`w-4 h-4 rounded-full text-[10px] font-extrabold flex items-center justify-center ${
                        isCurrent
                          ? 'bg-amber-400 text-slate-950'
                          : isUnlocked
                            ? 'bg-amber-500/25 text-amber-300'
                            : 'bg-slate-800 text-slate-500'
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <span className="text-[11px] font-semibold hidden xl:inline max-w-[96px] truncate">
                      {stepNode.shortLabel}
                    </span>
                  </div>
                  <span
                    className={`text-[10px] font-mono-time mt-0.5 max-w-[104px] truncate ${
                      isCurrent ? 'text-sky-300 font-semibold' : 'text-slate-500'
                    }`}
                  >
                    {stepNode.timeAfterBB}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Mobile clickable step selector pill */}
        <button
          id="btn-mobile-step-picker"
          type="button"
          onClick={() => setMobileStepMenuOpen((prev) => !prev)}
          className="flex md:hidden flex-col items-center justify-center min-h-[46px] px-2.5 py-1 rounded-xl bg-slate-900/90 border border-slate-700/80 text-xs cursor-pointer min-w-0"
        >
          <span className="inline-flex items-center gap-1 font-bold text-white text-xs whitespace-nowrap">
            <span>
              {activeTheme.stepWord} {currentStepIndex + 1}/{mainStepIds.length}
            </span>
            <ChevronUp
              className={`w-3.5 h-3.5 text-amber-300 transition-transform ${
                mobileStepMenuOpen ? 'rotate-180' : ''
              }`}
            />
          </span>
          <span className="text-[10px] font-mono-time text-sky-300 truncate max-w-[98px]">
            {currentStepNode?.shortLabel}
          </span>
        </button>

        {/* Next Step / Quiz Finale CTA */}
        <button
          id="btn-next-step"
          type="button"
          onClick={onNext}
          className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 min-h-[46px] px-4 sm:px-5 py-2.5 rounded-xl text-sm font-extrabold transition-all cursor-pointer active:scale-[0.97] shrink-0 ${
            isLastStep
              ? 'bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 shadow-[0_0_25px_rgba(16,185,129,0.4)]'
              : 'bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 text-slate-950 shadow-[0_0_24px_rgba(245,158,11,0.35)]'
          }`}
        >
          {isLastStep ? (
            <>
              <HelpCircle className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">Kontrollspørsmål</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </>
          ) : (
            <>
              <span className="whitespace-nowrap">
                Neste {activeTheme.stepWord.toLowerCase()}
              </span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </>
          )}
        </button>
      </div>
    </footer>
  );
}
