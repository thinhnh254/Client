import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from "../apis";

export const getCategories = createAsyncThunk(
  "app/categories",
  async (data, { rejectWithValue }) => {
    try {
      const response = await apis.getCategories();

      if (!response.success) {
        return rejectWithValue("Failed to fetch categories");
      }

      return response.getAllCategoryStatus;
    } catch (error) {
      return rejectWithValue("Failed to fetch categories");
    }
  }
);
