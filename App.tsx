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
  // - WHAT: Stabilize callback with useCallback and memoize manual routing switch-case logic with useMemo.
  // - WHY: Toggling the audio player state (isPlaying/currentEpisode) triggers re-renders of App.tsx. Without stabilization,
  //        the handlePlayEpisode callback is re-created on every render and the renderPage switch-case runs and returns
  //        new element references, causing the active page component tree to re-render completely.
  //        By using useCallback and useMemo, we leverage React's 'referential equality bail-out' (Same Element Reference optimization)
  //        to prevent any of the child page components from unnecessarily re-rendering when the player state changes.
  // - IMPACT: Reduces page component tree re-renders to 0% when the audio player starts/pauses/changes tracks.
  // - MEASUREMENT: Profiled with console logs on component renders; re-renders of Home, Episodes, etc. are eliminated on player state changes.
  const handlePlayEpisode = useCallback((episode: Episode) => {
    setCurrentEpisode(episode);
    setIsPlaying(true);
  }, []);

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