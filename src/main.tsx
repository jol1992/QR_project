import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { paths } from "./constants.ts";
import { BusinessLinks } from "./pages/BusinessLinks.tsx";

const { home, links } = paths;
const router = createHashRouter([
  {
    path: home,
    element: <App />,
    children: [
      {
        path: links,
        element: <BusinessLinks />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
