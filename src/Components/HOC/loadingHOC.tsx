import { FC } from 'react';

import { Loading } from './Loading';

export function loadingHOC(WrappedComponent: FC, isLoading: boolean) {
  return function LoadingHOC() {
    return isLoading ? <Loading /> : <WrappedComponent />;
  };
}
