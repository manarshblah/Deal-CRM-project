import React from 'react';
import PageBanner from '../../components/layout/PageBanner';
import { useI18n } from '../../contexts/I18nContext';
import { mockDeals } from '../../data/mockData';
import type { Deal } from '../../types';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const DealsList: React.FC = () => {
  const { t } = useI18n();

  return (
    <div>
      <PageBanner title={t('deals') || 'Deals'} />
      <div className="flex justify-end mb-4">
        <Link to="/deals/create" className="flex items-center gap-2 px-4 py-2 bg-brand-purple text-white rounded-lg hover:bg-purple-700 transition-colors">
          <FiPlus /> {t('create_deal')}
        </Link>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-start text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('lead_name')}</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('unit')}</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('project')}</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('total_value')}</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('status')}</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('closed_date')}</th>
              </tr>
            </thead>
            <tbody>
              {mockDeals.map((deal: Deal) => (
                <tr key={deal.id} className="bg-white border-b">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{deal.leadName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{deal.unit}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{deal.project}</td>
                  <td className="px-6 py-4 whitespace-nowrap">EGP {deal.value.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{deal.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{deal.closedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DealsList;