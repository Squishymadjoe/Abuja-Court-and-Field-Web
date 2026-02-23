import React, { memo } from 'react';
import EpisodeCard from '../components/EpisodeCard';
import { EPISODES } from '../constants';
import { Episode } from '../types';

interface EpisodesProps {
  onPlay: (episode: Episode) => void;
}

const Episodes: React.FC<EpisodesProps> = ({ onPlay }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-32 pb-20">
      <div className="mb-12">
        <h1 className="text-4xl font-black text-white md:text-5xl">All Episodes</h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-400">
          Catch up on all our conversations, from deep dives into league history to the latest game analysis.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {EPISODES.map((episode) => (
          <EpisodeCard
            key={episode.id}
            episode={episode}
            onPlay={() => onPlay(episode)}
          />
        ))}
      </div>
    </div>
  );
};

const MemoizedEpisodes = memo(Episodes);
MemoizedEpisodes.displayName = 'Episodes';

export default MemoizedEpisodes;