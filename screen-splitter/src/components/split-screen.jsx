import * as React from "react";

const SplitScreen = ({ children }) => {
  const [leftChildren, rightChildren] = children;
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{
          width: "50%",
          display: "grid",
          placeItems: "center",
          border: "1px solid crimson",
        }}
      >
        {leftChildren}
      </div>
      <div
        style={{
          width: "50%",
          display: "grid",
          placeItems: "center",
          border: "1px solid crimson",
        }}
      >
        {rightChildren}
      </div>
    </div>
  );
};

export default SplitScreen;
