import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img 
              src="/BINGEN.png" 
              alt="BINGE'N CELEBRATIONS" 
              className="h-10 w-10 rounded-lg"
            />
            <h1 className="text-2xl font-bold text-gray-900">
              BINGE'N CELEBRATIONS
            </h1>
          </div>
          <nav className="flex space-x-6">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              to="/booking" 
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
            >
              Book Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}