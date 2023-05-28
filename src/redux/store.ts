import {
  Action,
  combineReducers,
  configureStore,
  PreloadedState,
  ThunkAction,
} from '@reduxjs/toolkit';

import exhaustersReducer from './exhaustersSlice';

const rootReducer = combineReducers({
  exhausters: exhaustersReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    devTools: process.env.NODE_ENV !== 'production',
  });
};

export const store = setupStore({});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
