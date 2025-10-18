import React from 'react';
import PageBanner from '../../components/layout/PageBanner';
import { useI18n } from '../../contexts/I18nContext';
import { mockEmployeesReportData } from '../../data/mockData';

const EmployeesReport: React.FC = () => {
    const { t } = useI18n();

    return (
        <div>
            <PageBanner title={t('employees_report') || 'Employees Report'} />
            <div className="bg-white p-6 rounded-lg shadow-sm mobile-scroll">
                <div className="bg-brand-purple-light p-4 rounded-lg mb-6">
                    <h3 className="font-semibold mb-3">{t('filter_reports')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                            <label className="text-sm font-medium">{t('teams')}</label>
                            <select className="w-full p-2 border rounded-lg bg-white mt-1">
                                <option>{t('all_teams')}</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-sm font-medium">{t('employee')}</label>
                            <select className="w-full p-2 border rounded-lg bg-white mt-1">
                                <option>{t('all_employees')}</option>
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
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('employee')}</th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('team')}</th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('total_leads')}</th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('touched_leads_report')}</th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('meetings_report')}</th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('deals_report')}</th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('total_value_report')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockEmployeesReportData.map((row) => (
                                <tr key={row.id} className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap">{row.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{row.team}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{row.leads}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{row.touched}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{row.meetings}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{row.deals}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">EGP {row.value.toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EmployeesReport;