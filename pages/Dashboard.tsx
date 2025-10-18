import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Card from '../components/ui/Card';
import { useI18n } from '../contexts/I18nContext';
import { useAuth } from '../contexts/AuthContext';
import { mockFeedbacks, mockLeads, mockUsers } from '../data/mockData';
import type { Feedback } from '../types';
import { FiTrendingUp, FiCheckCircle, FiAlertCircle, FiClock } from 'react-icons/fi';

const chartData = [
  { name: 'Sep 20', "Leads Count": 0 },
  { name: 'Sep 21', "Leads Count": 1 },
  { name: 'Sep 22', "Leads Count": 0 },
  { name: 'Sep 23', "Leads Count": 2 },
  { name: 'Sep 24', "Leads Count": 1 },
  { name: 'Sep 25', "Leads Count": 3 },
  { name: 'Sep 26', "Leads Count": 2 },
];

const Dashboard: React.FC = () => {
  const { t } = useI18n();
  const { user } = useAuth();
  
  const touchedLeadsCount = mockLeads.filter(l => l.status === 'Touched').length;
  const untouchedLeadsCount = mockLeads.filter(l => l.status === 'Untouched').length;

  const stageColorMap: Record<Feedback['stageColor'], string> = {
    orange: 'bg-orange-100 text-orange-800',
    purple: 'bg-purple-200 text-purple-800',
    gray: 'bg-gray-100 text-gray-800',
  };


  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title={t('today_new_leads')} value="2" icon={<FiTrendingUp size={24}/>} colorClass="bg-brand-purple-light" />
        <Card title={t('today_touched_leads')} value={touchedLeadsCount} icon={<FiCheckCircle size={24}/>} colorClass="bg-brand-orange-light" />
        <Card title={t('today_untouched_leads')} value={untouchedLeadsCount} icon={<FiAlertCircle size={24}/>} colorClass="bg-brand-pink-light" />
        <Card title={t('delayed_leads')} value="1" icon={<FiClock size={24}/>} colorClass="bg-brand-green-light" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm mobile-scroll">
          <h3 className="font-bold text-lg mb-4">{t('week_leads')}</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Leads Count" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-bold text-lg mb-4">{t('stages_report')}</h3>
          <div className="flex items-center justify-center h-full text-gray-500">
            {t('no_data_available')}
          </div>
        </div>
      </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-4">{t('latest_feedbacks')}</h3>
               <div className="overflow-x-auto">
                    <table className="w-full text-sm text-start text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50/50">
                            <tr>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('date')}</th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('agent')}</th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('client')}</th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('stage')}</th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">{t('feedback')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockFeedbacks.map((feedback: Feedback) => (
                                <tr key={feedback.id} className="bg-white border-b">
                                    <td className="px-6 py-4 text-gray-800 whitespace-nowrap">{feedback.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{feedback.agent}</td>
                                    <td className="px-6 py-4 text-gray-800 whitespace-nowrap">{feedback.client}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${stageColorMap[feedback.stageColor]}`}>
                                        {t(feedback.stage.toLowerCase().replace(' ','_')) || feedback.stage}
                                      </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{feedback.feedbackText}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-4">{t('top_users')}</h3>
            <div className="space-y-4">
               {mockUsers.slice(0, 3).map(u => (
                 <div key={u.id} className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-brand-purple text-white flex items-center justify-center font-bold text-xl me-4">
                        {u.avatar}
                    </div>
                    <div>
                        <p className="font-semibold">{u.name}</p>
                        <p className="text-sm text-gray-500">{t(u.role.toLowerCase() as any)}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
       </div>
    </div>
  );
};

export default Dashboard;