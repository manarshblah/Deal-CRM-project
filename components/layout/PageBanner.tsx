import React from 'react';

interface PageBannerProps {
  title: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title }) => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-brand-purple text-white p-6 rounded-lg shadow-md mb-6 relative overflow-hidden h-32 flex items-center">
      <div className="z-10">
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      <img 
        src="https://i.imgur.com/e3g2x1v.png" 
        alt="Cityscape" 
        className="absolute top-0 right-0 h-full object-cover opacity-50 z-0"
        style={{ right: '-20px' }}
      />
    </div>
  );
};

export default PageBanner;