import React from 'react';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-800 to-purple-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Globe className="w-8 h-8 text-white" />
          <h1 className="text-3xl font-extrabold tracking-tight">
            Web3-Wallet
          </h1>
        </div>
        
        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-blue-300 transition duration-300 ease-in-out font-medium">
            Home
          </Link>
          <Link to="/services" className="hover:text-blue-300 transition duration-300 ease-in-out font-medium">
            Services
          </Link>
          <Link to="/contact" className="hover:text-blue-300 transition duration-300 ease-in-out font-medium">
            Contact
          </Link>
        </div>

        {/* Call-to-Action Button (Optional) */}
        <div className="hidden md:flex">
          <Link
            to="/dapp-browser"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out"
          >
            DAppBrowser
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
