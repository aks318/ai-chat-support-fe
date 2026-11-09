import React from 'react';
import { Box, Container } from '@mui/material';

export const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#1e1e1e',
      }}
    >
      <Container maxWidth="sm">
        {children}
      </Container>
    </Box>
  );
};