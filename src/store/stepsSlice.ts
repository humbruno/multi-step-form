/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface StepsState {
  name: string | undefined;
  email: string | undefined;
  phone: number | string | undefined;
}

const initialState: StepsState = {
  name: undefined,
  email: undefined,
  phone: undefined,
};

export const stepsSlice = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    addName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    addEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    addPhone: (state, action: PayloadAction<string | number>) => {
      state.phone = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addName, addEmail, addPhone } = stepsSlice.actions;

export default stepsSlice.reducer;
