import { lazy } from 'react';

export const AddStaffModalLazy = lazy(() =>
  import('./add-staff-modal.tsx').then((res) => ({ default: res.AddStaffModal }))
);
