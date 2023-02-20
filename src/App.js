import './App.css';
import React from 'react';
import Authentication from './components/AuthenticationFlow';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import DashboardPage from './pages/Dashboard';
import ConfirmPage from './pages/ConfirmSignup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/confirm" element={<ConfirmPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

