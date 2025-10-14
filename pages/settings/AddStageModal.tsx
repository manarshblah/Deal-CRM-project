import React, { useState } from 'react';
import Modal from '../../components/ui/Modal';
import { useI18n } from '../../contexts/I18nContext';

interface AddStageModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const colors = ['#3B82F6', '#8B5CF6', '#EC4899', '#EF4444', '#F97316', '#10B981', '#F59E0B', '#6366F1'];

const AddStageModal: React.FC<AddStageModalProps> = ({ isOpen, onClose }) => {
    const { t } = useI18n();
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    
    return (
        <Modal isOpen={isOpen} onClose={onClose} title={t('add_stage')}>
            <form>
                <div className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">{t('stage_name')}</label>
                        <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-purple focus:border-brand-purple sm:text-sm"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">{t('description')}</label>
                        <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-purple focus:border-brand-purple sm:text-sm"/>
                    </div>
                     <div>
                        <label className="text-sm font-medium text-gray-700 block mb-2">{t('color')}</label>
                        <div className="flex items-center gap-2 flex-wrap">
                            {colors.map(color => (
                                <button key={color} type="button" onClick={() => setSelectedColor(color)} className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-brand-purple ring-2 ring-purple-300' : 'border-transparent'}`} style={{ backgroundColor: color }}></button>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-8 pt-2">
                        <div className="flex items-center gap-2">
                            <label className="switch switch-sm">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                            <span className="text-sm font-medium">{t('required')}</span>
                        </div>
                            <div className="flex items-center gap-2">
                            <label className="switch switch-sm">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                            <span className="text-sm font-medium">{t('auto_advance')}</span>
                        </div>
                    </div>
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

export default AddStageModal;