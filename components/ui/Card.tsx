
import React from 'react';

interface CardProps {
  title: string;
  value: string | number;
  icon: React.ReactElement;
  colorClass: string;
}

const Card: React.FC<CardProps> = ({ title, value, icon, colorClass }) => {
  return (
    <div className={`p-6 rounded-lg shadow-sm ${colorClass}`}>
      <div className="flex items-start justify-between">
        <div className="text-gray-700">
            {icon}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-3xl font-bold text-gray-800">{value}</p>
        <p className="text-sm text-gray-600 mt-1">{title}</p>
      </div>
    </div>
  );
};

export default Card;
