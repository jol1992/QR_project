import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { paths } from "./constants.ts";
import { BusinessLinks } from "./pages/BusinessLinks.tsx";

const { home, links } = paths;
const router = createBrowserRouter([
  {
    path: home,
    element: <App />,
  },
  {
    path: links,
    element: <BusinessLinks />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
