import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Agendar from "./pages/Agendar";
import Contacto from "./pages/Contacto";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
        { path: "/", element: <Home /> },
        { path: "/servicios", element: <Servicios /> },
        { path: "/agendar", element: <Agendar /> },
        { path: "/contacto", element: <Contacto /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
