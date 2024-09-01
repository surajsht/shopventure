import { createSlice } from "@reduxjs/toolkit";

type cartItem = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  quantity: number;
};

type cartState = {
  value: cartItem[];
  totalQuantity: number;
};

const initialState: cartState = {
  value: [],
  totalQuantity: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem: cartItem = action.payload;
      const existingItem = state.value.find(
        (item: cartItem) => item.id === newItem.id
      );

      if (!existingItem) {
        state.value.push({ ...newItem, quantity: 1 });
      } else {
        existingItem.quantity++;
        existingItem.price += newItem.price;
      }
    },

    cartIncOrDec: (state, action) => {
      const updateCart = state.value.map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.type === "increment") {
            return { ...item, quantity: item.quantity + 1 };
          } else if ((action.payload.type = "decrement")) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }

        return item;
      });

      state.value = updateCart;
    },

    removeItem: (state, action) => {
      const removeItem = state.value.filter(
        (item) => item.id !== action.payload
      );
      state.value = removeItem;
    },

    CartCount: (state) => {
      const findCartCount = state.value.reduce((acc, curr) => {
        return (acc = acc + curr.quantity);
      }, 0);

      state.totalQuantity = findCartCount;
    },
  },
});

export default CartSlice.reducer;
export const { addToCart, cartIncOrDec, CartCount, removeItem } =
  CartSlice.actions;
