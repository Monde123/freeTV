import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import MainPlaylist from './components/MainPlaylist';
import RegionTabs from './components/RegionTabs';
import CountryCard from './components/CountryCard';
import Footer from './components/Footer';
import countriesData from './data/countries.json';

const App: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState('europe');
  const { t } = useTranslation();

  const filteredCountries = countriesData.filter(
    (country) => country.region === activeRegion
  );

  return (
    <div className="app-container">
      <Helmet>
        <title>{t('app.title')}</title>
        <meta 
          name="description" 
          content={t('app.description')} 
        />
        <meta name="keywords" content={t('app.keywords')} />
        <link rel="canonical" href="https://freetv.mokdo.click/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t('app.ogTitle')} />
        <meta property="og:description" content={t('app.ogDescription')} />
        <meta property="og:image" content="/images/step1.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={t('app.ogTitle')} />
        <meta property="twitter:description" content={t('app.ogDescription')} />
      </Helmet>

      <Header />
      
      <main>
        <Hero />

        <section id="playlist" className="section">
          <div className="s-label">📡{t('playlist.label')}</div>
          <h2 className="s-title">{t('playlist.title')}</h2>
          <p className="s-intro">
            {t('playlist.intro')}
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
          <div className="s-label">📖 {t('guide.label')}</div>
          <h2 className="s-title">{t('guide.title')}</h2>
          
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-img-slot has-image">
                <img src="/images/step1.png" alt="Télécharger VLC" />
              </div>
              <div className="step-body">
                <div className="step-num">1</div>
                <div className="step-title">{t('guide.step1.title')}</div>
                <p className="step-desc">{t('guide.step1.desc')}</p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-img-slot has-image">
                <img src="/images/step2.png" alt="Ouvrir flux réseau" />
              </div>
              <div className="step-body">
                <div className="step-num">2</div>
                <div className="step-title">{t('guide.step2.title')}</div>
                <p className="step-desc">{t('guide.step2.desc')}</p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-img-slot has-image">
                <img src="/images/step3.png" alt="Coller l'URL" />
              </div>
              <div className="step-body">
                <div className="step-num">3</div>
                <div className="step-title">{t('guide.step3.title')}</div>
                <p className="step-desc">{t('guide.step3.desc')}</p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-img-slot has-image">
                <img src="/images/step4.png" alt="Profiter" />
              </div>
              <div className="step-body">
                <div className="step-num">4</div>
                <div className="step-title">{t('guide.step4.title')}</div>
                <p className="step-desc">{t('guide.step4.desc')}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="players" className="section">
          <div className="s-label">📱 {t('players.label')}</div>
          <h2 className="s-title">{t('players.title')}</h2>
          <p className="s-intro">
            {t('players.intro')}
          </p>

          <div className="players-grid">
            <a href="https://www.videolan.org/" target="_blank" rel="noopener noreferrer" className="player-card">
              <span className="player-icon">🧡</span>
              <span className="player-name">VLC Media Player</span>
              <span className="player-platform">Windows, Mac, Android, iOS</span>
              <span className="player-badge badge-recommended">{t('players.recommended')}</span>
            </a>
            <a href="https://play.google.com/store/apps/details?id=ar.tvplayer.tv" target="_blank" rel="noopener noreferrer" className="player-card">
              <span className="player-icon">💎</span>
              <span className="player-name">TiviMate</span>
              <span className="player-platform">Android TV, Fire TV</span>
              <span className="player-badge badge-free">{t('players.free_version')}</span>
            </a>
            <a href="https://ottnavigator.com/" target="_blank" rel="noopener noreferrer" className="player-card">
              <span className="player-icon">🚀</span>
              <span className="player-name">OTT Navigator</span>
              <span className="player-platform">Android, Android TV</span>
              <span className="player-badge badge-free">{t('players.free')}</span>
            </a>
            <a href="https://siptv.app/" target="_blank" rel="noopener noreferrer" className="player-card">
              <span className="player-icon">📺</span>
              <span className="player-name">Smart IPTV</span>
              <span className="player-platform">Smart TV (Samsung, LG)</span>
              <span className="player-badge badge-free">{t('players.trial')}</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
