'use client';

import React from 'react';
import Button from '../ui/Button';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  // Localization props
  errorTitle?: string;
  errorMessage?: string;
  retryButtonText?: string;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.props.onError?.(error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    const {
      errorTitle = 'Something went wrong',
      errorMessage = 'An unexpected error occurred. Please try again or contact support if the problem persists.',
      retryButtonText = 'Try again'
    } = this.props;

    if (this.state.hasError && this.state.error) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return <FallbackComponent error={this.state.error} resetError={this.resetError} />;
      }

      return (
        <div className="flex min-h-[400px] flex-col items-center justify-center p-8 text-center">
          <div className="mx-auto max-w-md">
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              {errorTitle}
            </h2>
            <p className="mb-6 text-muted">
              {errorMessage}
            </p>
            <Button onClick={this.resetError} variant="primary">
              {retryButtonText}
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
export type { ErrorBoundaryProps };
