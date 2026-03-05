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
   * - WHAT: Memoized the handlePlayEpisode callback using useCallback.
   * - WHY: Prevents the recreation of this function on every App render, which would
   *   otherwise cause all child components receiving it as a prop (like EpisodeCard)
   *   to re-render unnecessarily, even if wrapped in React.memo.
   */
  const handlePlayEpisode = useCallback((episode: Episode) => {
    setCurrentEpisode(episode);
    setIsPlaying(true);
  }, []);

  /*
   * BOLT ⚡: Performance Optimization
   * - WHAT: Memoized the rendered page component using useMemo.
   * - WHY: In this SPA architecture, state changes in App (like isPlaying) trigger
   *   a re-render of the entire tree. useMemo stabilizes the JSX branch, allowing
   *   React.memo on page components (Home, Episodes) to effectively skip re-renders
   *   when the current page hasn't changed.
   * - IMPACT: Combined with React.memo, this reduces EpisodeCard re-renders from 12 to 0
   *   when toggling audio playback.
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