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

  // BOLT ⚡: Performance Optimization
  // - WHAT: Stabilized the onPlay callback using useCallback.
  // - WHY: Prevents child components (Home, Episodes, EpisodeCard) from re-rendering
  //        unnecessarily when App re-renders due to global state changes (like play/pause).
  const handlePlayEpisode = useCallback((episode: Episode) => {
    setCurrentEpisode(episode);
    setIsPlaying(true);
  }, []);

  // BOLT ⚡: Performance Optimization
  // - WHAT: Memoized the current page component using useMemo.
  // - WHY: Fixes a "render leak" where the manual routing switch-case was re-instantiating
  //        page components on every App render. Now, the page only re-renders if the
  //        currentPage or the stabilized handlePlayEpisode changes.
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