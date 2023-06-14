import { configureStore } from '@reduxjs/toolkit';
import dataSlice from '../slices/dataSlice';

export const store = configureStore({
  reducer: {
    data: dataSlice,
  },
});
// AppDispatch and RootState typings are defined for the dispatch() and getState() of our store instance.
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
