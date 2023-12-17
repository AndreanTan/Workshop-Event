import cartSlice from "../feature/carts";
import orderSlice from "../feature/order";
import usersSlice from "../feature/users";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    user: usersSlice,
    cart: cartSlice,
    order: orderSlice,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
