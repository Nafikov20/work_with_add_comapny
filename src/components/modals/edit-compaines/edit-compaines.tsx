import { Modal, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { CustomButton } from '@/components/ui/custom-button.tsx';
import { Icon } from '@/components/ui/custom-icon.tsx';
import { CustomButtonSubmit } from '@/components/ui/custom-submit-button.tsx';
import { useStylesModal } from '@/shared/static/tss-styles/modal-styles/modal-styles.ts';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/shared/store/store.ts';
import { hideModal } from '@/shared/store/modals-slice.ts';
import { useFormik } from 'formik';
import { editCompany } from '@/shared/store/companies-slice.ts';

export const EditCompaines = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modals.isOpen.EditCompanyModal);
  const companyId = useSelector((state: RootState) => state.modals.modalProps);
  const comnpaiesArr = useSelector((state: RootState) => state.companies.companies);
  const filteredCompany = comnpaiesArr.find((el) => el.id === companyId);

  const { classes } = useStylesModal();

  const formik = useFormik({
    initialValues: {
      companyName: filteredCompany !== undefined ? filteredCompany.companyName : '',
      companyAddress: filteredCompany !== undefined ? filteredCompany.companyAddress : ''
    },
    enableReinitialize: true,
    onSubmit: (values, { resetForm }) => {
      dispatch(
        editCompany({
          id: companyId as string,
          companyName: values.companyName,
          companyAddress: values.companyAddress
        })
      );
      resetForm();
      dispatch(hideModal('EditCompanyModal'));
    }
  });

  const handleClose = () => {
    dispatch(hideModal('EditCompanyModal'));
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Modal onClose={handleClose} open={isOpen}>
      <Box className={classes.modalWrap}>
        <div className={classes.headerWrap}>
          <h1 className={classes.title}>Изменить данные компании</h1>
          <CustomButton view="default" onClick={handleClose}>
            <Icon name="close" />
          </CustomButton>
        </div>
        <form onSubmit={formik.handleSubmit} className={classes.formWrap}>
          <TextField
            id="companyName"
            name="companyName"
            label="Имя компании"
            variant="outlined"
            value={formik.values.companyName}
            onChange={formik.handleChange}
            fullWidth
          />
          <TextField
            id="companyAddress"
            name="companyAddress"
            label="Адрес компании"
            variant="outlined"
            value={formik.values.companyAddress}
            onChange={formik.handleChange}
            fullWidth
          />
          <CustomButtonSubmit type="submit" className={classes.addBtn} view="primary">
            Внести изменения
          </CustomButtonSubmit>
        </form>
      </Box>
    </Modal>
  );
};
