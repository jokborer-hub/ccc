'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ANIMATION_VARIANTS } from '@/utils/constants';
import styles from './Vision.module.css';

interface VisionProps {
  className?: string;
}

const Vision: React.FC<VisionProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // 视差效果
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  
  // 平滑的弹簧动画
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  const visionSections = [
    {
      id: '01',
      title: '战略背景：OKB链的重大转型与升级',
      icon: '🚀',
      content: [
        'OKB生态的这次转型堪称其发展史上的里程碑。通过大规模代币销毁和经济模型重塑，OKB从功能型平台代币转变为具有"数字黄金"叙事的稀缺核心资产。',
        '升级后的X Layer网络采用ZK-Rollup技术，实现了5000 TPS的高交易吞吐量和接近零的Gas费用，为复杂的Web3.0应用提供了坚实的技术基础。',
        '同时，OKB智能合约完成了升级，永久移除了增发和手动销毁的功能，使2100万枚的上限通过代码硬性锁定。这种极致的通缩模型为CZQJ数字经济的价值稳定提供了坚实基础。'
      ],
      highlight: '6525万枚OKB销毁',
      stats: { value: '200%', label: 'OKB价格暴涨' }
    },
    {
      id: '02',
      title: 'CZQJ的愿景：构建用户主导的数字经济新范式',
      icon: '🌟',
      content: [
        'CZQJ致力于解决Web2.0时代存在的数据垄断和价值分配不均问题。它旨在构建一个用户真正拥有数据主权、价值分配更加公平的数字经济生态系统。',
        '在CZQJ的经济体系中，每个参与者不仅是数据的生产者，也是价值的共享者。通过区块链技术，CZQJ实现了数据价值的确权和量化，让用户能够直接从自己创造的数据价值中获益。',
        'CZQJ的核心理念是"共建、共治、共享"，通过去中心化自治组织（DAO）机制，让生态参与者共同决定发展方向和规则调整，实现真正的社区自治。'
      ],
      highlight: '共建、共治、共享',
      stats: { value: 'Web3.0', label: '数字经济新范式' }
    },
    {
      id: '03',
      title: '技术架构：基于X Layer的Web3.0基础设施',
      icon: '⚡',
      content: [
        'CZQJ构建在OKB的X Layer网络上，充分利用了其高性能和低成本的技术优势。X Layer每秒5000笔交易的处理能力和近乎零的Gas费用，为CZQJ提供了堪比传统Web2.0应用的用户体验。'
      ],
      features: [
        { name: '数据主权层', desc: '采用零知识证明技术，实现用户数据的确权与隐私保护' },
        { name: '价值流通层', desc: '基于OKB构建的去中心化金融协议，支持各类数字资产的高效流动' },
        { name: '智能合约层', desc: '完全兼容EVM，支持开发者快速部署和迁移DApp' },
        { name: '治理层', desc: '实现DAO治理机制，让OKB持有者参与生态关键决策' }
      ],
      highlight: '5000 TPS',
      stats: { value: '近零', label: 'Gas费用' }
    },
    {
      id: '04',
      title: '经济模型：DEFI与生态激励的双驱动',
      icon: '💎',
      content: [
        'CZQJ的经济模型设计精巧，融合了DEFI机制和生态激励双重机制。模型借鉴了OKB的成功经验，引入了DEFI奖励机制。',
        '在CZQJ生态中，OKB作为基础价值媒介和Gas费代币，用于支付网络交易费用和服务费用。这种设计为OKB创造了持续的使用需求和价值支撑。',
        'CZQJ设立了生态发展基金，手续费收入分配给LP用户，这种分配机制确保了生态价值的公平分配。'
      ],
      highlight: 'DEFI双驱动',
      stats: { value: 'LP', label: '分红机制' }
    },
    {
      id: '05',
      title: '治理机制：社区驱动的生态进化',
      icon: '🏛️',
      content: [
        'CZQJ采用完全去中心化的治理模式，所有重大决策都由持有者通过投票决定。这种机制保证了生态发展的民主性和透明度。',
        '治理投票涵盖生态发展方向、新功能上线、项目准入和参数调整等多个方面。'
      ],
      highlight: 'DAO治理',
      stats: { value: '100%', label: '去中心化' }
    },
    {
      id: '06',
      title: '竞争优势：OKB生态的全方位支撑',
      icon: '🛡️',
      content: [
        'CZQJ凭借OKB生态的全力支持，具备了多重竞争优势：',
        'OKX拥有超过6000万用户，为CZQJ提供了庞大的初始用户基础。通过"0 Gas提币"等功能，最大限度地降低了用户进入门槛，打造了用户转化的"超级漏斗"。',
        'OKX Pay将默认采用X Layer作为底层公链网络，为CZQJ带来了源源不断的真实用户和交易量。这种支付场景的高频使用将进一步推动整个链上生态的繁荣。'
      ],
      highlight: '6000万用户',
      stats: { value: '0 Gas', label: '提币费用' }
    },
    {
      id: '07',
      title: '挑战与应对：市场竞争下的发展路径',
      icon: '🎯',
      content: [
        '尽管前景广阔，CZQJ也面临着不小的挑战。Layer 2赛道竞争激烈，Arbitrum、Optimism等头部L2早已凭借先发优势建立了强大的生态壁垒。',
        'CZQJ代表着OKB链从交易平台向Web3.0价值互联网的战略转型——它不再仅仅是资产交易的场所，而是成为数据价值流通的基础设施。',
        '随着OKB持有者参与治理、开发者构建应用、用户掌握数据主权，CZQJ正在编织一个价值自主流通的新型数字社会。在这里，每个参与者都能从自己创造的价值中受益，真正实现Web3.0所承诺的共建、共治、共享愿景。'
      ],
      highlight: 'Web3.0转型',
      stats: { value: '∞', label: '无限可能' }
    }
  ];

  return (
    <section className={`${styles.vision} ${className}`} id="vision" ref={containerRef}>
      {/* 背景装饰 */}
      <motion.div 
        className={styles.vision__background}
        style={{ y: smoothY, opacity }}
      >
        <motion.div 
          className={styles.vision__backgroundPattern}
          style={{ scale: smoothScale }}
        />
        <div className={styles.vision__backgroundGradient}></div>
      </motion.div>

      {/* 增强粒子效果 */}
      <div className={styles.vision__particles}>
        {[...Array(20)].map((_, i) => {
          const particleY = useTransform(scrollYProgress, [0, 1], [0, -100 - i * 10]);
          const particleOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.8, 0.8, 0]);
          
          return (
            <motion.div
              key={i}
              className={styles.vision__particle}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.6, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 2, 
                delay: i * 0.1,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 4
              }}
              style={{
                left: `${5 + (i * 4.5)}%`,
                top: `${10 + (i % 4) * 25}%`,
                y: particleY,
                opacity: particleOpacity
              }}
            />
          );
        })}
      </div>

      <div className={styles.vision__container}>
        {/* 标题区域 */}
        <motion.div
          className={styles.vision__header}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.staggerContainer}
        >
          <motion.div
            className={styles.vision__badge}
            variants={ANIMATION_VARIANTS.scaleIn}
          >
            <span className={styles.vision__badgeIcon}></span>
            <span className={styles.vision__badgeText}>CZQJ 愿景</span>
          </motion.div>
          
          <motion.h2
            className={styles.vision__title}
            variants={ANIMATION_VARIANTS.fadeInUp}
          >
            OKB链上首个Web3.0数字经济的崛起与愿景
          </motion.h2>
          
          <motion.p
            className={styles.vision__subtitle}
            variants={ANIMATION_VARIANTS.fadeInUp}
          >
            一次大规模代币销毁，一条高性能Layer 2链，一个全新的数字经济范式——CZQJ正在OKB生态中孕育而生。
          </motion.p>

          <motion.div
            className={styles.vision__timeline}
            variants={ANIMATION_VARIANTS.fadeInUp}
          >
            <div className={styles.vision__timelineItem}>
              <span className={styles.vision__timelineDate}>2025年8月</span>
              <span className={styles.vision__timelineEvent}>
                OKX交易所宣布震惊加密世界的战略升级：一次性销毁6525万枚OKB，将总供应量永久锁定在2100万枚，同时将OKT Chain合并至X Layer网络。
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* 核心内容区域 */}
        <div className={styles.vision__content}>
          {visionSections.map((section, index) => (
            <motion.div
              key={section.id}
              className={styles.vision__section}
              initial={{ opacity: 0, y: 60, rotateX: -15 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                transition: {
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                y: -10,
                rotateX: 2,
                rotateY: 2,
                scale: 1.02,
                transition: {
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
            >
              {/* 章节头部 */}
              <div className={styles.vision__sectionHeader}>
                <motion.div
                  className={styles.vision__sectionNumber}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    y: -3,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ 
                    scale: 1, 
                    rotate: 0,
                    transition: { 
                      type: "spring", 
                      stiffness: 200, 
                      damping: 15,
                      delay: index * 0.1 
                    }
                  }}
                  viewport={{ once: true }}
                >
                  {section.id}
                </motion.div>
                
                <div className={styles.vision__sectionTitleWrapper}>
                  <motion.div
                    className={styles.vision__sectionIcon}
                    whileHover={{ 
                      scale: 1.3, 
                      rotate: 15,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: index * 0.1 + 0.2 }
                    }}
                    viewport={{ once: true }}
                  >
                    {section.icon}
                  </motion.div>
                  <motion.h3 
                    className={styles.vision__sectionTitle}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: index * 0.1 + 0.3 }
                    }}
                    viewport={{ once: true }}
                  >
                    {section.title}
                  </motion.h3>
                </div>

                {/* 统计数据 */}
                <motion.div
                  className={styles.vision__sectionStats}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -8,
                    rotateY: 5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { delay: index * 0.1 + 0.4 }
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className={styles.vision__statValue}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: index * 0.1 + 0.5 }
                    }}
                    viewport={{ once: true }}
                  >
                    {section.stats.value}
                  </motion.div>
                  <motion.div 
                    className={styles.vision__statLabel}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: index * 0.1 + 0.6 }
                    }}
                    viewport={{ once: true }}
                  >
                    {section.stats.label}
                  </motion.div>
                </motion.div>
              </div>

              {/* 章节内容 */}
              <div className={styles.vision__sectionContent}>
                {section.content.map((paragraph, pIndex) => (
                  <motion.p
                    key={pIndex}
                    className={styles.vision__paragraph}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: pIndex * 0.1 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}

                {/* 技术架构特性列表 */}
                {section.features && (
                  <motion.div 
                    className={styles.vision__features}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  >
                    {section.features.map((feature, fIndex) => (
                      <motion.div
                        key={fIndex}
                        className={styles.vision__feature}
                        initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
                        whileInView={{ 
                          opacity: 1, 
                          scale: 1, 
                          rotateX: 0,
                          transition: { 
                            duration: 0.6, 
                            delay: fIndex * 0.15,
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }
                        }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          y: -8, 
                          scale: 1.03,
                          rotateX: 2,
                          rotateY: 2,
                          transition: { 
                            duration: 0.3,
                            ease: "easeOut"
                          }
                        }}
                      >
                        <motion.div 
                          className={styles.vision__featureIcon}
                          initial={{ scale: 0 }}
                          whileInView={{ 
                            scale: 1,
                            transition: { 
                              delay: fIndex * 0.15 + 0.2,
                              type: "spring",
                              stiffness: 400
                            }
                          }}
                          viewport={{ once: true }}
                        >
                          ·
                        </motion.div>
                        <div className={styles.vision__featureContent}>
                          <motion.h4 
                            className={styles.vision__featureName}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ 
                              opacity: 1, 
                              x: 0,
                              transition: { delay: fIndex * 0.15 + 0.3 }
                            }}
                            viewport={{ once: true }}
                          >
                            {feature.name}
                          </motion.h4>
                          <motion.p 
                            className={styles.vision__featureDesc}
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ 
                              opacity: 1, 
                              x: 0,
                              transition: { delay: fIndex * 0.15 + 0.4 }
                            }}
                            viewport={{ once: true }}
                          >
                            {feature.desc}
                          </motion.p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* 亮点标签 */}
                <motion.div
                  className={styles.vision__highlight}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className={styles.vision__highlightIcon}>✨</span>
                  <span className={styles.vision__highlightText}>{section.highlight}</span>
                </motion.div>
              </div>

              {/* 连接线 */}
              {index < visionSections.length - 1 && (
                <motion.div
                  className={styles.vision__connector}
                  initial={{ scaleY: 0, opacity: 0 }}
                  whileInView={{ 
                    scaleY: 1, 
                    opacity: 1,
                    transition: { 
                      duration: 1.2, 
                      delay: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }
                  }}
                  viewport={{ once: true }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* 底部总结 */}
        <motion.div
          className={styles.vision__conclusion}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.vision__conclusionContent}>
            <motion.div
              className={styles.vision__conclusionIcon}
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "linear"
              }}
            >
              🚀
            </motion.div>
            <h3 className={styles.vision__conclusionTitle}>
              CZQJ：开启Web3.0数字经济新纪元
            </h3>
            <p className={styles.vision__conclusionText}>
              CZQJ代表着OKB链从交易平台向Web3.0价值互联网的战略转型——它不再仅仅是资产交易的场所，而是成为数据价值流通的基础设施。在这里，每个参与者都能从自己创造的价值中受益，真正实现Web3.0所承诺的共建、共治、共享愿景。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;