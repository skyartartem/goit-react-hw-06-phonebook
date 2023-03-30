import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice'
import {fiterSlice} from './filterSlice'

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: fiterSlice.reducer,
  },
});
