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
  // - WHAT: Stabilized the onPlay handler with useCallback.
  // - WHY: Prevents handlePlayEpisode from being re-created on every single render of App.
  // - IMPACT: Ensures child components (like Home and Episodes) do not receive new function references,
  //           allowing React's referential equality check to bypass redundant re-renders.
  const handlePlayEpisode = useCallback((episode: Episode) => {
    setCurrentEpisode(episode);
    setIsPlaying(true);
  }, []);

  // BOLT ⚡: Performance Optimization
  // - WHAT: Memoized the manual page routing switcher using useMemo.
  // - WHY: Toggling play/pause or changing current episode in the player footer updates parent states (isPlaying/currentEpisode).
  //        Without memoization, these state updates force App to re-render, re-instantiating the entire active page component tree.
  // - IMPACT: Utilizing React's 'Same Element Reference' bail-out optimization.
  //           When the parent App updates unrelated state (like isPlaying or currentEpisode),
  //           useMemo returns the exact same rendered React element tree. React recognizes that the element
  //           has not changed and completely bails out of re-rendering/re-instantiating the entire page component tree.
  //           This reduces render overhead by 100% for unrelated audio player interactions.
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