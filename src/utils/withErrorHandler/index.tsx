import { ThrowErrorType } from './types';
import ErrorComponent from './ErrorComponent';
import React from 'react';

/**
 *
 * @param WrappedComponent
 * @param shouldRenderErrorHook optional Hook function to determin error should be show or not (defaultValue is true)
 * @interface __IWithErrorHandlerProps__ import and use to component props type
 * @example withErrorHandler<IComponentProps>(MyComponent, (props) => {
 * return useSelector(state=> state.data.length === 0);
 * })
 * @returns Component with error handler
 */

function withErrorHandler<T>(
  WrappedComponent: (props: T) => React.JSX.Element,
  shouldRenderErrorHook?: (error: Error | null, props: any) => boolean
): React.ComponentType<Omit<T, 'throwError'>> {
  return React.memo((props: any) => {
    const [error, setError] = React.useState<Error | null>(null);
    const [tryResolver, setTryResolver] = React.useState<(() => void) | undefined>(undefined);
    const _shouldRenderError = shouldRenderErrorHook ? shouldRenderErrorHook(error, props) : true;

    const throwError: ThrowErrorType = React.useCallback((exception = new Error(), resolver) => {
      setError(exception);
      setTryResolver(() => resolver);
    }, []);

    const tryToSolve = React.useCallback(() => {
      setError(null);
      if (tryResolver) tryResolver();
    }, [tryResolver]);

    return error && _shouldRenderError ? (
      <ErrorComponent error={error} resetErrorBoundary={tryToSolve} />
    ) : (
      <WrappedComponent {...props} throwError={throwError} />
    );
  });
}

export default withErrorHandler;
