import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProviders } from './app/providers/AppProviders';
import { Router as AppRouter } from './app/router';

export const App: React.FC = () => {
  return (
    <AppProviders>
      <Router>
        <AppRouter />
      </Router>
    </AppProviders>
  );
};

export default App;