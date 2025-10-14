import React from 'react';
import { useI18n } from '../../contexts/I18nContext';
import { FiUsers } from 'react-icons/fi';

const LeadSettings: React.FC = () => {
  const { t } = useI18n();

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-start gap-4 mb-8">
        <div className="p-3 bg-brand-purple-light text-brand-purple rounded-lg">
            <FiUsers size={24}/>
        </div>
        <div>
            <h3 className="text-lg font-bold">{t('lead_assignment_settings')}</h3>
            <p className="text-gray-500 max-w-lg">{t('lead_assignment_desc', {defaultValue: 'Configure how leads are assigned and managed in your workflow.'})}</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div>
            <h4 className="font-semibold">{t('enable_auto_rotation_delayed')}</h4>
            <p className="text-sm text-gray-500 max-w-md">{t('auto_rotation_delayed_desc', {defaultValue: "Automatically reassign leads that haven't been attended to within the delay time."})}</p>
          </div>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>

        <div className="p-4 border rounded-lg">
          <label htmlFor="delay-time" className="block text-sm font-medium text-gray-700">{t('reminder_delay_time')}</label>
          <p className="text-sm text-gray-500 mb-2">{t('reminder_delay_desc', {defaultValue: 'Time to wait before marking a lead as delayed.'})}</p>
          <div className="relative">
            <input 
              type="number" 
              id="delay-time" 
              defaultValue="30" 
              className="w-full p-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-purple" 
            />
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t mt-8">
            <button className="px-6 py-2 bg-brand-purple text-white rounded-lg hover:bg-purple-700">
                {t('save_settings')}
            </button>
        </div>
      </div>
    </div>
  );
};

export default LeadSettings;