import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/Page_1/WelcomePage';
import AboutPage from './pages/Page_2/AboutPage';
import ErrorPage from './pages/Page_4/ErrorPage';
import RentalPage from './pages/Page_3/RentalPage';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/rental" element={<RentalPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;