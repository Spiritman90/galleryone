import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import walletService from "./walletService";

//Get balance from local storage
// const currentBalance = JSON.parse(localStorage.getItem("currentBalance"));

const initialState = {
  walletBalance: "",
  currentBalance: 0.0,
  isError: false,
  isSuccess: false,
  isLoading: false,
  error: null,
  message: "",
};

//Fund wallet
export const fundWallet = createAsyncThunk(
  "wallet/fundWallet",
  async (data, thunkAPI) => {
    try {
      // const token = localStorage.getItem("token");
      return await walletService.fundWallet(data);
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
//Confirm payment
export const confirmPayment = createAsyncThunk(
  "wallet/confirm-payment",
  async (reference, thunkAPI) => {
    try {
      // const token = localStorage.getItem("user");
      return await walletService.confirmPayment(reference);
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

//Get Balance
export const getBalance = createAsyncThunk(
  "wallet/getBalance",
  async (_, thunkAPI) => {
    try {
      // const token = localStorage.getItem("user");
      return await walletService.getBalance();
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

//Make payment
export const makePayment = createAsyncThunk(
  "wallet/makePayment",
  async (data, thunkAPI) => {
    try {
      // const token = localStorage.getItem("user");
      return await walletService.makePayment(data);
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
        state.walletBalance = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(fundWallet.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.walletBalance = action.payload;
      })
      .addCase(confirmPayment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(confirmPayment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.walletBalance = action.payload;
      })
      .addCase(confirmPayment.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.walletBalance = action.payload;
      })
      .addCase(getBalance.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBalance.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.currentBalance = action.payload;
      })
      .addCase(getBalance.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.currentBalance = action.payload;
      })
      .addCase(makePayment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(makePayment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.walletBalance = action.payload;
      })
      .addCase(makePayment.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.walletBalance = action.payload;
      });
  },
});

export const { reset } = walletSlice.actions;
export default walletSlice.reducer;
