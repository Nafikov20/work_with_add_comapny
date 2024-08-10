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
import { addStaff } from '@/shared/store/staff-slice.ts';

export const AddStaffModal = () => {
  const dispatch = useDispatch();
  const companyId = useSelector((state: RootState) => state.modals.modalProps);
  const isOpen = useSelector((state: RootState) => state.modals.isOpen.AddStaffModal);
  const { classes } = useStylesModal();

  const formik = useFormik({
    initialValues: {
      name: ''
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(addStaff({ companyId: companyId as string, name: values.name }));
      resetForm();
      dispatch(hideModal('AddStaffModal'));
    }
  });

  const handleClose = () => {
    dispatch(hideModal('AddStaffModal'));
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Modal onClose={handleClose} open={isOpen}>
      <Box className={classes.modalWrap}>
        <div className={classes.headerWrap}>
          <h1 className={classes.title}>Добавить сотрудника</h1>
          <CustomButton view="default" onClick={handleClose}>
            <Icon name="close" />
          </CustomButton>
        </div>
        <form onSubmit={formik.handleSubmit} className={classes.formWrap}>
          <TextField
            id="name"
            name="name"
            label="ФИО"
            variant="outlined"
            value={formik.values.name}
            onChange={formik.handleChange}
            fullWidth
          />
          <CustomButtonSubmit type="submit" className={classes.addBtn} view="primary">
            Добавить сотрудника
          </CustomButtonSubmit>
        </form>
      </Box>
    </Modal>
  );
};
