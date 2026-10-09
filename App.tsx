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

  // BOLT ⚡: Stabilize handler callback to prevent unnecessary re-renders of memoized child trees
  const handlePlayEpisode = useCallback((episode: Episode) => {
    setCurrentEpisode(episode);
    setIsPlaying(true);
  }, []);

  /*
    BOLT ⚡: Performance Optimization
    - WHAT: Memoized active page component creation using React.useMemo based on routing state.
    - WHY: Toggling play/pause or audio player state in Layout triggers a re-render of App. Without useMemo,
           renderPage() returns a new React element tree on every render, causing the active page (e.g. Home, Episodes)
           and all of its child components (such as EpisodeCards) to unnecessarily re-render on every play/pause toggle.
    - IMPACT: Eliminates 100% of unnecessary re-renders of the active page component tree when audio player state changes.
    - MEASUREMENT: Can be verified by counting component renders on audio play/pause toggles before and after this change.
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
