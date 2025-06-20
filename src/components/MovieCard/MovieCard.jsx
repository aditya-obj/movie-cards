import React from 'react';
import styles from './MovieCard.module.css';
import TrendingBadge from '../TrendingBadge';

const MovieCard = ({ movie }) => {
  const { title, subtitle, description, image, rating, trending } = movie;
  
  // Function to generate star rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`star-${i}`} className="text-yellow-400">★</span>
      );
    }
    
    // Half star if needed
    if (hasHalfStar) {
      stars.push(
        <span key="half-star" className="text-yellow-400">★</span>
      );
    }
    
    // Empty stars
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300">★</span>
      );
    }
    
    return stars;
  };
  
  // Function to determine badge color based on rating
  function getRatingColor(rating) {
    if (rating >= 4.5) return '#10B981'; // Green
    if (rating >= 3.5) return '#3B82F6'; // Blue
    if (rating >= 2.5) return '#F59E0B'; // Yellow
    return '#EF4444'; // Red
  }
  
  return (
    <div className={`${styles.card} w-full shadow-md hover:shadow-xl`}>
      <div className={styles.cardImageContainer}>
        <img 
          src={image} 
          alt={title} 
          className={styles.cardImage}
        />
        <div className={styles.cardOverlay}></div>
        {trending && <TrendingBadge />}
        <div className="absolute top-3 right-3 z-10">
          <div 
            className={styles.badge} 
            style={{ backgroundColor: getRatingColor(rating) }}
          >
            {rating.toFixed(1)}
          </div>
        </div>
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.rating}>
          <div className={styles.stars}>
            {renderStars(rating)}
          </div>
          <div className="text-sm text-gray-500 font-medium transition-all duration-300 group-hover:text-indigo-600">
            {Math.round(rating * 20)}% match
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard; 