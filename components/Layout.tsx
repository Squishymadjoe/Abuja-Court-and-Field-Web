import React, { useState } from 'react';
import { Page, Episode } from '../types';

interface LayoutProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  children: React.ReactNode;
  currentEpisode: Episode | null;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

const Layout: React.FC<LayoutProps> = ({ 
  currentPage, 
  setCurrentPage, 
  children,
  currentEpisode,
  isPlaying,
  setIsPlaying
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background-dark text-white font-display">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-[#204b20]/50 bg-[#0f240f]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <button 
              onClick={() => setCurrentPage('home')}
              className="flex items-center gap-3 transition-opacity hover:opacity-80"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-background-dark">
                <span className="material-symbols-outlined !text-[20px] font-bold">sports_basketball</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-white hidden md:block">Abuja Court & Field</span>
            </button>
            <nav className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => setCurrentPage('home')}
                className={`text-sm font-medium transition-colors ${currentPage === 'home' ? 'text-primary' : 'text-white/70 hover:text-primary'}`}
              >
                Home
              </button>
              <button 
                onClick={() => setCurrentPage('episodes')}
                className={`text-sm font-medium transition-colors ${currentPage === 'episodes' ? 'text-primary' : 'text-white/70 hover:text-primary'}`}
              >
                Episodes
              </button>
              <button 
                onClick={() => setCurrentPage('about')}
                className={`text-sm font-medium transition-colors ${currentPage === 'about' ? 'text-primary' : 'text-white/70 hover:text-primary'}`}
              >
                About
              </button>
              <button 
                onClick={() => setCurrentPage('contact')}
                className={`text-sm font-medium transition-colors ${currentPage === 'contact' ? 'text-primary' : 'text-white/70 hover:text-primary'}`}
              >
                Contact
              </button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex h-10 w-64 items-center rounded-full bg-[#1a3a1a] px-4 ring-1 ring-inset ring-white/10 focus-within:ring-primary">
              <span className="material-symbols-outlined text-gray-400">search</span>
              <input 
                type="text" 
                placeholder="Search episodes..." 
                className="flex-1 bg-transparent border-none text-sm text-white placeholder:text-gray-400 focus:ring-0 focus:outline-none ml-2" 
              />
            </div>
            <button 
              onClick={() => setCurrentPage('subscribe')}
              className="flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-bold text-[#0f240f] transition-transform hover:scale-105"
            >
              Subscribe
            </button>
            <button 
                className="md:hidden text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
            <div className="md:hidden border-t border-white/10 bg-[#0f240f] p-4 flex flex-col gap-4">
                 <button 
                onClick={() => {setCurrentPage('home'); setMobileMenuOpen(false)}}
                className={`text-sm font-medium text-left ${currentPage === 'home' ? 'text-primary' : 'text-white/70'}`}
              >
                Home
              </button>
              <button 
                onClick={() => {setCurrentPage('episodes'); setMobileMenuOpen(false)}}
                className={`text-sm font-medium text-left ${currentPage === 'episodes' ? 'text-primary' : 'text-white/70'}`}
              >
                Episodes
              </button>
              <button 
                onClick={() => {setCurrentPage('about'); setMobileMenuOpen(false)}}
                className={`text-sm font-medium text-left ${currentPage === 'about' ? 'text-primary' : 'text-white/70'}`}
              >
                About
              </button>
              <button 
                onClick={() => {setCurrentPage('contact'); setMobileMenuOpen(false)}}
                className={`text-sm font-medium text-left ${currentPage === 'contact' ? 'text-primary' : 'text-white/70'}`}
              >
                Contact
              </button>
            </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Sticky Audio Player Footer */}
      {currentEpisode && (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0f230f]/95 backdrop-blur-lg">
          <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:gap-8 sm:px-6 lg:px-8">
            {/* Now Playing Info */}
            <div className="hidden w-1/3 min-w-0 items-center gap-3 sm:flex">
              <div 
                className="h-12 w-12 shrink-0 rounded-lg bg-cover bg-center" 
                style={{ backgroundImage: `url('${currentEpisode.image}')` }}
              ></div>
              <div className="min-w-0 flex-col">
                <p className="truncate text-sm font-bold text-white">{currentEpisode.title}</p>
                <p className="truncate text-xs text-white/50">Ep. {currentEpisode.episodeNumber} • Abuja Court & Field</p>
              </div>
            </div>
            
            {/* Player Controls */}
            <div className="flex flex-1 flex-col items-center justify-center gap-2 sm:w-1/3">
              <div className="flex items-center gap-4 sm:gap-6">
                <button className="text-white/60 hover:text-white">
                  <span className="material-symbols-outlined !text-[24px]">skip_previous</span>
                </button>
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black hover:scale-105 transition-transform"
                >
                  <span className="material-symbols-outlined !text-[28px] fill-current">
                    {isPlaying ? 'pause' : 'play_arrow'}
                  </span>
                </button>
                <button className="text-white/60 hover:text-white">
                  <span className="material-symbols-outlined !text-[24px]">skip_next</span>
                </button>
              </div>
              {/* Progress Bar */}
              <div className="flex w-full items-center gap-3 text-xs text-white/60">
                <span>12:45</span>
                <div className="group relative h-1 w-full cursor-pointer rounded-full bg-white/20">
                  <div className="absolute h-full w-[35%] rounded-full bg-primary group-hover:bg-primary/80"></div>
                </div>
                <span>{currentEpisode.duration}</span>
              </div>
            </div>
            
            {/* Volume/Extra Controls */}
            <div className="hidden w-1/3 justify-end gap-4 sm:flex">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-white/60 !text-[20px]">volume_up</span>
                <div className="h-1 w-20 rounded-full bg-white/20">
                  <div className="h-full w-[70%] rounded-full bg-white"></div>
                </div>
              </div>
              <button className="text-white/60 hover:text-white">
                <span className="material-symbols-outlined !text-[20px]">more_horiz</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;