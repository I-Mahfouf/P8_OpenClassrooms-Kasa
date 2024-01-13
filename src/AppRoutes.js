import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import WelcomePage from './pages/WelcomePage';
import AboutPage from './pages/AboutPage';
import RentalPage from './pages/RentalPage';
import ErrorPage from './pages/ErrorPage';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" 
        element={<WelcomePage />} />
        <Route path="/about" 
        element={<AboutPage />} />
        <Route path="/rental/:id" 
        element={<RentalPage />} />
        <Route path="*" 
        element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;

//* Fichier qui s'occupe des routes vers les différentes pages du site *//