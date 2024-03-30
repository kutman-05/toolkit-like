import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cash: 0,
};
const counterClice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.cash += action.payload;
    },
    decrement: (state) => {
      state.cash -= 5;
    },
  },
});
export const { increment, decrement } = counterClice.actions;
export default counterClice.reducer;
