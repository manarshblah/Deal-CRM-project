import React from 'react';
import Modal from '../../components/ui/Modal';
import { useI18n } from '../../contexts/I18nContext';
import { FiPlus } from 'react-icons/fi';

interface AddUnitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddUnitModal: React.FC<AddUnitModalProps> = ({ isOpen, onClose }) => {
    const { t } = useI18n();

    const InputField: React.FC<{ labelKey: any, placeholderKey: any, type?: string, children?: React.ReactNode }> = ({ labelKey, placeholderKey, type = 'text', children }) => (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t(labelKey)}</label>
            <div className="relative">
                {type === 'select' ? (
                    <select className="w-full p-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-purple appearance-none">
                        <option>{t(placeholderKey)}</option>
                    </select>
                ) : (
                    <input type={type} placeholder={t(placeholderKey)} className="w-full p-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                )}
                {children && <div className="absolute right-2 top-1/2 -translate-y-1/2">{children}</div>}
            </div>
        </div>
    );

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={t('add_unit')}>
            <form>
                <div className="p-6 space-y-4">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                           <label className="block text-sm font-medium text-gray-700 mb-1">{t('project')}</label>
                           <div className="flex items-center gap-2">
                               <select className="w-full p-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-purple appearance-none">
                                   <option>{t('select_project')}</option>
                               </select>
                               <button type="button" className="p-2 bg-brand-purple text-white rounded-lg"><FiPlus size={20}/></button>
                           </div>
                        </div>
                        <div>
                           <label className="block text-sm font-medium text-gray-700 mb-1">{t('developer')}</label>
                           <div className="flex items-center gap-2">
                               <select className="w-full p-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-purple appearance-none">
                                   <option>{t('select_developer', { defaultValue: 'Select Developer' })}</option>
                               </select>
                               <button type="button" className="p-2 bg-brand-purple text-white rounded-lg"><FiPlus size={20}/></button>
                           </div>
                        </div>
                    </div>
                    <InputField labelKey="name" placeholderKey="enter_unit_name" />
                    <InputField labelKey="price" placeholderKey="enter_price" type="number" />
                    <InputField labelKey="status" placeholderKey="select_status" type="select" />
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-brand-purple text-base font-medium text-white hover:bg-purple-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm">
                        {t('save')}
                    </button>
                    <button type="button" onClick={onClose} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm">
                        {t('cancel')}
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default AddUnitModal;
