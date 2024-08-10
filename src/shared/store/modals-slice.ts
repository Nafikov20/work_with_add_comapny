import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  isOpen: Record<string, boolean>;
  modalProps: string | number;
}

const initialState: ModalState = {
  isOpen: {
    AddStaffMadal: false,
    AddCompaniesModal: false,
    EditCompanyModal: false
  },
  modalProps: ''
};
const modalSlice = createSlice({
  initialState,
  name: 'modal',
  reducers: {
    hideModal: (state, action: PayloadAction<string>) => {
      state.isOpen[action.payload] = false;
      state.modalProps = '';
    },
    showModal: (state, action: PayloadAction<{ modalName: string; props?: any }>) => {
      const { modalName, props } = action.payload;
      state.isOpen[modalName] = true;
      state.modalProps = props || {};
    }
  }
});

export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;
