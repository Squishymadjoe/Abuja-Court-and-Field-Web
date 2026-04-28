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
   * - WHAT: Memoized the playback handler using useCallback.
   * - WHY: This ensures that child components (like Episodes and EpisodeCard) receive a stable
   *   function reference, preventing them from re-rendering when the App component's other
   *   state (like isPlaying) changes.
   */
  const handlePlayEpisode = useCallback((episode: Episode) => {
    setCurrentEpisode(episode);
    setIsPlaying(true);
  }, []);

  /**
   * BOLT ⚡: Performance Optimization
   * - WHAT: Memoized the routing logic using useMemo.
   * - WHY: The router branch creates new JSX elements on every render. By memoizing it
   *   and only depending on currentPage and the stable handlePlayEpisode, we prevent
   *   the entire page content from being re-instantiated and re-rendered when
   *   global player state (isPlaying) or currentEpisode changes.
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
  }, [currentPage, handlePlayEpisode, currentEpisode]);

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
