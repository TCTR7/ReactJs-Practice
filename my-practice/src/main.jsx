import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./i18n";
import "./index.css";
import ModalProvider from "./components/modals/modal_manager/ModalProvider";
import { ToastProvider } from "./components/toasts/ToastContext";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
