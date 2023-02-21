import './App.css';
import React from 'react';
import Authentication from './pages/Authentication';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DashboardPage from './pages/Dashboard';
import HomePage from './pages/Home';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Authentication />} />
        <Route path="/dashboard" element={<DashboardPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

