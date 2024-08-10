import { useDispatch } from 'react-redux';
import { showModal } from '@/shared/store/modals-slice.ts';
import { useStylesPages } from '@/shared/static/tss-styles/pages-styles/pages-styles.ts';
import { Icon } from '@/components/ui/custom-icon.tsx';
import { CustomButton } from '@/components/ui/custom-button.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import { StaffList } from '@/components/staff-list/staff-list.tsx'; // Импортируйте компонент StaffList

export const Staff = () => {
  const { id: companyId } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { classes } = useStylesPages();

  const handleAddStaffModal = () => {
    dispatch(showModal({ modalName: 'AddStaffModal', props: companyId }));
  };

  return (
    <div className={classes.container}>
      <div className={classes.headerPage}>
        <h1>Сотрудники</h1>
        <CustomButton view="primary" onClick={() => handleAddStaffModal()}>
          <Icon name="plus" />
        </CustomButton>
      </div>
      <div className={classes.comeback}>
        <CustomButton view="success" onClick={() => navigate('/companies')}>
          Назад
        </CustomButton>
      </div>
      <StaffList companyId={companyId as string} />
    </div>
  );
};
