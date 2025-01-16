import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Menu from './pages/Menu';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ContactPage from './pages/ContactPage'; // Import de ContactPage

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<ContactPage />} /> {/* Route pour la page Contact */}
      </Routes>
    </Router>
  );
};

export default App;
