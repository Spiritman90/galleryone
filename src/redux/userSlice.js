import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "Adewole",
  lastName: "Femi",
  email: "",
  password: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    update: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

// Action creators are generated for each case reducer function
export const { update } = userSlice.actions;
export default userSlice.reducer;
