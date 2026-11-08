import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { paths } from './paths';

// Lazy load components
const Dashboard = React.lazy(() => import('../../features/chat/pages/Dashboard'));
const NotFound = React.lazy(() => import('../../components/common/NotFound'));

export const Router: React.FC = () => {
  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route path={paths.dashboard} element={<Dashboard />} />
        <Route path="*" element={<Navigate to={paths.dashboard} replace />} />
      </Routes>
    </Suspense>
  );
};