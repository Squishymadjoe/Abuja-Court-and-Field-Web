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
     - WHAT: Memoized the handlePlayEpisode callback using useCallback.
     - WHY: Prevents child components (like EpisodeCard) from re-rendering unnecessarily
            whenever the App component re-renders (e.g., when isPlaying state changes).
     - IMPACT: Reduces re-renders of all episode list items when toggling playback.
  */
  const handlePlayEpisode = useCallback((episode: Episode) => {
    setCurrentEpisode(episode);
    setIsPlaying(true);
  }, []);

  /* BOLT ⚡: Performance Optimization
     - WHAT: Memoized the rendered page component using useMemo.
     - WHY: In this SPA architecture, the routing logic in renderPage() returns a new
            element on every render. useMemo ensures the same element reference is
            preserved unless currentPage or the play handler changes.
     - IMPACT: Prevents the entire page content from being re-mounted or re-rendered
               unnecessarily when unrelated global state (like isPlaying) changes.
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