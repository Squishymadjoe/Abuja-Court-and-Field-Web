import React, { useState, useCallback, useMemo } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Episodes from './pages/Episodes';
import About from './pages/About';
import Contact from './pages/Contact';
import Subscribe from './pages/Subscribe';
import { Page, Episode } from './types';

const App: React.FC = () => {
  /*
    BOLT ⚡: Performance Optimization
    - WHAT: Stabilized 'handlePlayEpisode' callback with 'useCallback' and 'renderedPage' JSX with 'useMemo'.
    - WHY: Prevents the entire page component tree (Home, Episodes, etc.) from being re-instantiated and re-rendered when the App's state (like 'isPlaying') changes.
    - IMPACT: When toggling playback, only the Layout (containing the player) re-renders, while the main page content remains unchanged.
    - MEASUREMENT: Renders of Episodes and EpisodeCard components dropped from N to 0 during playback toggle (measured via console logs and Playwright).
  */
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentEpisode, setCurrentEpisode] = useState<Episode | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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