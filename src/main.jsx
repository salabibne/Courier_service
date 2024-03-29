import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import {
  RouterProvider,
} from "react-router-dom";
import Router from './Routes/Router.jsx';
import AuthContext from './Context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext><HelmetProvider><RouterProvider router={Router}></RouterProvider></HelmetProvider></AuthContext>
  </React.StrictMode>,
)
