import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
//import HomePage from './pages/user/homePage';
import { BrowserRouter } from 'react-router-dom';
import RouterCustom from './router';
import './styles/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <RouterCustom />
  </BrowserRouter>
);
