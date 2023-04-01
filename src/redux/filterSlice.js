import { createSlice } from '@reduxjs/toolkit';

export const fiterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
      change(state, action) {
        // return state = action.payload;
        return action.payload;
      }
  },
});

export const { change } = fiterSlice.actions;
