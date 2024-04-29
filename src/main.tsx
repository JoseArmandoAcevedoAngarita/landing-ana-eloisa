import React from 'react'

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom"

import './index.css';
import ErrorPage from './error-page';
import Root from './routes/root';


import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import PerennialMovement from './routes/perennial-movement';

library.add(fas, fab, far);

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "movimiento-perennial",
    element: <PerennialMovement />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
