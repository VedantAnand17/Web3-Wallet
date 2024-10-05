import React from 'react';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-800 to-purple-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section with Home Link */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-3">
            <Globe className="w-8 h-8 text-white" />
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Web3-Wallet</h1>
          </Link>
        </div>

        {/* Home and DAppBrowser Buttons */}
        <div className="flex space-x-2">
          <Link
            to="/"
            className="bg-indigo-500 hover:bg-gray-600 text-white py-1 px-2 rounded-md shadow-md transition duration-300 ease-in-out text-xs sm:text-sm md:text-base"
          >
            Home
          </Link>
          <Link
            to="/dapp-browser"
            className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-md shadow-md transition duration-300 ease-in-out text-xs sm:text-sm md:text-base"
          >
            DAppBrowser
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
