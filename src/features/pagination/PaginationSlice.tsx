import { createSlice } from "@reduxjs/toolkit";

export const PaginationSlice = createSlice({
  name: "pagination",
  initialState: {
    value: 0,
  },
  reducers: {
    prevPage: (state) => {
      state.value--;
    },
    nextPage: (state) => {
      state.value++;
    },
    selectPagination: (state, action) => {
      state.value = action.payload;
    },
    resetPagination: (state) => {
      state.value = 0;
    },
  },
});

export const { prevPage, nextPage, selectPagination, resetPagination } =
  PaginationSlice.actions;
export default PaginationSlice.reducer;
