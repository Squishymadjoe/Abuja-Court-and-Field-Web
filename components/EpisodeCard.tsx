import React, { memo } from 'react';
import { Episode } from '../types';

interface EpisodeCardProps {
  episode: Episode;
  onPlay: () => void;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode, onPlay }) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-surface-dark transition-all hover:-translate-y-1 hover:bg-[#1c3d1c]">
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={episode.image}
          alt={episode.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
        <button 
          onClick={onPlay}
          className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-black shadow-2xl transition-transform hover:scale-110">
            <span className="material-symbols-outlined text-4xl filled">play_arrow</span>
          </div>
        </button>
        <div className="absolute top-4 left-4 flex gap-2">
            <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">EP {episode.episodeNumber}</span>
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-black">{episode.category}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center gap-2 text-xs font-medium text-gray-400">
            <span className="material-symbols-outlined text-[14px]">calendar_today</span>
            {episode.date}
            <span className="mx-1">•</span>
            <span className="material-symbols-outlined text-[14px]">schedule</span>
            {episode.duration}
        </div>
        <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-primary">{episode.title}</h3>
        <p className="mb-6 line-clamp-2 text-sm text-gray-400">{episode.description}</p>
        <button
          onClick={onPlay}
          className="mt-auto flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-primary"
        >
          Listen Now
          <span className="material-symbols-outlined text-[18px]">play_circle</span>
        </button>
      </div>
    </div>
  );
};

const MemoizedEpisodeCard = memo(EpisodeCard);
MemoizedEpisodeCard.displayName = 'EpisodeCard';

export default MemoizedEpisodeCard;