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

  /**
   * BOLT ⚡: Performance Optimization
   * - WHAT: Stabilized handlePlayEpisode with useCallback.
   * - WHY: This callback is passed down to page components and individual EpisodeCards.
   *   Without useCallback, a new function instance is created on every App render,
   *   triggering re-renders in children that rely on it.
   */
  const handlePlayEpisode = useCallback((episode: Episode) => {
    setCurrentEpisode(episode);
    setIsPlaying(true);
  }, []);

  /**
   * BOLT ⚡: Performance Optimization
   * - WHAT: Memoized the rendered page based on currentPage and handlePlayEpisode.
   * - WHY: This prevents the entire page component (e.g., Episodes) from being re-instantiated
   *   when global state like 'isPlaying' changes. This is critical for React.memo to work
   *   correctly in child components, as it prevents the entire component tree from being replaced.
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