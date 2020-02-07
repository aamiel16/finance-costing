import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { AppBar } from './components/app/AppBar';

const App: React.FC = () => {
  return (
    <Router>
      <AppBar title="Finance Costing">
        <AppRoutes />
      </AppBar>
    </Router>
  );
}

export default App;
