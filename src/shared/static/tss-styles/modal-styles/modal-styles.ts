import { makeStyles } from 'tss-react/mui';

export const useStylesModal = makeStyles()({
  modalWrap: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: '#ffffff',
    border: '1px solid #777',
    padding: '1rem'
  },
  headerWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  formWrap: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginTop: '1.5rem'
  },
  addBtn: {
    color: '#ffffff'
  }
});
