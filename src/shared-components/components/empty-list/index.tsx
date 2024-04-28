import { Suspense, lazy } from 'react';
import { EmptyListProps } from './EmptyList';
import Spinner from 'shared-components/loading/Spinner';

const EmptyList = lazy(() => import('./EmptyList'));

function Lazy_EmptyList(props: EmptyListProps) {
  return (
    <Suspense
      fallback={
        <Spinner spinning>
          <div className="!h-200" />
        </Spinner>
      }
    >
      <EmptyList {...props} />
    </Suspense>
  );
}

export default Lazy_EmptyList;
