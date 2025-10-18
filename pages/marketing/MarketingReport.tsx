import React from 'react';
import PageBanner from '../../components/layout/PageBanner';
import { useI18n } from '../../contexts/I18nContext';
import { mockCampaigns } from '../../data/mockData';
import Card from '../../components/ui/Card';
import { FiDollarSign, FiTarget, FiTrendingUp } from 'react-icons/fi';

const MarketingReport: React.FC = () => {
    const { t } = useI18n();
    const totalSpend = mockCampaigns.reduce((sum, camp) => sum + camp.cost, 0);
    const totalLeads = mockCampaigns.reduce((sum, camp) => sum + camp.leads, 0);
    const averageCPL = totalLeads > 0 ? totalSpend / totalLeads : 0;

    return (
        <div>
            <PageBanner title={t('marketing_report') || 'Marketing Report'} />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                 <Card title={t('total_spend')} value={`$${totalSpend.toLocaleString()}`} icon={<FiDollarSign size={24}/>} colorClass="bg-brand-purple-light" />
                 <Card title={t('total_leads')} value={totalLeads.toLocaleString()} icon={<FiTarget size={24}/>} colorClass="bg-brand-orange-light" />
                 <Card title={t('cost_per_lead')} value={`$${averageCPL.toFixed(2)}`} icon={<FiTrendingUp size={24}/>} colorClass="bg-brand-green-light" />
            </div>
            
             <div className="bg-white p-6 rounded-lg shadow-sm mobile-scroll">
                <div className="bg-brand-purple-light p-4 rounded-lg mb-6">
                    <h3 className="font-semibold mb-3">{t('filter_reports')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="text-sm font-medium">{t('platform')}</label>
                            <select className="w-full p-2 border rounded-lg bg-white mt-1">
                                <option>{t('all')}</option>
                                <option>Facebook</option>
                                <option>Google</option>
                                <option>Instagram</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-sm font-medium">{t('date_start')}</label>
                            <input type="date" className="w-full p-2 border rounded-lg bg-white mt-1"/>
                        </div>
                        <div>
                            <label className="text-sm font-medium">{t('date_end')}</label>
                            <input type="date" className="w-full p-2 border rounded-lg bg-white mt-1"/>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-start text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('campaign_name')}</th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('platform')}</th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('leads')}</th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('cost')}</th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('cost_per_lead')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockCampaigns.map((campaign) => (
                                <tr key={campaign.id} className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap">{campaign.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{campaign.platform}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{campaign.leads}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">$ {campaign.cost.toLocaleString()}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">$ {(campaign.cost / campaign.leads).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MarketingReport;