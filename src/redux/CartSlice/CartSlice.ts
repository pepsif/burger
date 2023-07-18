import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  burgersCount: 0,
};

export const CartSLice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    burgersCountIncrease: (state) => {
      state.burgersCount += 1;
    },
    burgersCountDecrease: (state) => {
      if (state.burgersCount === 0) return;
      state.burgersCount -= 1;
    },
    deleteBurgerCountReset: (state, actions) => {
      // alert(actions.payload);
     state.burgersCount = state.burgersCount - actions.payload;
    },
  },
});

export const {
  burgersCountIncrease,
  burgersCountDecrease,
  deleteBurgerCountReset,
} = CartSLice.actions;
export default CartSLice.reducer;
