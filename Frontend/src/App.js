// import { Route, Routes } from 'react-router-dom';
import React from 'react';
// import Login from '../pages/login/Login';
// import Signup from '../pages/signup/Signup';
import LandingPage from './pages/landingpage/LandingPage';
import AppRoutes from './components/AppRoutes';

function App() {
  return (
    <AppRoutes>
    <div className="App">
      <LandingPage />
    </div>
    </AppRoutes>
  );
}

export default App;
