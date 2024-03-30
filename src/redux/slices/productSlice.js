import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  like: [],
};

const productSlice = createSlice({
  name: "produc",
  initialState,
  reducers: {
    getPoduct: (state, action) => {
      state.product = action.payload;
    },
    Favorite: (state, action) => {
      state.like = state.product.filter((el) => +el.id === +action.payload);
      console.log(state.product);
    },
  },
});
export const { getPoduct, Favorite } = productSlice.actions;
export default productSlice.reducer;
