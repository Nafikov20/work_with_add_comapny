import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

interface Company {
  id: string;
  companyName: string;
  companyAddress: string;
}

interface CompaniesState {
  companies: Company[];
}

const initialState: CompaniesState = {
  companies: JSON.parse(localStorage.getItem('companies') || '[]')
};

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    addCompany: (state, action: PayloadAction<{ companyName: string; companyAddress: string }>) => {
      const newCompany = { id: uuidv4(), ...action.payload };
      state.companies.push(newCompany);
      localStorage.setItem('companies', JSON.stringify(state.companies));
    },
    editCompany: (
      state,
      action: PayloadAction<{ id: string; companyName: string; companyAddress: string }>
    ) => {
      const index = state.companies.findIndex((company) => company.id === action.payload.id);
      if (index !== -1) {
        state.companies[index] = action.payload;
        localStorage.setItem('companies', JSON.stringify(state.companies));
      }
    },
    deleteCompany: (state, action: PayloadAction<string>) => {
      state.companies = state.companies.filter((company) => company.id !== action.payload);
      localStorage.setItem('companies', JSON.stringify(state.companies));
    }
  }
});

export const { addCompany, editCompany, deleteCompany } = companiesSlice.actions;
export default companiesSlice.reducer;
