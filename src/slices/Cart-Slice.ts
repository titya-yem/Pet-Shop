import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the cart item type
interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// Define the initial state type
interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

// Initial state
const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex !== -1) {
        state.totalQuantity -= state.items[itemIndex].quantity;
        state.totalPrice -=
          state.items[itemIndex].price * state.items[itemIndex].quantity;
        state.items.splice(itemIndex, 1);
      }
    },

    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.totalQuantity -= 1;
          state.totalPrice -= item.price;
        } else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
          state.totalQuantity -= 1;
          state.totalPrice -= item.price;
        }
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
