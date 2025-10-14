
import React, { useState } from 'react';
import PageBanner from '../../components/layout/PageBanner';
import { useI18n } from '../../contexts/I18nContext';
import { mockRotatedLeads } from '../../data/mockData';
import LeadTable from './LeadTable';
import AddLeadModal from './AddLeadModal';
import { FiPlus } from 'react-icons/fi';

const RotatedLeads: React.FC = () => {
  const { t } = useI18n();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <PageBanner title={t('rotated_leads')} />
      <div className="flex justify-end mb-4">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-brand-purple text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          <FiPlus /> {t('create_lead')}
        </button>
      </div>
      <LeadTable leads={mockRotatedLeads} />
      <AddLeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} leadType="Rotated" />
    </div>
  );
};

export default RotatedLeads;
