import * as React from "react";

const ErrorFallback = ({ message }) => {
  return (
    <div className="center-screen">
      <h2>A client Side error occurs</h2>
      <p>{message}</p>
    </div>
  );
};

export default ErrorFallback;
