import { createSlice } from "@reduxjs/toolkit";
import { getListItem } from "../../../services/cartService";

const initialState = {
  result: null,
  error: null,
  loading: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getListItem.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getListItem.fulfilled, (state, action) => {
      state.loading = false;
      state.result = action.payload;
    });
    builder.addCase(getListItem.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const { increment, decrement, incrementByAmount } = cartSlice.actions;
export default cartSlice.reducer;
