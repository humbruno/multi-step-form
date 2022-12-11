import { configureStore } from '@reduxjs/toolkit';
import infoStepReducer from './infoStepSlice';
import planStepReducer from './planStepSlice';

export const store = configureStore({
  reducer: {
    info: infoStepReducer,
    plans: planStepReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
