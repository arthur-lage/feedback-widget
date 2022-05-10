import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import { ErrorProvider } from "./contexts/ErrorContext";
import { UserProvider } from "./contexts/UserContext";

import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <ErrorProvider>
        <App />
      </ErrorProvider>
    </UserProvider>
  </React.StrictMode>
);
