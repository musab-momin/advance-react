const throttle = (cb, wait) => {
  let timerId;
  let isInThrottling;
  let lastTime;

  return (...params) => {
    if (!isInThrottling) {
      lastTime = Date.now();
      isInThrottling = true;
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        if (Date.now() - lastTime >= wait) {
          cb(...params);
          lastTime = Date.now();
        }
      }, [Math.max(wait - (Date.now() - lastTime), 0)]);
    }
  };
};

export default throttle;
