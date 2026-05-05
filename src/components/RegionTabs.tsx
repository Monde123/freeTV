import React from 'react';

interface RegionTabsProps {
  activeRegion: string;
  setActiveRegion: (region: string) => void;
}

const regions = [
  { id: 'europe', name: 'Europe' },
  { id: 'americas', name: 'Amériques' },
  { id: 'asia', name: 'Asie' },
  { id: 'mideast', name: 'Moyen-Orient' },
  { id: 'africa', name: 'Afrique' },
];

const RegionTabs: React.FC<RegionTabsProps> = ({ activeRegion, setActiveRegion }) => {
  return (
    <div className="region-tabs">
      {regions.map((region) => (
        <button
          key={region.id}
          className={`rtab ${activeRegion === region.id ? 'active' : ''}`}
          onClick={() => setActiveRegion(region.id)}
        >
          {region.name}
        </button>
      ))}
    </div>
  );
};

export default RegionTabs;
