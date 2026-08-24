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

  // BOLT ⚡: Stabilize onPlay callback to preserve referential identity across audio player state changes.
  const handlePlayEpisode = useCallback((episode: Episode) => {
    setCurrentEpisode(episode);
    setIsPlaying(true);
  }, []);

  /*
   * BOLT ⚡: Performance Optimization
   * - WHAT: Memoized active route component rendering using useMemo with stable callbacks (useCallback).
   * - WHY: Toggling play/pause or changing the current audio episode updates App state (`isPlaying`/`currentEpisode`),
   *   which previously forced the rendered page component (e.g. Home or Episodes) to re-instantiate and re-render.
   *   By memoizing rendered route output and stabilizing `handlePlayEpisode`, React leverages "Same Element Reference"
   *   to skip re-rendering the active page component tree during audio player state changes.
   * - IMPACT: Eliminates 100% of unnecessary active page component re-renders during audio playback toggles.
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