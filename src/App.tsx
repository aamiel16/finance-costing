import React from 'react';
import AppRouter from './routes/AppRouter';
import AppBar from './components/app/HeaderBar';

const App: React.FC = () => {
  return (
    <AppBar title="Finance Costing">
      <AppRouter>
      </AppRouter>
    </AppBar>
  );
}

export default App;
