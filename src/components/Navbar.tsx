import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-indigo-600">VDTilesCo</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          <Link to="/products" className="hover:text-indigo-600">Products</Link>
          <Link to="/about" className="hover:text-indigo-600">About</Link>
          <Link to="/contact" className="hover:text-indigo-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
