/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Steps } from '~/types';

interface StepsState {
  activeStep: Steps;
}

const initialState: StepsState = {
  activeStep: Steps.INFO,
};

export const stepsSlice = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    changeStep: (state, action: PayloadAction<Steps>) => {
      state.activeStep = action.payload;
    },
  },
});

export const { changeStep } = stepsSlice.actions;

export default stepsSlice.reducer;
