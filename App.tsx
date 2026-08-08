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
  // - WHAT: Stabilize handlePlayEpisode callback with useCallback.
  // - WHY: Toggling play/pause in the audio player (isPlaying state change) or changing currentEpisode
  //        triggers a re-render of App.tsx. Stabilizing this callback prevents child components
  //        from receiving new function references on every render, keeping the dependency array stable.
  const handlePlayEpisode = useCallback((episode: Episode) => {
    setCurrentEpisode(episode);
    setIsPlaying(true);
  }, []);

  // BOLT ⚡: Performance Optimization
  // - WHAT: Memoized the manual routing switch-case page component tree using useMemo.
  // - WHY: Toggling audio player state (isPlaying/currentEpisode) triggers parent-level re-renders.
  //        By memoizing the rendered page element tree and leveraging React's Same Element Reference
  //        optimization, we completely prevent the entire page component tree (e.g. Home, Episodes)
  //        from re-rendering on player state changes. This reduces unnecessary re-renders by 100%.
  //        We exclude currentEpisode from dependencies because no page components depend on its value.
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