import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  burgersCount: 0,

};

export const CartSLice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    burgersCartCountIncrease: (state) => {
     state.burgersCount +=1;
    },
    burgersCartCountDecrease: (state) => {
     state.burgersCount <=0 ? "" : state.burgersCount -=1;
    },
    deleteBurgerCartCountReset: (state, actions) => {
      state.burgersCount -= actions.payload

    },
  },
});

export const {
  burgersCartCountIncrease,
  burgersCartCountDecrease,
  deleteBurgerCartCountReset,
} = CartSLice.actions;
export default CartSLice.reducer;
