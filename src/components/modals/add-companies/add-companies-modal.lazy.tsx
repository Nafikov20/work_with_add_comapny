import { lazy } from 'react';

export const AddCompaniesModalLazy = lazy(() =>
  import('./add-companies-modal.tsx').then((res) => ({ default: res.AddCompaniesModal }))
);
