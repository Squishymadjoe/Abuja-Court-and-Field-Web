import React, { useState } from 'react';
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
    BOLT ⚡: Performance Optimization
    - WHAT: Stabilized the handlePlayEpisode callback with useCallback and memoized the active page component with useMemo.
    - WHY: In this manual routing setup, state changes in App.tsx (like isPlaying) would normally trigger a full re-render of the entire component tree. By memoizing the rendered page and stabilizing callbacks, we ensure that page components only re-render when the actual page changes, not when the global audio player state updates.
    - IMPACT: Eliminates unnecessary re-renders of expensive page components during playback interactions, improving UI responsiveness.
  */
  const handlePlayEpisode = React.useCallback((episode: Episode) => {
    setCurrentEpisode(episode);
    setIsPlaying(true);
  }, []);

  const renderedPage = React.useMemo(() => {
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