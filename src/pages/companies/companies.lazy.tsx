import { lazy } from 'react';

export const CompaniesLazy = lazy(() =>
  import('./companies.tsx').then((res) => ({ default: res.Companies }))
);
