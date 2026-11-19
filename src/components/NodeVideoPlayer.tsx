import { Image as ImageIcon, Loader2, Maximize2, Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { CosmicNodeData } from '../data/bigBangData';

interface NodeVideoPlayerProps {
  node: CosmicNodeData;
  videoUrl: string;
  compact?: boolean;
  onOpenLightbox: (node: CosmicNodeData) => void;
}

export function NodeVideoPlayer({
  node,
  videoUrl,
  compact = false,
  onOpenLightbox,
}: NodeVideoPlayerProps) {
  const [isActivated, setIsActivated] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [streamError, setStreamError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!isActivated) return;
    const video = videoRef.current;
    if (!video) return;

    setStreamError(null);
    setIsBuffering(true);
    video.src = videoUrl;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        setIsBuffering(false);
      });
    }

    return () => {
      video.pause();
      video.removeAttribute('src');
      video.load();
    };
  }, [isActivated, videoUrl]);

  const handleCloseVideo = () => {
    setIsActivated(false);
    setIsBuffering(false);
    setStreamError(null);
  };

  return (
    <figure className="relative group rounded-xl overflow-hidden border border-slate-700/70 bg-slate-900 shadow-lg shrink-0">
      <div
        className={`w-full overflow-hidden bg-slate-950 relative ${
          compact ? 'h-[clamp(135px,27vh,260px)]' : 'aspect-video'
        }`}
      >
        {!isActivated ? (
          <>
            <button
              id={`btn-play-node-video-${node.id}`}
              type="button"
              onClick={() => setIsActivated(true)}
              aria-label={`Spill av video for ${node.title}`}
              className="w-full h-full relative block cursor-pointer focus:outline-none group/play"
            >
              <img
                src={node.image}
                alt={node.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover/play:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/15 to-transparent transition-opacity group-hover/play:via-slate-950/25 flex flex-col items-center justify-center gap-2.5">
                <div
                  className={`rounded-full bg-slate-950/75 group-hover/play:bg-amber-400 border-2 border-amber-400/85 group-hover/play:border-amber-200 text-amber-300 group-hover/play:text-slate-950 flex items-center justify-center shadow-[0_0_32px_rgba(245,158,11,0.45)] group-hover/play:scale-110 transition-all duration-300 ${
                    compact ? 'w-12 h-12' : 'w-16 h-16 sm:w-18 sm:h-18'
                  }`}
                >
                  <Play
                    className={`fill-current ml-1 ${
                      compact ? 'w-5 h-5' : 'w-7 h-7 sm:w-8 sm:h-8'
                    }`}
                  />
                </div>
                {!compact && (
                  <span className="px-3 py-1 rounded-full bg-slate-950/85 border border-amber-400/40 text-amber-200 text-xs font-bold tracking-wide shadow-md">
                    Trykk på bildet for å spille av video
                  </span>
                )}
              </div>
            </button>

            <button
              id="btn-expand-image"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenLightbox(node);
              }}
              title="Forstørr bilde for storskjerm"
              className="absolute top-2.5 right-2.5 z-10 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-950/80 hover:bg-slate-900/95 text-slate-200 text-xs font-medium border border-white/15 opacity-90 group-hover:opacity-100 transition-all cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Storskjermbilde</span>
            </button>
          </>
        ) : (
          <div className="w-full h-full relative bg-slate-950">
            <video
              ref={videoRef}
              poster={node.image}
              controls
              playsInline
              onPlaying={() => setIsBuffering(false)}
              onCanPlay={() => setIsBuffering(false)}
              onWaiting={() => setIsBuffering(true)}
              onError={() => {
                setIsBuffering(false);
                setStreamError(
                  'Kunne ikke spille av videoen. Sjekk internettforbindelsen.',
                );
              }}
              className="w-full h-full object-contain bg-slate-950"
            />

            {isBuffering && !streamError && (
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-950/35">
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950/85 border border-amber-400/40 text-amber-200 text-xs font-bold shadow-lg">
                  <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
                  <span>Starter video…</span>
                </div>
              </div>
            )}

            {streamError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-5 bg-slate-950/90 text-center">
                <p className="text-sm font-semibold text-rose-200 max-w-sm">
                  {streamError}
                </p>
                <button
                  type="button"
                  onClick={handleCloseVideo}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-xs font-bold text-slate-100 cursor-pointer"
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>Tilbake til bildet</span>
                </button>
              </div>
            )}

            <button
              id="btn-back-to-poster"
              type="button"
              onClick={handleCloseVideo}
              title="Lukk video og vis bildet igjen"
              className="absolute top-2.5 right-2.5 z-10 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-950/80 hover:bg-slate-900 text-slate-200 text-xs font-semibold border border-white/15 transition-all cursor-pointer"
            >
              <ImageIcon className="w-3.5 h-3.5 text-amber-300" />
              <span>Vis bilde</span>
            </button>
          </div>
        )}
      </div>

      {!compact && (
        <figcaption className="px-3.5 py-2 bg-slate-950/85 text-xs text-slate-300 border-t border-slate-800/80 leading-relaxed">
          {node.imageCaption}
        </figcaption>
      )}
    </figure>
  );
}
