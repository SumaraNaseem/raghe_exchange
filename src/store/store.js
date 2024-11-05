import { configureStore } from "@reduxjs/toolkit";
import modalStateSlice from "../redux-slice/modal-state-slice";
import customMiddleware1 from "../middlewares/middleware-1";
import customMiddleware2 from "../middlewares/middleware-2";
import userStateSlice from "../redux-slice/user-state-slice";
import { sportsApi } from "../services/api/sports";
import { liveCasinoApi } from "../services/api/live-casino";
import { providerApi } from "../services/api/provider";

export const store = configureStore({
  reducer: {
    [sportsApi.reducerPath]: sportsApi.reducer,
    [liveCasinoApi.reducerPath]: liveCasinoApi.reducer,
    [providerApi.reducerPath]: providerApi.reducer,

    modalStateSlice: modalStateSlice,
    userStateSlice: userStateSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(sportsApi.middleware)
      .concat(liveCasinoApi.middleware)
      .concat(providerApi.middleware)
      .concat(customMiddleware1)
      .concat(customMiddleware2),
});
