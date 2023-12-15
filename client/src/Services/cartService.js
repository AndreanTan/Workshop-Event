import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getListItem = createAsyncThunk("getListItem", async (body) => {
  const result = await axios.post("http://localhost:4000/api/carts", { ...body });
  return result.data;
});
