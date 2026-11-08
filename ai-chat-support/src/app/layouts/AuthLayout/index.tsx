import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

export const AuthLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box 
      sx={{ 
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {children}
    </Box>
  );
};