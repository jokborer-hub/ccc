'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './MobileOptimizer.module.css';

interface MobileOptimizerProps {
  children: React.ReactNode;
}

const MobileOptimizer: React.FC<MobileOptimizerProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      const landscape = window.innerWidth > window.innerHeight && mobile;
      
      setIsMobile(mobile);
      setIsLandscape(landscape);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('orientationchange', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('orientationchange', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollHint(false);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      setTouchStart({ x: touch.clientX, y: touch.clientY });
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStart) return;

      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStart.x;
      const deltaY = touch.clientY - touchStart.y;

      // Detect swipe gestures
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (Math.abs(deltaX) > 50) {
          // Horizontal swipe detected
          const direction = deltaX > 0 ? 'right' : 'left';
          document.dispatchEvent(new CustomEvent('mobileSwipe', { 
            detail: { direction, deltaX, deltaY } 
          }));
        }
      }

      setTouchStart(null);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobile, touchStart]);

  // Add mobile-specific classes to body
  useEffect(() => {
    if (isMobile) {
      document.body.classList.add('mobile-optimized');
      if (isLandscape) {
        document.body.classList.add('landscape-mode');
      } else {
        document.body.classList.remove('landscape-mode');
      }
    } else {
      document.body.classList.remove('mobile-optimized', 'landscape-mode');
    }

    return () => {
      document.body.classList.remove('mobile-optimized', 'landscape-mode');
    };
  }, [isMobile, isLandscape]);

  if (!isMobile) {
    return <>{children}</>;
  }

  return (
    <div className={styles.mobileOptimizer}>
      {children}
      
      {/* Mobile Scroll Hint */}
      <AnimatePresence>
        {showScrollHint && (
          <motion.div
            className={styles.scrollHint}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            <motion.div
              className={styles.scrollHintIcon}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="material-symbols-outlined">keyboard_arrow_down</span>
            </motion.div>
            <span className={styles.scrollHintText}>向下滑动探索</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Performance Monitor */}
      {process.env.NODE_ENV === 'development' && (
        <div className={styles.performanceMonitor}>
          <div className={styles.performanceInfo}>
            📱 Mobile Mode | {isLandscape ? '🔄 Landscape' : '📱 Portrait'}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileOptimizer;