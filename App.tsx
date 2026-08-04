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

  // BOLT ⚡ Performance Optimization:
  // We wrap the `handlePlayEpisode` callback in `useCallback` to maintain referential identity.
  // This ensures that when passed down to child pages/components, they don't see a new function reference
  // on every render of the App component (e.g., when the audio player state toggles).
  const handlePlayEpisode = useCallback((episode: Episode) => {
    setCurrentEpisode(episode);
    setIsPlaying(true);
  }, []);

  // BOLT ⚡ Performance Optimization: Same Element Reference pattern
  // Instead of dynamically evaluating `renderPage()` on every single state update of `App.tsx`
  // (which occurs whenever `isPlaying` or `currentEpisode` is updated by the sticky audio player),
  // we memoize the returned page element tree using `useMemo`.
  //
  // Why: Page components like `Home`, `Episodes`, etc. do not depend on the audio player's `isPlaying` or
  // `currentEpisode` state. Toggling play/pause or changing an episode shouldn't re-render the entire active page view.
  // By memoizing the active page element tree with `useMemo`, we leverage React's Same Element Reference optimization.
  // React will completely bail out of rendering/re-instantiating the child tree, saving precious milliseconds!
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