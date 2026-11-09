import React from 'react';
import { 
  Box, 
  Typography, 
  Paper,
  Button,
  Container,
  Grid
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          AI Customer Support Dashboard
        </Typography>
        
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4, 
            bgcolor: '#1e1e1e',
            color: 'white',
            borderRadius: 2
          }}
        >
          <Typography variant="h6" gutterBottom>
            Welcome to the AI Customer Support System
          </Typography>
          
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Paper 
                elevation={2} 
                sx={{ p: 3, bgcolor: '#252525', borderRadius: 2 }}
              >
                <Typography variant="h6" gutterBottom>
                  Chat Interface
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Start a new conversation with our AI assistant
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary"
                  onClick={() => {/* Navigate to chat */}}
                >
                  Start Chat
                </Button>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Paper 
                elevation={2} 
                sx={{ p: 3, bgcolor: '#252525', borderRadius: 2 }}
              >
                <Typography variant="h6" gutterBottom>
                  Account Settings
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Manage your account preferences and settings
                </Typography>
                <Button 
                  variant="outlined" 
                  color="secondary"
                  onClick={() => navigate('/profile')}
                >
                  View Profile
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default Dashboard