/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import PriceModel from '~/constants/priceModel';
import { PlanOptions } from '~/constants/planCards';

export interface PlanStepState {
  priceModel: PriceModel.MONTHLY | PriceModel.YEARLY;
  plan: PlanOptions.ARCADE | PlanOptions.ADVANCED | PlanOptions.PRO | undefined;
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
    selectPlan: (state, action: PayloadAction<PlanOptions>) => {
      state.plan = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changePricing, selectPlan } = planStepSlice.actions;

export default planStepSlice.reducer;
