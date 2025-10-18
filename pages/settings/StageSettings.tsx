
import React, { useState } from 'react';
import { useI18n } from '../../contexts/I18nContext';
import { FiChevronsRight, FiPlus, FiGrid, FiTrash2 } from 'react-icons/fi';
import AddStageModal from './AddStageModal';

const mockStages = [
    { id: 1, name: 'New Lead', description: 'Newly acquired lead', color: '#EC4899', required: true, autoAdvance: true },
    { id: 2, name: 'Qualified', description: 'Lead has been qualified', color: '#F97316', required: true, autoAdvance: false },
    { id: 3, name: 'Proposal', description: 'Proposal sent to lead', color: '#3B82F6', required: true, autoAdvance: false },
];

const colors = ['#3B82F6', '#8B5CF6', '#EC4899', '#EF4444', '#F97316', '#10B981', '#F59E0B', '#6366F1'];

const StageCard: React.FC<{ stage: typeof mockStages[0] }> = ({ stage }) => {
    const { t } = useI18n();
    const [selectedColor, setSelectedColor] = useState(stage.color);

    return (
        <div className="bg-gray-50/80 p-4 rounded-lg border">
            <div className="flex items-start gap-4">
                <button className="text-gray-400 cursor-move pt-1"><FiGrid /></button>
                <div className="flex-1 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs text-gray-500">{t('stage_name')}</label>
                            <input type="text" defaultValue={stage.name} className="w-full p-2 border rounded-lg bg-white mt-1" />
                        </div>
                        <div>
                            <label className="text-xs text-gray-500">{t('description')}</label>
                            <input type="text" defaultValue={stage.description} className="w-full p-2 border rounded-lg bg-white mt-1" />
                        </div>
                    </div>
                    <div>
                        <label className="text-xs text-gray-500 block mb-2">{t('color')}</label>
                        <div className="flex items-center gap-2 flex-wrap">
                            {colors.map(color => (
                                <button key={color} onClick={() => setSelectedColor(color)} className={`w-6 h-6 rounded-full border-2 ${selectedColor === color ? 'border-brand-purple ring-2 ring-purple-300' : 'border-transparent'}`} style={{ backgroundColor: color }}></button>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-4 sm:gap-6">
                            <div className="flex items-center gap-2">
                                <label className="switch switch-sm">
                                    <input type="checkbox" defaultChecked={stage.required} />
                                    <span className="slider round"></span>
                                </label>
                                <span className="text-sm font-medium">{t('required')}</span>
                            </div>
                             <div className="flex items-center gap-2">
                                <label className="switch switch-sm">
                                    <input type="checkbox" defaultChecked={stage.autoAdvance} />
                                    <span className="slider round"></span>
                                </label>
                                <span className="text-sm font-medium">{t('auto_advance')}</span>
                            </div>
                        </div>
                        <button className="text-gray-400 hover:text-red-500"><FiTrash2 /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};


const StageSettings: React.FC = () => {
    const { t } = useI18n();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start gap-4 mb-8">
                    <div className="p-3 bg-brand-purple-light text-brand-purple rounded-lg">
                        <FiChevronsRight size={24}/>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">{t('lead_stages_settings')}</h3>
                        <p className="text-gray-500 max-w-lg">{t('lead_stages_desc')}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                            <h4 className="font-semibold">{t('enable_auto_stage_advancement')}</h4>
                            <p className="text-sm text-gray-500">{t('auto_stage_advancement_desc')}</p>
                        </div>
                        <label className="switch">
                            <input type="checkbox" defaultChecked />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                            <h4 className="font-semibold">{t('require_stage_completion')}</h4>
                            <p className="text-sm text-gray-500">{t('require_stage_completion_desc')}</p>
                        </div>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
                
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="font-semibold">{t('lead_stages')}</h4>
                        <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 px-4 py-2 bg-brand-purple-light text-brand-purple rounded-lg hover:bg-purple-200 transition-colors text-sm font-semibold">
                            <FiPlus /> {t('add_stage')}
                        </button>
                    </div>
                    <div className="space-y-4">
                        {mockStages.map(stage => <StageCard key={stage.id} stage={stage} />)}
                    </div>
                </div>

            </div>
            <AddStageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default StageSettings;