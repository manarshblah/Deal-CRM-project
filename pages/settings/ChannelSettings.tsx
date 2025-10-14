import React, { useState } from 'react';
import { useI18n } from '../../contexts/I18nContext';
import { FiRadio, FiTrash2, FiPlus, FiGlobe, FiFacebook, FiTrendingUp, FiMail } from 'react-icons/fi';
import AddChannelModal from './AddChannelModal';

const channels = [
  { id: 1, name: 'Website', priority: 1, icon: <FiGlobe className="text-blue-500" /> },
  { id: 2, name: 'Facebook', priority: 2, icon: <FiFacebook className="text-blue-700" /> },
  { id: 3, name: 'Google Ads', priority: 3, icon: <FiTrendingUp className="text-green-500" /> },
  { id: 4, name: 'Email Campaign', priority: 4, icon: <FiMail className="text-red-500" /> },
];

const ChannelSettings: React.FC = () => {
  const { t } = useI18n();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-start gap-4 mb-8">
          <div className="p-3 bg-brand-purple-light text-brand-purple rounded-lg">
            <FiRadio size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold">{t('channel_management_settings')}</h3>
            <p className="text-gray-500 max-w-lg">{t('channel_management_desc')}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h4 className="font-semibold">{t('enable_multi_channel_tracking')}</h4>
              <p className="text-sm text-gray-500 max-w-md">{t('multi_channel_tracking_desc')}</p>
            </div>
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="p-4 border rounded-lg">
            <label htmlFor="default-channel" className="block text-sm font-medium text-gray-700">{t('default_channel')}</label>
            <p className="text-sm text-gray-500 mb-2">{t('default_channel_desc')}</p>
            <select id="default-channel" className="w-full p-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-purple">
              <option>Website</option>
              <option>Facebook</option>
            </select>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold">{t('active_channels')}</h4>
              <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 px-4 py-2 bg-brand-purple-light text-brand-purple rounded-lg hover:bg-purple-200 transition-colors text-sm font-semibold">
                <FiPlus /> {t('add_channel')}
              </button>
            </div>
            <div className="space-y-3">
              {channels.map((channel) => (
                <div key={channel.id} className="bg-white border p-4 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">{channel.icon}</div>
                    <div>
                      <p className="font-semibold text-gray-800">{channel.name}</p>
                      <p className="text-xs text-gray-500">{t('priority')}: {channel.priority}</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-red-500">
                    <FiTrash2 />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t mt-8">
            <button className="px-6 py-2 bg-brand-purple text-white rounded-lg hover:bg-purple-700">
              {t('save_settings')}
            </button>
          </div>
        </div>
      </div>
      <AddChannelModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default ChannelSettings;