import { configureStore } from '@reduxjs/toolkit';
import infoStepReducer from './infoStepSlice';

export const store = configureStore({
  reducer: {
    steps: infoStepReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
