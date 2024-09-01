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
    buttonClick: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { prevPage, nextPage, buttonClick } = PaginationSlice.actions;
export default PaginationSlice.reducer;
