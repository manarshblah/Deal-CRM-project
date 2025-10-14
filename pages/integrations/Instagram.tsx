
import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';

const Instagram: React.FC = () => {
    return (
        <div className="text-center">
            <div className="text-5xl text-pink-500 mb-4 inline-block"><FaInstagram /></div>
            <h3 className="text-lg font-semibold mb-4">Instagram Integration</h3>
            <button className="flex items-center justify-center gap-2 w-full max-w-xs mx-auto px-4 py-2 bg-brand-purple text-white rounded-lg hover:bg-purple-700 transition-colors">
                <FiPlus /> Add Account
            </button>
        </div>
    );
};

export default Instagram;
