import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from "../../apis";

export const getCurrent = createAsyncThunk(
  "user/current",
  async (data, { rejectWithValue }) => {
    try {
      const response = await apis.current();

      if (!response.success) {
        return rejectWithValue("Failed to fetch categories");
      }

      return response.response;
    } catch (error) {
      return error;
    }
  }
);
