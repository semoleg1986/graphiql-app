import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import graphiqlReducer from './slices/graphiqlSlice';
import languageReducer from './slices/languageSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    graphiql: graphiqlReducer,
    language: languageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
