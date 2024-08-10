import { lazy } from 'react';

export const ErrorLazy = lazy(() => import('./error.tsx').then((res) => ({ default: res.Error })));
