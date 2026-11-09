import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { paths } from './paths';

// Lazy load components
const LoginPage = React.lazy(() => import('../../features/auth/pages/LoginPage'));
const RegisterPage = React.lazy(() => import('../../features/auth/pages/RegisterPage'));
const Dashboard = React.lazy(() => import('../../features/chat/pages/Dashboard'));
const ProfilePage = React.lazy(() => import('../../features/auth/pages/ProfilePage'));

export const Router: React.FC = () => {
  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route path={paths.login} element={<LoginPage />} />
        <Route path={paths.register} element={<RegisterPage />} />
        <Route path={paths.dashboard} element={<Dashboard />} />
        <Route path={paths.profile} element={<ProfilePage />} />
        <Route path="/" element={<Navigate to={paths.dashboard} replace />} />
      </Routes>
    </Suspense>
  );
};