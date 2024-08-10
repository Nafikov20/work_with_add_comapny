import { Modal, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/shared/store/store';
import { hideModal } from '@/shared/store/modals-slice.ts';
import { useStylesModal } from '@/shared/static/tss-styles/modal-styles/modal-styles.ts';
import Box from '@mui/material/Box';
import { CustomButton } from '@/components/ui/custom-button.tsx';
import { Icon } from '@/components/ui/custom-icon.tsx';
import { CustomButtonSubmit } from '@/components/ui/custom-submit-button.tsx';
import { useFormik } from 'formik';
import { addCompany } from '@/shared/store/companies-slice.ts';

export const AddCompaniesModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modals.isOpen.AddCompaniesModal);

  const { classes } = useStylesModal();

  const formik = useFormik({
    initialValues: {
      companyName: '',
      companyAddress: ''
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(addCompany(values as any));
      resetForm();
      dispatch(hideModal('AddCompaniesModal'));
    }
  });

  const handleClose = () => {
    dispatch(hideModal('AddCompaniesModal'));
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Modal onClose={handleClose} open={isOpen}>
      <Box className={classes.modalWrap}>
        <div className={classes.headerWrap}>
          <h1 className={classes.title}>Добавить компанию</h1>
          <CustomButton view="default" onClick={() => handleClose()}>
            <Icon name="close" />
          </CustomButton>
        </div>
        <form onSubmit={formik.handleSubmit} className={classes.formWrap}>
          <TextField
            id="companyName"
            name="companyName"
            label="Имя компании"
            variant="outlined"
            onChange={formik.handleChange}
            fullWidth
          />
          <TextField
            id="companyAddress"
            name="companyAddress"
            label="Адрес компании"
            variant="outlined"
            onChange={formik.handleChange}
            fullWidth
          />
          <CustomButtonSubmit className={classes.addBtn} view="primary">
            Добвать компанию
          </CustomButtonSubmit>
        </form>
      </Box>
    </Modal>
  );
};
