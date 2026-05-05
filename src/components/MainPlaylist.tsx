import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const MainPlaylist: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation();
  const mainUrl = 'https://iptv-org.github.io/iptv/index.m3u';

  const handleCopy = () => {
    navigator.clipboard.writeText(mainUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="main-playlist">
      <h3>{t('playlist.universal')}</h3>
      <div className="url-row">
        <span className="url-text">{mainUrl}</span>
        <button
          className={`copy-btn ${copied ? 'copied' : ''}`}
          onClick={handleCopy}
        >
          {copied ? t('playlist.copied') : t('playlist.copy')}
        </button>
      </div>
    </div>
  );
};

export default MainPlaylist;
