import { createSlice } from "@reduxjs/toolkit";

//init
const initialState = {
  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  statusTab: false,
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
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    changeQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const indexProductId = state.items.findIndex(
        // cari produk di cart
        (item) => item.productId === productId,
      );

      // update quantity
      if (quantity > 0) {
        state.items[indexProductId].quantity = quantity;
      } else {
        // delete state.items[indexProductId];
        state.items = state.items.filter(
          (item) => item.productId !== productId,
        );
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    toggleStatusTab(state) {
      state.statusTab = !state.statusTab;
    },
  },
});

export const { addToCart, changeQuantity, toggleStatusTab } = cartSlice.actions;
export default cartSlice.reducer;
