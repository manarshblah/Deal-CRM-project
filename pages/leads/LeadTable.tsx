
import React from 'react';
import type { Lead } from '../../types';
import { useI18n } from '../../contexts/I18nContext';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

interface LeadTableProps {
  leads: Lead[];
}

const LeadTable: React.FC<LeadTableProps> = ({ leads }) => {
  const { t } = useI18n();

  const getStatusColor = (status: Lead['status']) => {
    switch (status) {
      case 'Touched':
        return 'bg-green-100 text-green-800';
      case 'Untouched':
        return 'bg-yellow-100 text-yellow-800';
      case 'Cold':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="overflow-x-auto">
        {leads.length > 0 ? (
          <table className="w-full text-sm text-start text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">{t('lead_name')}</th>
                <th scope="col" className="px-6 py-3">{t('phone')}</th>
                <th scope="col" className="px-6 py-3">{t('status')}</th>
                <th scope="col" className="px-6 py-3">{t('user')}</th>
                <th scope="col" className="px-6 py-3">{t('date')}</th>
                <th scope="col" className="px-6 py-3">{t('actions')}</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead: Lead) => (
                <tr key={lead.id} className="bg-white border-b">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{lead.name}</td>
                  <td className="px-6 py-4">{lead.phone}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(lead.status)}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{lead.assignedTo}</td>
                  <td className="px-6 py-4">{lead.lastContacted}</td>
                  <td className="px-6 py-4 flex items-center gap-4">
                    <button className="text-gray-500 hover:text-brand-purple"><FiEdit /></button>
                    <button className="text-gray-500 hover:text-red-500"><FiTrash2 /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">{t('no_data_available')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadTable;
