'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS } from '@/utils/constants';
import styles from './Community.module.css';

const Community: React.FC = () => {
  const communityData = {
    title: "加入CZQJ社区",
    subtitle: "与全球投资者一起创造奇迹",
    tasks: [
      {
        id: 1,
        title: "线上团队长对接任务",
        requirements: [
          "需要有自己的社区群，100人以上，置顶资料宣发",
          "需要邀请5人进电报群或者QQ群报道"
        ],
        completion: "完成以上两个任务的截图发给审核员拿地址打款"
      }
    ],
    rewards: {
      title: "团队预留268枚用于地推市场奖励",
      subtitle: "剩余代币全部加池"
    },
    socialLinks: [
      {
        name: "官方电报",
        url: "https://t.me/CZQJ_XLayer",
        icon: "telegram"
      },
      {
        name: "官方推特", 
        url: "https://x.com/CZQJ_XLayer",
        icon: "twitter"
      },
      {
        name: "官方QQ1群",
        url: "213157403",
        icon: "qq",
        isQQ: true
      },
      {
        name: "官方QQ2群",
        url: "369520232", 
        icon: "qq",
        isQQ: true
      }
    ]
  };

  const TelegramIcon = () => (
    <svg viewBox="0 0 24 24" className={styles.community__socialIcon}>
      <path fill="currentColor" d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );

  const TwitterIcon = () => (
    <svg viewBox="0 0 24 24" className={styles.community__socialIcon}>
      <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

  const QQIcon = () => (
    <svg viewBox="0 0 24 24" className={styles.community__socialIcon}>
      <path fill="currentColor" d="M12 2.5c-4.84 0-8.77 3.93-8.77 8.77 0 1.46.36 2.84.99 4.05-.83 1.73-1.35 3.65-1.35 5.68 0 .55.45 1 1 1s1-.45 1-1c0-1.65.42-3.2 1.16-4.55.98.35 2.03.55 3.14.55 1.04 0 2.04-.18 2.97-.5.93.32 1.93.5 2.97.5 1.11 0 2.16-.2 3.14-.55.74 1.35 1.16 2.9 1.16 4.55 0 .55.45 1 1 1s1-.45 1-1c0-2.03-.52-3.95-1.35-5.68.63-1.21.99-2.59.99-4.05C20.77 6.43 16.84 2.5 12 2.5zm-4.5 8.5c-.83 0-1.5-.67-1.5-1.5S6.67 8 7.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm9 0c-.83 0-1.5-.67-1.5-1.5S15.67 8 16.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
    </svg>
  );

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'telegram':
        return <TelegramIcon />;
      case 'twitter':
        return <TwitterIcon />;
      case 'qq':
        return <QQIcon />;
      default:
        return null;
    }
  };

  return (
    <section id="community" className={styles.community}>
      {/* 背景装饰海报 - 暂时移除以确保内容清晰显示 */}
      
      <div className={styles.community__container}>
        <motion.div
          className={styles.community__header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.staggerContainer}
        >
          <motion.h2 
            className={styles.community__title}
            variants={ANIMATION_VARIANTS.fadeInUp}
          >
            {communityData.title}
          </motion.h2>
          <motion.p 
            className={styles.community__subtitle}
            variants={ANIMATION_VARIANTS.fadeInUp}
          >
            {communityData.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.community__content}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={ANIMATION_VARIANTS.staggerContainer}
        >
          {/* 任务板块 */}
          <motion.div 
            className={styles.community__tasks}
            variants={ANIMATION_VARIANTS.fadeInUp}
          >
            <div className={styles.community__taskCard}>
              <h3 className={styles.community__taskTitle}>
                🧧 线上团队长对接任务：
              </h3>
              <div className={styles.community__taskList}>
                <div className={styles.community__taskItem}>
                  <span className={styles.community__taskIcon}>✅</span>
                  <span>需要有自己的社区群，100人以上，置顶资料宣发</span>
                </div>
                <div className={styles.community__taskItem}>
                  <span className={styles.community__taskIcon}>✅</span>
                  <span>需要邀请5人进电报群或者QQ群报道</span>
                </div>
                <div className={styles.community__taskCompletion}>
                  <span className={styles.community__taskIcon}>✅</span>
                  <span>完成以上两个任务的截图发给审核员拿地址打款</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 奖励板块 */}
          <motion.div 
            className={styles.community__rewards}
            variants={ANIMATION_VARIANTS.fadeInUp}
          >
            <div className={styles.community__rewardCard}>
              <h3 className={styles.community__rewardTitle}>
                🔷 团队预留268枚用于地推市场奖励，剩余代币全部加池
              </h3>
            </div>
          </motion.div>

          {/* 社交链接板块 */}
          <motion.div 
            className={styles.community__social}
            variants={ANIMATION_VARIANTS.fadeInUp}
          >
            <h3 className={styles.community__socialTitle}>官方社区</h3>
            <div className={styles.community__socialGrid}>
              {communityData.socialLinks.map((link, index) => (
                link.isQQ ? (
                  <motion.div
                    key={`social-${index}`}
                    className={styles.community__socialCard}
                    variants={ANIMATION_VARIANTS.scaleIn}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      navigator.clipboard.writeText(link.url);
                      alert(`QQ群号 ${link.url} 已复制到剪贴板`);
                    }}
                  >
                    <div className={styles.community__socialIconWrapper}>
                      {getIcon(link.icon)}
                    </div>
                    <div className={styles.community__socialInfo}>
                      <h4 className={styles.community__socialName}>
                        📌 {link.name}
                      </h4>
                      <p className={styles.community__socialUrl}>
                        QQ群号：{link.url}
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.a
                    key={`social-${index}`}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.community__socialCard}
                    variants={ANIMATION_VARIANTS.scaleIn}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <div className={styles.community__socialIconWrapper}>
                      {getIcon(link.icon)}
                    </div>
                    <div className={styles.community__socialInfo}>
                      <h4 className={styles.community__socialName}>
                        📌 {link.name}
                      </h4>
                      <p className={styles.community__socialUrl}>
                        {link.url}
                      </p>
                    </div>
                  </motion.a>
                )
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;