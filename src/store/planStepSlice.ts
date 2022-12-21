/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import PriceModel from '~/constants/priceModel';
import { Plan } from '~/constants/planCards';

export interface PlanStepState {
  priceModel: PriceModel;
  plan: Plan | undefined;
}

const initialState: PlanStepState = {
  priceModel: PriceModel.MONTHLY,
  plan: undefined,
};

export const planStepSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {
    changePricing: (state, action: PayloadAction<PriceModel>) => {
      state.priceModel = action.payload;
    },
    selectPlan: (state, action: PayloadAction<Plan>) => {
      state.plan = action.payload;
    },
  },
});

export const { changePricing, selectPlan } = planStepSlice.actions;

export default planStepSlice.reducer;
