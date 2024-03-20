import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout/index.jsx";
import ErrorPage from "./error-page.jsx";
import Overview from "./components/Overview/index.jsx";
import Contact from "./components/Contact/index.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Overview />,
      },
      {
        // path: "edit_items",
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
