import { lazy } from 'react';

export const StaffLazy = lazy(() => import('./staff.tsx').then((res) => ({ default: res.Staff })));
