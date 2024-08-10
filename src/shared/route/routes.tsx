import { RoutsProps } from '../types/menu.ts';
import { CompaniesLazy } from '@/pages/companies/companies.lazy.tsx';
import { StaffLazy } from '@/pages/staff/staff.lazy.tsx';
import { ErrorLazy } from '@/pages/error/error.lazy.tsx';

export const TOP_MENU: RoutsProps[] = [
  {
    component: <CompaniesLazy />,
    icon: 'companies',
    path: '/companies',
    title: 'Компании'
  },
  {
    component: <StaffLazy />,
    path: '/companies/:id/staff',
    title: 'Сотрудники компании'
  },
  {
    component: <ErrorLazy />,
    path: '*',
    title: 'Страница не найдена'
  }
];

export const MAIN_ROUTES: RoutsProps[] = [...TOP_MENU];
