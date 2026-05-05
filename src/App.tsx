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
        <link rel="canonical" href="https://freetv-iptv.vercel.app/" />
        
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
          <h2 className="s-title" style={{ fontSize: '32px', marginBottom: '24px' }}>PLAYLISTS PAR PAYS</h2>
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
          <h2 className="s-title" style={{ fontSize: '32px', marginBottom: '24px' }}>COMMENT UTILISER VLC</h2>
          
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-body">
                <div className="step-num">1</div>
                <div className="step-title">Télécharger VLC</div>
                <p className="step-desc">Installez VLC Media Player sur votre ordinateur ou mobile.</p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-body">
                <div className="step-num">2</div>
                <div className="step-title">Ouvrir un flux réseau</div>
                <p className="step-desc">Allez dans Média {'>'} Ouvrir un flux réseau (Ctrl+N).</p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-body">
                <div className="step-num">3</div>
                <div className="step-title">Coller l'URL</div>
                <p className="step-desc">Collez l'URL M3U8 copiée sur ce site.</p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-body">
                <div className="step-num">4</div>
                <div className="step-title">Profiter</div>
                <p className="step-desc">Appuyez sur 'Lire' et naviguez entre les chaînes via la playlist.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
