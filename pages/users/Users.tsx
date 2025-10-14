
import React, { useState } from 'react';
import PageBanner from '../../components/layout/PageBanner';
import { mockUsers } from '../../data/mockData';
import type { User } from '../../types';
import { FiMoreVertical, FiPhone, FiMessageCircle, FiSettings, FiPlus, FiEdit, FiLock, FiTrash2 } from 'react-icons/fi';
import { useI18n } from '../../contexts/I18nContext';
import UserModal from './UserModal';

const UserCard: React.FC<{ user: User; onEdit: (user: User) => void; }> = ({ user, onEdit }) => {
    const { t, dir } = useI18n();
    const [actionsOpen, setActionsOpen] = useState(false);
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm border flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full bg-brand-purple text-white flex items-center justify-center font-bold text-xl ${dir === 'rtl' ? 'ms-4' : 'me-4'}`}>
                    {user.avatar}
                </div>
                <div>
                    <p className="font-semibold">{user.name}</p>
                    <span className="px-2 py-1 bg-yellow-200 text-yellow-800 text-xs font-medium rounded-full">{t(user.role.toLowerCase() as any)}</span>
                </div>
            </div>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
                <span>{user.phone}</span>
                <button className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200">
                    <FiPhone size={14}/> {t('call')}
                </button>
                <button className="flex items-center gap-2 px-3 py-1 bg-green-500 text-white rounded-full text-sm hover:bg-green-600">
                    <FiMessageCircle size={14}/> {t('whatsapp')}
                </button>
                <div className="relative">
                    <button onClick={() => setActionsOpen(p => !p)} className="p-2 rounded-full hover:bg-gray-100">
                        <FiMoreVertical />
                    </button>
                    {actionsOpen && (
                         <div className={`absolute ${dir === 'rtl' ? 'start-0' : 'end-0'} mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10`}>
                            <button onClick={() => { onEdit(user); setActionsOpen(false); }} className="w-full text-start flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><FiEdit size={14}/> {t('edit_user')}</button>
                            <button className="w-full text-start flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><FiLock size={14}/> {t('reset_password')}</button>
                            <button className="w-full text-start flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100"><FiTrash2 size={14}/> {t('delete_user')}</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

const Users: React.FC = () => {
    const { t } = useI18n();
    const [users] = useState<User[]>(mockUsers);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const handleAddUser = () => {
        setSelectedUser(null);
        setIsModalOpen(true);
    };

    const handleEditUser = (user: User) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };


    return (
        <div>
            <PageBanner title={t('users_count', { count: users.length })} />
            <div className="flex justify-between items-center mb-6">
                <button onClick={handleAddUser} className="flex items-center gap-2 px-4 py-2 bg-brand-purple text-white rounded-lg hover:bg-purple-700 transition-colors">
                    <FiPlus /> {t('add_user')}
                </button>
                 <button className="flex items-center gap-2 text-gray-600">
                    <FiSettings /> {t('auto_assignment_status')}
                </button>
            </div>
            <div className="space-y-4">
                {users.map(user => <UserCard key={user.id} user={user} onEdit={handleEditUser} />)}
            </div>
            <UserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} user={selectedUser} />
        </div>
    );
};

export default Users;
