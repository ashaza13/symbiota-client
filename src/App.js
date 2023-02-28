import './App.css';
import React from 'react';
import Authentication from './pages/Authentication';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DashboardPage from './pages/Dashboard';
import HomePage from './pages/Home';
import SearchPage from './pages/Search';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Authentication />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

