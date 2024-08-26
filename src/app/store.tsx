import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../features/allProducts/AllProductSlice";

const store = configureStore({
  reducer: {
    product: ProductReducer,
  },
});

export default store;
