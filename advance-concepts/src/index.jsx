import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ErrorBoundry from "./components/error-boundry/error-boundry";
import ErrorFallback from "./components/error-boundry/error-fallback";

createRoot(document.getElementById("root")).render(
  <ErrorBoundry fallbackComponent={<ErrorFallback />}>
    <App />
  </ErrorBoundry>
);
