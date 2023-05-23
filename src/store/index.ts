import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import graphiqlReducer from './slices/graphiqlSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    graphiql: graphiqlReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
