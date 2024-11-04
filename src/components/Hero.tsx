import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-40 overflow-x-hidden">
      {/* Background gradients - adjusted positions */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#FF00FF]/20 rounded-full filter blur-[120px]" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-[#3F51B5]/20 rounded-full filter blur-[120px]" />

      <div className="relative max-w-[1400px] mx-auto px-8 text-center">
        <h1 className="text-[120px] leading-[1.1] font-normal tracking-[-0.02em]">
          <div>
            <span className="gradient-text">Bring Ideas Alive</span>
          </div>
          <div className="text-white">Scalable AI.</div>
        </h1>

        <p className="mt-12 text-[18px] leading-[1.6] text-gray-300 max-w-[800px] mx-auto">
          Autocrat Studio will take your idea and develop it into a beautiful
          live project. Our goal is to provide quality, creativity, and
          innovation as a member of your extended team.
        </p>

        <div className="mt-12 flex items-center justify-center gap-4">
          <button className="relative px-10 py-3 text-[15px] rounded-[34px] bg-black h-[46px] hover:scale-105 transition-transform duration-300 ease-in-out">
            <span className="relative z-10 text-white">Get started</span>
            <div className="absolute inset-0 rounded-[34px] border-2 border-transparent bg-clip-border" style={{
              backgroundImage: 'linear-gradient(to right, #FF3BFF, #ECBFBF, #5C24FF, #D94FD5)'
            }} />
          </button>
          <button className="px-8 py-3 text-[15px] rounded-[34px] bg-black border-2 border-[white] text-white h-[46px] hover:scale-105 transition-transform duration-300 ease-in-out">
            <span className="relative z-10">Ecosystems</span>
          </button>
        </div>

        <div className="mt-24">
          <img
            src="https://i.postimg.cc/02vg0P74/123-Z-2101-w020-n001-946-B-p15-1.png"
            alt="Development Visualization"
            className="w-full max-w-full rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
