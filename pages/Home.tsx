import React from 'react';
import { Page, Episode } from '../types';
import { EPISODES } from '../constants';

interface HomeProps {
  setPage: (page: Page) => void;
  onPlay: (episode: Episode) => void;
}

const Home: React.FC<HomeProps> = ({ setPage, onPlay }) => {
  return (
    <div className="relative flex w-full flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-12">
        <div className="absolute inset-0 z-0">
          {/*
            BOLT ⚡: Performance Optimization
            - WHAT: Replaced a CSS background-image with an <img> tag for the hero image.
            - WHY: Using an <img> tag allows the browser's preload scanner to discover and start downloading the image much earlier in the page load process. CSS background images are only discovered after CSS is parsed, which can delay the download of a critical, above-the-fold image like this one.
            - IMPACT: This change significantly improves the Largest Contentful Paint (LCP) metric, a key indicator of perceived load speed.
            - MEASUREMENT: LCP can be measured using tools like Lighthouse or WebPageTest. The image request should appear earlier in the network waterfall chart.
          */}
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjWHyzKV3JJnLN5eM1E_r9yBizPZuBX7qdgzPD0DLNm_SkemNgCIgfiPg12oHvrzL8bI0iaxYQSXQGWDtmjLfaz4rJCrX_fqe_1J3rQgflgA4n78kgb-PdPqZYc4tswg1585xnQl-IJudtFgPYgCq2rj2aSolwhMNNEfyRoi90PwICzYey1rdnCfrFQhnW5J1AcoeB1k8XsrxINGu4CAMW9WyYxMGEZzdjIM474ABIBPSBnqU2sa061jkUIv8gRv1mg4qFRrST089Y"
            alt="An intense basketball game in action, serving as a dramatic backdrop for the podcast hero section."
            fetchpriority="high"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/50 to-transparent"></div>
        </div>
        <div className="relative z-10 flex max-w-4xl flex-col items-center gap-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-gold/30 bg-accent-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-gold backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-accent-gold animate-pulse"></span>
            New Episode Out Now
          </div>
          <h1 className="text-5xl font-black leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
            Your Frontrow Seat to <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">Abuja’s Court Scene</span>
          </h1>
          <p className="max-w-2xl text-lg font-light text-gray-300 sm:text-xl">
            Unfiltered stories, insider takes, and the raw energy of the capital's basketball and flag football leagues.
          </p>
          <div className="mt-4 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button 
              onClick={() => onPlay(EPISODES[0])}
              className="flex h-12 w-full min-w-[160px] items-center justify-center gap-2 rounded-full bg-primary px-8 text-base font-bold text-black transition-all hover:bg-primary-dark sm:w-auto"
            >
              <span className="material-symbols-outlined filled">play_circle</span>
              Listen Now
            </button>
            <button 
              onClick={() => setPage('episodes')}
              className="flex h-12 w-full min-w-[160px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 sm:w-auto"
            >
              View Highlights
            </button>
          </div>
        </div>
        
        {/* Scrolling Text */}
        <div className="absolute bottom-0 w-full overflow-hidden whitespace-nowrap py-4 opacity-20 select-none">
          <div className="inline-block animate-[scroll_20s_linear_infinite]">
            <span className="mx-4 text-6xl font-black uppercase text-transparent stroke-text">Garki Games</span>
            <span className="mx-4 text-6xl font-black uppercase text-transparent stroke-text">Wuse II Kings</span>
            <span className="mx-4 text-6xl font-black uppercase text-transparent stroke-text">Maitama Ballers</span>
            <span className="mx-4 text-6xl font-black uppercase text-transparent stroke-text">Jabi Lakers</span>
            <span className="mx-4 text-6xl font-black uppercase text-transparent stroke-text">Central Area Flag</span>
          </div>
        </div>
      </section>
      
      {/* Featured Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Listen In</h2>
              <h3 className="mt-2 text-3xl font-bold text-white md:text-4xl">Featured Episodes</h3>
            </div>
            <button 
              onClick={() => setPage('episodes')}
              className="hidden items-center gap-1 text-sm font-bold text-white underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-primary sm:flex"
            >
              View All Episodes 
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
          <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8 [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
             {EPISODES.slice(0, 4).map((episode) => (
               <div key={episode.id} className="group relative min-w-[300px] flex-1 max-w-[400px] snap-center rounded-2xl bg-surface-dark p-4 transition-transform hover:-translate-y-1">
                 <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-black">
                  {/*
                    BOLT ⚡: Performance Optimization
                    - WHAT: Replaced a CSS background-image with an <img> tag for featured episode cards.
                    - WHY: Using an <img> tag with `loading="lazy"` defers the loading of these below-the-fold images until they are about to enter the viewport. This reduces the initial page load size and saves bandwidth, improving performance, especially on mobile devices.
                    - IMPACT: Faster initial page load and reduced data consumption.
                    - MEASUREMENT: Observe the network tab in browser dev tools. These images should only be requested as the user scrolls them into view.
                  */}
                  <img
                    src={episode.image}
                    alt={`Cover art for ${episode.title}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                   <button 
                     onClick={() => onPlay(episode)}
                     className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-black shadow-lg transition-transform hover:scale-110 active:scale-95"
                   >
                     <span className="material-symbols-outlined filled">play_arrow</span>
                   </button>
                   <span className="absolute top-4 left-4 rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">EP {episode.episodeNumber}</span>
                 </div>
                 <div className="mt-5 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xs font-medium text-primary">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        {episode.category}
                    </div>
                    <h4 className="text-xl font-bold leading-tight text-white group-hover:text-primary transition-colors">{episode.title}</h4>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-[#0A0F0A] py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="mx-auto max-w-7xl px-4 relative z-10">
            <div className="mb-10 text-center md:text-left">
                <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Must Watch</h2>
                <h3 className="mt-2 text-3xl font-bold text-white md:text-4xl">Highlight Reel</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 h-auto md:h-[600px]">
                <div className="group relative col-span-1 row-span-1 md:col-span-2 md:row-span-2 overflow-hidden rounded-3xl bg-surface-dark cursor-pointer">
                    <div className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDmamKQFLSBU9m3x4-xX6aQt5abN6S1n9T6X6OxcH8MjRN8xLvIIRTJP64dLS4F2O5bZucfV-ehPKsc_sqE8WD8BeZaNvOjwRUTrgFR8nDHe6PQPajMK0ZHatQpwWPRXhXJw2LO6qKnlX6gDlTT51GyxwyfnwVsJJ78-8uWpgT2ZMH_fEil7Q7lZp7jhruZUevPFcAZZ5BgF9k5cwviL7HtMHNzhaMx0x3XAHAyIggD18fXQ0pgOzGLxa--wbUuLsBkn-GCWPqSChv1")'}}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8">
                        <span className="mb-2 inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold text-black">Top Play</span>
                        <h4 className="text-2xl font-bold text-white md:text-3xl">Buzzer Beater: Wuse vs Garki</h4>
                        <p className="mt-2 text-sm text-gray-300">The last 3 seconds that changed the entire championship bracket.</p>
                    </div>
                     <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all group-hover:bg-white/30 group-hover:scale-110">
                        <span className="material-symbols-outlined text-4xl text-white">play_arrow</span>
                    </div>
                </div>
                <div className="group relative col-span-1 row-span-1 overflow-hidden rounded-3xl bg-surface-dark cursor-pointer min-h-[200px]">
                    <div className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCBhYMgT980sblmLf4LiVl7TQfo9QqEAFTcmV4sx5jbEfN8mtRChux1sQwH6XUdXajig9ixZtS8jTAtCICdeNfkocJ0B31T_OqQJh9zpMFh_AW8nvW4bVLejZUiosSlmbtgHAO00Xt6_segxM1ivQ5LJ5iBIFwF8YyhfVZAdAAMTbePaxk58Lon3SLOMpnnZ6xB0rBmmVnNbopT2wIFKYoijIJpbqND0Wr2Y63NG7LXGpT5d0NzCjaha5SP0rq0lLlg2B4evSDXilg1")'}}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                        <h4 className="text-lg font-bold text-white">Best Flag Pulls</h4>
                    </div>
                </div>
                 <div className="group relative col-span-1 row-span-1 overflow-hidden rounded-3xl bg-surface-dark cursor-pointer min-h-[200px]">
                    <div className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBtSkX3RrqjEjkK6-bw68YlCskmFoa1h07IJqu_2_GU7V5p8lLEesk4mlq0JTf7cqXIrIr5NpZ2bBXSa4hnJuB5a7LLhP9MNEHHyvl0P1t4mEG0twRS2NxjV_azoaLg_Pgt-0KWY69tU6iu83fg78kiG9UkMo9gUWnKWNBn759CJKTb8D4W4c3d07zB9QnywpdLZ2k-weQ4M8xBHxGdItOtuWQBB94AseGWw8NNDPE_VuxX3tX-RHAy54g3WltWyxg-wH5aevUuUmEb")'}}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                        <h4 className="text-lg font-bold text-white">Trash Talk Mic'd Up</h4>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <style>
        {`
            @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
        `}
      </style>
    </div>
  );
};

export default Home;