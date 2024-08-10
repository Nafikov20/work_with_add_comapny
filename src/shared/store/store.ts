import { combineReducers, configureStore } from '@reduxjs/toolkit';

import modalReducer from './modals-slice';
import staffReducer from './staff-slice';
import companiesReducer from './companies-slice';

const rootReducer = combineReducers({
  modals: modalReducer,
  staff: staffReducer,
  companies: companiesReducer
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
