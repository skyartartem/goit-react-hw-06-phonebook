import { createSlice } from '@reduxjs/toolkit';

export const fiterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
      change(state, action) {
        // return state = action.payload;
        return action.payload;
      },
      reset(state, action) {
        // return state = ""
      return '';
    },
  },
});

export const { change, reset } = fiterSlice.actions;
