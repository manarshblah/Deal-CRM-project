import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import PageBanner from '../../components/layout/PageBanner';
import { useI18n } from '../../contexts/I18nContext';
import { FaFacebook, FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';

const IntegrationsLayout: React.FC = () => {
    const { t } = useI18n();

    const tabs = [
        { name: 'Facebook', path: 'facebook', icon: <FaFacebook /> },
        { name: 'WhatsApp', path: 'whatsapp', icon: <FaWhatsapp /> },
        { name: 'Instagram', path: 'instagram', icon: <FaInstagram /> },
        { name: 'Twitter', path: 'twitter', icon: <FaTwitter /> },
    ];

    return (
        <div>
            <PageBanner title={t('integrations') || 'Integrations'} />
            <div className="flex justify-center mb-6 mobile-scroll">
                <div className="flex flex-wrap justify-center items-center bg-gray-200 rounded-full p-1 gap-1">
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
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <Outlet />
            </div>
        </div>
    );
};

export default IntegrationsLayout;