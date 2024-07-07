import * as React from "react";
import { createPortal } from "react-dom";

const Header = ({ children }) => {
  return <div className="alert-header">{children}</div>;
};

const Body = ({ children }) => {
  return <div className="alert-body">{children}</div>;
};

const Footer = ({ children }) => {
  return <div className="alert-footer">{children}</div>;
};

const Alert = React.forwardRef(({ children, isOpen, onClose }, ref) => {
  React.useEffect(() => {
    const clickHandler = (eve) => {
      if (isOpen && ref.current && !ref.current.contains(eve.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", clickHandler);

    return () => document.removeEventListener("mousedown", clickHandler);
  }, [onClose]);

  if (!isOpen) {
    return <></>;
  }

  return createPortal(
    <div className="overlay">
      <div className="alert-wrapper" ref={ref}>
        {children}
      </div>
    </div>,
    document.getElementById("modals")
  );
});

export default Alert;

Alert.Header = Header;
Alert.Body = Body;
Alert.Footer = Footer;
