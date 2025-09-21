'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import { NAV_ITEMS, APP_CONFIG, SOCIAL_LINKS } from '@/utils/constants';
import styles from './Navigation.module.css';

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking on nav links
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    handleNavClick();
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <nav className={`${styles.navigation} ${className}`}>
        <div className={styles.navigation__container}>
          <div className={styles.navigation__logo}>
            {APP_CONFIG.name}
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav 
      className={`
        ${styles.navigation} 
        ${isScrolled ? styles['navigation--scrolled'] : ''} 
        ${className}
      `}
    >
      <div className={styles.navigation__container}>
        {/* Logo */}
        <motion.a
          href="#home"
          className={styles.navigation__logo}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src="/czqj.png"
            alt="CZQJ Logo"
            width={40}
            height={40}
            className={styles.navigation__logoImage}
            priority
          />
          <span className={styles.navigation__logoText}>{APP_CONFIG.name}</span>
        </motion.a>

        {/* Desktop Navigation Links */}
        <div className={styles.navigation__menuContainer}>
          <ul className={styles.navigation__menu}>
            {NAV_ITEMS.map((item, index) => (
              <li key={`nav-${item.href}-${index}`} className={styles.navigation__item}>
                <motion.a
                  href={item.href}
                  className={styles.navigation__link}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href.replace('#', ''));
                  }}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.label}
                </motion.a>
              </li>
            ))}
          </ul>

          {/* Social Links */}
          <div className={styles.navigation__socialLinks}>
            <motion.a
              href={SOCIAL_LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navigation__socialLink}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </motion.a>
            <motion.a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navigation__socialLink}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </motion.a>
          </div>
        </div>



        {/* Mobile Menu Toggle */}
        <button
          className={`${styles['navigation__mobile-toggle']} ${
            isMenuOpen ? styles['navigation__mobile-toggle--active'] : ''
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="切换移动菜单"
        >
          <span className={styles['navigation__hamburger-line']}></span>
          <span className={styles['navigation__hamburger-line']}></span>
          <span className={styles['navigation__hamburger-line']}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={`${styles['navigation__mobile-menu']} ${
              isMenuOpen ? styles['navigation__mobile-menu--open'] : ''
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <ul className={styles['navigation__mobile-menu-list']}>
              {NAV_ITEMS.map((item, index) => (
                <li key={`mobile-nav-${item.href}-${index}`} className={styles['navigation__mobile-menu-item']}>
                  <motion.a
                    href={item.href}
                    className={styles['navigation__mobile-link']}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href.replace('#', ''));
                    }}
                    whileHover={{ x: 10 }}
                    whileTap={{ x: 0 }}
                  >
                    {item.label}
                  </motion.a>
                </li>
              ))}
              
              {/* Mobile Social Links */}
              <li className={styles['navigation__mobile-social-container']}>
                <div className={styles['navigation__mobile-social-links']}>
                  <motion.a
                    href={SOCIAL_LINKS.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles['navigation__mobile-social-link']}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    <span>Telegram</span>
                  </motion.a>
                  <motion.a
                    href={SOCIAL_LINKS.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles['navigation__mobile-social-link']}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    <span>X (Twitter)</span>
                  </motion.a>
                </div>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;