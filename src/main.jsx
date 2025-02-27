import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import './index.css';

import Home from './pages/Home';
import Notes from './pages/Notes';
import Notfound from './pages/404';
import Identify from './pages/identify';
import PrivateRoute from './components/PrivateRoute';  // Import the PrivateRoute component

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login-session" replace />,  // Redirect root to login-session
  },
  {
    path: "/login-session",
    element: <Identify />,
  },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <Home />  {/* This is now wrapped in the PrivateRoute */}
      </PrivateRoute>
    ),
  },
  {
    path: "/notes/:url",
    element: <Notes />,
  },
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
  {
    path: "/404",
    element: <Notfound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
