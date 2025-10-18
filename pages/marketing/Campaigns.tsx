import React, { useState } from 'react';
import PageBanner from '../../components/layout/PageBanner';
import { useI18n } from '../../contexts/I18nContext';
import { mockCampaigns } from '../../data/mockData';
import type { Campaign } from '../../types';
import { FiPlus } from 'react-icons/fi';
import AddCampaignModal from './AddCampaignModal';

const Campaigns: React.FC = () => {
  const { t } = useI18n();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <PageBanner title={t('campaigns') || 'Campaigns'} />
       <div className="flex justify-end mb-4">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-brand-purple text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          <FiPlus /> {t('add_campaign')}
        </button>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-start text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('campaign_name')}</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('platform')}</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('status')}</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('leads')}</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('cost')}</th>
              </tr>
            </thead>
            <tbody>
              {mockCampaigns.map((campaign: Campaign) => (
                <tr key={campaign.id} className="bg-white border-b">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{campaign.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{campaign.platform}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{campaign.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{campaign.leads}</td>
                  <td className="px-6 py-4 whitespace-nowrap">$ {campaign.cost.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <AddCampaignModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Campaigns;