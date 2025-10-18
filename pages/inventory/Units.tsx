import React, { useState } from 'react';
import PageBanner from '../../components/layout/PageBanner';
import { useI18n } from '../../contexts/I18nContext';
import { mockUnits } from '../../data/mockData';
import type { Unit } from '../../types';
import { FiPlus } from 'react-icons/fi';
import AddUnitModal from './AddUnitModal';

const Units: React.FC = () => {
  const { t } = useI18n();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <PageBanner title={t('units') || 'Units'} />
      <div className="flex justify-end mb-4">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-brand-purple text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          <FiPlus /> {t('add_unit')}
        </button>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-start text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('unit')}</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('project')}</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('developer')}</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('price')}</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('status')}</th>
              </tr>
            </thead>
            <tbody>
              {mockUnits.map((unit: Unit) => (
                <tr key={unit.id} className="bg-white border-b">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{unit.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{unit.project}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{unit.developer}</td>
                  <td className="px-6 py-4 whitespace-nowrap">EGP {unit.price.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{unit.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <AddUnitModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Units;