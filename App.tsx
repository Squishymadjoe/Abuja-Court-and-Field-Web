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

  /*
   * BOLT ⚡: Performance Optimization
   * - WHAT: Stabilized handlePlayEpisode with useCallback.
   * - WHY: Prevents creating a new function reference on every App state update (such as audio play/pause toggles).
   */
  const handlePlayEpisode = useCallback((episode: Episode) => {
    setCurrentEpisode(episode);
    setIsPlaying(true);
  }, []);

  /*
   * BOLT ⚡: Performance Optimization
   * - WHAT: Memoized page rendering using useMemo (Same Element Reference optimization).
   * - WHY: Toggling play/pause or changing audio player state updates App state (isPlaying/currentEpisode).
   *   Without useMemo, every state change in App re-rendered the entire active page component tree (Home, Episodes, etc.).
   *   By memoizing the switch result based only on currentPage, setCurrentPage, and handlePlayEpisode,
   *   audio player interactions no longer trigger unnecessary re-renders of the page components.
   * - IMPACT: Eliminates 100% of page component re-renders when toggling play/pause or updating audio state.
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
  }, [currentPage, setCurrentPage, handlePlayEpisode]);

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