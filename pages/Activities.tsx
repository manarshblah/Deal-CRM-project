
import React, { useState } from 'react';
import PageBanner from '../components/layout/PageBanner';
import { useI18n } from '../contexts/I18nContext';
import { mockActivities } from '../data/mockData';
import type { Activity } from '../types';
import { FiPlus } from 'react-icons/fi';
import AddActivityModal from './activities/AddActivityModal';

const Activities: React.FC = () => {
  const { t } = useI18n();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <PageBanner title={t('activities')} />
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex justify-between items-start mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 flex-grow">
              <div>
                <label className="text-sm font-medium text-gray-600">{t('users')}</label>
                <select className="w-full p-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-purple mt-1">
                  <option>{t('all_users')}</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">{t('time_period')}</label>
                <select className="w-full p-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-purple mt-1">
                  <option>{t('today')}</option>
                  <option>{t('last_week')}</option>
                  <option>{t('this_month')}</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">{t('leads_type')}</label>
                <select className="w-full p-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-purple mt-1">
                  <option>{t('all')}</option>
                  <option>{t('fresh_leads')}</option>
                  <option>{t('cold_leads')}</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">{t('activity_type')}</label>
                <select className="w-full p-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-purple mt-1">
                  <option>{t('all')}</option>
                  <option>{t('calls')}</option>
                  <option>{t('emails')}</option>
                  <option>{t('meetings')}</option>
                </select>
              </div>
            </div>
             <div className="ms-4 flex-shrink-0">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-brand-purple text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <FiPlus /> {t('add_activity')}
                </button>
            </div>
        </div>
        
        {mockActivities.length === 0 ? (
           <div className="text-center py-20 bg-gray-50 rounded-lg">
             <p className="text-gray-500">{t('no_activities_found')}</p>
           </div>
        ) : (
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-start text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">{t('user')}</th>
                            <th scope="col" className="px-6 py-3">{t('activity_type')}</th>
                            <th scope="col" className="px-6 py-3">{t('lead_name')}</th>
                            <th scope="col" className="px-6 py-3">{t('date')}</th>
                            <th scope="col" className="px-6 py-3">{t('details')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockActivities.map((activity: Activity) => (
                            <tr key={activity.id} className="bg-white border-b">
                                <td className="px-6 py-4 font-medium text-gray-900 capitalize">{activity.user}</td>
                                <td className="px-6 py-4">{activity.type}</td>
                                <td className="px-6 py-4">{activity.leadName}</td>
                                <td className="px-6 py-4">{activity.date}</td>
                                <td className="px-6 py-4">{activity.details}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )}
      </div>
      <AddActivityModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Activities;
