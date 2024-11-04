import React, { useState } from 'react';
import { Github, Twitter, Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 px-4 py-3">
      <div className="max-w-[1200px] mx-auto">
        <div className="relative backdrop-blur-md bg-white/1 rounded-full border border-white/10">
          <div className="flex items-center justify-between px-4 md:px-8 py-4">
            <div className="flex items-center">
              <Logo />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex flex-1 justify-center">
              <div className="flex items-center space-x-6 lg:space-x-12">
                <a href="#" className="nav-link text-gray-200 hover:text-white transition-colors">
                  Testimonials
                </a>
                <a href="#" className="nav-link text-gray-200 hover:text-white transition-colors">
                  Services
                </a>
                <a href="#" className="nav-link text-gray-200 hover:text-white transition-colors">
                  Portfolio
                </a>
                <a href="#" className="nav-link text-gray-200 hover:text-white transition-colors">
                  Freebies
                </a>
                <a href="#" className="nav-link text-gray-200 hover:text-white transition-colors">
                  Open Source
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                <Github className="w-[22px] h-[22px]" />
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                <Twitter className="w-[22px] h-[22px]" />
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-black rounded-2xl border border-white/10 p-4">
              <div className="flex flex-col space-y-4">
                <a href="#" className="nav-link text-gray-200 hover:text-white transition-colors">
                  Testimonials
                </a>
                <a href="#" className="nav-link text-gray-200 hover:text-white transition-colors">
                  Services
                </a>
                <a href="#" className="nav-link text-gray-200 hover:text-white transition-colors">
                  Portfolio
                </a>
                <a href="#" className="nav-link text-gray-200 hover:text-white transition-colors">
                  Freebies
                </a>
                <a href="#" className="nav-link text-gray-200 hover:text-white transition-colors">
                  Open Source
                </a>
                <div className="flex space-x-4 pt-4 border-t border-white/10">
                  <a href="#" className="text-gray-200 hover:text-white transition-colors">
                    <Github className="w-[22px] h-[22px]" />
                  </a>
                  <a href="#" className="text-gray-200 hover:text-white transition-colors">
                    <Twitter className="w-[22px] h-[22px]" />
                  </a>
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
