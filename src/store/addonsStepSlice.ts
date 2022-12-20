/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Addon } from '~/constants/addons';

interface AddonsStepState {
  addons: Addon[];
}

const initialState: AddonsStepState = {
  addons: [],
};

export const addonsStepSlice = createSlice({
  name: 'addons',
  initialState,
  reducers: {
    addAddon: (state, action: PayloadAction<Addon>) => {
      state.addons = state.addons.includes(action.payload)
        ? [...state.addons]
        : [...state.addons, action.payload];
    },
    removeAddon: (state, action: PayloadAction<Addon>) => {
      state.addons = state.addons.filter((item) => item !== action.payload);
    },
  },
});

export const { addAddon, removeAddon } = addonsStepSlice.actions;

export default addonsStepSlice.reducer;
