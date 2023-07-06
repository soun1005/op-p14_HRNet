import { configureStore } from '@reduxjs/toolkit';
import dataSlice from '../slices/dataSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

// combine reducers
const reducer = combineReducers({
  data: dataSlice,
});

const persistedReducer = persistReducer<any, any>(persistConfig, reducer);

export const store = configureStore({
  reducer: {
    data: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
// AppDispatch and RootState typings are defined for the dispatch() and getState() of our store instance.
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
