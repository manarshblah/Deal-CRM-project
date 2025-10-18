
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSidebar } from '../../contexts/SidebarContext';
import { 
    FiGrid, FiUsers, FiTarget, FiActivity, FiBox, FiDollarSign, 
    FiBarChart2, FiBriefcase, FiSettings, FiCalendar, FiMessageSquare,
    FiChevronDown, FiChevronRight, FiUserCheck, FiStar, FiRefreshCw, 
    FiThermometer, FiArchive, FiPackage, FiVolume2, FiBarChart, FiChevronLeft
} from 'react-icons/fi';
import { useI18n } from '../../contexts/I18nContext';

interface SubNavItem {
    path: string;
    label: string;
    icon: React.ReactElement;
}
interface NavItem {
    path?: string;
    icon: React.ReactElement;
    label: string;
    basePath?: string;
    children?: SubNavItem[];
}

const Sidebar: React.FC = () => {
  const { isCollapsed } = useSidebar();
  const { t, dir } = useI18n();
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { path: '/dashboard', icon: <FiGrid />, label: t('dashboard') },
    { 
        label: t('leads'), 
        icon: <FiTarget />, 
        basePath: '/leads',
        children: [
            { path: '/leads/all', label: t('all_leads'), icon: <FiUsers/> },
            { path: '/leads/my-leads', label: t('my_leads'), icon: <FiUserCheck /> },
            { path: '/leads/fresh', label: t('fresh_leads'), icon: <FiStar /> },
            { path: '/leads/rotated', label: t('rotated_leads'), icon: <FiRefreshCw /> },
            { path: '/leads/cold', label: t('cold_leads'), icon: <FiThermometer /> },
        ]
    },
    { path: '/deals', icon: <FiDollarSign />, label: t('deals') },
    { path: '/activities', icon: <FiActivity />, label: t('activities') },
    { path: '/todos', icon: <FiCalendar />, label: t('todos') },
    { path: '/users', icon: <FiUsers />, label: t('users') },
    { 
        label: t('inventory'), 
        icon: <FiBox />, 
        basePath: '/inventory',
        children: [
            { path: '/inventory/units', label: t('units'), icon: <FiPackage /> },
            { path: '/inventory/owners', label: t('owners'), icon: <FiArchive /> },
        ]
    },
    { 
        label: t('marketing'), 
        icon: <FiMessageSquare />, 
        basePath: '/marketing',
        children: [
            { path: '/marketing/campaigns', label: t('campaigns'), icon: <FiVolume2 /> },
        ]
    },
    { 
        label: t('reports'), 
        icon: <FiBarChart2 />, 
        basePath: '/reports',
        children: [
            { path: '/reports/teams', label: t('teams_report'), icon: <FiUsers /> },
            { path: '/reports/employees', label: t('employees_report'), icon: <FiUsers /> },
            { path: '/reports/marketing', label: t('marketing_report'), icon: <FiBarChart /> },
        ]
    },
    { path: '/settings', icon: <FiSettings />, label: t('settings') },
  ];

  useEffect(() => {
    if (isCollapsed) {
        setOpenMenu(null);
    } else {
        const activeParent = navItems.find(item => item.basePath && location.pathname.startsWith(item.basePath));
        if (activeParent) {
            setOpenMenu(activeParent.label);
        }
    }
  }, [location.pathname, isCollapsed]);


  const handleMenuClick = (label: string) => {
    setOpenMenu(openMenu === label ? null : label);
  };

  const sidebarClasses = `
    bg-brand-purple text-white flex flex-col fixed h-full z-[60]
    transition-transform duration-300 ease-in-out
    ${dir === 'rtl' ? 'right-0' : 'left-0'}
    ${isCollapsed ? 'lg:w-20' : 'w-64'}
    ${isCollapsed 
        ? (dir === 'rtl' ? 'translate-x-full lg:translate-x-0' : '-translate-x-full lg:translate-x-0') 
        : 'translate-x-0'
    }
  `;

  return (
    <aside className={sidebarClasses}>
      <div className="flex items-center justify-center h-16 border-b border-purple-700 flex-shrink-0">
        <h1 className={`text-2xl font-bold ${isCollapsed && 'lg:hidden'}`}>DEAL</h1>
         <FiBriefcase size={24} className={`${!isCollapsed && 'lg:hidden'} ${isCollapsed ? 'block' : 'hidden'}`}/>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto sidebar-scroll">
        {navItems.map(item => (
          item.children ? (
            <div key={item.label}>
              <button
                onClick={() => handleMenuClick(item.label)}
                className={`w-full flex items-center p-3 rounded-lg transition-colors hover:bg-purple-700 ${location.pathname.startsWith(item.basePath || '') ? 'bg-purple-700' : ''}`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className={`ms-4 font-medium flex-1 text-start ${isCollapsed && 'lg:hidden'}`}>{item.label}</span>
                <div className={`${isCollapsed && 'lg:hidden'}`}>
                    {openMenu === item.label ? <FiChevronDown /> : (dir === 'rtl' ? <FiChevronLeft /> : <FiChevronRight />)}
                </div>
              </button>
              {!isCollapsed && openMenu === item.label && (
                <div className="ps-8 pe-2 mt-1 space-y-1">
                  {item.children.map(child => (
                    <NavLink
                      key={child.path}
                      to={child.path}
                      className={({ isActive }) => `flex items-center gap-3 w-full text-start p-2 rounded-lg transition-colors text-sm ${isActive ? 'bg-white text-brand-purple' : 'hover:bg-purple-700'}`}
                    >
                      {child.icon}
                      <span>{child.label}</span>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <NavLink
              key={item.path}
              to={item.path!}
              className={({ isActive }) => `flex items-center p-3 rounded-lg transition-colors ${isActive ? 'bg-white text-brand-purple' : 'hover:bg-purple-700'}`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className={`ms-4 font-medium ${isCollapsed && 'lg:hidden'}`}>{item.label}</span>
            </NavLink>
          )
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
