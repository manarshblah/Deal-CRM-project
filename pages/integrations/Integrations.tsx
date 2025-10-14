
import React from 'react';
import PageBanner from '../../components/layout/PageBanner';
import { FiPlus } from 'react-icons/fi';
import { FaFacebook, FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';

const IntegrationCard: React.FC<{name: string, icon: React.ReactNode}> = ({ name, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
        <div className="text-5xl text-gray-400 mb-4 inline-block">{icon}</div>
        <h3 className="text-lg font-semibold mb-4">{name}</h3>
        <button className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-brand-purple text-white rounded-lg hover:bg-purple-700 transition-colors">
            <FiPlus /> Add Account
        </button>
    </div>
)

const Integrations: React.FC = () => {
    return (
        <div>
            <PageBanner title="Integrations" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <IntegrationCard name="Facebook" icon={<FaFacebook className="text-blue-600"/>} />
                <IntegrationCard name="WhatsApp" icon={<FaWhatsapp className="text-green-500"/>} />
                <IntegrationCard name="Instagram" icon={<FaInstagram className="text-pink-500"/>} />
                <IntegrationCard name="Twitter" icon={<FaTwitter className="text-blue-400"/>} />
            </div>
        </div>
    );
};

export default Integrations;
