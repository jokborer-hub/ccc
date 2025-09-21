'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '@/utils/constants';
import styles from './Contact.module.css';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  description: string;
  color: string;
}

const SOCIAL_DATA: SocialLink[] = [
  {
    name: 'Telegram',
    url: SOCIAL_LINKS.telegram,
    icon: 'telegram',
    description: '加入官方电报群，获取最新资讯',
    color: '#0088cc'
  },
  {
    name: 'Twitter',
    url: SOCIAL_LINKS.twitter,
    icon: 'twitter',
    description: '关注我们的推特动态',
    color: '#1da1f2'
  },
  {
    name: 'QQ群1',
    url: '#',
    icon: 'group',
    description: SOCIAL_LINKS.qqGroup1,
    color: '#12b7f5'
  },
  {
    name: 'QQ群2',
    url: '#',
    icon: 'group',
    description: SOCIAL_LINKS.qqGroup2,
    color: '#12b7f5'
  }
];

const CONTACT_INFO = [
  {
    title: '商务合作',
    description: '寻求战略合作伙伴关系',
    email: SOCIAL_LINKS.email,
    icon: 'business'
  },
  {
    title: '技术支持',
    description: '获取技术帮助和支持',
    email: 'tech@alphanode.capital',
    icon: 'support'
  },
  {
    title: '媒体咨询',
    description: '媒体采访和新闻发布',
    email: 'media@alphanode.capital',
    icon: 'campaign'
  }
];

const Contact: React.FC = () => {
  const handleSocialClick = (url: string, name: string) => {
    if (url === '#') {
      // For QQ groups, show alert with group number
      const qqGroup = SOCIAL_DATA.find(item => item.name === name);
      if (qqGroup) {
        alert(`请加入${qqGroup.description}`);
      }
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section id="contact" className={styles.contact}>
      {/* 联系方式背景装饰 */}
      <motion.div 
        className={styles.contact__backgroundBanner}
        initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
        whileInView={{ opacity: 0.5, scale: 1, rotate: -15 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <img src="/banner1.jpg" alt="联系我们背景装饰" />
      </motion.div>

      {/* 社交媒体图标装饰 */}
      <div className={styles.contact__socialDecorations}>
        {['💬', '🌐', '📱', '✉️', '🚀'].map((icon, i) => (
          <motion.div
            key={i}
            className={styles.contact__socialIcon}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            whileInView={{ opacity: 0.6, scale: 1, rotate: 360 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1.8, 
              delay: i * 0.3,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 6
            }}
            style={{
              left: `${20 + (i * 16)}%`,
              top: `${30 + (i % 2) * 35}%`
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      {/* 右下角装饰banner */}
      <motion.div 
        className={styles.contact__cornerBanner}
        initial={{ opacity: 0, x: 80, y: 80, rotate: 25 }}
        whileInView={{ opacity: 0.6, x: 0, y: 0, rotate: 15 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 2.5, ease: "easeOut", delay: 0.8 }}
      >
        <img src="/banner2.jpg" alt="联系角落装饰" />
      </motion.div>

      <div className={styles.contact__container}>
        {/* Section Header */}
        <div className={styles.contact__header}>
          <motion.h2 
            className={styles.contact__title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            加入我们
          </motion.h2>
          <motion.p 
            className={styles.contact__subtitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            加入我们的官方社区，成为奇迹的一部分！关注我们的频道，获取最新动态，共同见证辉煌
          </motion.p>
        </div>

        {/* Social Media Links */}
        <div className={styles.contact__social}>
          <motion.h3 
            className={styles.contact__social_title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            官方社交媒体
          </motion.h3>
          
          <div className={styles.contact__social_grid}>
            {SOCIAL_DATA.map((social, index) => (
              <motion.div
                key={social.name}
                className={styles.contact__social_card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSocialClick(social.url, social.name)}
              >
                <div className={styles.contact__social_icon} style={{ backgroundColor: social.color }}>
                  <span className="material-symbols-outlined">{social.icon}</span>
                </div>
                <h4 className={styles.contact__social_name}>{social.name}</h4>
                <p className={styles.contact__social_description}>{social.description}</p>
                <div className={styles.contact__social_button}>
                  <span>立即加入</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className={styles.contact__info}>
          <motion.h3 
            className={styles.contact__info_title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
          >
            联系方式
          </motion.h3>
          
          <div className={styles.contact__info_grid}>
            {CONTACT_INFO.map((contact, index) => (
              <motion.div
                key={contact.title}
                className={styles.contact__info_card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleEmailClick(contact.email)}
              >
                <div className={styles.contact__info_icon}>
                  <span className="material-symbols-outlined">{contact.icon}</span>
                </div>
                <h4 className={styles.contact__info_name}>{contact.title}</h4>
                <p className={styles.contact__info_description}>{contact.description}</p>
                <div className={styles.contact__info_email}>{contact.email}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className={styles.contact__cta}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          viewport={{ once: true }}
        >
          <h3 className={styles.contact__cta_title}>准备好加入CZQJ了吗？</h3>
          <p className={styles.contact__cta_description}>
            不要错过这个改变命运的机会，立即加入我们的社区，成为奇迹的见证者和创造者
          </p>
          <div className={styles.contact__cta_buttons}>
            <motion.button
              className={styles.contact__cta_button}
              onClick={() => handleSocialClick(SOCIAL_LINKS.telegram, 'Telegram')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="material-symbols-outlined">telegram</span>
              加入电报群
            </motion.button>
            <motion.a
              href="#tokenomics"
              className={`${styles.contact__cta_button} ${styles['contact__cta_button--secondary']}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="material-symbols-outlined">info</span>
              了解更多
            </motion.a>
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div 
          className={styles.contact__newsletter}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.7 }}
          viewport={{ once: true }}
        >
          <div className={styles.contact__newsletter_content}>
            <h4 className={styles.contact__newsletter_title}>订阅最新资讯</h4>
            <p className={styles.contact__newsletter_description}>
              第一时间获取CZQJ的重要更新和市场动态
            </p>
          </div>
          <div className={styles.contact__newsletter_form}>
            <input 
              type="email" 
              placeholder="输入您的邮箱地址"
              className={styles.contact__newsletter_input}
            />
            <motion.button 
              className={styles.contact__newsletter_button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              订阅
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className={styles.contact__bg_element_1}></div>
      <div className={styles.contact__bg_element_2}></div>
      <div className={styles.contact__bg_element_3}></div>
    </section>
  );
};

export default Contact;