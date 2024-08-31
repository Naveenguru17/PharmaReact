import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Functionalities from './components/Functionalities';  // Adjust the path as needed
import Forecasting from './components/Forecasting';  // Adjust the path as needed
import Dashboard from './components/Dashboard';  // Adjust the path as needed
import DrugInformation from './components/DrugInformation';  // Adjust the path as needed
import Home from './components/Home';
import Prediction from './components/Prediction'; 
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Signin from './components/Signin';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
// Import the Prediction component

function AppRoutes() {
  return (
    <Router>
        <Header />
        <div className="pt-20">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forecasting" element={<Forecasting />}>
        </Route>
        <Route path="/forecasting/prediction" element={<Prediction />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/druginformation" element={<DrugInformation />} />
        <Route path="/about" element={<AboutUs/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default AppRoutes;
