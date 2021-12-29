import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export const formSlice = createSlice({
  name: "showForm",
  initialState: false,
  reducers: {
    showForm: (state) => {
      return (state = true);
    },
    hideForm: (state) => {
      return (state = false);
    },
  },
});

export const { showForm, hideForm } = formSlice.actions;
export const formState = (state: RootState) => state.form;
export default formSlice.reducer;
