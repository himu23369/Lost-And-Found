// import AppRoutes from './components/AppRoutes';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingpage/LandingPage';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Home from './pages/homepage/Home';
import ReportItem from './pages/reportitem/ReportItem';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/homepage' element={<Home />} />
          <Route path='/reportitem' element={<ReportItem />} />
        </Routes>
      </BrowserRouter>
    </>

    // <AppRoutes>
    // <div className="App">
    //   <LandingPage />
    // </div>
    // </AppRoutes>
  );
}

export default App;
