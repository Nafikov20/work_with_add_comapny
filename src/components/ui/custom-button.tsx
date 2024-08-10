import { makeStyles } from 'tss-react/mui';
import { ButtonProps } from '@/shared/types/button.ts';
import { Icon } from '@/components/ui/custom-icon.tsx';

const useStyles = makeStyles<{ size: string; view: string; disabled: boolean; loading: boolean }>()(
  (theme, { size, view, disabled, loading }) => ({
    button: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '0.5rem',
      padding: '0.375rem',
      color: 'white',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'opacity 0.3s',
      cursor: 'pointer',
      '&:hover': {
        opacity: 0.6
      },
      opacity: disabled ? 0.7 : 1,
      pointerEvents: disabled || loading ? 'none' : 'auto',
      userSelect: disabled || loading ? 'none' : 'auto',
      ...(size === 'm' && {
        fontSize: '1rem',
        paddingLeft: '1.75rem',
        paddingRight: '1.75rem',
        minHeight: '56px'
      }),
      ...(size === 's' && {
        fontSize: '0.875rem',
        paddingLeft: '0.75rem',
        paddingRight: '0.75rem',
        minHeight: '36px',
        minWidth: '36px'
      }),
      ...(size === 'xs' && {
        fontSize: '0.75rem',
        paddingLeft: '0.375rem',
        paddingRight: '0.375rem',
        minHeight: '18px'
      }),
      ...(view === 'default' && {
        border: '1px solid',
        borderColor: '#c6cfeeb3',
        color: '#c6cfeeb3',
        '&:hover': {
          opacity: 1,
          borderColor: theme.palette.primary.main,
          color: theme.palette.primary.main
        }
      }),
      ...(view === 'primary' && {
        background: '#1976d2'
      }),
      ...(view === 'success' && {
        background: 'rgba(89,213,91,0.78)'
      }),
      ...(view === 'danger' && {
        background: '#cb4848'
      })
    },
    icon: {
      height: '1rem',
      width: '1rem',
      animation: 'spin 1s linear infinite',
      marginRight: loading ? '0.5rem' : 0
    }
  })
);

export const CustomButton = ({
  children,
  className,
  view = 'primary',
  size = 's',
  disabled = false,
  loading = false,
  ...props
}: ButtonProps) => {
  const { classes, cx } = useStyles({ size, view, disabled, loading });

  return (
    <button className={cx(classes.button, className)} disabled={disabled} {...props}>
      {loading ? (
        <>
          <Icon className={classes.icon} name="spinner" />
          {children}
        </>
      ) : (
        children
      )}
    </button>
  );
};
