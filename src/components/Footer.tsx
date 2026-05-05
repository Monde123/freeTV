import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-logo">FREE·TV·IPTV</div>
      <p>
        Ce projet est un répertoire open source de flux IPTV légaux et gratuits. 
        Nous ne diffusons aucun contenu et ne possédons aucun serveur.
      </p>
      <div className="footer-links">
        <a href="https://github.com/iptv-org/iptv" target="_blank" rel="noopener noreferrer">IPTV-org Source</a>
        <a href="https://github.com/iptv-org/iptv/issues" target="_blank" rel="noopener noreferrer">Signaler un lien mort</a>
        <a href="https://github.com/iptv-org/iptv/pulls" target="_blank" rel="noopener noreferrer">Contribuer</a>
      </div>
      <p style={{ marginTop: '32px', fontSize: '11px', opacity: 0.5 }}>
        &copy; {new Date().getFullYear()} Free-TV IPTV. Développé avec React & Vite.
      </p>
    </footer>
  );
};

export default Footer;
