import { Fragment } from 'react';
import { RoutsProps } from '@/shared/types/menu.ts';
import { NavLink } from 'react-router-dom';
import { Icon, IconName } from '@/components/ui/custom-icon.tsx';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
  link: {
    flex: 1,
    maxWidth: 'max-content',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#3f3f3f',
    fontSize: '2.5rem'
  },
  activeLink: {
    color: '#005ff5 !important'
  },
  icon: {
    marginRight: '10px',
    width: '2.5rem',
    height: '2.5rem'
  }
});

export const MainMenuNav = ({ path, icon, title }: RoutsProps) => {
  const { classes, cx } = useStyles();
  if (!icon) return;
  return (
    <Fragment key={path}>
      <NavLink
        key={path}
        to={path}
        className={({ isActive }) =>
          isActive ? cx(classes.activeLink, classes.link) : classes.link
        }>
        <Icon className={classes.icon} name={icon as IconName} />
        <div>
          <span>{title}</span>
        </div>
      </NavLink>
    </Fragment>
  );
};
