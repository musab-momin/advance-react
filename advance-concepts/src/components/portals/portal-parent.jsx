import * as React from "react";
import Alert from "./Alert";

const PortalParent = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const alertRef = React.useRef(null);

  return (
    <div className="p-16">
      <button type="button" className="btn" onClick={() => setIsOpen(true)}>
        open modal
      </button>
      <Alert isOpen={isOpen} onClose={() => setIsOpen(false)} ref={alertRef}>
        <Alert.Header>
          <div className="flex justify-between align-center">
            <h4>Login</h4>
            <button type="button" onClick={() => setIsOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="14"
                height="14"
                viewBox="0 0 16 16"
              >
                <path d="M 2.75 2.042969 L 2.042969 2.75 L 2.398438 3.101563 L 7.292969 8 L 2.042969 13.25 L 2.75 13.957031 L 8 8.707031 L 12.894531 13.605469 L 13.25 13.957031 L 13.957031 13.25 L 13.605469 12.894531 L 8.707031 8 L 13.957031 2.75 L 13.25 2.042969 L 8 7.292969 L 3.101563 2.398438 Z"></path>
              </svg>
            </button>
          </div>
        </Alert.Header>
        <Alert.Body>
          <div
            style={{ minHeight: 150, display: "grid", placeItems: "center" }}
          >
            <p>This is Alert body</p>
          </div>
        </Alert.Body>
        <Alert.Footer>
          <div className="flex justify-end">
            <button
              type="button"
              className="btn"
              onClick={() => setIsOpen(false)}
            >
              Sumit
            </button>
          </div>
        </Alert.Footer>
      </Alert>
    </div>
  );
};

export default PortalParent;
