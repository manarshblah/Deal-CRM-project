import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAuth } from '../contexts/AuthContext';
import { useI18n } from '../contexts/I18nContext';
import { mockUser } from '../data/mockData';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const { t, language, setLanguage } = useI18n();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      login(mockUser);
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="w-1/2 bg-brand-purple text-white flex flex-col justify-center items-center p-12 relative">
         <div className="text-center max-w-md">
            <h2 className="text-4xl font-bold mb-4">{t('hello_deal_crm')}</h2>
            <p className="text-lg text-purple-200">
             {t('login_desc')}
            </p>
        </div>
        <div className="absolute bottom-10">
             <button onClick={toggleLanguage} className="bg-black bg-opacity-20 hover:bg-opacity-40 text-white font-bold py-2 px-4 rounded transition-colors">
                {language === 'en' ? t('arabic_lang') : t('english_lang')}
             </button>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-12">
        <div className="w-full max-w-sm">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{t('welcome_back')}</h2>
          <p className="text-gray-500 mb-8">{t('login_prompt')}</p>
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                {t('username')}
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-brand-purple"
                placeholder={t('admin_placeholder')}
              />
            </div>
            <div className="mb-6 relative">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                {t('password')}
              </label>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-brand-purple"
                placeholder={t('password_placeholder')}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 top-7 pr-3 flex items-center text-sm leading-5"
              >
                {showPassword ? <FaEyeSlash className="h-5 w-5 text-gray-500" /> : <FaEye className="h-5 w-5 text-gray-500" />}
              </button>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full bg-brand-purple hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors"
              >
                {t('sign_in')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;