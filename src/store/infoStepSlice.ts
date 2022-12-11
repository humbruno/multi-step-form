/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface InfoStepState {
  name: string | undefined;
  email: string | undefined;
  phone: number | string | undefined;
}

const initialState: InfoStepState = {
  name: undefined,
  email: undefined,
  phone: undefined,
};

export const infoStepSlice = createSlice({
  name: 'infoStep',
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
export const { addName, addEmail, addPhone } = infoStepSlice.actions;

export default infoStepSlice.reducer;
