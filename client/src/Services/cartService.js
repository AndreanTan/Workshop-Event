import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getListItem = createAsyncThunk("getListItem", async (body) => {
  const result = await axios.post("http://localhost:4000/api/carts", {
    ...body,
  });
  return result.data;
});

export const deleteItem = createAsyncThunk("deleteItem", async (body) => {
  const result = await axios.delete("http://localhost:4000/api/cart", {
    data: body,
  });
  return result;
});

export const updateQtyItem = createAsyncThunk("updateQtyItem", async (body) => {
  const result = await axios.put("http://localhost:4000/api/cart", {
    ...body,
  });
  return result.data;
});

export const insertItemService = createAsyncThunk(
  "insertItemService",
  async (body) => {
    const result = await axios.post("http://localhost:4000/api/cart", {
      ...body,
    });
    return result.data;
  }
);
