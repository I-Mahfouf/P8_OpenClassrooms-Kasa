import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//* Importation des différentes pages de l'application *//
import WelcomePage from './pages/WelcomePage';
import AboutPage from './pages/AboutPage';
import RentalPage from './pages/RentalPage';
import ErrorPage from './pages/ErrorPage';

function AppRoutes() {
  return (
    //* Conteneur principal de routage de l'application *//
    <Router>
      <Routes>
        {/* Route pour la page d'accueil */}
        <Route path="/" element={<WelcomePage />} />

        {/* Route pour la page "À propos" */}
        <Route path="/about" element={<AboutPage />} />

        {/* Route dynamique pour la page de location avec un ID spécifique */}
        <Route path="/rental/:id" element={<RentalPage />} />

        {/* Route par défaut pour gérer les URL inconnues */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;

//* Fichier qui s'occupe des routes vers les différentes pages du site *//
