import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    username: "Default user ",
    password: "Default password",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    deleteUser: (state) => {
      state.user = {
        username: "Default user ",
        password: "Default password",
      };
    },
    updatePassword: (state, action) => {
      state.user.password = action.payload;
    },
  },
});

export const { setUser, deleteUser, updatePassword } = userSlice.actions;

export default userSlice.reducer;
