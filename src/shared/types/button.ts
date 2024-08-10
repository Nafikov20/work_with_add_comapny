import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export type ButtonView = 'danger' | 'primary' | 'default' | 'success';

export type ButtonSize = 'xs' | 's' | 'm';

export interface ButtonProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  loading?: boolean;
  size?: ButtonSize;
  view?: ButtonView;
}

export interface CustomButtonProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLDivElement>> {
  iconClassName?: string;
  loading?: boolean;
  size?: ButtonSize;
  view?: ButtonView;
}
