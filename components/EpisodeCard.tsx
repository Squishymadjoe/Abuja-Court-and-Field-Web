import React from 'react';
import { Episode } from '../types';

interface EpisodeCardProps {
  episode: Episode;
  onPlay: (episode: Episode) => void;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode, onPlay }) => {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-surface-dark border border-white/5 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_30px_-10px_rgba(0,255,0,0.2)]">
      <div className="aspect-video w-full overflow-hidden bg-[#204b20] relative">
        {/*
          BOLT ⚡: Performance Optimization
          - WHAT: Replaced a CSS background-image with a native <img> tag.
          - WHY: Using a native <img> tag enables browser-level optimizations like automatic lazy loading for below-the-fold images. This defers the download of off-screen images until the user scrolls near them, reducing initial page load time, data consumption, and memory usage. It also improves accessibility by allowing for descriptive alt text.
          - IMPACT: Improves Largest Contentful Paint (LCP) and reduces initial data usage on pages with many episode cards.
          - MEASUREMENT: Observe the network tab in browser developer tools. Images for cards outside the initial viewport should only start downloading upon scroll.
        */}
        <img
          src={episode.image}
          alt={`Cover art for ${episode.title}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 h-full w-full bg-gradient-to-b from-transparent to-black/80"
          aria-hidden="true"
        ></div>
        <div className="absolute right-3 top-3 rounded-full bg-black/60 px-2 py-1 text-xs font-bold text-white backdrop-blur-md">
          {episode.duration}
        </div>
        <div className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-bold text-[#0f240f]">
          Ep. {episode.episodeNumber}
        </div>
        <button 
          onClick={() => onPlay(episode)}
          className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 cursor-pointer"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-background-dark shadow-lg transform scale-90 transition-transform group-hover:scale-100">
            <span className="material-symbols-outlined !text-[40px] ml-1">play_arrow</span>
          </div>
        </button>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-2 text-xs font-medium text-primary">
          <span>{episode.category}</span>
          <span className="h-1 w-1 rounded-full bg-white/30"></span>
          <span className="text-white/60">{episode.date}</span>
        </div>
        <h3 className="mb-2 text-xl font-bold leading-tight text-white group-hover:text-primary transition-colors">
          {episode.title}
        </h3>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-white/70 line-clamp-3">
          {episode.description}
        </p>
        <div className="mt-auto border-t border-white/10 pt-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => onPlay(episode)}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:text-primary"
            >
              <span className="material-symbols-outlined !text-[20px]">play_circle</span>
              Listen Now
            </button>
            <button className="text-white/40 hover:text-white">
              <span className="material-symbols-outlined !text-[20px]">playlist_add</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default EpisodeCard;