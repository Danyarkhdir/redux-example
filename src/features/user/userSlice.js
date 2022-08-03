import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    username: "Default",
    password: "Default",
  },
};

export const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    deleteUser: (state) => {
      state.user = {
        username: "Default",
        password: "Default",
      };
    },
    updatePassword: (state, action) => {
      state.user.password = action.payload;
    },
  },
});

export const { setUser, deleteUser, updatePassword } = userSlice.actions;

export default userSlice.reducer;
