import { Suspense } from 'react';
import { Fallback } from '@/components/fallback/fallback.tsx';
import { Route, Routes } from 'react-router-dom';
import { MAIN_ROUTES } from '@/shared/route/routes.tsx';
import { MainMenu } from '@/layout/main-menu.tsx';
import { AddStaffModalLazy } from '@/components/modals/add-staff/add-staff-modal.lazy.tsx';
import { AddCompaniesModalLazy } from '@/components/modals/add-companies/add-companies-modal.lazy.tsx';
import { EditCompainesLazy } from '@/components/modals/edit-compaines/edit-compaines.lazy.tsx';
import { EditStaffLazy } from '@/components/modals/edit-staff/edit-staff.lazy.tsx';

export const MainStack = () => {
  return (
    <>
      <MainMenu />

      <Suspense fallback={<Fallback />}>
        <Routes>
          {MAIN_ROUTES.map(({ component, path }) => (
            <Route key={path} element={component} path={path} />
          ))}
        </Routes>
        <AddStaffModalLazy />
        <AddCompaniesModalLazy />
        <EditCompainesLazy />
        <EditStaffLazy />
      </Suspense>
    </>
  );
};
