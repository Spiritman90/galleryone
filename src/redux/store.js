import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import cartReducer, { getTotals } from "./cart/cartSlice";
import productReducer from "./productSlice";
import walletReducer from "./wallet/walletSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    products: productReducer,
    wallet: walletReducer,
  },
});

store.dispatch(getTotals());
