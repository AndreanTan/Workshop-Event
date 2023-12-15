import cartSlice from "../feature/carts";
import usersSlice from "../feature/users";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    user: usersSlice,
    cart: cartSlice,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});
