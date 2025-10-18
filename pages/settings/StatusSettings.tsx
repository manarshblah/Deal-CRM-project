import React, { useState } from 'react';
import { useI18n } from '../../contexts/I18nContext';
import { FiCheckCircle, FiPlus, FiEye, FiTrash2 } from 'react-icons/fi';
import AddStatusModal from './AddStatusModal';

const mockStatuses = [
    { id: 1, name: 'Active', description: 'Lead is actively being worked', category: 'Active', color: '#10B981', isDefault: true },
    { id: 2, name: 'Follow Up', description: 'Requires follow up action', category: 'Follow Up', color: '#3B82F6', isDefault: false },
];

const colors = ['#3B82F6', '#8B5CF6', '#EC4899', '#EF4444', '#F97316', '#10B981', '#F59E0B', '#6366F1'];

const ColorPicker: React.FC<{selected: string}> = ({ selected }) => (
    <div className="flex items-center gap-1 flex-wrap">
        {colors.map(color => (
            <div key={color} className={`w-5 h-5 rounded-full border-2 ${selected === color ? 'border-brand-purple ring-2 ring-purple-300' : 'border-transparent'}`} style={{ backgroundColor: color }}></div>
        ))}
    </div>
);

const StatusSettings: React.FC = () => {
    const { t } = useI18n();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4 mb-8">
                <div className="p-3 bg-brand-purple-light text-brand-purple rounded-lg">
                    <FiCheckCircle size={24}/>
                </div>
                <div>
                    <h3 className="text-lg font-bold">{t('lead_status_settings')}</h3>
                    <p className="text-gray-500 max-w-lg">{t('lead_status_desc')}</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                        <h4 className="font-semibold">{t('enable_custom_statuses')}</h4>
                        <p className="text-sm text-gray-500">{t('custom_statuses_desc')}</p>
                    </div>
                    <label className="switch">
                        <input type="checkbox" defaultChecked />
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                        <h4 className="font-semibold">{t('require_status_updates')}</h4>
                        <p className="text-sm text-gray-500">{t('require_status_updates_desc')}</p>
                    </div>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>

            <div className="p-4 border rounded-lg mb-8">
                <label htmlFor="default-status" className="block text-sm font-medium text-gray-700">{t('default_active_status')}</label>
                <p className="text-sm text-gray-500 mb-2">{t('default_active_status_desc')}</p>
                <select id="default-status" className="w-full p-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-purple">
                    <option>Active</option>
                    <option>Follow Up</option>
                </select>
            </div>

            <div>
                <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold">{t('available_statuses')}</h4>
                    <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 px-4 py-2 bg-brand-purple-light text-brand-purple rounded-lg hover:bg-purple-200 transition-colors text-sm font-semibold">
                        <FiPlus /> {t('add_status')}
                    </button>
                </div>
                
                <div className="overflow-x-auto border rounded-lg">
                    <table className="w-full text-sm text-start text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap min-w-48">{t('status_name')}</th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap min-w-64">{t('description')}</th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap min-w-48">{t('category')}</th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap min-w-48">{t('color')}</th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('actions')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockStatuses.map((status) => (
                                <tr key={status.id} className="bg-white border-b last:border-b-0">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <input type="text" defaultValue={status.name} className="w-full p-2 border rounded-md" />
                                        {status.isDefault && (
                                            <p className="text-xs text-blue-600 mt-1">{t('default_status_no_delete')}</p>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <input type="text" defaultValue={status.description} className="w-full p-2 border rounded-md" />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <select defaultValue={status.category} className="w-full p-2 border rounded-md bg-white">
                                            <option>Active</option>
                                            <option>Follow Up</option>
                                        </select>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <ColorPicker selected={status.color} />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-4">
                                            <button className="text-gray-400 hover:text-brand-purple"><FiEye /></button>
                                            {!status.isDefault && <button className="text-gray-400 hover:text-red-500"><FiTrash2 /></button>}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
        <AddStatusModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default StatusSettings;