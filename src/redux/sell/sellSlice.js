import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import sellService from "./sellService";

const initialState = {
  items: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  error: null,
  message: "",
};

export const itemUpload = createAsyncThunk(
  "sell/itemUpload",
  async (data, thunkAPI) => {
    try {
      return await sellService.itemUpload(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const sellSlice = createSlice({
  name: "sell",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(itemUpload.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(itemUpload.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.items.push(action.payload);
      })
      .addCase(itemUpload.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.items = [];
      });
  },
});

export const { reset } = sellSlice.actions;
export default sellSlice.reducer;
