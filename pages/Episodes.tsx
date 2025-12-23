import React from 'react';
import EpisodeCard from '../components/EpisodeCard';
import { EPISODES } from '../constants';
import { Episode } from '../types';

interface EpisodesProps {
  onPlay: (episode: Episode) => void;
}

const Episodes: React.FC<EpisodesProps> = ({ onPlay }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title Area */}
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">The Archive</h1>
          <p className="mt-2 text-lg text-white/60">Dive into the stories shaping Abuja's basketball and flag football culture.</p>
        </div>
        <div className="flex gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
            {EPISODES.length} Episodes
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/10">
            Updated Weekly
          </span>
        </div>
      </div>

      {/* Filters Section */}
      <div className="sticky top-[64px] z-40 -mx-4 mb-8 overflow-x-auto bg-[#0f230f]/95 px-4 py-4 backdrop-blur-sm sm:mx-0 sm:overflow-visible sm:bg-transparent sm:px-0 sm:backdrop-blur-none border-b border-white/5 sm:border-none">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full bg-[#1a3a1a] p-1 pr-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-background-dark">
              <span className="material-symbols-outlined !text-[18px]">filter_list</span>
            </span>
            <span className="text-sm font-medium text-white">Filters</span>
          </div>
          <div className="h-6 w-px bg-white/10"></div>
          <button className="group flex h-9 items-center gap-2 rounded-full border border-white/10 bg-[#1a3a1a] px-4 text-sm font-medium text-white transition hover:border-primary/50 hover:bg-[#234d23]">
            <span>Season</span>
            <span className="material-symbols-outlined text-white/50 group-hover:text-primary !text-[18px]">keyboard_arrow_down</span>
          </button>
          <button className="group flex h-9 items-center gap-2 rounded-full border border-white/10 bg-[#1a3a1a] px-4 text-sm font-medium text-white transition hover:border-primary/50 hover:bg-[#234d23]">
            <span>Topic</span>
            <span className="material-symbols-outlined text-white/50 group-hover:text-primary !text-[18px]">keyboard_arrow_down</span>
          </button>
          <button className="group flex h-9 items-center gap-2 rounded-full border border-white/10 bg-[#1a3a1a] px-4 text-sm font-medium text-white transition hover:border-primary/50 hover:bg-[#234d23]">
            <span>Guest</span>
            <span className="material-symbols-outlined text-white/50 group-hover:text-primary !text-[18px]">keyboard_arrow_down</span>
          </button>
          <button className="ml-auto text-sm text-white/50 hover:text-primary transition-colors hidden sm:block">
            Reset all
          </button>
        </div>
      </div>

      {/* Episodes Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {EPISODES.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} onPlay={onPlay} />
        ))}
      </div>

      {/* Infinite Scroll Loader */}
      <div className="mt-16 flex flex-col items-center justify-center gap-4 pb-12">
        <div className="flex items-center gap-2 text-primary">
          <span className="material-symbols-outlined animate-spin">refresh</span>
          <span className="text-sm font-medium">Loading more episodes...</span>
        </div>
        <div className="h-1 w-24 overflow-hidden rounded-full bg-[#1a3a1a]">
          <div className="h-full w-1/2 animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-primary to-transparent" style={{ transform: 'translateX(-100%)' }}></div>
        </div>
        <style>
          {`
            @keyframes shimmer {
              100% {
                transform: translateX(100%);
              }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Episodes;