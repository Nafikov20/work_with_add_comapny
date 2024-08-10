import { lazy } from 'react';

export const EditCompainesLazy = lazy(() =>
  import('./edit-compaines').then((res) => ({ default: res.EditCompaines }))
);
