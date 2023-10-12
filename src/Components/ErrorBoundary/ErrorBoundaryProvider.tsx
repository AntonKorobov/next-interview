import { Component, ReactNode, ErrorInfo } from 'react';

interface IErrorBoundaryProps {
  children: ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundaryProvider extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  ComponentDidCatch(Error: Error, info: ErrorInfo) {
    console.log(Error, info);
  }

  render() {
    return this.state.hasError ? <div>Something went wrong!</div> : <>{this.props.children}</>;
  }
}
