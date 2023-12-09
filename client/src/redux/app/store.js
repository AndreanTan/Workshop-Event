import usersSlice from "../features/users";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    user: usersSlice,
  },
});
