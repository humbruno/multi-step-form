import { configureStore } from '@reduxjs/toolkit';
import infoStepReducer from './infoStepSlice';
import planStepReducer from './planStepSlice';
import stepsReducer from './stepsSlice';
import addonsReducer from './addonsStepSlice';

export const store = configureStore({
  reducer: {
    info: infoStepReducer,
    plans: planStepReducer,
    steps: stepsReducer,
    addons: addonsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
