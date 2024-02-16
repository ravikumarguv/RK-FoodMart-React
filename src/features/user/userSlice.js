import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updatedName(state, action) {
      state.username = action.payload;
    },
  },
});

export const { updatedName } = userSlice.actions;

export default userSlice.reducer;
