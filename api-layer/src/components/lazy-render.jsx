import React, { useEffect, useState } from "react";

// This component will show loading text if the renderLazy didn't update before the delay time
const LazyRender = ({ children, renderLazy, delay }) => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    let timer;

    if (!renderLazy) {
      setShowLoader(false);
      return;
    }
    if (delay === 0) {
      setShowLoader(true);
    } else {
      timer = setTimeout(() => {
        console.log("@@ WHAT HAPPENS NOW: >>>");
        setShowLoader(true);
      }, delay);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [delay, renderLazy]);

  if (showLoader) {
    return <p>Loading...</p>;
  }

  return <>{children}</>;
};

export default LazyRender;
