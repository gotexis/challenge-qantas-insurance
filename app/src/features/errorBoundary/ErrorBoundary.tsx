import React from "react";

import { Button, Container } from "../../components";
import styles from "./ErrorBoundary.module.scss";

export interface IErrorBoundaryState {
  errorInfo: Error | null;
}

class ErrorBoundary extends React.Component<{}, IErrorBoundaryState> {
  public state = {
    errorInfo: null,
  };

  public componentDidCatch(error: Error | null) {
    this.setState({
      errorInfo: error,
    });
  }

  public render() {
    if (!this.state.errorInfo) {
      return this.props.children;
    }

    return (
      <div className={styles.error}>
        <Container className={styles.container}>
          <h2>Sorry, something went wrong</h2>
          <p>
            Unfortunately, we're having a few technical issues and are unable to continue with your
            application. Please try again later.
          </p>
          <br />
          <Button type="button" onClick={this.refreshApp}>
            Try again
          </Button>
        </Container>
      </div>
    );
  }

  private refreshApp = () => {
    window.location.reload();
  };
}

export default ErrorBoundary;
