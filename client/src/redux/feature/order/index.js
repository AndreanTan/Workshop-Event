import { createSlice } from "@reduxjs/toolkit";
import { createOrderService } from "../../../services/orderService";

const initialState = {
  result: null,
  loading: false,
  error: null,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createOrderService.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createOrderService.fulfilled, (state, action) => {
      state.loading = false;
      state.result = action.payload;
      state.error = null;
    });
    builder.addCase(createOrderService.rejected, (state, action) => {
      state.loading = false;
      state.result = null;
      state.error = action.error;
    });
  },
});

export default orderSlice.reducer;
