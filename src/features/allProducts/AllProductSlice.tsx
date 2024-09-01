import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

type ApiState = {
  data: Product[] | any;
  isLoading: boolean;
  isError: boolean;
  totalProduct: number;
};

const initialState: ApiState = {
  data: null,
  isLoading: false,
  isError: false,
  totalProduct: 0,
};

export const fetchProduct = createAsyncThunk<Product[]>(
  "fetchProduct",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    return response.json();
  }
);

export const AllProductSlice = createSlice({
  name: "allProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.totalProduct = state.data.length;
    });

    builder.addCase(fetchProduct.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default AllProductSlice.reducer;
