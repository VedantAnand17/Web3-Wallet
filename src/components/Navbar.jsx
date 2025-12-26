import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Wallet, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './ui/Button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'DApp Browser', path: '/dapp-browser' },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/0",
        scrolled ? "bg-black/50 backdrop-blur-xl border-white/10 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="group flex items-center space-x-3 transition-transform hover:scale-105">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary-500 to-cyan-500 opacity-75 blur group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-black rounded-full p-2">
              <Globe className="w-6 h-6 text-white" />
            </div>
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-white group-hover:text-primary-300 transition-colors">
            Web3<span className="text-primary-500">Wallet</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                location.pathname === link.path
                  ? "bg-white/10 text-white shadow-lg backdrop-blur-sm"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <Button
          variant="premium"
          size="sm"
          className="hidden md:inline-flex"
          onClick={() => { }} // Placeholder for connection logic
        >
          <Wallet className="w-4 h-4 mr-2" />
          Connect
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
