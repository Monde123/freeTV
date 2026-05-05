import React from 'react';

const Header: React.FC = () => {
  return (
    <nav>
      <a href="#hero" className="nav-logo">
        <div className="dot"></div>
        FREE·TV·IPTV
      </a>
      <ul className="nav-links">
        <li><a href="#playlist">Liens M3U8</a></li>
        <li><a href="#guide">Guide VLC</a></li>
        <li><a href="#players">Lecteurs</a></li>
        <li>
          <a href="https://github.com/iptv-org/iptv" target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
