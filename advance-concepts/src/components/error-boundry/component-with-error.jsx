import * as React from "react";

const ComponentWithError = () => {
  throw new Error("Error in child component");

  return <p>Component with error</p>;
};

export default ComponentWithError;
