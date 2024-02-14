import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  burgersCount: 0,
 cartValueCount: 0,
};

export const CartSLice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    burgersCartCountIncrease: (state) => {
      // state.burgersCount += 1;
      const arr = JSON.parse(localStorage.getItem('cart')) ;
      const arrValue = arr.map((item) => item.value)
      const reduce = arrValue.reduce((accum,item) => accum+item )

      console.log(arrValue,reduce)
    },
    burgersCartCountDecrease: (state) => {
      // if (state.burgersCount === 0) return;
      // state.burgersCount -= 1;
      const arr = JSON.parse(localStorage.getItem('cart')) ;

      console.log(arr)
      const arrValue = arr.map((item) => item.value).reduce((accum,item) => accum+item )


      console.log(arrValue)
    },
    deleteBurgerCartCountReset: (state, actions) => {
      // alert(actions.payload);
     // state.burgersCount = state.burgersCount - actions.payload;
    },
  },
});

export const {
  burgersCartCountIncrease,
  burgersCartCountDecrease,
  deleteBurgerCartCountReset,
} = CartSLice.actions;
export default CartSLice.reducer;
