import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Icon } from '@/components/ui/custom-icon.tsx';
import { CustomButton } from '@/components/ui/custom-button.tsx';
import { ConfirmModal } from '@/components/modals/confirm-modal/confirm-modal.tsx';
import { RootState } from '@/shared/store/store.ts';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCompany } from '@/shared/store/companies-slice.ts';
import { showModal } from '@/shared/store/modals-slice.ts';
import { useNavigate } from 'react-router-dom';

const tableHead = [
  {
    name: 'Наименование'
  },
  {
    name: 'Адрес'
  },
  {
    name: 'Работа с данными'
  }
];
export const CompaniesList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const companiesArr = useSelector((state: RootState) => state.companies.companies);

  const handleViewStaff = (id: string) => {
    navigate(`/companies/${id}/staff`);
  };

  const handleOpenEditModal = (id: string) => {
    dispatch(showModal({ modalName: 'EditCompanyModal', props: id }));
  };

  const handleDeleteCompany = (id: string) => {
    dispatch(deleteCompany(id));
  };

  return (
    <Table
      sx={{
        mt: 2
      }}>
      <TableHead>
        <TableRow>
          {tableHead.map((row, idx) => (
            <TableCell key={idx}>{row.name}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {companiesArr.map(({ id, companyName, companyAddress }) => (
          <TableRow key={id}>
            <TableCell>{companyName}</TableCell>
            <TableCell>{companyAddress}</TableCell>
            <TableCell
              sx={{
                display: 'flex',
                gap: 1
              }}>
              <CustomButton view="default" onClick={() => handleViewStaff(id)}>
                <Icon name="eye" />
              </CustomButton>
              <CustomButton view="default" onClick={() => handleOpenEditModal(id)}>
                <Icon name="edit" />
              </CustomButton>
              <ConfirmModal title="Удалить компанию?" onConfirm={() => handleDeleteCompany(id)}>
                <CustomButton view="default">
                  <Icon name="delete" />
                </CustomButton>
              </ConfirmModal>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
