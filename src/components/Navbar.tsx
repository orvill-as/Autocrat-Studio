import React from 'react';
import { Github, Twitter } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 px-4 py-3">
      <div className="max-w-[1200px] mx-auto">
        <div className="relative backdrop-blur-md bg-white/5 rounded-full border border-white/10">
          <div className="flex items-center justify-between px-8 py-4">
            <div className="flex items-center">
              <Logo />
            </div>

            <div className="flex-1 flex justify-center">
              <div className="flex items-center space-x-12">
                <a
                  href="#"
                  className="nav-link text-gray-200 hover:text-white transition-colors"
                >
                  Testimonials
                </a>
                <a
                  href="#"
                  className="nav-link text-gray-200 hover:text-white transition-colors"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="nav-link text-gray-200 hover:text-white transition-colors"
                >
                  Portfolio
                </a>
                <a
                  href="#"
                  className="nav-link text-gray-200 hover:text-white transition-colors"
                >
                  Freebies
                </a>
                <a
                  href="#"
                  className="nav-link text-gray-200 hover:text-white transition-colors"
                >
                  Open Source
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-200 hover:text-white transition-colors"
              >
                <Github className="w-[22px] h-[22px]" />
              </a>
              <a
                href="#"
                className="text-gray-200 hover:text-white transition-colors"
              >
                <Twitter className="w-[22px] h-[22px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
