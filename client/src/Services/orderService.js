import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createOrderService = createAsyncThunk(
  "createOrderService",
  async (body) => {
    const result = await axios.post("http://localhost:4000/api/order", {
      ...body,
    });
    return result.data;
  }
);
