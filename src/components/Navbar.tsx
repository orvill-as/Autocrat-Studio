import React, { useState, useEffect } from 'react';
import { Github, Twitter, Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 px-4 py-3 transition-all duration-300 ${isScrolled ? 'bg-black/50' : ''}`}>
      <div className="max-w-[1200px] mx-auto">
        <div className={`relative backdrop-blur-md rounded-full border transition-all duration-300 ${
          isScrolled ? 'bg-black/40 border-white/20' : 'bg-white/5 border-white/10'
        }`}>
          <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 md:py-4">
            <div className="flex items-center">
              <a href="/" className="group transform transition-all duration-300 hover:opacity-80">
                <Logo />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white hover:text-gray-300 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex flex-1 justify-center">
              <div className="flex items-center space-x-4 lg:space-x-12">
                {['Testimonials', 'Services', 'Portfolio', 'Freebies', 'Open Source'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="relative nav-link text-gray-300 hover:text-white transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-[#FF00FF] after:to-[#3F51B5] after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              {[
                { Icon: Github, href: '#' },
                { Icon: Twitter, href: '#' }
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="text-gray-300 hover:text-white transform hover:scale-110 hover:rotate-3 transition-all duration-300"
                >
                  <Icon className="w-[22px] h-[22px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 mt-2 backdrop-blur-lg bg-black/90 rounded-2xl border border-white/10 p-4 transform transition-all duration-300">
              <div className="flex flex-col space-y-4">
                {['Testimonials', 'Services', 'Portfolio', 'Freebies', 'Open Source'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="nav-link text-gray-300 hover:text-white transition-all duration-300 px-2 py-1 rounded-lg hover:bg-white/5 hover:translate-x-2"
                  >
                    {item}
                  </a>
                ))}
                <div className="flex space-x-4 pt-4 border-t border-white/10">
                  {[
                    { Icon: Github, href: '#' },
                    { Icon: Twitter, href: '#' }
                  ].map(({ Icon, href }, index) => (
                    <a
                      key={index}
                      href={href}
                      className="text-gray-300 hover:text-white transform hover:scale-110 hover:rotate-3 transition-all duration-300"
                    >
                      <Icon className="w-[22px] h-[22px]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;