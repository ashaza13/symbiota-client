import './App.css';
import React from 'react';
import Authentication from './pages/Authentication';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import ConfirmPage from './pages/ConfirmSignup';
import DashboardPage from './pages/Dashboard';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/confirm" element={<ConfirmPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

