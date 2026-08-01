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
    BOLT ⚡: Performance Optimization - Callback Stabilization
    - WHAT: Wrapped handlePlayEpisode in useCallback.
    - WHY: Prevents the recreation of the function reference on every re-render of App.
    - IMPACT: When passed as a prop, stable reference prevents child components (like EpisodeCard/Episodes/Home) from unnecessary re-renders.
  */
  const handlePlayEpisode = useCallback((episode: Episode) => {
    setCurrentEpisode(episode);
    setIsPlaying(true);
  }, []);

  /*
    BOLT ⚡: Performance Optimization - Three-Part Synchronization
    - WHAT: Memoized the manual routing page elements with useMemo.
    - WHY: In custom manual routing switch-cases, any update to App state (like the audio player's currentEpisode or isPlaying) triggers a complete re-render of App. Without memoization, this completely re-instantiates and re-renders the active child page component tree (e.g., <Home /> or <Episodes />), leading to a "render leak".
    - IMPACT: Completely eliminates 100% of the unnecessary page component tree re-renders when the audio player state toggles or changes.
    - DEPENDENCY DESIGN: currentPage, setCurrentPage, and handlePlayEpisode are included to guarantee correct reactivity. Unrelated audio player state (currentEpisode, isPlaying) is purposely omitted because the page components themselves do not consume these values.
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