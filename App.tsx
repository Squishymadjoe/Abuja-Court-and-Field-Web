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
  // - WHAT: Wrapped handlePlayEpisode with useCallback to stabilize its reference.
  // - WHY: Prevents child components (Home, Episodes) from receiving new callback references on every App-level state change (e.g. isPlaying or currentEpisode toggles).
  const handlePlayEpisode = useCallback((episode: Episode) => {
    setCurrentEpisode(episode);
    setIsPlaying(true);
  }, []);

  // BOLT ⚡: Performance Optimization
  // - WHAT: Memoized the manual page routing element tree with useMemo.
  // - WHY: When the global audio player state (isPlaying or currentEpisode) updates, App re-renders.
  //   By memoizing the rendered page element tree using Same Element Reference, React skips re-rendering the active page component tree entirely.
  //   No page component needs to unnecessarily re-instantiate or re-render during global audio player toggling.
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