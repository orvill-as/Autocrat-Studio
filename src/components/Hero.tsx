import React from 'react';
import DevelopmentVisualization from '../assets/images/Development_visualization.png';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 md:pt-28 lg:pt-32 overflow-x-hidden">
      {/* Enhanced background gradients */}
      <div className="absolute top-1/4 -left-1/4 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-[#FF00FF]/20 rounded-full filter blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-[#3F51B5]/20 rounded-full filter blur-[150px] animate-pulse" />

      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[120px] leading-[1] font-normal tracking-[-0.02em] transition-all duration-300">
          <div>
            <span className="gradient-text font-medium">Bring Ideas Alive</span>
          </div>
          <div className="text-white mt-2 sm:mt-4">Scalable AI.</div>
        </h1>

        <p className="mt-6 md:mt-8 lg:mt-12 text-[16px] sm:text-[18px] md:text-[20px] leading-[1.6] text-gray-300 max-w-[800px] mx-auto px-4 transition-all duration-300">
          Autocrat Studio will take your idea and develop it into a beautiful
          live project. Our goal is to provide quality, creativity, and
          innovation as a member of your extended team.
        </p>

        <div className="mt-8 md:mt-12 flex items-center justify-center gap-4 flex-col sm:flex-row px-4 sm:px-0">
          <button className="group relative w-full sm:w-auto px-8 sm:px-10 py-3 text-[15px] sm:text-[16px] rounded-[34px] bg-black h-[46px] sm:h-[50px] transform hover:scale-105 transition-all duration-300 ease-out">
            <span className="relative z-10 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FFFFFF] group-hover:to-[#D94FD5]">
              Get started
            </span>
            <div className="absolute inset-0 rounded-[34px] border-2 border-transparent bg-clip-border border-gradient-moving" />
          </button>

          <button className="group w-full sm:w-auto px-8 sm:px-10 py-3 text-[15px] sm:text-[16px] rounded-[34px] bg-black border-2 border-white/20 text-white h-[46px] sm:h-[50px] transform hover:scale-105 hover:border-white/40 transition-all duration-300 ease-out">
            <span className="relative z-10 group-hover:bg-gradient-to-r group-hover:from-[#FFFFFF] group-hover:to-[#D94FD5] group-hover:text-transparent group-hover:bg-clip-text">
              Ecosystems
            </span>
          </button>
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={DevelopmentVisualization}
              alt="Development Visualization"
              className="w-full h-auto rounded-2xl shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;