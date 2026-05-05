import React from 'react';
import { useTranslation } from 'react-i18next';

interface RegionTabsProps {
  activeRegion: string;
  setActiveRegion: (region: string) => void;
}

const regions = [
  { id: 'europe', name: 'Europe' },
  { id: 'amerique', name: 'Amériques' },
  { id: 'asie', name: 'Asie' },
  { id: 'moyenorient', name: 'Moyen-Orient' },
  { id: 'afrique', name: 'Afrique' },
];

const RegionTabs: React.FC<RegionTabsProps> = ({ activeRegion, setActiveRegion }) => {
  const { t } = useTranslation();

  return (
    <div className="region-tabs">
      {regions.map((region) => (
        <button
          key={region.id}
          className={`rtab ${activeRegion === region.id ? 'active' : ''}`}
          onClick={() => setActiveRegion(region.id)}
        >
          {t(`playlist.regions.${region.id}`, { defaultValue: region.name })}
        </button>
      ))}
    </div>
  );
};

export default RegionTabs;
