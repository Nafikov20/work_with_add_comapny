import { lazy } from 'react';

export const EditStaffLazy = lazy(() =>
  import('./edit-staff.tsx').then((res) => ({ default: res.EditStaff }))
);
