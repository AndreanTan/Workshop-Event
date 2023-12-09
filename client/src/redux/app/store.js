import usersSlice from "../feature/users";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    user: usersSlice,
  },
});
