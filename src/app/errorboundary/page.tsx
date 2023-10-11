'use client';

import { ErrorBoundaryProvider } from '@/Components/ErrorBoundary/ErrorBoundaryProvider';
import { ErrorComponent } from '@/Components/ErrorBoundary/ErrorComponent';

//https://medium.com/@bobjunior542/how-to-use-error-boundaries-in-react-js-with-typescript-ee90ec814bf1

export default function ErrorBoundaryPage() {
  return (
    <div>
      <h2>Error Boundary</h2>
      <ErrorBoundaryProvider>
        <ErrorComponent />
      </ErrorBoundaryProvider>
    </div>
  );
}
