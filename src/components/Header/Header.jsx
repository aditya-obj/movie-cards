import React from 'react';
import { FaHome, FaFire, FaLayerGroup, FaFilm } from 'react-icons/fa';
import styles from './Header.module.css';

const Header = ({ activeTab, onNavigate }) => {
  return (
    <header className={styles.header}>
      <div className="container mx-auto py-5 px-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <FaFilm className={styles.logoIcon} />
          <h1 className={styles.title}>React Movie Cards</h1>
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
                className={`${styles.navLink} ${activeTab === 'home' ? styles.activeLink : ''}`}
              >
                <FaHome className={styles.navIcon} />
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
                className={`${styles.navLink} ${activeTab === 'trending' ? styles.activeLink : ''}`}
              >
                <FaFire className={styles.navIcon} />
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
                className={`${styles.navLink} ${activeTab === 'categories' ? styles.activeLink : ''}`}
              >
                <FaLayerGroup className={styles.navIcon} />
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