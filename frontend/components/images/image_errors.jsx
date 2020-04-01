import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(e) {
    debugger;
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Opps, looks like something went wrong</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
