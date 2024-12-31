import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';

import Layout from '../components/Layout/Layout';
import Dashboard from '../pages/Dashboard';
import Settings from '../pages/Settings';
import { RoutePaths } from './routes';

const AppRouter: React.FC = () => {
  return (
    <Router>
        <Layout>
          <Routes>
            <Route path={`${RoutePaths.Dashboard}`} element={<Dashboard />} />
            <Route path={`${RoutePaths.Settings}`} element={<Settings />} />
          </Routes>
        </Layout>
      </Router>
  );
}

export default AppRouter; 