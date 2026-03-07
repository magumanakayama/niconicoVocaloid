import { use, Suspense } from 'react';
import type { ReactNode } from 'react';
import { ErrorBoundary } from "react-error-boundary";

type FetchComponentProps = {
  promise: Promise<any>;
  Success: (data: any) => ReactNode;
  Loading: () => ReactNode;
  Error: (error: any) => ReactNode;
};

const FetchComponent = ({ promise, Success, Loading, Error }: FetchComponentProps) => {
  const data = use(promise);
  return (
    <ErrorBoundary fallbackRender={Error}>
      <Suspense fallback={Loading()}>
        {Success(data)}
      </Suspense>
    </ErrorBoundary>
  )
};

export default FetchComponent;