import React from 'react';
import {ErrorBoundary} from 'react-error-boundary';

const ErrorFallback = ({error}: any) => {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error?.message}</pre>
        </div>
    );
};

export const AppErrorBoundary = ({children}: any) => <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>;
