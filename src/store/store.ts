import { configureStore } from '@reduxjs/toolkit';
import infoStepReducer from './infoStepSlice';
import planStepReducer from './planStepSlice';

export const store = configureStore({
  reducer: {
    info: infoStepReducer,
    plans: planStepReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
