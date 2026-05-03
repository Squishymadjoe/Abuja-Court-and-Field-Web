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
   * - WHY: Prevents child components (like EpisodeCard) from re-rendering due to
   *   function reference changes when App's state (e.g., isPlaying) updates.
   * - IMPACT: Essential for React.memo to work effectively in downstream components.
   */
  const handlePlayEpisode = useCallback((episode: Episode) => {
    setCurrentEpisode(episode);
    setIsPlaying(true);
  }, []);

  /**
   * BOLT ⚡: Performance Optimization
   * - WHAT: Memoized the page content with useMemo.
   * - WHY: Prevents the entire page from being re-instantiated when parent state (isPlaying)
   *   changes. Without this, the manual routing switch statement returns a new component
   *   instance every time, causing a full subtree re-render.
   * - IMPACT: Reduces re-renders of the episode list to zero during playback toggles.
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