'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Roadmap.module.css';

interface RoadmapItem {
  phase: string;
  title: string;
  description: string;
  tasks: string[];
  status: 'completed' | 'current' | 'upcoming';
  date: string;
}

const ROADMAP_DATA: RoadmapItem[] = [
  {
    phase: 'PHASE 1',
    title: '项目启动',
    description: '建立基础设施和社区',
    tasks: [
      '智能合约部署',
      '社区建设',
      '白皮书发布'
    ],
    status: 'completed',
    date: '2024 Q4'
  },
  {
    phase: 'PHASE 2',
    title: '市场推广',
    description: '扩大影响力和用户基础',
    tasks: [
      'X链生态集成',
      '私募轮启动',
      'KOL合作推广',
      '社区激励计划'
    ],
    status: 'current',
    date: '2025 Q1'
  },
  {
    phase: 'PHASE 3',
    title: '生态发展',
    description: '构建完整的DeFi生态',
    tasks: [
      'DEX流动性提供',
      'NFT市场集成',
      '治理系统上线'
    ],
    status: 'upcoming',
    date: '2025 Q2'
  }
];

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className={styles.roadmap}>
      {/* 时间线背景装饰 */}
      <motion.div 
        className={styles.roadmap__timelineBanner}
        initial={{ opacity: 0, y: 50, rotate: 5 }}
        whileInView={{ opacity: 0.6, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      >
        <img src="/banner1.jpg" alt="路线图时间线装饰" />
      </motion.div>

      {/* 浮动里程碑装饰 */}
      <div className={styles.roadmap__milestoneDecorations}>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.roadmap__milestone}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            whileInView={{ opacity: 0.5, scale: 1, rotate: 360 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 2, 
              delay: i * 0.4,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 5
            }}
            style={{
              right: `${10 + (i * 18)}%`,
              top: `${20 + (i % 3) * 30}%`
            }}
          >
            🎯
          </motion.div>
        ))}
      </div>

      {/* 右侧装饰banner */}
      <motion.div 
        className={styles.roadmap__sideBanner}
        initial={{ opacity: 0, x: 100, rotate: -15 }}
        whileInView={{ opacity: 0.7, x: 0, rotate: -10 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
      >
        <img src="/banner2.jpg" alt="路线图侧边装饰" />
      </motion.div>

      <div className={styles.roadmap__container}>
        {/* Section Header */}
        <div className={styles.roadmap__header}>
          <motion.h2 
            className={styles.roadmap__title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            发展路线图
          </motion.h2>
          <motion.p 
            className={styles.roadmap__subtitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            明确的执行计划和社区任务，共同推动项目发展，实现每一个里程碑
          </motion.p>
        </div>

        {/* Modern Grid Timeline */}
        <div className={styles.roadmap__grid}>
          {ROADMAP_DATA.map((item, index) => (
            <motion.div
              key={index}
              className={`${styles.roadmap__gridItem} ${styles[`roadmap__gridItem--${item.status}`]}`}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            >
              {/* Phase Number */}
              <div className={styles.roadmap__phaseNumber}>
                <span className={styles.roadmap__phaseText}>0{index + 1}</span>
                <div className={styles.roadmap__phaseIcon}>
                  {item.status === 'completed' && '✓'}
                  {item.status === 'current' && '▶'}
                  {item.status === 'upcoming' && '○'}
                </div>
              </div>

              {/* Card Content */}
              <div className={styles.roadmap__cardContent}>
                {/* Header */}
                <div className={styles.roadmap__cardHeader}>
                  <div className={styles.roadmap__phaseLabel}>{item.phase}</div>
                  <div className={styles.roadmap__dateLabel}>{item.date}</div>
                </div>

                {/* Title & Description */}
                <h3 className={styles.roadmap__cardTitle}>{item.title}</h3>
                <p className={styles.roadmap__cardDesc}>{item.description}</p>

                {/* Tasks Grid */}
                <div className={styles.roadmap__tasksGrid}>
                  {item.tasks.map((task, taskIndex) => (
                    <motion.div
                      key={taskIndex}
                      className={styles.roadmap__taskItem}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: (index * 0.15) + (taskIndex * 0.08) 
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        x: 8,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className={styles.roadmap__taskDot}></div>
                      <span className={styles.roadmap__taskText}>{task}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Status Indicator */}
                <div className={styles.roadmap__statusIndicator}>
                  <div className={`${styles.roadmap__statusBadge} ${styles[`roadmap__statusBadge--${item.status}`]}`}>
                    <div className={styles.roadmap__statusIcon}>
                      {item.status === 'completed' && '✓'}
                      {item.status === 'current' && '⚡'}
                      {item.status === 'upcoming' && '⏳'}
                    </div>
                    <span className={styles.roadmap__statusText}>
                      {item.status === 'completed' && '已完成'}
                      {item.status === 'current' && '进行中'}
                      {item.status === 'upcoming' && '即将开始'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Line */}
              {index < ROADMAP_DATA.length - 1 && (
                <div className={styles.roadmap__progressLine}>
                  <div className={styles.roadmap__progressFill}></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className={styles.roadmap__cta}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className={styles.roadmap__cta_title}>加入我们的旅程</h3>
          <p className={styles.roadmap__cta_description}>
            成为CZQJ社区的一员，共同见证每一个里程碑的实现
          </p>
          <div className={styles.roadmap__cta_buttons}>
            <motion.a
              href="#contact"
              className={styles.roadmap__cta_button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              加入社区
            </motion.a>
            <motion.a
              href="#tokenomics"
              className={`${styles.roadmap__cta_button} ${styles['roadmap__cta_button--secondary']}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              了解代币经济
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className={styles.roadmap__bg_element_1}></div>
      <div className={styles.roadmap__bg_element_2}></div>
      <div className={styles.roadmap__bg_element_3}></div>
    </section>
  );
};

export default Roadmap;