import React from 'react';
import MovieCard from './MovieCard/MovieCard';
import { FaFire } from 'react-icons/fa';

const MovieGrid = ({ movies, title = "Popular Movies" }) => {
  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-6">
      <div className="mb-4 sm:mb-6">
        <div className="flex items-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{title}</h2>
          {title === "Trending Movies" && (
            <div className="ml-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full p-1.5 shadow">
              <FaFire className="text-white" size={18} />
            </div>
          )}
        </div>
        <div className="h-1 w-24 bg-indigo-600 rounded"></div>
      </div>
      
      {movies.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No movies found.</p>
        </div>
      ) : (        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-6 md:gap-8">
          {movies.map((movie, index) => (
            <div 
              key={movie.id} 
              className="flex w-full animate-fadeInUp"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieGrid; 