import React from "react";
import useTrackMouse from "../hooks/useTrackMouse";

const MouseTracker = () => {
  const { x, y } = useTrackMouse();

  return (
    <div>
      <p>MouseTracker</p>
      x: {x} y:{y}
    </div>
  );
};

export default MouseTracker;
