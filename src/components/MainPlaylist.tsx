import React, { useState } from 'react';

const MainPlaylist: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const mainUrl = 'https://iptv-org.github.io/iptv/index.m3u';

  const handleCopy = () => {
    navigator.clipboard.writeText(mainUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="main-playlist">
      <h3>Accès universel</h3>
      <div className="url-row">
        <span className="url-text">{mainUrl}</span>
        <button
          className={`copy-btn ${copied ? 'copied' : ''}`}
          onClick={handleCopy}
        >
          {copied ? 'Copié !' : 'Copier l\'URL'}
        </button>
      </div>
    </div>
  );
};

export default MainPlaylist;
