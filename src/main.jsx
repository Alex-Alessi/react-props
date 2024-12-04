import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Import all of Bootstrap's JS
import "bootstrap/dist/css/bootstrap-reboot.css";
import * as bootstrap from "bootstrap";

import "./assets/css/index.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
