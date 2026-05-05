import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="footer-logo">FREE·TV·IPTV</div>
      <p>
        {t('footer.disclaimer')}
      </p>
      <div className="footer-links">
        <a href="https://github.com/iptv-org/iptv" target="_blank" rel="noopener noreferrer">{t('footer.source')}</a>
        <a href="https://github.com/iptv-org/iptv/issues" target="_blank" rel="noopener noreferrer">{t('footer.report')}</a>
        <a href="https://github.com/iptv-org/iptv/pulls" target="_blank" rel="noopener noreferrer">{t('footer.contribute')}</a>
      </div>
      <p style={{ marginTop: '32px', fontSize: '11px', opacity: 0.5 }}>
        &copy; {new Date().getFullYear()} Free-TV IPTV. {t('footer.builtWith')}
      </p>
    </footer>
  );
};

export default Footer;
