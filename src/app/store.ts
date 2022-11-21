import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { languageReducer } from "./slices/languageSlice";
import { avatarApi } from "./avatar.api/avatar.api";
import { appearReducer } from "./slices/appearSlice";
import { themeReducer } from "./slices/themeSlice";
import { welcomeReducer } from "./slices/welcomeSlice";
import { menuCloseReducer } from "./slices/menuCloseSlice";

export const store = configureStore({
  reducer: {
    language: languageReducer,
    appear: appearReducer,
    theme: themeReducer,
    welcomePage: welcomeReducer,
    closeMenu: menuCloseReducer,
    [avatarApi.reducerPath]: avatarApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(avatarApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
