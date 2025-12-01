import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for debugging
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      return (
        <div className="container mt-4">
          <div className="row">
            <div className="col-12">
              <div className="alert alert-danger" role="alert">
                <h4 className="alert-heading">Something went wrong!</h4>
                <p>
                  The application encountered an unexpected error. Please try
                  refreshing the page.
                </p>
                <hr />
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => window.location.reload()}
                  >
                    Refresh Page
                  </button>
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() =>
                      this.setState({
                        hasError: false,
                        error: null,
                        errorInfo: null,
                      })
                    }
                  >
                    Try Again
                  </button>
                </div>
              </div>

              {/* Development mode error details */}
              {process.env.NODE_ENV === "development" && this.state.error && (
                <div className="card mt-3">
                  <div className="card-header">
                    <h6>Error Details (Development Mode)</h6>
                  </div>
                  <div className="card-body">
                    <pre className="text-danger" style={{ fontSize: "0.8rem" }}>
                      {this.state.error && this.state.error.toString()}
                    </pre>
                    <pre className="text-muted" style={{ fontSize: "0.7rem" }}>
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
