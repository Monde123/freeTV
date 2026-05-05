import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import MainPlaylist from './components/MainPlaylist';
import RegionTabs from './components/RegionTabs';
import CountryCard from './components/CountryCard';
import Footer from './components/Footer';
import countriesData from './data/countries.json';

const App: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState('europe');

  const filteredCountries = countriesData.filter(
    (country) => country.region === activeRegion
  );

  return (
    <div className="app-container">
      <Helmet>
        <title>Free-TV IPTV · Télévision mondiale gratuite et officielle</title>
        <meta 
          name="description" 
          content="Accédez aux meilleures listes IPTV gratuites et légales. Plus de 8000 chaînes mondiales classées par pays. Liens M3U8 officiels de iptv-org." 
        />
        <meta name="keywords" content="IPTV, M3U8, TV gratuite, chaînes mondiales, VLC, IPTV-org, streaming légal" />
        <link rel="canonical" href="https://freetv.mokdo.click/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Free-TV IPTV · La télévision mondiale gratuite" />
        <meta property="og:description" content="Regardez la TV gratuite du monde entier. Liens M3U8 officiels et mise à jour automatique." />
        <meta property="og:image" content="/images/step1.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Free-TV IPTV · La télévision mondiale gratuite" />
        <meta property="twitter:description" content="Regardez la TV gratuite du monde entier. Liens M3U8 officiels et mise à jour automatique." />
      </Helmet>

      <Header />
      
      <main>
        <Hero />

        <section id="playlist" className="section">
          <div className="s-label">📡 Liens M3U8</div>
          <h2 className="s-title">PLAYLISTS PAR PAYS</h2>
          <p className="s-intro">
            Copiez l'URL M3U8 correspondante et collez-la dans votre lecteur IPTV (VLC, TiviMate, OTT Navigator). 
            Tous nos flux proviennent de sources officielles et sont 100% légaux.
          </p>

          <MainPlaylist />

          <RegionTabs activeRegion={activeRegion} setActiveRegion={setActiveRegion} />

          <div className="country-grid">
            {filteredCountries.map((country, index) => (
              <CountryCard 
                key={`${country.region}-${index}`}
                flag={country.flag}
                name={country.name}
                url={country.url}
              />
            ))}
          </div>
        </section>

        <section id="guide" className="section">
          <div className="s-label">📖 Tutoriel</div>
          <h2 className="s-title">COMMENT UTILISER VLC</h2>
          
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-img-slot has-image">
                <img src="/images/step1.png" alt="Télécharger VLC" />
              </div>
              <div className="step-body">
                <div className="step-num">1</div>
                <div className="step-title">Télécharger VLC</div>
                <p className="step-desc">Installez VLC Media Player sur votre ordinateur ou mobile depuis le site officiel.</p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-img-slot has-image">
                <img src="/images/step2.png" alt="Ouvrir flux réseau" />
              </div>
              <div className="step-body">
                <div className="step-num">2</div>
                <div className="step-title">Ouvrir un flux réseau</div>
                <p className="step-desc">Allez dans le menu Média {'>'} Ouvrir un flux réseau ou utilisez le raccourci (Ctrl+N).</p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-img-slot has-image">
                <img src="/images/step3.png" alt="Coller l'URL" />
              </div>
              <div className="step-body">
                <div className="step-num">3</div>
                <div className="step-title">Coller l'URL</div>
                <p className="step-desc">Collez l'URL M3U8 copiée sur ce site dans le champ 'Entrer une URL réseau'.</p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-img-slot has-image">
                <img src="/images/step4.png" alt="Profiter" />
              </div>
              <div className="step-body">
                <div className="step-num">4</div>
                <div className="step-title">Profiter</div>
                <p className="step-desc">Appuyez sur 'Lire'. Naviguez entre les chaînes via la liste de lecture (Vue {'>'} Liste de lecture).</p>
              </div>
            </div>
          </div>
        </section>

        <section id="players" className="section">
          <div className="s-label">📱 Applications</div>
          <h2 className="s-title">LECTEURS RECOMMANDÉS</h2>
          <p className="s-intro">
            Voici les meilleures applications pour lire vos listes M3U8 sur tous vos appareils.
          </p>

          <div className="players-grid">
            <a href="https://www.videolan.org/" target="_blank" rel="noopener noreferrer" className="player-card">
              <span className="player-icon">🧡</span>
              <span className="player-name">VLC Media Player</span>
              <span className="player-platform">Windows, Mac, Android, iOS</span>
              <span className="player-badge badge-recommended">Recommandé</span>
            </a>
            <a href="https://play.google.com/store/apps/details?id=ar.tvplayer.tv" target="_blank" rel="noopener noreferrer" className="player-card">
              <span className="player-icon">💎</span>
              <span className="player-name">TiviMate</span>
              <span className="player-platform">Android TV, Fire TV</span>
              <span className="player-badge badge-free">Version Gratuite</span>
            </a>
            <a href="https://ottnavigator.com/" target="_blank" rel="noopener noreferrer" className="player-card">
              <span className="player-icon">🚀</span>
              <span className="player-name">OTT Navigator</span>
              <span className="player-platform">Android, Android TV</span>
              <span className="player-badge badge-free">Gratuit</span>
            </a>
            <a href="https://siptv.app/" target="_blank" rel="noopener noreferrer" className="player-card">
              <span className="player-icon">📺</span>
              <span className="player-name">Smart IPTV</span>
              <span className="player-platform">Smart TV (Samsung, LG)</span>
              <span className="player-badge badge-free">Période d'essai</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
