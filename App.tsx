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
    BOLT ⚡: Performance Optimization - Three-Part Synchronization
    - WHAT: Stabilized the callback using `useCallback` to prevent it from being recreated on every parent re-render.
    - WHY: This ensures a stable reference is passed down as a prop to children, avoiding unnecessary re-renders of the page components.
  */
  const handlePlayEpisode = useCallback((episode: Episode) => {
    setCurrentEpisode(episode);
    setIsPlaying(true);
  }, []);

  /*
    BOLT ⚡: Performance Optimization - Same Element Reference (Manual Routing Switch)
    - WHAT: Memoized the manual routing switch-case logic using `useMemo` so that the returned React element tree is cached.
    - WHY: Toggling the global audio player state (isPlaying/currentEpisode) triggers parent `App` re-renders.
            By caching the page element tree and only listing `currentPage`, `setCurrentPage`, and `handlePlayEpisode` as dependencies,
            we prevent the active page tree from being re-instantiated on audio player state changes. React automatically bails out
            of re-rendering if the elements are referentially identical (Same Element Reference optimization).
            We explicitly omit `currentEpisode` and `isPlaying` from the dependency array because no page component depends on these.
    - IMPACT: 100% reduction in page component re-renders when interacting with the global audio player.
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