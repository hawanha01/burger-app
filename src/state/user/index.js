import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};
const LoginSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = {};
    },
  },
});

export default LoginSlice;
