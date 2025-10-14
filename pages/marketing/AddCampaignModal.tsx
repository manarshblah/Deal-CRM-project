import React from 'react';
import Modal from '../../components/ui/Modal';
import { useI18n } from '../../contexts/I18nContext';

interface AddCampaignModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddCampaignModal: React.FC<AddCampaignModalProps> = ({ isOpen, onClose }) => {
    const { t } = useI18n();
    
    return (
        <Modal isOpen={isOpen} onClose={onClose} title={t('add_campaign')}>
            <form>
                <div className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">{t('campaign_name')}</label>
                        <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-purple focus:border-brand-purple sm:text-sm"/>
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700">{t('platform')}</label>
                        <select className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-brand-purple focus:border-brand-purple sm:text-sm">
                            <option>Facebook</option>
                            <option>Google</option>
                            <option>Instagram</option>
                            <option>Twitter</option>
                        </select>
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700">{t('cost')}</label>
                        <input type="number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-purple focus:border-brand-purple sm:text-sm"/>
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

export default AddCampaignModal;
