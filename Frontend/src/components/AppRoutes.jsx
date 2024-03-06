// AppRoutes.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';
import LandingPage from '../pages/landingpage/LandingPage';
import Home from '../pages/homepage/Home'; // Import your Home component
import ReportItem from '../pages/reportitem/ReportItem';

const AppRoutes = () => {
  return (
    <Router>
     <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/homepage' element={<Home/>} />
        <Route path='/reportitem' element={<ReportItem/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
