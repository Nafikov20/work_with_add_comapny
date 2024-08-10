import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { CustomButton } from '@/components/ui/custom-button.tsx';
import { Icon } from '@/components/ui/custom-icon.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/shared/store/store.ts';
import { showModal } from '@/shared/store/modals-slice.ts';
import { ConfirmModal } from '@/components/modals/confirm-modal/confirm-modal.tsx';
import { deleteStaff } from '@/shared/store/staff-slice.ts';

const tableHead = [{ name: 'ФИО' }, { name: 'Действия' }];

export const StaffList = ({ companyId }: { companyId: string }) => {
  const dispatch = useDispatch();

  const staff = useSelector((state: RootState) => state.staff.staff);
  const filterStaffByCompany = staff.filter((s) => s.companyId === companyId);

  const handleOpenEditModal = (id: string) => {
    dispatch(showModal({ modalName: 'EditStaffModal', props: id }));
  };

  const handleDeleteStaff = (id: string) => {
    dispatch(deleteStaff(id));
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          {tableHead.map((row, idx) => (
            <TableCell key={idx}>{row.name}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {filterStaffByCompany.map(({ id, name }) => (
          <TableRow key={id}>
            <TableCell>{name}</TableCell>
            <TableCell
              sx={{
                display: 'flex',
                gap: 1
              }}>
              <CustomButton onClick={() => handleOpenEditModal(id)} view="default">
                <Icon name="edit" />
              </CustomButton>
              <ConfirmModal title="Удалить сотрудника?" onConfirm={() => handleDeleteStaff(id)}>
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
