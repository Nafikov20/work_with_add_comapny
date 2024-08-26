import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

interface Staff {
  id: string;
  companyId: string;
  name: string;
}

interface StaffState {
  staff: Staff[];
}

const initialState: StaffState = {
  staff: JSON.parse(localStorage.getItem('staff') || '[]')
};

const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {
    addStaff: (state, action: PayloadAction<{ companyId: string; name: string }>) => {
      const newStaff = { id: uuidv4(), ...action.payload };
      state.staff.push(newStaff);
      localStorage.setItem('staff', JSON.stringify(state.staff));
    },
    editStaff: (state, action: PayloadAction<{ id: string; companyId: string; name: string }>) => {
      const index = state.staff.findIndex((staff) => staff.id === action.payload.id);
      if (index !== -1) {
        state.staff[index] = action.payload;
        localStorage.setItem('staff', JSON.stringify(state.staff));
      }
    },
    deleteStaff: (state, action: PayloadAction<string>) => {
      state.staff = state.staff.filter((staff) => staff.id !== action.payload);
      localStorage.setItem('staff', JSON.stringify(state.staff));
    }
    12312312
  }
});

export const { addStaff, editStaff, deleteStaff } = staffSlice.actions;
export default staffSlice.reducer;
