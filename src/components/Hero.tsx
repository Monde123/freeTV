import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
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
        LIVE & GRATUIT
      </motion.div>

      <motion.h1 
        className="hero-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        LA TÉLÉVISION <span className="accent-word">MONDIALE</span>
      </motion.h1>

      <motion.p 
        className="hero-sub"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Accédez instantanément à des milliers de chaînes gratuites du monde entier. 
        Des listes de lecture M3U8 officielles et mises à jour en permanence.
      </motion.p>

      <motion.div 
        className="hero-stats"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="stat">
          <span className="stat-n">190+</span>
          <span className="stat-l">Pays</span>
        </div>
        <div className="stat">
          <span className="stat-n">8k+</span>
          <span className="stat-l">Chaînes</span>
        </div>
        <div className="stat">
          <span className="stat-n">100%</span>
          <span className="stat-l">Légal</span>
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
        Voir les playlists
      </motion.a>
    </section>
  );
};

export default Hero;
