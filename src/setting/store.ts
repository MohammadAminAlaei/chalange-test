import { configureStore } from '@reduxjs/toolkit';
import userPreferences from './slices/userPreferencesSlice';
import toolbar from './slices/toolbarSlice';
import grid from './slices/gridSlice';

const middlewares: any[] = [];

if (import.meta.env.DEV) {
  const { createLogger } = await import('redux-logger');

  const options = {
    collapsed: (_: any, __: any, logEntry: any) => !logEntry?.error,
  };

  const logger = createLogger(options);

  middlewares.push(logger);
}

export const store = configureStore({
  reducer: {
    userPreferences,
    toolbar,
    grid,
  },
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middlewares),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
