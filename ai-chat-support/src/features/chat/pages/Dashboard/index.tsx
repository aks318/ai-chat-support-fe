import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import { MainLayout } from '../../../../app/layouts/MainLayout';

export const Dashboard: React.FC = () => {
  return (
    <MainLayout>
      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            AI Customer Support Dashboard
          </Typography>
          <Typography variant="body1">
            Welcome to the AI Customer Support application. This is a clean, scalable, production-ready frontend boilerplate.
          </Typography>
        </Box>
      </Container>
    </MainLayout>
  );
};