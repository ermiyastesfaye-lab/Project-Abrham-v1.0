import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <CookiesProvider>
    <Router>
      <App />
    </Router>
  </CookiesProvider>
);
