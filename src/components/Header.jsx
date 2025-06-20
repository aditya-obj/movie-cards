import React from 'react';
import { FaHome, FaFire, FaLayerGroup, FaFilm } from 'react-icons/fa';

const Header = ({ activeTab, onNavigate }) => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-lg">
      <div className="container mx-auto py-5 px-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div className="flex items-center mb-3 sm:mb-0">
          <FaFilm className="w-8 h-8 mr-3" />
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">React Movie Cards</h1>
        </div>
        
        <nav className="self-start sm:self-auto">
          <ul className="flex items-center space-x-6">
            <li>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home');
                }}
                className={`transition-colors text-sm sm:text-base font-medium flex items-center ${
                  activeTab === 'home' 
                    ? 'text-white border-b-2 border-white pb-1' 
                    : 'text-indigo-200 hover:text-white'
                }`}
              >
                <FaHome className="w-4 h-4 mr-1" />
                Home
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('trending');
                }}
                className={`transition-colors text-sm sm:text-base font-medium flex items-center ${
                  activeTab === 'trending' 
                    ? 'text-white border-b-2 border-white pb-1' 
                    : 'text-indigo-200 hover:text-white'
                }`}
              >
                <FaFire className="w-4 h-4 mr-1" />
                Trending
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('categories');
                }}
                className={`transition-colors text-sm sm:text-base font-medium flex items-center ${
                  activeTab === 'categories' 
                    ? 'text-white border-b-2 border-white pb-1' 
                    : 'text-indigo-200 hover:text-white'
                }`}
              >
                <FaLayerGroup className="w-4 h-4 mr-1" />
                Categories
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 