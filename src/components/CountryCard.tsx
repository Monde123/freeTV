import React, { useState } from 'react';

interface CountryCardProps {
  flag: string;
  name: string;
  url: string;
}

const CountryCard: React.FC<CountryCardProps> = ({ flag, name, url }) => {
  const [copied, setCopied] = useState(false);

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
        {copied ? 'Copié !' : 'Copier'}
      </button>
    </div>
  );
};

export default CountryCard;
