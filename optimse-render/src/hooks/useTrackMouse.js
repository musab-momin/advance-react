import { useEffect, useState } from "react";
import throttle from "../utils/throttle";

const useTrackMouse = (throttlingTime = 200) => {
  const [cordinates, setCordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMovement = throttle((params) => {
      setCordinates({ x: params.clientX, y: params.clientY });
    }, throttlingTime);

    window.addEventListener("mousemove", handleMouseMovement);

    return () => window.removeEventListener("mousemove", handleMouseMovement);
  }, []);

  return cordinates;
};

export default useTrackMouse;
