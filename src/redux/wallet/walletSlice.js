import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import walletService from "./walletService";

const initialState = {
  walletBalance: "0, 000",
  isError: false,
  isSuccess: false,
  isLoading: false,
  error: null,
  message: "",
};

export const fundWallet = createAsyncThunk(
  "wallet/fundWallet",
  async (amount, thunkAPI) => {
    try {
      return await walletService.fundWallet(amount);
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

const walletSlice = createSlice({
  name: "wallet",
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
      .addCase(fundWallet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fundWallet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.walletBalance = action.payload;
      })
      .addCase(fundWallet.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        // state.walletBalance = "0";
      });
  },
});

export const { reset } = walletSlice.actions;
export default walletSlice.reducer;
