import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col justify-center items-center px-4 md:px-10 lg:px-40 py-12 md:py-20 relative min-h-[80vh]">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 rounded-bl-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-accent-gold/5 rounded-tr-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Left Column: Info & Context */}
        <div className="flex flex-col gap-8 justify-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
              <span className="size-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-medium text-primary tracking-wide uppercase">We are listening</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-gold">Touch</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Have questions about the league? Want to suggest a guest for the pod? Or just want to talk hoops? We’re all ears.
            </p>
          </div>
          
          {/* Contact Details Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors group">
              <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-black transition-colors">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <h3 className="text-white font-bold mb-1">Email Us</h3>
              <p className="text-gray-400 text-sm">hello@abujacourtfield.com</p>
              <p className="text-gray-400 text-sm">press@abujacourtfield.com</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors group">
              <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-black transition-colors">
                <span className="material-symbols-outlined">diversity_3</span>
              </div>
              <h3 className="text-white font-bold mb-1">Socials</h3>
              <p className="text-gray-400 text-sm mb-3">Connect for quick updates.</p>
              <div className="flex gap-3">
                 <button className="text-gray-400 hover:text-white transition-colors">
                    <span className="material-symbols-outlined">flutter_dash</span>
                 </button>
                 <button className="text-gray-400 hover:text-white transition-colors">
                    <span className="material-symbols-outlined">photo_camera</span>
                 </button>
                 <button className="text-gray-400 hover:text-white transition-colors">
                    <span className="material-symbols-outlined">smart_display</span>
                 </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: The Form */}
        <div className="flex flex-col justify-center">
          <form className="flex flex-col gap-6 bg-[#162916] border border-white/5 p-8 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden" onSubmit={(e) => e.preventDefault()}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
            <div className="flex flex-col gap-1">
              <h3 className="text-white text-xl font-bold">Send a message</h3>
              <p className="text-gray-400 text-sm">We usually respond within 24 hours.</p>
            </div>
            <div className="flex flex-col gap-5">
              <label className="flex flex-col gap-2">
                <span className="text-white text-sm font-semibold">Your Name</span>
                <input className="w-full rounded-lg bg-[#0d1a0d] border border-[#2a552a] text-white placeholder:text-gray-500 px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200" placeholder="e.g. Michael Jordan" type="text"/>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-white text-sm font-semibold">Email Address</span>
                <input className="w-full rounded-lg bg-[#0d1a0d] border border-[#2a552a] text-white placeholder:text-gray-500 px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200" placeholder="you@example.com" type="email"/>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-white text-sm font-semibold">Subject</span>
                <div className="relative">
                  <input className="w-full rounded-lg bg-[#0d1a0d] border border-[#2a552a] text-white placeholder:text-gray-500 px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 pl-10" placeholder="Guest suggestion" type="text"/>
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg pointer-events-none">topic</span>
                </div>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-white text-sm font-semibold">Message</span>
                <textarea className="w-full rounded-lg bg-[#0d1a0d] border border-[#2a552a] text-white placeholder:text-gray-500 px-4 py-3 min-h-[140px] resize-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200" placeholder="Tell us about the next big game in Abuja..."></textarea>
              </label>
            </div>
            <button className="mt-2 w-full bg-primary text-background-dark font-extrabold text-base py-4 rounded-lg hover:bg-white hover:shadow-[0_0_20px_rgba(10,194,10,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group" type="submit">
              <span>Send Message</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;