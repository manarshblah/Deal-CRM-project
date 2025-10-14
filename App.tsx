
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { I18nProvider } from './contexts/I18nContext';
import { SidebarProvider } from './contexts/SidebarContext';
import Layout from './components/layout/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AllLeads from './pages/leads/AllLeads';
import MyLeads from './pages/leads/MyLeads';
import FreshLeads from './pages/leads/FreshLeads';
import RotatedLeads from './pages/leads/RotatedLeads';
import ColdLeads from './pages/leads/ColdLeads';
import Activities from './pages/Activities';
import Units from './pages/inventory/Units';
import Owners from './pages/inventory/Owners';
import DealsList from './pages/deals/DealsList';
import CreateDeal from './pages/deals/CreateDeal';
import Users from './pages/users/Users';
import Campaigns from './pages/marketing/Campaigns';
import MarketingReport from './pages/marketing/MarketingReport';
import Todos from './pages/Todos';
import ChangePassword from './pages/auth/ChangePassword';
import IntegrationsLayout from './pages/integrations/IntegrationsLayout';
import Facebook from './pages/integrations/Facebook';
import Whatsapp from './pages/integrations/Whatsapp';
import Instagram from './pages/integrations/Instagram';
import Twitter from './pages/integrations/Twitter';
import TeamsReport from './pages/reports/TeamsReport';
import EmployeesReport from './pages/reports/EmployeesReport';
import SettingsLayout from './pages/settings/SettingsLayout';
import LeadSettings from './pages/settings/LeadSettings';
import ChannelSettings from './pages/settings/ChannelSettings';
import StageSettings from './pages/settings/StageSettings';
import StatusSettings from './pages/settings/StatusSettings';
import NotFound from './pages/NotFound';
import './index.css';

// FIX: Replaced JSX.Element with React.ReactElement to fix "Cannot find namespace 'JSX'" error.
const PrivateRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const AppContent: React.FC = () => {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route 
          path="/*"
          element={
            <PrivateRoute>
              <Layout>
                <Routes>
                  <Route path="/" element={<Navigate to="/dashboard" />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/leads/all" element={<AllLeads />} />
                  <Route path="/leads/my-leads" element={<MyLeads />} />
                  <Route path="/leads/fresh" element={<FreshLeads />} />
                  <Route path="/leads/rotated" element={<RotatedLeads />} />
                  <Route path="/leads/cold" element={<ColdLeads />} />
                  <Route path="/activities" element={<Activities />} />
                  <Route path="/inventory/units" element={<Units />} />
                  <Route path="/inventory/owners" element={<Owners />} />
                  <Route path="/deals" element={<DealsList />} />
                  <Route path="/deals/create" element={<CreateDeal />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/marketing/campaigns" element={<Campaigns />} />
                  <Route path="/todos" element={<Todos />} />
                  <Route path="/auth/change-password" element={<ChangePassword />} />
                  <Route path="/integrations" element={<IntegrationsLayout />}>
                    <Route index element={<Facebook />} />
                    <Route path="facebook" element={<Facebook />} />
                    <Route path="whatsapp" element={<Whatsapp />} />
                    <Route path="instagram" element={<Instagram />} />
                    <Route path="twitter" element={<Twitter />} />
                  </Route>
                  <Route path="/reports/teams" element={<TeamsReport />} />
                  <Route path="/reports/employees" element={<EmployeesReport />} />
                  <Route path="/reports/marketing" element={<MarketingReport />} />
                  <Route path="/settings" element={<SettingsLayout />}>
                    <Route index element={<Navigate to="leads" />} />
                    <Route path="leads" element={<LeadSettings />} />
                    <Route path="channels" element={<ChannelSettings />} />
                    <Route path="stages" element={<StageSettings />} />
                    <Route path="statuses" element={<StatusSettings />} />
                  </Route>
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            </PrivateRoute>
          } 
        />
      </Routes>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <I18nProvider>
        <AuthProvider>
          <SidebarProvider>
            <AppContent />
          </SidebarProvider>
        </AuthProvider>
      </I18nProvider>
    </Router>
  );
};

export default App;
