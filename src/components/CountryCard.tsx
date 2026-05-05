import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface CountryCardProps {
  flag: string;
  name: string;
  url: string;
}

const CountryCard: React.FC<CountryCardProps> = ({ flag, name, url }) => {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation();

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="country-card">
      <span className="flag">{flag}</span>
      <div className="country-info">
        <span className="country-name">{name}</span>
        <span className="country-url">{url}</span>
      </div>
      <button
        className={`copy-small ${copied ? 'copied' : ''}`}
        onClick={handleCopy}
      >
        {copied ? t('playlist.copied') : t('playlist.copyShort')}
      </button>
    </div>
  );
};

export default CountryCard;
