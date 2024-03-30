import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./slices/countSlices";
import productSlice from "./slices/productSlice";

export default configureStore({
  reducer: {
    counter: countSlice,
    product: productSlice
  },
});
