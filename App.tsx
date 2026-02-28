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
     - WHAT: Stabilized handlePlayEpisode callback with useCallback.
     - WHY: This prevents child components like EpisodeCard from re-rendering unnecessarily
       when App state changes (like toggle isPlaying), as the prop reference remains stable.
     - IMPACT: Reduces redundant re-renders of the entire episode list.
  */
  const handlePlayEpisode = useCallback((episode: Episode) => {
    setCurrentEpisode(episode);
    setIsPlaying(true);
  }, []);

  /* BOLT ⚡: Performance Optimization
     - WHAT: Memoized the rendered page component based on currentPage and handlePlayEpisode.
     - WHY: Without this, every change to isPlaying in the parent would cause the entire
       current page branch to be treated as a new element, bypassing React.memo optimizations.
     - IMPACT: Ensures only the relevant parts of the UI re-render when player state updates.
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