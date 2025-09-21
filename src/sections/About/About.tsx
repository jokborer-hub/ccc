'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS } from '@/utils/constants';
import styles from './About.module.css';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className = '' }) => {
  const coreFeatures = [
    {
      icon: '🚀',
      title: '创新技术',
      description: '基于X链的先进技术架构，提供毫秒级交易确认和极低的Gas费用',
      highlights: ['毫秒级确认', '超低手续费', '高度安全']
    },
    {
      icon: '💎',
      title: 'LP分红',
      description: '独创的LP分红机制，添加LP后持有LP即可获得OKB奖励，让投资更有价值',
      highlights: ['自动分红', 'OKB奖励', '复利增长']
    },
    {
      icon: '🌐',
      title: '全球生态',
      description: '构建全球化的DeFi生态系统，连接世界各地的加密货币爱好者',
      highlights: ['全球社区', '多链支持', '生态丰富']
    }
  ];

  const visionPoints = [
    {
      icon: '✨',
      text: '技术创新引领行业发展'
    },
    {
      icon: '🤝',
      text: '社区共治实现共同繁荣'
    },
    {
      icon: '🌟',
      text: '价值创造惠及每一个人'
    }
  ];

  return (
    <section className={`${styles.about} ${className}`} id="about">
      {/* 竖版海报装饰 */}
      <div className={styles.about__bannerDecorations}>
        <motion.div 
          className={`${styles.about__bannerLeft} ${styles.about__banner1}`}
          initial={{ opacity: 0, x: -50, rotateY: -15 }}
          whileInView={{ opacity: 0.9, x: 0, rotateY: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileHover={{ 
            opacity: 1, 
            scale: 1.05, 
            rotateY: 5,
            transition: { duration: 0.3 }
          }}
        >
          <img 
            src="/banner1.jpg" 
            alt="CZQJ创造奇迹海报1" 
            className={styles.about__bannerImage}
          />
        </motion.div>
        
        <motion.div 
          className={`${styles.about__bannerRight} ${styles.about__banner2}`}
          initial={{ opacity: 0, x: 50, rotateY: 15 }}
          whileInView={{ opacity: 0.9, x: 0, rotateY: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          whileHover={{ 
            opacity: 0.8, 
            scale: 1.05, 
            rotateY: -5,
            transition: { duration: 0.3 }
          }}
        >
          <img 
            src="/banner2.jpg" 
            alt="CZQJ创造奇迹海报2" 
            className={styles.about__bannerImage}
          />
        </motion.div>
      </div>
      
      <div className={styles.about__container}>
        {/* Section Header */}
        <motion.div
          className={styles.about__header}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.staggerContainer}
        >
          <motion.h2
            className={styles.about__title}
            variants={ANIMATION_VARIANTS.fadeInUp}
          >
            About
          </motion.h2>
          <motion.p
            className={styles.about__subtitle}
            variants={ANIMATION_VARIANTS.fadeInUp}
          >
            重燃奇迹之火，核心团队携手顶级资本，于X链再创辉煌
          </motion.p>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          className={styles.about__hero}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.staggerContainer}
        >
          <div className={styles.about__heroContent}>
            <motion.div
              className={styles.about__heroText}
              variants={ANIMATION_VARIANTS.slideInLeft}
            >
              <h3 className={styles.about__heroTitle}>创造奇迹的开始</h3>
              <p className={styles.about__heroDescription}>
                还记得当年的奇迹吗？一星期内创造了<span className={styles.about__highlight}>200倍</span>的涨幅！
                现在，当年的核心地推团队携手来自新加坡的虚拟货币风险投资基金Alphanode Capital强势回归！
              </p>
              <p className={styles.about__heroDescription}>
                我们回到最初的经典OK链，隆重推出X链首个独创模式<span className={styles.about__highlight}>CZQJ（创造奇迹）</span>。
                这是一个由线下各大地推团队与线上百大社区联合打造的超越性神币。
              </p>
              <div className={styles.about__heroStats}>
                <div className={styles.about__heroStat}>
                  <span className={styles.about__heroStatNumber}>1888</span>
                  <span className={styles.about__heroStatLabel}>总发行量</span>
                </div>
                <div className={styles.about__heroStat}>
                  <span className={styles.about__heroStatNumber}>200x</span>
                  <span className={styles.about__heroStatLabel}>历史涨幅</span>
                </div>
                <div className={styles.about__heroStat}>
                  <span className={styles.about__heroStatNumber}>100%</span>
                  <span className={styles.about__heroStatLabel}>社区驱动</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className={styles.about__heroVisual}
              variants={ANIMATION_VARIANTS.slideInRight}
            >
              <div className={styles.about__heroCircle}>
                <div className={styles.about__heroInner}>
                  <span className={styles.about__heroLogo}>CZQJ</span>
                  <div className={styles.about__heroOrbit}></div>
                  <div className={styles.about__heroOrbit}></div>
                  <div className={styles.about__heroOrbit}></div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          className={styles.about__featuresSection}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.staggerContainer}
        >
          <motion.h3
            className={styles.about__featuresTitle}
            variants={ANIMATION_VARIANTS.fadeInUp}
          >
            核心优势
          </motion.h3>
          <div className={styles.about__featuresGrid}>
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className={styles.about__featureCard}
                variants={ANIMATION_VARIANTS.fadeInUp}
                whileHover={{ 
                  y: -12, 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
                <div className={styles.about__featureIcon}>
                  <span className={styles.about__featureEmoji}>{feature.icon}</span>
                </div>
                <div className={styles.about__featureContent}>
                  <h4 className={styles.about__featureTitle}>{feature.title}</h4>
                  <p className={styles.about__featureDesc}>{feature.description}</p>
                  <div className={styles.about__featureHighlights}>
                    {feature.highlights.map((highlight, idx) => (
                      <span key={idx} className={styles.about__featureHighlight}>
                        • {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          className={styles.about__visionSection}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.staggerContainer}
        >
          <div className={styles.about__visionContent}>
            <motion.div
              className={styles.about__visionText}
              variants={ANIMATION_VARIANTS.slideInLeft}
            >
              <h3 className={styles.about__visionTitle}>我们的愿景</h3>
              <p className={styles.about__visionDesc}>
                成为X链生态中最具影响力的DeFi项目，通过技术创新和社区力量，
                为全球用户创造持续的价值增长，推动去中心化金融的普及和发展。
              </p>
              <div className={styles.about__visionPoints}>
                {visionPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    className={styles.about__visionPoint}
                    variants={ANIMATION_VARIANTS.fadeInUp}
                    whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  >
                    <div className={styles.about__visionPointIcon}>{point.icon}</div>
                    <span className={styles.about__visionPointText}>{point.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className={styles.about__visionGraphic}
              variants={ANIMATION_VARIANTS.slideInRight}
            >
              <div className={styles.about__visionOrb}>
                <div className={styles.about__visionOrbInner}>
                  <div className={styles.about__visionOrbCore}></div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Team Values */}
        <motion.div
          className={styles.about__valuesSection}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.staggerContainer}
        >
          <motion.div
            className={styles.about__valuesCard}
            variants={ANIMATION_VARIANTS.fadeInUp}
          >
            <div className={styles.about__valuesContent}>
              <h3 className={styles.about__valuesTitle}>团队理念</h3>
              <div className={styles.about__valuesList}>
                <div className={styles.about__valueItem}>
                  <span className={styles.about__valueIcon}>💪</span>
                  <span className={styles.about__valueText}>我们没有华丽的语言，但我们正心正念</span>
                </div>
                <div className={styles.about__valueItem}>
                  <span className={styles.about__valueIcon}>📈</span>
                  <span className={styles.about__valueText}>小资金撬动大市场，以小博大，联合坐庄</span>
                </div>
                <div className={styles.about__valueItem}>
                  <span className={styles.about__valueIcon}>✊</span>
                  <span className={styles.about__valueText}>我们团结一致，逆流而上，破茧成蝶，创造奇迹</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;