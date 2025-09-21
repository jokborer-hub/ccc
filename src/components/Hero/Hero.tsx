'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Hero.module.css';

interface HeroProps {
  className?: string;
}

// 数字滚动动画组件
const CountUpAnimation = ({ 
  end, 
  duration = 2000, 
  suffix = '' 
}: { 
  end: number | string, 
  duration?: number, 
  suffix?: string 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const endValue = typeof end === 'string' ? parseInt(end.replace(/[^\d]/g, '')) : end;
    let startTime: number;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // 使用缓动函数
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * endValue));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className={styles.hero__statNumber}>
      {count}{suffix}
    </div>
  );
};

// 粒子背景组件
const ParticleBackground = () => {
  const particles = Array.from({ length: 8 }, (_, i) => i);
  
  return (
    <div className={styles.hero__particles}>
      {particles.map((i) => (
        <div
          key={i}
          className={styles.hero__particle}
          style={{
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
};

const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLElement>(null);
  
  // 滚动动画
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <motion.section 
      ref={containerRef}
      className={`${styles.hero} ${className}`}
      style={{ y, opacity }}
    >
      {/* 背景效果 */}
      <div className={styles.hero__background}>
        {/* 背景图片层 */}
        <div className={styles.hero__backgroundImage}>
          <img 
            src="/banner3.jpg" 
            alt="创造奇迹背景" 
            className={styles.hero__bannerImage}
          />
        </div>
        <div className={styles.hero__overlay}></div>
      </div>

      {/* 粒子背景 */}
      <ParticleBackground />

      {/* 内容区域 */}
      <div className={styles.hero__container}>
        <motion.div
          className={styles.hero__content}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, staggerChildren: 0.2, delayChildren: 0.3 }}
        >
          {/* 主标题 */}
          <motion.h1 
            className={styles.hero__title}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              className={styles.hero__titleMain}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              CZQJ - 创造奇迹
            </motion.span>
          </motion.h1>

          {/* 副标题 */}
          <motion.p 
            className={styles.hero__subtitle}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            超越BTC的神币，必定会在X链上创造奇迹，掀起全新浪潮
          </motion.p>

          {/* CTA 按钮组 */}
          <motion.div 
            className={styles.hero__cta}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <motion.button
              className={`${styles.hero__ctaButton} ${styles.hero__ctaPrimary}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className={styles.hero__ctaText}>立即购买</span>
              <motion.span
                className={styles.hero__ctaIcon}
                initial={{ x: 0 }}
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                →
              </motion.span>
            </motion.button>
            
            <motion.button
              className={`${styles.hero__ctaButton} ${styles.hero__ctaSecondary}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={() => {
                const visionSection = document.getElementById('vision');
                if (visionSection) {
                  visionSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span className={styles.hero__ctaText}>Vision</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* 统计数据 */}
        <motion.div 
          className={styles.hero__stats}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, staggerChildren: 0.2, delayChildren: 0.6 }}
        >
          <motion.div 
            className={styles.hero__stat}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <CountUpAnimation end={1888} suffix="" />
            <div className={styles.hero__statLabel}>总供应量</div>
          </motion.div>
          
          <motion.div 
            className={styles.hero__statDivider}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          />
          
          <motion.div 
            className={styles.hero__stat}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <CountUpAnimation end={3} suffix="%" />
            <div className={styles.hero__statLabel}>交易税</div>
          </motion.div>
          
          <motion.div 
            className={styles.hero__statDivider}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          />
          
          <motion.div 
            className={styles.hero__stat}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <CountUpAnimation end={1400} suffix="" />
            <div className={styles.hero__statLabel}>私募份额</div>
          </motion.div>
        </motion.div>
      </div>

      {/* 浮动元素 */}
      <motion.div
        className={`${styles.hero__floatingElement} ${styles.hero__floatingElement1}`}
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`${styles.hero__floatingElement} ${styles.hero__floatingElement2}`}
        animate={{
          y: [0, 20, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className={`${styles.hero__floatingElement} ${styles.hero__floatingElement3}`}
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* 滚动指示器 */}
      <motion.div 
        className={styles.hero__scrollIndicator}
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 1.2 }}
      >
        <div className={styles.hero__scrollArrow}>↓</div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;