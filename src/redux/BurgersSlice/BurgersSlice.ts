
import { createSlice } from "@reduxjs/toolkit";
import {fetchBurgers} from "../../api/fetchBurgers.js"

   //  --INITIAL-STATE--

const initialState = {
  activeBurgerId: 0,
  data: await fetchBurgers(),

};

export const burgersSlice = createSlice({
  name: "burgers",
  initialState,
  reducers: {
    setActiveBurgerId: (state, action) => {
      state.activeBurgerId = action.payload;
    },
    increaseBurgerValue: (state, action) => {
     
      state.data[action.payload].value += 1;
        localStorage.setItem('cart',JSON.stringify(state.data.filter( el =>el.value > 0 )))
    },
    decreaseBurgerValue: (state, action) => {
      
      if (state.data[action.payload].value === 0) return;
      state.data[action.payload].value -= 1;
      localStorage.setItem('cart',JSON.stringify(state.data.filter( el => el.value > 0 )))
    },
    deleteBurger: ( state, action ) => {
      state.data[action.payload].value = 0;

      localStorage.setItem('cart',JSON.stringify(state.data.filter( el => el.value > 0 )))
    // console.log(jsonParse)
    }
  },
});

export const { setActiveBurgerId, increaseBurgerValue, decreaseBurgerValue, deleteBurger } =
  burgersSlice.actions;
export default burgersSlice.reducer;
