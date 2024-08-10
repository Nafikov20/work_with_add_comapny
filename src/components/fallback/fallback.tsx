import { Icon } from '@/components/ui/custom-icon.tsx';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: '2.5rem', // Это размер 10 в Tailwind
    height: '2.5rem',
    animation: 'spin 1s linear infinite'
  }
});

export const Fallback = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <Icon className={classes.icon} name="spinner" />
    </div>
  );
};
