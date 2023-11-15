import { configureStore } from "@reduxjs/toolkit";

import { authApi } from "../api/auth";
import { HotelDetailApi } from "../api/hotelDetail";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [HotelDetailApi.reducerPath]: HotelDetailApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({})
      .concat(authApi.middleware)
      .concat(HotelDetailApi.middleware),
});
