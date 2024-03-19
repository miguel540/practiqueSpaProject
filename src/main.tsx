import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MainApp } from './MainApp';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </React.StrictMode>
);