import React, { useEffect, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { useSidebar } from '../../contexts/SidebarContext';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isCollapsed, setIsCollapsed, toggleSidebar } = useSidebar();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) { // On desktop
        setIsCollapsed(false); // Default to open sidebar
      } else { // On mobile
        setIsCollapsed(true); // Default to closed sidebar
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, [setIsCollapsed]);

  // Close sidebar on navigation on mobile
  useEffect(() => {
    if (isMobile) {
      setIsCollapsed(true);
    }
  }, [location, isMobile, setIsCollapsed]);


  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar />
       {/* Overlay for mobile */}
      {!isCollapsed && isMobile && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" 
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${isCollapsed ? 'lg:ms-20' : 'lg:ms-64'}`}>
        <Header />
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;