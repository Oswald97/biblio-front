import { adherentApi } from "@/features/adherents/services";
import { authApi } from "@/features/authentication/services";
import { configureStore } from "@reduxjs/toolkit";
import adherentSlice from "./slices/adherent.slice";

const reducer = {
  [adherentSlice.name]: adherentSlice.reducer,
  [adherentApi.reducerPath]: adherentApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adherentApi.middleware, authApi.middleware),
});
