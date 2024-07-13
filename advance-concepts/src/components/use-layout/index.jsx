import * as React from "react";

/**
 * We are toggling the button on show we want to show the text to bottom of button + 30px we try to do  this
 * with useEffect but the problem with useEffect is it does not run immediatly after it's dependancy has been
 * changed instead of that it tells react to compelte one render and after that it runs, so because of this
 * behaviour we first see the text at the top of our screen and then it get's the correct top value.
 *
 * To solve this UI glitch we have another hook called useLayouEffect. This hook address our issue, which means
 * it runs immediatly after it's dependancy changes. It will actually hold the UI paint until it finishes the
 * it's callBack execution.
 */

const Uselayout = () => {
  const [top, setTop] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const buttonRef = React.useRef(null);

  const handleClick = () => setIsVisible((prev) => !prev);

  //This is to demonstrate the glitch in much better way it will slow down the speed of component re-render
  const now = performance.now();
  while (now > performance.now() - 700) {
    //artifically slow down component
  }

  // React.useEffect(() => {
  //   if (buttonRef.current === null || !isVisible) return setTop(0);

  //   if (buttonRef.current) {
  //     const { bottom } = buttonRef.current.getBoundingClientRect();
  //     setTop(bottom + 30);
  //   }
  // }, [isVisible]);

  // React.useLayoutEffect(() => {
  //   if (buttonRef.current === null || !isVisible) return;

  //   if (buttonRef.current) {
  //     const { bottom } = buttonRef.current.getBoundingClientRect();
  //     setTop(bottom + 30);
  //   }
  // }, [isVisible]);

  return (
    <div className="container">
      <button
        type="button"
        className="btn"
        ref={buttonRef}
        onClick={handleClick}
      >
        Click me
      </button>
      {isVisible && (
        <div
          style={{
            padding: "1rem",
            border: "1px solid crimson",
            position: "absolute",
            top: `${top}px`,
          }}
        >
          Text
        </div>
      )}
    </div>
  );
};

export default Uselayout;
