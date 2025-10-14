
import React, { useState } from 'react';
import PageBanner from '../components/layout/PageBanner';
import { mockTodos } from '../data/mockData';
import type { Todo } from '../types';
import { useI18n } from '../contexts/I18nContext';
import { FiPhone, FiUsers, FiPlus } from 'react-icons/fi';
import AddTodoModal from './todos/AddTodoModal';

type ActivityType = 'all' | 'meeting' | 'call';

const weekDays = [
    { day: "Wed", date: "09/24", count: mockTodos.filter(t => t.date === "09/24").length },
    { day: "Thu", date: "09/25", count: mockTodos.filter(t => t.date === "09/25").length },
    { day: "Fri", date: "09/26", count: mockTodos.filter(t => t.date === "09/26").length },
    { day: "Sat", date: "09/27", count: 0 },
    { day: "Sun", date: "09/28", count: 0 },
];

const Todos: React.FC = () => {
    const { t } = useI18n();
    const [activeFilter, setActiveFilter] = useState<ActivityType>('all');
    const [selectedDay, setSelectedDay] = useState('09/26');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredTodos = mockTodos.filter(todo => {
        const dayMatch = todo.date === selectedDay;
        const typeMatch = activeFilter === 'all' || todo.type === activeFilter;
        return dayMatch && typeMatch;
    });
    
    const getIconForType = (type: Todo['type']) => {
        if (type === 'call') return <FiPhone className="text-blue-500"/>;
        if (type === 'meeting') return <FiUsers className="text-green-500"/>;
        return null;
    }

    return (
        <div>
            <PageBanner title={t('all_todos')} />
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center bg-gray-200 rounded-full p-1">
                    <button onClick={() => setActiveFilter('all')} className={`px-6 py-2 text-sm font-semibold rounded-full transition-colors ${activeFilter === 'all' ? 'bg-brand-purple text-white' : 'text-gray-600'}`}>{t('all')}</button>
                    <button onClick={() => setActiveFilter('meeting')} className={`px-6 py-2 text-sm font-semibold rounded-full transition-colors ${activeFilter === 'meeting' ? 'bg-brand-purple text-white' : 'text-gray-600'}`}>{t('meeting')}</button>
                    <button onClick={() => setActiveFilter('call')} className={`px-6 py-2 text-sm font-semibold rounded-full transition-colors ${activeFilter === 'call' ? 'bg-brand-purple text-white' : 'text-gray-600'}`}>{t('call')}</button>
                </div>
                 <button 
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-brand-purple text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <FiPlus /> {t('add_todo')}
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 bg-white p-4 rounded-lg shadow-sm">
                    {filteredTodos.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-gray-500">{t('no_tasks_found')}</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {filteredTodos.map(todo => (
                                <div key={todo.id} className="p-4 border rounded-lg flex items-start gap-4">
                                    <div className="pt-1">{getIconForType(todo.type)}</div>
                                    <div>
                                        <p className="font-semibold">{todo.description}</p>
                                        <p className="text-sm text-gray-500">{t('lead')}: {todo.lead} at {todo.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-4">{t('week_overview')}</h3>
                    <div className="space-y-2">
                        {weekDays.map(day => (
                            <button key={day.date} onClick={() => setSelectedDay(day.date)} className={`w-full text-start p-3 rounded-lg flex justify-between items-center transition-colors ${selectedDay === day.date ? 'bg-brand-purple text-white' : 'hover:bg-gray-100'}`}>
                                <span>{day.day} {day.date}</span>
                                <span className={`px-2 py-0.5 text-xs rounded-full ${selectedDay === day.date ? 'bg-white text-brand-purple' : 'bg-gray-200 text-gray-700'}`}>
                                    {day.count}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <AddTodoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Todos;
