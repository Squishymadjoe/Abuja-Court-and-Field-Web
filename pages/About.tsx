import React from 'react';
import { HOSTS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full px-4 md:px-10 py-5 max-w-[1280px]">
        <div className="rounded-xl overflow-hidden relative min-h-[480px] flex flex-col justify-center items-center text-center p-8 md:p-16 gap-6 group" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDnzRxt3oKKTQKzODqxx3HaTHUkXJ5lGww07vF8E0YIFkRGD64lG4G5OMAKHoCobcQ2-J-1x5mhVjy9aGXRH24uysaWcsqd2KMXBn8vuZXhWwZ7EE4zMdFJJLflt7Rrar2jYqxCKDNVI2hWOWaWanGS9XvZlLOfbVd67AGevZCkZvc0Q4rtsN0-SdK8nQk1oDwUoZ9jDn3tIRct4CPh7YD2FGET_zIrlY2m0hSn4H-b2HCsrE9IQeKqMwdJ2bgS_RoefhU9H6UtY4sU")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="flex flex-col gap-4 max-w-3xl z-10">
            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tighter uppercase drop-shadow-lg">
              Meet the Voices <br/><span className="text-primary">Behind the Podcast</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-normal max-w-2xl mx-auto drop-shadow-md">
              Inside Abuja's Grassroots Sports Scene
            </p>
          </div>
          <div className="z-10 mt-4 flex gap-4">
            <div className="p-3 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
              <span className="material-symbols-outlined text-primary text-2xl">mic</span>
            </div>
            <div className="p-3 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
              <span className="material-symbols-outlined text-primary text-2xl">sports_basketball</span>
            </div>
            <div className="p-3 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
              <span className="material-symbols-outlined text-primary text-2xl">sports_football</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="w-full px-4 md:px-40 py-16 flex flex-col items-center text-center max-w-[1280px]">
        <div className="max-w-[800px] relative">
          <span className="material-symbols-outlined absolute -top-8 -left-8 md:-left-16 text-6xl text-primary/20 select-none">format_quote</span>
          <h2 className="text-white tracking-tight text-3xl md:text-4xl font-bold leading-tight mb-8">Our Mission</h2>
          <p className="text-gray-300 text-lg md:text-2xl font-light leading-relaxed">
            "We’re on a mission to showcase the best of Abuja’s grassroots basketball and flag football scene. From street courts to local leagues, we bring you the stories, the players, and the energy that make Abuja’s sports culture one of a kind."
          </p>
          <div className="h-1 w-24 bg-primary mx-auto mt-12 rounded-full"></div>
        </div>
      </div>

      {/* Hosts Section */}
      <div className="w-full px-4 md:px-10 py-12 max-w-[1280px]">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight uppercase">The Hosts</h2>
          <p className="text-gray-400 mt-2">Passionate storytellers of the game</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {HOSTS.map((host) => (
            <div key={host.name} className="group flex flex-col items-center bg-[#1a2e1a] p-8 rounded-xl shadow-lg border border-transparent hover:border-primary/50 transition-all duration-300">
              <div className="relative mb-6">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                  <img src={host.image} alt={host.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 bg-primary text-background-dark p-2 rounded-full border-4 border-[#1a2e1a]">
                  <span className="material-symbols-outlined text-xl">
                    {host.role.includes('Anchor') ? 'sports_basketball' : 'mic_external_on'}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1 text-center">{host.name}</h3>
              <p className="text-primary font-bold text-sm uppercase tracking-wider mb-4 text-center">{host.role}</p>
              <p className="text-gray-300 text-center leading-relaxed mb-6">
                {host.bio}
              </p>
              <div className="flex gap-4 mt-auto">
                <button className="text-gray-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">alternate_email</span></button>
                <button className="text-gray-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">link</span></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;