import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.module.scss';
import App from './AppRoutes';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
