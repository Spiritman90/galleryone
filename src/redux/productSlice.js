import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: null,
  searchedProducts: null,
};

const productSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {
    fetchAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },

    searchResult: (state, action) => {
      state.searchedProducts = action.payload;
    },
  },
});

export const { fetchAllProducts, searchResult } = productSlice.actions;

export default productSlice.reducer;
