import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Home from './pages/Home';
import Notes from './pages/Notes';
import Notfound from './pages/404';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/notes/:id",
    element: <Notes />,
  },
  {
    path: "*",
    element: <Navigate to="404" />,
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
