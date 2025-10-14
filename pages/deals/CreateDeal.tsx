import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { useI18n } from '../../contexts/I18nContext';

const CreateDeal: React.FC = () => {
    const { t } = useI18n();

    const InputField: React.FC<{labelKey: any, placeholderKey: any, type?: string, children?: React.ReactNode, value?: string, readOnly?: boolean}> = ({labelKey, placeholderKey, type = 'text', children, value, readOnly}) => (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t(labelKey)}</label>
            <div className="relative">
                {type === 'select' ? (
                     <select className="w-full p-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-purple appearance-none">
                        <option>{t(placeholderKey)}</option>
                    </select>
                ) : (
                    <input type={type} placeholder={t(placeholderKey)} value={value} readOnly={readOnly} className={`w-full p-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-purple ${readOnly ? 'bg-gray-200' : ''}`} />
                )}
                {children && <div className="absolute right-2 top-1/2 -translate-y-1/2">{children}</div>}
            </div>
        </div>
    );

  return (
    <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('deal_information')}</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <InputField labelKey="project" placeholderKey="select_project" type="select" />
                <InputField labelKey="unit" placeholderKey="select_unit" type="select" />
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('lead')}</label>
                    <div className="flex items-center gap-2">
                        <select className="w-full p-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-purple appearance-none">
                            <option>{t('select_lead')}</option>
                        </select>
                        <button className="p-2 bg-brand-purple text-white rounded-lg">
                            <FiPlus size={20}/>
                        </button>
                    </div>
                </div>

                <InputField labelKey="started_by" placeholderKey="select_user" type="select" />
                <InputField labelKey="closed_by" placeholderKey="select_user" type="select" />
                <InputField labelKey="payment_method" placeholderKey="select_method" type="select" />

                <InputField labelKey="status" placeholderKey="select_status" type="select" />
                <InputField labelKey="start_date" placeholderKey="select_start_date" type="date" />
                <InputField labelKey="closed_date" placeholderKey="select_closed_date" type="date" />

                <InputField labelKey="discount_percentage" placeholderKey="enter_discount_percentage" type="number" />
                <InputField labelKey="discount_amount" placeholderKey="description" type="number" value="0.00" readOnly/>
                <InputField labelKey="total_value" placeholderKey="description" type="number" value="0" readOnly/>

                 <InputField labelKey="sales_commission_percentage" placeholderKey="enter_commission_percentage" type="number" />
                 <InputField labelKey="sales_commission_amount" placeholderKey="description" type="number" value="0.00" readOnly/>
                 <div className="md:col-span-1"></div>


                <div className="md:col-span-3">
                     <label className="block text-sm font-medium text-gray-700 mb-1">{t('description')}</label>
                     <textarea placeholder={t('enter_deal_description')} rows={4} className="w-full p-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-purple"></textarea>
                </div>
            </div>
        </div>
        <div className="flex justify-end mt-6">
            <button className="px-6 py-2 bg-brand-purple text-white rounded-lg hover:bg-purple-700 transition-colors">
                {t('create_deal')}
            </button>
        </div>
    </div>
  );
};

export default CreateDeal;