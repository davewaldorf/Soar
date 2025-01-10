import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';

import Layout from '../components/Layout/Layout';
import Dashboard from '../pages/Dashboard';
import Settings from '../pages/Settings';
import AllCardsPage from '../pages/AllCards';
import { RoutePaths } from './routes';
import { ToastContainer } from 'react-toastify';

const AppRouter: React.FC = () => {
  return (
    <Router>
        <Layout>
          <Routes>
            <Route path={`${RoutePaths.Dashboard}`} element={<Dashboard />} />
            <Route path={`${RoutePaths.Settings}`} element={<Settings />} />
            <Route path={`${RoutePaths.Cards}`} element={<AllCardsPage />} />
          </Routes>
        </Layout>
        <ToastContainer position="top-right" autoClose={3000} />
      </Router>
  );
}

export default AppRouter; 