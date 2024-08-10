import { makeStyles } from 'tss-react/mui';

export const useStylesPages = makeStyles()({
  container: {
    width: '100%',
    height: '100%'
  },
  headerPage: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    marginTop: '3rem'
  },
  comeback: {
    width: '100%',
    display: 'flex',
    justifyContent: 'start',
    marginBottom: '2rem'
  }
});
