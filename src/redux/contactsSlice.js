import { createSlice } from '@reduxjs/toolkit';

 export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
      // return [...state, action.payload];
    },
    remove(state, action) {
      state.pop();
    },
  },
});

export const { add, remove } = contactsSlice.actions;
