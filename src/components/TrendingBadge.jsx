import React from 'react';
import { FaFire } from 'react-icons/fa';

const TrendingBadge = () => {
  return (
    <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full p-2 shadow-lg">
      <FaFire className="text-white" size={16} />
    </div>
  );
};

export default TrendingBadge; 