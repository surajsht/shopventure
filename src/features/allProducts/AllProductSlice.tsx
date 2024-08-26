import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
};

type ApiState = {
  data: Product[] | any;
  isLoading: boolean;
  isError: string | null;
};

const initialState: ApiState = {
  data: null,
  isLoading: false,
  isError: null,
};

export const fetchProduct = createAsyncThunk<Product[]>(
  "fetchProduct",
  async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
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
    });

    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message || "failed to fetch product";
    });
  },
});

export default AllProductSlice.reducer;
