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
   * - WHAT: Memoized the handlePlayEpisode callback using useCallback.
   * - WHY: This function is passed as a prop to Home and Episodes (and eventually to EpisodeCard).
   *        By stabilizing its reference, we prevent unnecessary re-renders of the entire episode
   *        list when App re-renders due to playback state changes (isPlaying, currentEpisode).
   * - IMPACT: Foundation for preventing "render leaks" in the component tree.
   */
  const handlePlayEpisode = useCallback((episode: Episode) => {
    setCurrentEpisode(episode);
    setIsPlaying(true);
  }, []);

  /**
   * BOLT ⚡: Performance Optimization
   * - WHAT: Memoized the active page component using useMemo.
   * - WHY: Previously, renderPage() was called on every App render, returning a new JSX element
   *        every time. This caused the entire page (Home, Episodes, etc.) to unmount/remount
   *        or at least re-render completely even when the page hadn't changed.
   *        By memoizing the result based ONLY on currentPage and stable callbacks, the page
   *        instance stays stable during playback state changes.
   * - IMPACT: Eliminates full-page re-renders during playback, reducing work from O(N) to O(1).
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