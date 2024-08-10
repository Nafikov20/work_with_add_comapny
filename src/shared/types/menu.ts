import { ReactNode } from 'react';

export interface RoutsProps {
  component: ReactNode;
  path: string;
  icon?: string;
  roleAccess?: string[];
  title?: string;
}
