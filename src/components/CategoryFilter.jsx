import React from 'react';
import { FaLayerGroup, FaRocket, FaTheaterMasks, FaFistRaised, FaSkull } from 'react-icons/fa';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  const categories = [
    { id: 'all', name: 'All Movies', icon: FaLayerGroup },
    { id: 'action', name: 'Action', icon: FaFistRaised },
    { id: 'drama', name: 'Drama', icon: FaTheaterMasks },
    { id: 'sci-fi', name: 'Sci-Fi', icon: FaRocket },
    { id: 'crime', name: 'Crime', icon: FaSkull },
  ];

  return (
    <div className="mb-8">
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 px-4">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`
                flex items-center space-x-1 md:space-x-2 px-2.5 py-1.5 md:px-6 md:py-3 
                rounded-full font-medium transition-all duration-500 ease-out
                transform hover:scale-105 hover:-translate-y-0.5 active:scale-95
                shadow-md hover:shadow-lg text-xs md:text-base
                ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-indigo-200 scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-indigo-300'
                }
              `}
            >
              <IconComponent 
                className={`text-xs md:text-base transition-all duration-300 ${
                  selectedCategory === category.id ? 'text-white' : 'text-indigo-600'
                }`} 
              />
              <span className="whitespace-nowrap">{category.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;
