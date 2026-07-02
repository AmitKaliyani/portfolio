import React, { useState } from 'react';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import { Link } from 'react-router';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  const closeMenu = () => {
    setToggleMenu(false);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <nav className="bg-[#0B0F19]/80 backdrop-blur-md text-gray-300 border-b border-gray-800/60 fixed w-full z-50 transition-all">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center w-full">
        {/* Logo Section */}
        <div className="text-white font-bold text-xl tracking-tight">
          <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="hover:text-indigo-400 transition-colors">Amit Kaliyani</a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6 text-sm font-medium text-gray-400">
            <li>
              <a href="#hero" className="hover:text-indigo-400 transition-colors" onClick={(e) => handleNavClick(e, 'hero')}>Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-indigo-400 transition-colors" onClick={(e) => handleNavClick(e, 'about')}>About</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-indigo-400 transition-colors" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-indigo-400 transition-colors" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
            </li>
          </ul>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-xs font-semibold shadow-md transition-colors cursor-pointer">
            <span>Contact Me</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-2xl md:hidden focus:outline-none text-gray-400 hover:text-white"
          onClick={handleToggle}
          aria-label="Toggle Menu"
        >
          {toggleMenu ? <HiXMark /> : <HiBars3 />}
        </button>

        {/* Mobile Dropdown Menu */}
        {toggleMenu && (
          <div className="absolute top-16 left-0 bg-[#0B0F19] border-b border-gray-800 text-gray-300 w-full py-6 text-center md:hidden shadow-xl transition-all animate-in fade-in slide-in-from-top-5 duration-200">
            <ul className="space-y-4 px-6 mb-4 text-sm font-semibold">
              <li>
                <a href="#hero" className="block text-gray-400 hover:text-indigo-400 py-1 transition-colors" onClick={(e) => handleNavClick(e, 'hero')}>Home</a>
              </li>
              <li>
                <a href="#about" className="block text-gray-400 hover:text-indigo-400 py-1 transition-colors" onClick={(e) => handleNavClick(e, 'about')}>About</a>
              </li>
              <li>
                <a href="#skills" className="block text-gray-400 hover:text-indigo-400 py-1 transition-colors" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a>
              </li>
              <li>
                <a href="#projects" className="block text-gray-400 hover:text-indigo-400 py-1 transition-colors" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
              </li>
            </ul>
            <a href="#contact" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-md text-xs font-semibold shadow-md transition-colors inline-block cursor-pointer" onClick={(e) => handleNavClick(e, 'contact')}>
              <span>Contact Me</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
