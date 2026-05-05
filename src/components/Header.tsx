import React from 'react';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLanguage = i18n.language.startsWith('fr') ? 'en' : 'fr';
    void i18n.changeLanguage(nextLanguage);
  };

  return (
    <nav>
      <a href="#hero" className="nav-logo">
        <div className="dot"></div>
        FREE·TV·IPTV
      </a>
      <ul className="nav-links">
        <li><a href="#playlist">{t('nav.links')}</a></li>
        <li><a href="#guide">{t('nav.guide')}</a></li>
        <li><a href="#players">{t('nav.players')}</a></li>
        <li>
          <a href="https://github.com/iptv-org/iptv" target="_blank" rel="noopener noreferrer">
            {t('nav.github')}
          </a>
        </li>
        <li>
          <button type="button" onClick={toggleLanguage}>
            {i18n.language.startsWith('fr') ? 'EN' : 'FR'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
