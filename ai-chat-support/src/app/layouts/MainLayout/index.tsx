import React, { ReactNode } from 'react';
import { Box, Toolbar } from '@mui/material';
import { Header } from '../../../components/common/Header';
import { Sidebar } from '../../../components/common/Sidebar';

export const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};