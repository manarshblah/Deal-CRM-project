
import React from 'react';
import PageBanner from '../../components/layout/PageBanner';
import { useI18n } from '../../contexts/I18nContext';

const Owners: React.FC = () => {
    const { t } = useI18n();

    return (
        <div>
            <PageBanner title={t('owners') || 'Owners'} />
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h2 className="text-xl font-semibold mb-2">{t('coming_soon') || 'Coming Soon'}</h2>
                <p className="text-gray-500">{t('owners_page_desc') || 'This page is under construction and will be available soon.'}</p>
            </div>
        </div>
    );
};

export default Owners;
