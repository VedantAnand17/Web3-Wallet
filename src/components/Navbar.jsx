import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { Globe } from 'lucide-react'; // Optional: Add any icons you want

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Globe className="mr-2" />
          <h1 className="text-2xl font-bold">Web-3 Wallet</h1>
        </div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-400 transition duration-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-400 transition duration-300">
            About
          </Link>
          <Link to="/services" className="hover:text-blue-400 transition duration-300">
            Services
          </Link>
          <Link to="/contact" className="hover:text-blue-400 transition duration-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
