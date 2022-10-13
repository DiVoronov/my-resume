import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { languageReducer } from './slices/languageSlice';
import { avatarApi } from "./avatar.api/avatar.api";

export const store = configureStore({
  reducer: {
    language: languageReducer,
    [avatarApi.reducerPath]: avatarApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(avatarApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
