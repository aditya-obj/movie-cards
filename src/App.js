import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Header from './components/Header/Header';
import MovieGrid from './components/MovieGrid';
import CategoryFilter from './components/CategoryFilter';
import moviesData from './data/moviesData';
import { FaGithub, FaDribbble, FaTwitter, FaInstagram } from 'react-icons/fa';
import './App.css';

// Constants for better maintainability
const TABS = {
  HOME: 'home',
  CATEGORIES: 'categories',
  TRENDING: 'trending'
};

const CATEGORY_NAMES = {
  action: 'Action Movies',
  drama: 'Drama Movies',
  'sci-fi': 'Sci-Fi Movies',
  crime: 'Crime Movies'
};

function App() {
  const [activeTab, setActiveTab] = useState(TABS.HOME);
  const [movies, setMovies] = useState(moviesData);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [animationKey, setAnimationKey] = useState(0);
  
  // Trigger initial animation on mount
  useEffect(() => {
    setAnimationKey(1);
  }, []);
  
  // Memoized filtered movies to prevent unnecessary recalculations
  const filteredMovies = useMemo(() => {
    if (activeTab === TABS.TRENDING) {
      return moviesData.filter(movie => movie.trending);
    }
    
    if (activeTab === TABS.CATEGORIES && selectedCategory !== 'all') {
      return moviesData.filter(movie => movie.category === selectedCategory);
    }
    
    return moviesData;
  }, [activeTab, selectedCategory]);

  // Update movies when filtered results change
  useEffect(() => {
    setMovies(filteredMovies);
  }, [filteredMovies]);
  
  // Function to handle navigation clicks
  const handleNavigation = useCallback((tab) => {
    setActiveTab(tab);
    setAnimationKey(prev => prev + 1); // Force animation restart
    
    // Reset category when switching tabs
    if (tab !== TABS.CATEGORIES) {
      setSelectedCategory('all');
    }
  }, []);

  // Function to handle category filtering
  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
    setAnimationKey(prev => prev + 1); // Force animation restart
  }, []);

  // Function to get title based on active tab and selected category
  const getTitle = useCallback(() => {
    if (activeTab === TABS.TRENDING) {
      return 'Trending Movies';
    } 
    
    if (activeTab === TABS.CATEGORIES) {
      if (selectedCategory === 'all') {
        return 'All Categories';
      }
      return CATEGORY_NAMES[selectedCategory] || 'Movies';
    }
    
    return 'Popular Movies';
  }, [activeTab, selectedCategory]);

  return (
    <div className="App min-h-screen bg-gray-100 flex flex-col">
      <Header activeTab={activeTab} onNavigate={handleNavigation} />
      <main className="py-4 flex-grow pt-20">
        {activeTab === TABS.CATEGORIES && (
          <div className="container mx-auto px-2 sm:px-4 py-4">
            <CategoryFilter 
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>
        )}
        <MovieGrid 
          key={animationKey}
          movies={movies} 
          title={getTitle()} 
        />
      </main>
      <footer className="bg-gray-800 text-white py-6 sm:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center sm:text-left sm:flex-row sm:justify-between sm:items-start">
            <div className="mb-6 sm:mb-0">
              <h3 className="text-xl font-bold mb-2">React Movie Cards</h3>
              <p className="text-gray-400 text-sm max-w-xs mx-auto sm:mx-0">A modern UI for browsing your favorite movies with a clean, responsive design</p>
            </div>
            <div className="flex flex-col items-center sm:items-end">
              <div className="text-sm text-gray-400 mb-3">Connect with us</div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-out p-2 rounded-lg hover:bg-white hover:bg-opacity-10 hover:shadow-lg">
                  <FaGithub size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-pink-400 hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-out p-2 rounded-lg hover:bg-pink-400 hover:bg-opacity-10 hover:shadow-lg">
                  <FaDribbble size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-out p-2 rounded-lg hover:bg-blue-400 hover:bg-opacity-10 hover:shadow-lg">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-out p-2 rounded-lg hover:bg-purple-400 hover:bg-opacity-10 hover:shadow-lg">
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700 text-sm text-center text-gray-400">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div>© {new Date().getFullYear()} React Movie Cards. All rights reserved.</div>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-0.5 px-2 py-1 rounded hover:bg-white hover:bg-opacity-10">Privacy</a>
                <a href="#" className="hover:text-white transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-0.5 px-2 py-1 rounded hover:bg-white hover:bg-opacity-10">Terms</a>
                <a href="#" className="hover:text-white transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-0.5 px-2 py-1 rounded hover:bg-white hover:bg-opacity-10">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
