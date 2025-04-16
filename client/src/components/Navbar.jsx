import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiX, HiMenu } from 'react-icons/hi';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-white border-b border-amber-100 shadow-sm text-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-['Playfair_Display',serif] font-bold tracking-tight">
          <span className="text-gray-800">Story</span>
          <span className="text-amber-800">Sip</span>
        </Link>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none text-amber-800">
            {isMenuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="font-medium hover:text-amber-800 transition duration-200 flex items-center justify-center">Home</Link>
          <Link to="/books" className="font-medium hover:text-amber-800 transition duration-200 flex items-center justify-center">Browse Books</Link>
          <Link to="/auth" className="px-5 py-2 border-2 border-amber-800 text-amber-800 rounded font-medium hover:bg-amber-50 transition-colors duration-300">Login/Sign Up</Link>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-3 bg-amber-50 flex flex-col space-y-3">
          <Link to="/" className="font-medium hover:text-amber-800 py-2 px-2 text-center" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/books" className="font-medium hover:text-amber-800 py-2 px-2 text-center" onClick={() => setIsMenuOpen(false)}>Browse Books</Link>
          <Link to="/auth" className="font-medium border-2 border-amber-800 text-amber-800 hover:bg-amber-100 py-2 px-4 rounded text-center transition duration-200 my-1" onClick={() => setIsMenuOpen(false)}>Login/Sign Up</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
