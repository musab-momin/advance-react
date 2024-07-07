import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ErrorBoundry from "./components/ErrorBoundry/error-boundry";
import ErrorFallback from "./components/ErrorBoundry/ErrorFallback";

createRoot(document.getElementById("root")).render(
  <ErrorBoundry fallbackComponent={<ErrorFallback />}>
    <App />
  </ErrorBoundry>
);
