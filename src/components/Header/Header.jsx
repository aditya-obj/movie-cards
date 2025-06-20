import React, { useState } from 'react';
import { FaHome, FaFire, FaLayerGroup, FaFilm, FaBars, FaTimes } from 'react-icons/fa';
import styles from './Header.module.css';

const Header = ({ activeTab, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (tab) => {
    onNavigate(tab);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <header className={styles.header}>
      <div className="container mx-auto py-5 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <FaFilm className={styles.logoIcon} />
          <h1 className={styles.title}>React Movie Cards</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-6">
            <li>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('home');
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
                  handleNavigation('trending');
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
                  handleNavigation('categories');
                }}
                className={`${styles.navLink} ${activeTab === 'categories' ? styles.activeLink : ''}`}
              >
                <FaLayerGroup className={styles.navIcon} />
                Categories
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className={`${styles.hamburger} md:hidden`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Mobile Navigation Menu */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <nav>
            <ul className={styles.mobileNavList}>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('home');
                  }}
                  className={`${styles.mobileNavLink} ${activeTab === 'home' ? styles.mobileActiveLink : ''}`}
                >
                  <FaHome className={styles.mobileNavIcon} />
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('trending');
                  }}
                  className={`${styles.mobileNavLink} ${activeTab === 'trending' ? styles.mobileActiveLink : ''}`}
                >
                  <FaFire className={styles.mobileNavIcon} />
                  Trending
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('categories');
                  }}
                  className={`${styles.mobileNavLink} ${activeTab === 'categories' ? styles.mobileActiveLink : ''}`}
                >
                  <FaLayerGroup className={styles.mobileNavIcon} />
                  Categories
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Overlay for mobile menu */}
        {isMobileMenuOpen && (
          <div 
            className={styles.mobileMenuOverlay}
            onClick={() => setIsMobileMenuOpen(false)}
          />        )}
      </div>
    </header>
  );
};

export default Header;