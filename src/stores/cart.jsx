import { createSlice } from "@reduxjs/toolkit";

//init
const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity } = action.payload;

      const indexProductId = state.items.findIndex(
        // cari produk di cart
        (item) => item.productId === productId,
      );
      if (indexProductId >= 0) {
        // tambah quantity
        state.items[indexProductId].quantity += quantity;
      } else {
        // tambah produk baru
        state.items.push({ productId, quantity });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
