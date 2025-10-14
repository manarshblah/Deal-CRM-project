import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import PageBanner from '../../components/layout/PageBanner';
import { useI18n } from '../../contexts/I18nContext';
import { FiUsers, FiRadio, FiChevronsRight, FiCheckCircle } from 'react-icons/fi';

const SettingsLayout: React.FC = () => {
    const { t } = useI18n();

    const tabs = [
        { name: t('leads'), path: 'leads', icon: <FiUsers /> },
        { name: t('channels'), path: 'channels', icon: <FiRadio /> },
        { name: t('stages'), path: 'stages', icon: <FiChevronsRight /> },
        { name: t('statuses'), path: 'statuses', icon: <FiCheckCircle /> },
    ];

    return (
        <div>
            <PageBanner title={t('settings')} />
            <div className="flex justify-center mb-6">
                <div className="flex items-center bg-gray-200 rounded-full p-1">
                    {tabs.map(tab => (
                        <NavLink
                            key={tab.path}
                            to={tab.path}
                            className={({ isActive }) =>
                                `flex items-center gap-2 px-6 py-2 text-sm font-semibold rounded-full transition-colors ${
                                isActive ? 'bg-brand-purple text-white' : 'text-gray-600'
                                }`
                            }
                        >
                           {tab.icon} {tab.name}
                        </NavLink>
                    ))}
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default SettingsLayout;
