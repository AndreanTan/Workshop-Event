import cartSlice from "../feature/carts";
import usersSlice from "../feature/users";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    user: usersSlice,
    cart: cartSlice,
  },
});
