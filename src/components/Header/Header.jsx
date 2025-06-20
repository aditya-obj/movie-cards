import React, { useState } from 'react';
import { FaHome, FaFire, FaLayerGroup, FaFilm, FaBars } from 'react-icons/fa';
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

  // Custom Cross SVG Component
  const CrossIcon = () => (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

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
        </nav>        {/* Mobile Hamburger Button */}
        <button 
          className={`${styles.hamburger} md:hidden`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <CrossIcon /> : <FaBars size={24} />}
        </button>

        {/* Mobile Navigation Menu */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <div className={styles.mobileMenuHeader}>
            <div className="flex items-center">
              <FaFilm className={styles.mobileLogoIcon} />
              <h2 className={styles.mobileTitle}>Movie Cards</h2>
            </div>
            <button 
              className={styles.mobileCloseButton}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              <CrossIcon />
            </button>
          </div>
          
          <nav className={styles.mobileNav}>
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
                  <span>Home</span>
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
                  <span>Trending</span>
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
                  <span>Categories</span>
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