import { useState, useEffect } from 'react';
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
    <nav className="fixed w-full z-50">
      <div className="max-w-[1200px] mx-auto px-4 py-3">
        <div className={`relative rounded-full border transition-all duration-300 backdrop-blur-md ${
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
          <div className={`md:hidden absolute top-full left-0 w-full mt-2 rounded-lg border border-white/10 bg-black/90 backdrop-blur-md transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}>
            <div className="py-4 px-6 space-y-4">
              {['Testimonials', 'Services', 'Portfolio', 'Freebies', 'Open Source'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-gray-300 hover:text-white transition-all duration-300"
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;