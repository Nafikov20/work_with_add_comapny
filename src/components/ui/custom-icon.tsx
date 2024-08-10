import { forwardRef, SVGProps } from 'react';
import { makeStyles } from 'tss-react/mui';
import { ICONS } from '@/shared/constants/icons.tsx';

interface Props extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

const useStyles = makeStyles()({
  root: {
    fill: 'currentColor'
  }
});

export const Icon = forwardRef<SVGSVGElement, Props>(
  ({ name, className, size, width = 16, height = 16, ...props }, parentRef) => {
    const { data, viewBox } = ICONS[name];
    const { classes, cx } = useStyles();

    return (
      <svg
        viewBox={viewBox || '0 0 512 512'}
        {...props}
        ref={parentRef}
        className={cx(classes.root, className)}
        height={size || height}
        width={size || width}>
        {data}
      </svg>
    );
  }
);

Icon.displayName = 'Icon';

export type IconName =
  | 'spinner'
  | 'plus'
  | 'companies'
  | 'staff'
  | 'close'
  | 'eye'
  | 'edit'
  | 'delete';
