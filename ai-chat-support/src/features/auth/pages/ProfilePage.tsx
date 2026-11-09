import React from 'react';
import { 
  Box, 
  Typography, 
  Paper,
  Container,
  Grid,
  Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Profile
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
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Paper 
                elevation={2} 
                sx={{ p: 3, bgcolor: '#252525', borderRadius: 2 }}
              >
                <Typography variant="h6" gutterBottom>
                  Personal Information
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2">Name: John Doe</Typography>
                  <Typography variant="body2">Email: john.doe@example.com</Typography>
                  <Typography variant="body2">Member since: Jan 2023</Typography>
                </Box>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={8}>
              <Paper 
                elevation={2} 
                sx={{ p: 3, bgcolor: '#252525', borderRadius: 2 }}
              >
                <Typography variant="h6" gutterBottom>
                  Account Settings
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Button 
                    variant="contained" 
                    color="primary"
                    sx={{ mr: 2 }}
                  >
                    Edit Profile
                  </Button>
                  <Button 
                    variant="outlined" 
                    color="secondary"
                    onClick={() => navigate('/login')}
                  >
                    Logout
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default ProfilePage