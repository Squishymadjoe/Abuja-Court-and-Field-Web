import React from 'react';

const Subscribe: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center px-4 py-12 md:py-20">
      <div className="flex flex-col max-w-[960px] w-full flex-1 gap-12">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-dark border border-[#234823] text-xs font-medium text-primary mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            New Episode Every Friday
          </div>
          <h1 className="text-white tracking-tight text-4xl md:text-6xl font-black leading-[1.1] pb-6 drop-shadow-xl">
            Never Miss a <span className="text-primary">Game</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
            Your courtside pass to Abuja's basketball and flag football scene. Follow us on your favorite platform for insider takes and exclusive stories.
          </p>
        </section>

        {/* Social Platforms Grid */}
        <section className="flex flex-col items-center gap-8 w-full">
          <div className="flex flex-wrap justify-center gap-4 w-full max-w-[800px]">
            {/* Spotify */}
            <a className="group flex flex-1 min-w-[160px] md:min-w-[200px] h-14 items-center justify-center gap-3 rounded-full bg-surface-dark border border-[#234823] hover:border-primary hover:bg-[#234823] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20" href="#">
              <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors">graphic_eq</span>
              <span className="text-white font-medium group-hover:text-white">Spotify</span>
            </a>
            {/* Apple Podcasts */}
            <a className="group flex flex-1 min-w-[160px] md:min-w-[200px] h-14 items-center justify-center gap-3 rounded-full bg-surface-dark border border-[#234823] hover:border-primary hover:bg-[#234823] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20" href="#">
              <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors">podcasts</span>
              <span className="text-white font-medium group-hover:text-white">Apple Podcasts</span>
            </a>
            {/* YouTube */}
            <a className="group flex flex-1 min-w-[160px] md:min-w-[200px] h-14 items-center justify-center gap-3 rounded-full bg-surface-dark border border-[#234823] hover:border-primary hover:bg-[#234823] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20" href="#">
              <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors">smart_display</span>
              <span className="text-white font-medium group-hover:text-white">YouTube</span>
            </a>
             {/* Instagram */}
            <a className="group flex flex-1 min-w-[160px] md:min-w-[200px] h-14 items-center justify-center gap-3 rounded-full bg-surface-dark border border-[#234823] hover:border-primary hover:bg-[#234823] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20" href="#">
              <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors">photo_camera</span>
              <span className="text-white font-medium group-hover:text-white">Instagram</span>
            </a>
            {/* X / Twitter */}
            <a className="group flex flex-1 min-w-[160px] md:min-w-[200px] h-14 items-center justify-center gap-3 rounded-full bg-surface-dark border border-[#234823] hover:border-primary hover:bg-[#234823] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20" href="#">
              <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors">flutter_dash</span>
              <span className="text-white font-medium group-hover:text-white">X / Twitter</span>
            </a>
          </div>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-[#234823] to-transparent"></div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1a331a] to-[#102210] border border-[#234823] shadow-2xl">
            {/* Decorative glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent-gold/10 blur-[80px] rounded-full pointer-events-none"></div>
            
            <div className="flex flex-col items-center justify-center gap-8 px-6 py-12 md:px-12 md:py-16 text-center relative z-10">
              <div className="flex flex-col gap-3 max-w-2xl">
                <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
                  Join the inner circle
                </h2>
                <p className="text-gray-400 text-base md:text-lg">
                  Get exclusive highlights, game schedules, and behind-the-scenes stories directly to your inbox.
                </p>
              </div>
              <form className="flex flex-col sm:flex-row w-full max-w-[560px] gap-3" onSubmit={(e) => e.preventDefault()}>
                <div className="flex-grow relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-gray-500 group-focus-within:text-primary transition-colors">mail</span>
                  </div>
                  <input 
                    type="email" 
                    required 
                    placeholder="Enter your email address" 
                    className="w-full h-14 pl-12 pr-4 rounded-full bg-[#0a160a] border border-[#234823] focus:border-primary focus:ring-1 focus:ring-primary text-white placeholder-gray-500 transition-all outline-none"
                  />
                </div>
                <button 
                  type="submit" 
                  className="h-14 px-8 rounded-full bg-primary hover:bg-[#0da00d] text-white font-bold tracking-wide shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all transform hover:scale-[1.02] whitespace-nowrap flex items-center justify-center gap-2"
                >
                  <span>Subscribe</span>
                  <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
                </button>
              </form>
              <p className="text-xs text-gray-500">
                No spam, just hoops. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Subscribe;