import React, { useState, useCallback, useMemo } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Episodes from './pages/Episodes';
import About from './pages/About';
import Contact from './pages/Contact';
import Subscribe from './pages/Subscribe';
import { Page, Episode } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentEpisode, setCurrentEpisode] = useState<Episode | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  /* BOLT ⚡: Performance Optimization
     - WHAT: Memoized the handlePlayEpisode callback using useCallback.
     - WHY: Prevents the recreation of this function on every App re-render (e.g., when toggling isPlaying).
            This is essential for React.memo to work on child components (Home, Episodes, EpisodeCard) that receive this as a prop.
     - IMPACT: Reduces redundant re-renders of the entire episode list when the player state changes.
  */
  const handlePlayEpisode = useCallback((episode: Episode) => {
    setCurrentEpisode(episode);
    setIsPlaying(true);
  }, []);

  /* BOLT ⚡: Performance Optimization
     - WHAT: Memoized the rendered page JSX using useMemo.
     - WHY: By stabilizing the JSX branch, we ensure that state changes in App that don't affect the current page
            (like isPlaying toggles) don't cause the entire page component tree to be re-evaluated by React.
     - IMPACT: Significant reduction in Virtual DOM diffing overhead during audio playback interactions.
  */
  const renderedPage = useMemo(() => {
    switch (currentPage) {
      case 'home':
        return <Home setPage={setCurrentPage} onPlay={handlePlayEpisode} />;
      case 'episodes':
        return <Episodes onPlay={handlePlayEpisode} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'subscribe':
        return <Subscribe />;
      default:
        return <Home setPage={setCurrentPage} onPlay={handlePlayEpisode} />;
    }
  }, [currentPage, handlePlayEpisode]);

  return (
    <Layout 
      currentPage={currentPage} 
      setCurrentPage={setCurrentPage}
      currentEpisode={currentEpisode}
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
    >
      {renderedPage}
    </Layout>
  );
};

export default App;