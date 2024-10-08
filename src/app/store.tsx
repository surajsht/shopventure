import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../features/allProducts/AllProductSlice";
import CartReducer from "../features/cart/CartSlice";
import PaginationReducer from "../features/pagination/PaginationSlice";

const store = configureStore({
  reducer: {
    product: ProductReducer,
    cart: CartReducer,
    pagination: PaginationReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
