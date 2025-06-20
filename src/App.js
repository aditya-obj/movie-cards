import React, { useState } from 'react';
import Header from './components/Header/Header';
import MovieGrid from './components/MovieGrid';
import CategoryFilter from './components/CategoryFilter';
import moviesData from './data/moviesData';
import { FaGithub, FaDribbble, FaTwitter, FaInstagram } from 'react-icons/fa';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [movies, setMovies] = useState(moviesData);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Function to handle navigation clicks
  const handleNavigation = (tab) => {
    setActiveTab(tab);
    
    if (tab === 'trending') {
      // Filter to only show trending movies
      setMovies(moviesData.filter(movie => movie.trending));
      setSelectedCategory('all');
    } else if (tab === 'categories') {
      // Show all movies when switching to categories tab
      setMovies(moviesData);
      setSelectedCategory('all');
    } else {
      // Show all movies
      setMovies(moviesData);
      setSelectedCategory('all');
    }
  };

  // Function to handle category filtering
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    
    if (category === 'all') {
      setMovies(moviesData);
    } else {
      setMovies(moviesData.filter(movie => movie.category === category));
    }
  };

  // Function to get title based on active tab and selected category
  const getTitle = () => {
    if (activeTab === 'trending') {
      return 'Trending Movies';
    } else if (activeTab === 'categories') {
      if (selectedCategory === 'all') {
        return 'All Categories';
      } else {
        const categoryNames = {
          'action': 'Action Movies',
          'drama': 'Drama Movies',
          'sci-fi': 'Sci-Fi Movies',
          'crime': 'Crime Movies'
        };
        return categoryNames[selectedCategory] || 'Movies';
      }
    }
    return 'Popular Movies';
  };

  return (
    <div className="App min-h-screen bg-gray-100 flex flex-col">
      <Header activeTab={activeTab} onNavigate={handleNavigation} />
      <main className="py-4 flex-grow">
        {activeTab === 'categories' && (
          <div className="container mx-auto px-2 sm:px-4 py-4">
            <CategoryFilter 
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>
        )}
        <MovieGrid 
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
                <a href="#" className="text-gray-400 hover:text-white transition-colors p-2">
                  <FaGithub size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors p-2">
                  <FaDribbble size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors p-2">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors p-2">
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700 text-sm text-center text-gray-400">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div>© {new Date().getFullYear()} React Movie Cards. All rights reserved.</div>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
