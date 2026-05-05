import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="hero">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>
      
      <motion.div 
        className="hero-chip"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="live-dot"></div>
        {t('hero.chip')}
      </motion.div>

      <motion.h1 
        className="hero-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {t('hero.title')} <span className="accent-word">{t('hero.accent')}</span>
      </motion.h1>

      <motion.p 
        className="hero-sub"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {t('hero.sub')}
      </motion.p>

      <motion.div 
        className="hero-stats"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="stat">
          <span className="stat-n">190+</span>
          <span className="stat-l">{t('hero.stats.countries')}</span>
        </div>
        <div className="stat">
          <span className="stat-n">8k+</span>
          <span className="stat-l">{t('hero.stats.channels')}</span>
        </div>
        <div className="stat">
          <span className="stat-n">100%</span>
          <span className="stat-l">{t('hero.stats.legal')}</span>
        </div>
      </motion.div>

      <motion.a 
        href="#playlist" 
        className="hero-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        {t('hero.button')}
      </motion.a>
    </section>
  );
};

export default Hero;
