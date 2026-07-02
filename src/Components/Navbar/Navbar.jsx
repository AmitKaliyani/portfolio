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

  return (
    <nav className="bg-white/90 backdrop-blur-md text-gray-700 border-b border-gray-100 fixed w-full z-50 transition-all">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center w-full">
        {/* Logo Section */}
        <div className="text-gray-900 font-bold text-xl tracking-tight">
          <a href="#hero" className="hover:text-blue-600 transition-colors">Amit Kaliyani</a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6 text-sm font-medium text-gray-600">
            <li>
              <a href="#hero" className="hover:text-blue-600 transition-colors" onClick={closeMenu}>Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-600 transition-colors" onClick={closeMenu}>About</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-600 transition-colors" onClick={closeMenu}>Skills</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-600 transition-colors" onClick={closeMenu}>Projects</a>
            </li>
          </ul>
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-xs font-semibold shadow-sm transition-colors cursor-pointer">
            <span>Contact Me</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-2xl md:hidden focus:outline-none text-gray-600 hover:text-gray-900"
          onClick={handleToggle}
          aria-label="Toggle Menu"
        >
          {toggleMenu ? <HiXMark /> : <HiBars3 />}
        </button>

        {/* Mobile Dropdown Menu */}
        {toggleMenu && (
          <div className="absolute top-16 left-0 bg-white border-b border-gray-100 text-gray-700 w-full py-6 text-center md:hidden shadow-lg transition-all">
            <ul className="space-y-4 px-6 mb-4 text-sm font-semibold">
              <li>
                <a href="#hero" className="block text-gray-600 hover:text-blue-600 py-1 transition-colors" onClick={closeMenu}>Home</a>
              </li>
              <li>
                <a href="#about" className="block text-gray-600 hover:text-blue-600 py-1 transition-colors" onClick={closeMenu}>About</a>
              </li>
              <li>
                <a href="#skills" className="block text-gray-600 hover:text-blue-600 py-1 transition-colors" onClick={closeMenu}>Skills</a>
              </li>
              <li>
                <a href="#projects" className="block text-gray-600 hover:text-blue-600 py-1 transition-colors" onClick={closeMenu}>Projects</a>
              </li>
            </ul>
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-md text-xs font-semibold shadow-sm transition-colors inline-block cursor-pointer" onClick={closeMenu}>
              <span>Contact Me</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
