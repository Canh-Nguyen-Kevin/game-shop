import { createSlice } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

const initialState = {
  userName: "",
  userEmail: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.email;
    },
    setUserLogOut: (state) => {
      state.userName = "";
      state.userEmail = "";
    },
  },
});

export const { setActiveUser, setUserLogOut } = userSlice.actions;
export const selectUserName = (state: RootState) => state.user.userName;
export const selectUserEmail = (state: RootState) => state.user.userEmail;
export default userSlice.reducer;
