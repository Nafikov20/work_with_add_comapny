import { TOP_MENU } from '@/shared/route/routes.tsx';
import { MainMenuNav } from '@/layout/main-menu-nav.tsx';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
  menuWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '2.5rem',
    width: '100%',
    gap: '4.5rem',
    paddingTop: '2rem',
    paddingBottom: '2rem',
    borderBottom: '2px solid #005ff5'
  }
});

export const MainMenu = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.menuWrap}>
      {TOP_MENU.map((i) => (
        <MainMenuNav key={i.path} {...i} />
      ))}
    </div>
  );
};
