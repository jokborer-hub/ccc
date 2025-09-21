'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS, SOCIAL_LINKS } from '@/utils/constants';
import styles from './AlphaNode.module.css';

interface AlphaNodeProps {
  className?: string;
}

const AlphaNode: React.FC<AlphaNodeProps> = ({ className = '' }) => {
  const companyHighlights = [
    {
      icon: '🏢',
      title: '新加坡总部',
      description: '位于亚洲金融中心，拥有完善的监管环境和国际化视野',
      stats: '2018年成立'
    },
    {
      icon: '💰',
      title: '专业投资',
      description: '专注区块链早期项目投资，累计投资金额超过5000万美元',
      stats: '50+ 项目'
    },
    {
      icon: '🎯',
      title: '战略布局',
      description: '深度布局DeFi、NFT、Layer2等前沿赛道，引领行业发展',
      stats: '200倍回报'
    }
  ];

  const investmentAreas = [
    {
      name: 'DeFi',
      description: '去中心化金融',
      icon: '🏦',
      color: '#F59E0B'
    },
    {
      name: 'NFT',
      description: '数字藏品',
      icon: '🎨',
      color: '#D97706'
    },
    {
      name: 'Layer2',
      description: '扩容解决方案',
      icon: '⚡',
      color: '#B45309'
    },
    {
      name: 'Web3基础设施',
      description: '基础设施建设',
      icon: '🌐',
      color: '#92400E'
    },
    {
      name: '游戏化金融',
      description: 'GameFi生态',
      icon: '🎮',
      color: '#78350F'
    },
    {
      name: '跨链协议',
      description: '互操作性',
      icon: '🔗',
      color: '#451A03'
    }
  ];

  const teamMembers = [
    {
      role: '创始合伙人',
      experience: '15年金融投资经验',
      specialty: '传统金融 + 加密货币',
      icon: '👨‍💼'
    },
    {
      role: '技术总监',
      experience: '10年区块链开发',
      specialty: '智能合约 + DeFi协议',
      icon: '👨‍💻'
    },
    {
      role: '投资总监',
      experience: '12年风险投资',
      specialty: '早期项目评估',
      icon: '📊'
    }
  ];

  return (
    <section className={`${styles.alphanode} ${className}`} id="alphanode">
      <div className={styles.alphanode__container}>
        {/* Banner Decorations - Network Nodes Theme */}
        <div className={styles.alphanode__bannerDecorations}>
          <motion.div
            className={`${styles.alphanode__bannerDecoration} ${styles.alphanode__bannerDecoration1}`}
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ 
              opacity: 0.7, 
              scale: 1, 
              rotate: 0,
              y: [0, -20, 0]
            }}
            transition={{ 
              duration: 2,
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
          <motion.div
            className={`${styles.alphanode__bannerDecoration} ${styles.alphanode__bannerDecoration2}`}
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ 
              opacity: 0.6, 
              scale: 1, 
              rotate: 0,
              x: [0, 15, 0]
            }}
            transition={{ 
              duration: 2.5,
              delay: 0.3,
              x: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
          <motion.div
            className={`${styles.alphanode__bannerDecoration} ${styles.alphanode__bannerDecoration3}`}
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ 
              opacity: 0.8, 
              scale: 1, 
              rotate: 0,
              y: [0, 25, 0]
            }}
            transition={{ 
              duration: 3,
              delay: 0.6,
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
          <motion.div
            className={`${styles.alphanode__bannerDecoration} ${styles.alphanode__bannerDecoration4}`}
            initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
            animate={{ 
              opacity: 0.5, 
              scale: 1, 
              rotate: 0,
              x: [0, -20, 0]
            }}
            transition={{ 
              duration: 2.8,
              delay: 0.9,
              x: {
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
          <motion.div
            className={`${styles.alphanode__bannerDecoration} ${styles.alphanode__bannerDecoration5}`}
            initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
            animate={{ 
              opacity: 0.6, 
              scale: 1, 
              rotate: 0,
              y: [0, -15, 0],
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 3.2,
              delay: 1.2,
              y: {
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut"
              },
              x: {
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
        </div>
        {/* Section Header */}
        <motion.div
          className={styles.alphanode__header}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.staggerContainer}
        >
          <motion.h2
            className={styles.alphanode__title}
            variants={ANIMATION_VARIANTS.fadeInUp}
          >
            机构背景: Alphanode Capital
          </motion.h2>
          <motion.p
            className={styles.alphanode__subtitle}
            variants={ANIMATION_VARIANTS.fadeInUp}
          >
            一家总部位于新加坡的领先虚拟货币风险投资基金，致力于发掘和支持最具潜力的区块链项目。
          </motion.p>
        </motion.div>

        {/* Company Highlights */}
        <motion.div
          className={styles.alphanode__highlights}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.staggerContainer}
        >
          {companyHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              className={styles.alphanode__highlightCard}
              variants={ANIMATION_VARIANTS.fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className={styles.alphanode__highlightIcon}>{highlight.icon}</div>
              <div className={styles.alphanode__highlightContent}>
                <h3 className={styles.alphanode__highlightTitle}>{highlight.title}</h3>
                <p className={styles.alphanode__highlightDescription}>{highlight.description}</p>
                <div className={styles.alphanode__highlightStats}>{highlight.stats}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className={styles.alphanode__mainContent}>
          {/* Left Column - Company Overview */}
          <motion.div
            className={styles.alphanode__overview}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={ANIMATION_VARIANTS.slideInLeft}
          >
            <div className={styles.alphanode__overviewCard}>
              <h3 className={styles.alphanode__overviewTitle}>关于 Alphanode Capital</h3>
              <p className={styles.alphanode__overviewText}>
                Alphanode Capital 是一家专注于区块链和加密货币领域的专业投资机构，
                总部位于新加坡金融中心。我们专注于早期项目投资，通过深度研究和战略合作，
                帮助优秀的区块链项目实现商业价值和技术突破。
              </p>
              
              {/* Team Members */}
              <div className={styles.alphanode__teamSection}>
                <h4 className={styles.alphanode__teamTitle}>核心团队</h4>
                <div className={styles.alphanode__teamGrid}>
                  {teamMembers.map((member, index) => (
                    <div key={index} className={styles.alphanode__teamMember}>
                      <div className={styles.alphanode__memberIcon}>{member.icon}</div>
                      <div className={styles.alphanode__memberInfo}>
                        <div className={styles.alphanode__memberRole}>{member.role}</div>
                        <div className={styles.alphanode__memberExperience}>{member.experience}</div>
                        <div className={styles.alphanode__memberSpecialty}>{member.specialty}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Investment Areas */}
          <motion.div
            className={styles.alphanode__investmentSection}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={ANIMATION_VARIANTS.slideInRight}
          >
            <div className={styles.alphanode__investmentCard}>
              <h3 className={styles.alphanode__investmentTitle}>投资重点领域</h3>
              <div className={styles.alphanode__investmentGrid}>
                {investmentAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    className={styles.alphanode__investmentArea}
                    variants={ANIMATION_VARIANTS.scaleIn}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    style={{ borderColor: area.color }}
                  >
                    <div 
                      className={styles.alphanode__areaIcon}
                      style={{ color: area.color }}
                    >
                      {area.icon}
                    </div>
                    <div className={styles.alphanode__areaContent}>
                      <h4 
                        className={styles.alphanode__areaName}
                        style={{ color: area.color }}
                      >
                        {area.name}
                      </h4>
                      <p className={styles.alphanode__areaDescription}>{area.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className={styles.alphanode__cta}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.fadeInUp}
        >
          <div className={styles.alphanode__ctaContent}>
            <h3 className={styles.alphanode__ctaTitle}>寻找下一个奇迹</h3>
            <p className={styles.alphanode__ctaText}>
              我们一直在寻找下一个能够创造奇迹的团队。如果您有创新的项目，欢迎与我们联系。
            </p>
            <motion.a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className={styles.alphanode__ctaButton}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className={styles.alphanode__ctaButtonIcon}>✉️</span>
              <span className={styles.alphanode__ctaButtonText}>联系我们</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className={styles.alphanode__stats}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.staggerContainer}
        >
          <motion.div
            className={styles.alphanode__stat}
            variants={ANIMATION_VARIANTS.scaleIn}
          >
            <div className={styles.alphanode__statNumber}>50+</div>
            <div className={styles.alphanode__statLabel}>投资项目</div>
            <div className={styles.alphanode__statDesc}>覆盖全球优质项目</div>
          </motion.div>
          <motion.div
            className={styles.alphanode__stat}
            variants={ANIMATION_VARIANTS.scaleIn}
          >
            <div className={styles.alphanode__statNumber}>$50M+</div>
            <div className={styles.alphanode__statLabel}>投资金额</div>
            <div className={styles.alphanode__statDesc}>累计投资规模</div>
          </motion.div>
          <motion.div
            className={styles.alphanode__stat}
            variants={ANIMATION_VARIANTS.scaleIn}
          >
            <div className={styles.alphanode__statNumber}>200x</div>
            <div className={styles.alphanode__statLabel}>最高回报</div>
            <div className={styles.alphanode__statDesc}>历史最佳表现</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AlphaNode;