
import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiBell } from 'react-icons/fi';
import { useAuth } from '../../contexts/AuthContext';
import { useI18n } from '../../contexts/I18nContext';
import { useSidebar } from '../../contexts/SidebarContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const { language, setLanguage, t, dir } = useI18n();
  const { toggleSidebar } = useSidebar();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [language, dir]);

  return (
    <header className="bg-white shadow-sm p-4 flex items-center justify-between z-40">
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="text-gray-600">
          <FiMenu size={20} />
        </button>
      </div>
      <div className="flex items-center gap-6">
        <button className="text-gray-600 relative">
          <FiBell size={20} />
          <span className="absolute -top-1 -right-1 block h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <button onClick={toggleLanguage} className="flex items-center">
          {language === 'en' ? (
             <img src="https://flagcdn.com/w20/eg.png" alt="Egypt Flag" title="Switch to Arabic" />
          ) : (
            <img src="https://flagcdn.com/w20/us.png" alt="US Flag" title="Switch to English"/>
          )}
        </button>
        <div className="relative" ref={dropdownRef}>
          <button onClick={() => setDropdownOpen(prev => !prev)} className="w-10 h-10 rounded-full bg-brand-purple text-white flex items-center justify-center font-bold text-lg">
            {user?.avatar}
          </button>
          {dropdownOpen && (
            <div className={`absolute ${dir === 'rtl' ? 'start-0' : 'end-0'} mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50`}>
              <div className="px-4 py-2 border-b">
                <div className="font-semibold">{user?.name}</div>
                <div className="text-xs text-gray-500">{t('owner')}</div>
              </div>
              <Link to="/auth/change-password" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t('change_password')}</Link>
              <button onClick={handleLogout} className="w-full text-start block px-4 py-2 text-sm text-red-500 hover:bg-gray-100">{t('logout')}</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
