'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS, TOKEN_INFO } from '@/utils/constants';
import PieChart from '@/components/PieChart/PieChart';
import styles from './Tokenomics.module.css';

interface TokenomicsProps {
  className?: string;
}

const Tokenomics: React.FC<TokenomicsProps> = ({ className = '' }) => {
  const pieChartData = [
    {
      label: '私募',
      value: 59.3,
      color: '#FCD34D',
      description: '私募投资者分配 (1120枚) - 1400份，一份1 OKB，一个地址只能打一份'
    },
    {
      label: '底池',
      value: 26.5,
      color: '#F59E0B',
      description: 'DEX流动性池 (500枚)'
    },
    {
      label: '地推市场奖励',
      value: 14.2,
      color: '#DC2626',
      description: '市场推广与奖励 (268枚)'
    }
  ];

  const tokenomicsFeatures = [
    {
      icon: '💰',
      title: 'LP分红',
      description: '添加LP后，持有LP即可获得OKB分红奖励，让投资更有价值',
      percentage: '2.5%'
    },
    {
      icon: '🔒',
      title: '流动性锁定',
      description: '流动性永久锁定，保障安全',
      percentage: '100%'
    },
    {
      icon: '📈',
      title: 'LP激励',
      description: '长期持有LP获得更多收益，LP分红让投资更有价值',
      percentage: '持续'
    },
    {
      icon: '🎁',
      title: 'OKB奖励机制',
      description: '独创的LP分红机制，添加LP后持有LP即可获得OKB奖励，让投资更有价值',
      percentage: '自动'
    }
  ];

  const taxBreakdown = [
    {
      type: '买入税',
      percentage: TOKEN_INFO.buyTax,
      color: '#10B981',
      icon: 'trending_down',
      details: [
        '2.5% LP分红OKB',
        '0.5% 市场营销'
      ]
    },
    {
      type: '卖出税',
      percentage: TOKEN_INFO.sellTax,
      color: '#EF4444',
      icon: 'trending_up',
      details: [
        '2.5% LP分红OKB',
        '0.5% 市场营销'
      ]
    }
  ];

  return (
    <section className={`${styles.tokenomics} ${className}`} id="tokenomics">
      {/* 浮动装饰元素 */}
      <motion.div 
        className={styles.tokenomics__floatingBanner1}
        initial={{ opacity: 0, x: -100, rotate: -15 }}
        whileInView={{ opacity: 0.7, x: 0, rotate: -10 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <img src="/banner1.jpg" alt="代币经济装饰1" />
      </motion.div>

      <motion.div 
        className={styles.tokenomics__floatingBanner2}
        initial={{ opacity: 0, x: 100, rotate: 15 }}
        whileInView={{ opacity: 0.7, x: 0, rotate: 12 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
      >
        <img src="/banner2.jpg" alt="代币经济装饰2" />
      </motion.div>

      {/* 金币装饰效果 */}
      <div className={styles.tokenomics__coinDecorations}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.tokenomics__coin}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            whileInView={{ opacity: 0.4, scale: 1, rotate: 360 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1.5, 
              delay: i * 0.3,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 4
            }}
            style={{
              left: `${15 + (i * 15)}%`,
              top: `${25 + (i % 2) * 40}%`
            }}
          >
            💰
          </motion.div>
        ))}
      </div>

      <div className={styles.tokenomics__container}>
        {/* Section Header */}
        <motion.div
          className={styles.tokenomics__header}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.staggerContainer}
        >
          <motion.h2
            className={styles.tokenomics__title}
            variants={ANIMATION_VARIANTS.fadeInUp}
          >
            代币经济学
          </motion.h2>
          <motion.p
            className={styles.tokenomics__subtitle}
            variants={ANIMATION_VARIANTS.fadeInUp}
          >
            精心设计的代币模型，旨在激励长期持有与社区发展，实现价值共生。
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className={styles.tokenomics__mainContent}>
          {/* Left Column - Pie Chart */}
          <motion.div
            className={styles.tokenomics__chartSection}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={ANIMATION_VARIANTS.slideInLeft}
          >
            <div className={styles.tokenomics__chartContainer}>
              <h3 className={styles.tokenomics__chartTitle}>代币分配</h3>
              <PieChart 
                data={pieChartData} 
                size={320}
                strokeWidth={50}
                animationDuration={2.5}
              />
              
              {/* Legend */}
              <div className={styles.tokenomics__legend}>
                {pieChartData.map((item, index) => (
                  <div key={index} className={styles.tokenomics__legendItem}>
                    <div 
                      className={styles.tokenomics__legendColor}
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <div className={styles.tokenomics__legendContent}>
                      <span className={styles.tokenomics__legendLabel}>{item.label}</span>
                      <span className={styles.tokenomics__legendValue}>{item.value}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Features & Info */}
          <motion.div
            className={styles.tokenomics__infoSection}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={ANIMATION_VARIANTS.slideInRight}
          >
            {/* Token Info Cards */}
            <div className={styles.tokenomics__tokenInfo}>
              <div className={styles.tokenomics__infoCard}>
                <div className={styles.tokenomics__infoIcon}>🏷️</div>
                <div className={styles.tokenomics__infoContent}>
                  <div className={styles.tokenomics__infoLabel}>项目名称</div>
                  <div className={styles.tokenomics__infoValue}>CZQJ (创造奇迹)</div>
                </div>
              </div>
              <div className={styles.tokenomics__infoCard}>
                <div className={styles.tokenomics__infoIcon}>💎</div>
                <div className={styles.tokenomics__infoContent}>
                  <div className={styles.tokenomics__infoLabel}>发行总量</div>
                  <div className={styles.tokenomics__infoValue}>1888枚</div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className={styles.tokenomics__featuresGrid}>
              {tokenomicsFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className={styles.tokenomics__featureCard}
                  variants={ANIMATION_VARIANTS.fadeInUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className={styles.tokenomics__featureIcon}>{feature.icon}</div>
                  <div className={styles.tokenomics__featureContent}>
                    <h4 className={styles.tokenomics__featureTitle}>{feature.title}</h4>
                    <p className={styles.tokenomics__featureDescription}>{feature.description}</p>
                    <div className={styles.tokenomics__featurePercentage}>{feature.percentage}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tax Information */}
        <motion.div
          className={styles.tokenomics__taxSection}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.staggerContainer}
        >
          <motion.h3
            className={styles.tokenomics__sectionTitle}
            variants={ANIMATION_VARIANTS.fadeInUp}
          >
            交易税收机制
          </motion.h3>
          <div className={styles.tokenomics__taxGrid}>
            {taxBreakdown.map((tax, index) => (
              <motion.div
                key={index}
                className={styles.tokenomics__taxCard}
                variants={ANIMATION_VARIANTS.fadeInUp}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ borderColor: tax.color }}
              >
                <div className={styles.tokenomics__taxHeader}>
                  <span 
                    className={`${styles.tokenomics__taxIcon} material-symbols-outlined`}
                    style={{ color: tax.color }}
                  >
                    {tax.icon}
                  </span>
                  <h4 className={styles.tokenomics__taxTitle}>
                    {tax.type}
                  </h4>
                  <div 
                    className={styles.tokenomics__taxPercentage}
                    style={{ color: tax.color }}
                  >
                    {tax.percentage}%
                  </div>
                </div>
                <div className={styles.tokenomics__taxDetails}>
                  {tax.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className={styles.tokenomics__taxDetail}>
                      • {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Statistics */}
        <motion.div
          className={styles.tokenomics__stats}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.staggerContainer}
        >
          <motion.div
            className={styles.tokenomics__stat}
            variants={ANIMATION_VARIANTS.scaleIn}
          >
            <div className={styles.tokenomics__statNumber}>59.3%</div>
            <div className={styles.tokenomics__statLabel}>私募分配</div>
            <div className={styles.tokenomics__statDesc}>1120枚代币</div>
          </motion.div>
          <motion.div
            className={styles.tokenomics__stat}
            variants={ANIMATION_VARIANTS.scaleIn}
          >
            <div className={styles.tokenomics__statNumber}>3%</div>
            <div className={styles.tokenomics__statLabel}>交易税率</div>
            <div className={styles.tokenomics__statDesc}>2.5%LP分红OKB，0.5%营销</div>
          </motion.div>
          <motion.div
            className={styles.tokenomics__stat}
            variants={ANIMATION_VARIANTS.scaleIn}
          >
            <div className={styles.tokenomics__statNumber}>100%</div>
            <div className={styles.tokenomics__statLabel}>流动性锁定</div>
            <div className={styles.tokenomics__statDesc}>永久安全保障</div>
          </motion.div>
        </motion.div>

        {/* 私募详情卡片 - 重新设计 */}
        <motion.div
          className={styles.tokenomics__privateSaleCard}
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* 卡片背景装饰 */}
          <div className={styles.tokenomics__privateSaleBackground}>
            <div className={styles.tokenomics__privateSaleOrb1}></div>
            <div className={styles.tokenomics__privateSaleOrb2}></div>
            <div className={styles.tokenomics__privateSaleOrb3}></div>
          </div>

          {/* 标题区域 */}
          <motion.div 
            className={styles.tokenomics__privateSaleHeader}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className={styles.tokenomics__privateSaleIconWrapper}>
              <div className={styles.tokenomics__privateSaleIcon}>💎</div>
              <div className={styles.tokenomics__privateSaleIconGlow}></div>
            </div>
            <div className={styles.tokenomics__privateSaleTitleWrapper}>
              <h3 className={styles.tokenomics__privateSaleTitle}>私募详情</h3>
              <p className={styles.tokenomics__privateSaleSubtitle}>Private Sale Details</p>
            </div>
          </motion.div>

          {/* 内容网格 */}
          <div className={styles.tokenomics__privateSaleGrid}>
            {/* 总代币数量 */}
            <motion.div 
              className={`${styles.tokenomics__privateSaleItem} ${styles.tokenomics__privateSaleItem1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.03 }}
            >
              <div className={styles.tokenomics__privateSaleItemIcon}>🏆</div>
              <div className={styles.tokenomics__privateSaleItemContent}>
                <span className={styles.tokenomics__privateSaleLabel}>总代币数量</span>
                <span className={styles.tokenomics__privateSaleValue}>1120枚</span>
                <div className={styles.tokenomics__privateSaleProgress}>
                  <div className={styles.tokenomics__privateSaleProgressBar} style={{width: '59.3%'}}></div>
                </div>
              </div>
            </motion.div>

            {/* 私募份额 */}
            <motion.div 
              className={`${styles.tokenomics__privateSaleItem} ${styles.tokenomics__privateSaleItem2}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.03 }}
            >
              <div className={styles.tokenomics__privateSaleItemIcon}>📊</div>
              <div className={styles.tokenomics__privateSaleItemContent}>
                <span className={styles.tokenomics__privateSaleLabel}>私募份额</span>
                <span className={styles.tokenomics__privateSaleValue}>1400份</span>
                <div className={styles.tokenomics__privateSaleSubtext}>限量发售</div>
              </div>
            </motion.div>

            {/* 每份价格 */}
            <motion.div 
              className={`${styles.tokenomics__privateSaleItem} ${styles.tokenomics__privateSaleItem3}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.03 }}
            >
              <div className={styles.tokenomics__privateSaleItemIcon}>💰</div>
              <div className={styles.tokenomics__privateSaleItemContent}>
                <span className={styles.tokenomics__privateSaleLabel}>每份价格</span>
                <span className={styles.tokenomics__privateSaleValue}>1 OKB</span>
                <div className={styles.tokenomics__privateSaleSubtext}>固定价格</div>
              </div>
            </motion.div>

            {/* 购买限制 */}
            <motion.div 
              className={`${styles.tokenomics__privateSaleItem} ${styles.tokenomics__privateSaleItem4}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.03 }}
            >
              <div className={styles.tokenomics__privateSaleItemIcon}>🔒</div>
              <div className={styles.tokenomics__privateSaleItemContent}>
                <span className={styles.tokenomics__privateSaleLabel}>购买限制</span>
                <span className={styles.tokenomics__privateSaleValue}>一个地址一份</span>
                <div className={styles.tokenomics__privateSaleSubtext}>公平分配</div>
              </div>
            </motion.div>
          </div>

          {/* 底部装饰线 */}
          <motion.div 
            className={styles.tokenomics__privateSaleFooter}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className={styles.tokenomics__privateSaleFooterLine}></div>
          </motion.div>
        </motion.div>

        {/* LP分红奖励说明区块 */}
        <motion.div
          className={styles.tokenomics__lpRewardCard}
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* 卡片背景装饰 */}
          <div className={styles.tokenomics__lpRewardBackground}>
            <div className={styles.tokenomics__lpRewardOrb1}></div>
            <div className={styles.tokenomics__lpRewardOrb2}></div>
            <div className={styles.tokenomics__lpRewardOrb3}></div>
          </div>

          {/* 标题区域 */}
          <motion.div 
            className={styles.tokenomics__lpRewardHeader}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className={styles.tokenomics__lpRewardIconWrapper}>
              <div className={styles.tokenomics__lpRewardIcon}>🎁</div>
              <div className={styles.tokenomics__lpRewardIconGlow}></div>
            </div>
            <div className={styles.tokenomics__lpRewardTitleWrapper}>
              <h3 className={styles.tokenomics__lpRewardTitle}>LP分红奖励机制</h3>
              <p className={styles.tokenomics__lpRewardSubtitle}>LP Reward Mechanism</p>
            </div>
          </motion.div>

          {/* 分红机制说明 */}
          <div className={styles.tokenomics__lpRewardContent}>
            <motion.div 
              className={styles.tokenomics__lpRewardMainInfo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className={styles.tokenomics__lpRewardPercentage}>2.5%</div>
              <p className={styles.tokenomics__lpRewardDescription}>
                用户添加LP后，持有LP即可自动获得OKB分红奖励。每笔交易的2.5%税收将以OKB形式分配给LP持有者，无需手动领取，实时自动到账。
              </p>
            </motion.div>

            {/* 奖励特点网格 */}
            <div className={styles.tokenomics__lpRewardGrid}>
              <motion.div 
                className={styles.tokenomics__lpRewardFeature}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ y: -3, scale: 1.02 }}
              >
                <div className={styles.tokenomics__lpRewardFeatureIcon}>➕</div>
                <div className={styles.tokenomics__lpRewardFeatureContent}>
                  <h4>添加LP</h4>
                  <p>用户添加流动性，获得LP代币</p>
                </div>
              </motion.div>

              <motion.div 
                className={styles.tokenomics__lpRewardFeature}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                whileHover={{ y: -3, scale: 1.02 }}
              >
                <div className={styles.tokenomics__lpRewardFeatureIcon}>🔄</div>
                <div className={styles.tokenomics__lpRewardFeatureContent}>
                  <h4>自动分红</h4>
                  <p>持有LP即可自动获得OKB奖励分红</p>
                </div>
              </motion.div>

              <motion.div 
                className={styles.tokenomics__lpRewardFeature}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ y: -3, scale: 1.02 }}
              >
                <div className={styles.tokenomics__lpRewardFeatureIcon}>⚡</div>
                <div className={styles.tokenomics__lpRewardFeatureContent}>
                  <h4>实时到账</h4>
                  <p>无需手动领取，实时自动到账</p>
                </div>
              </motion.div>

              <motion.div 
                className={styles.tokenomics__lpRewardFeature}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                whileHover={{ y: -3, scale: 1.02 }}
              >
                <div className={styles.tokenomics__lpRewardFeatureIcon}>📈</div>
                <div className={styles.tokenomics__lpRewardFeatureContent}>
                  <h4>复利增长</h4>
                  <p>持续持有LP代币，享受复合收益增长</p>
                </div>
              </motion.div>
            </div>

            {/* 分红流程说明 */}
            <motion.div 
              className={styles.tokenomics__lpRewardProcess}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <h4 className={styles.tokenomics__lpRewardProcessTitle}>分红流程说明</h4>
              <div className={styles.tokenomics__lpRewardSteps}>
                <div className={styles.tokenomics__lpRewardStep}>
                  <div className={styles.tokenomics__lpRewardStepNumber}>1</div>
                  <div className={styles.tokenomics__lpRewardStepText}>用户添加LP获得LP代币</div>
                </div>
                <div className={styles.tokenomics__lpRewardArrow}>→</div>
                <div className={styles.tokenomics__lpRewardStep}>
                  <div className={styles.tokenomics__lpRewardStepNumber}>2</div>
                  <div className={styles.tokenomics__lpRewardStepText}>持有LP自动获得分红</div>
                </div>
                <div className={styles.tokenomics__lpRewardArrow}>→</div>
                <div className={styles.tokenomics__lpRewardStep}>
                  <div className={styles.tokenomics__lpRewardStepNumber}>3</div>
                  <div className={styles.tokenomics__lpRewardStepText}>OKB奖励实时到账</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 底部装饰线 */}
          <motion.div 
            className={styles.tokenomics__lpRewardFooter}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className={styles.tokenomics__lpRewardFooterLine}></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tokenomics;