import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "" || null,
  toggle: false,
  togle: false,
  messageSent: false,
};

const reduxState = createSlice({
  name: "second",
  initialState,
  reducers: {
    check: (state: any, { payload }) => {
      state.user = payload;
    },
    changeToggle: (state: any, { payload }) => {
      state.toggle = payload;
    },
    messToggle: (state: any, { payload }) => {
      state.togle = payload;
    },
    messageSentHold: (state: any, { payload }) => {
      state.messageSent = payload;
    },
  },
});

export const { check, changeToggle, messToggle, messageSentHold } =
  reduxState.actions;

export default reduxState.reducer;
