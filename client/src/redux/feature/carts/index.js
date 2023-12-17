import { createSlice } from "@reduxjs/toolkit";
import {
  deleteItem,
  getListItem,
  updateQtyItem,
} from "../../../services/cartService";

const initialState = {
  result: null,
  error: null,
  loading: false,
  message: null,
  status: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getListItem.pending, (state, action) => {
      state.loading = true;
      state.status = "getlist";
    });
    builder.addCase(getListItem.fulfilled, (state, action) => {
      state.loading = false;
      state.result = action.payload;
      state.status = "getlist";
    });
    builder.addCase(getListItem.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.status = "getlist";
    });
    builder.addCase(deleteItem.pending, (state, action) => {
      state.loading = true;
      state.status = "deleteItem";
    });
    builder.addCase(deleteItem.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.data.message;
      state.status = "deleteItem";
    });
    builder.addCase(deleteItem.rejected, (state, action) => {
      state.loading = false;
      state.result = action.error;
      state.status = "deleteItem";
    });
    builder.addCase(updateQtyItem.pending, (state, action) => {
      state.status = "updateItem";
      state.loading = true;
    });
    builder.addCase(updateQtyItem.fulfilled, (state, action) => {
      state.status = "updateItem";
      state.loading = false;
      state.message = action.payload;
    });
    builder.addCase(updateQtyItem.rejected, (state, action) => {
      state.loading = false;
      state.status = "updateItem";
      state.error = action.error;
    });
  },
});

export default cartSlice.reducer;
