import * as React from "react";

class ErrorBoundry extends React.Component {
  state = {
    hasError: false,
    errorMessage: "",
  };

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  render() {
    if (this.state.hasError) {
      return React.cloneElement(this.props.fallbackComponent, {
        message: this.state.errorMessage,
      });
    }

    return this.props.children;
  }
}

export default ErrorBoundry;
