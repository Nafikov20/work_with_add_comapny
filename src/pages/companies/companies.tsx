import { useDispatch } from 'react-redux';
import { showModal } from '@/shared/store/modals-slice.ts';
import { useStylesPages } from '@/shared/static/tss-styles/pages-styles/pages-styles.ts';
import { Icon } from '@/components/ui/custom-icon.tsx';
import { CustomButton } from '@/components/ui/custom-button.tsx';
import { CompaniesList } from '@/components/companies-list/companies-list.tsx';

export const Companies = () => {
  const dispatch = useDispatch();
  const { classes } = useStylesPages();

  const handleOpenAddCompinesModal = () => {
    dispatch(showModal({ modalName: 'AddCompaniesModal' }));
  };
  return (
    <div className={classes.container}>
      <div className={classes.headerPage}>
        <h1>Компании</h1>
        <CustomButton view="primary" onClick={() => handleOpenAddCompinesModal()}>
          <Icon name="plus" />
        </CustomButton>
      </div>
      <CompaniesList />
    </div>
  );
};
