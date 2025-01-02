import React, { useState } from 'react';
import { Menu, Search, User } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Agents', href: '/agents' },
    { label: 'Blog', href: '/blog' }
  ];

  return (
    <>
      <header className="bg-black/40 backdrop-blur-sm px-4 lg:px-8 py-3 flex items-center justify-between fixed w-full top-0 z-50">
        {/* Mobile Menu Button - Only visible on mobile */}
        <button 
          className="text-white lg:hidden" 
          aria-label="Menu" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
        
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/5968/5968958.png" 
            alt="Flair Logo"
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white hover:text-purple-300 transition-colors text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        {/* Right Side Items */}
        <div className="flex items-center">
          {/* Search and Sign In - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent border-b border-white/30 text-white placeholder-white/70 py-1 px-2 focus:outline-none focus:border-white text-sm w-32"
              />
              <Search size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/70" />
            </div>
            <a href="/login" className="text-white hover:text-purple-300 transition-colors text-sm">
              Sign In | Sign Up
            </a>
          </div>
          
          {/* Mobile Search and Profile buttons */}
          <div className="flex lg:hidden items-center space-x-4">
            <button className="text-white" aria-label="Search">
              <Search size={24} />
            </button>
            <button className="text-white" aria-label="Profile">
              <User size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed top-0 left-0 w-64 h-full bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="pt-20 px-4">
          <nav>
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className="text-gray-800 hover:text-purple-600 block py-2 text-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Header;