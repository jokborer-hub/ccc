// Application constants
export const APP_CONFIG = {
  name: 'CZQJ',
  fullName: '创造奇迹',
  description: '超越BTC的神币，必定会在X链上创造奇迹，掀起全新浪潮。',
  version: '1.0.0',
} as const;

// Social media links
export const SOCIAL_LINKS = {
  telegram: 'https://t.me/CZQJ_XLayer',
  twitter: 'https://x.com/CZQJ_XLayer',
  qqGroup1: 'QQ1群：213157403',
  qqGroup2: 'QQ2群：369520232',
  email: 'contact@alphanode.capital',
} as const;

// Navigation items
export const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#alphanode', label: 'Alphanode' },
  { href: '#tokenomics', label: 'Tokenomics' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#contact', label: 'Contact' },
] as const;

// Token information
export const TOKEN_INFO = {
  name: 'CZQJ',
  fullName: '创造奇迹',
  totalSupply: 1888,
  buyTax: 3,
  sellTax: 3,
  privateSaleShares: 1400,
  privateSaleRange: '1 OKB',
  teamReserve: 268,
} as const;

// Animation variants for Framer Motion
export const ANIMATION_VARIANTS = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  scaleIn: {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  slideInLeft: {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  slideInRight: {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
} as const;

// Responsive breakpoints
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Theme configuration
export const THEME_CONFIG = {
  storageKey: 'czqj-theme',
  defaultTheme: 'light' as const,
  themes: ['light', 'dark'] as const,
} as const;