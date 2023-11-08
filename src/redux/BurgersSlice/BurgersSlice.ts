
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {fetchBurgers} from "../../api/fetchBurgers.mjs"

export const fetchBurgersArray = createAsyncThunk(
  'burgers/fetchBurgers',
  async function () {
    return fetchBurgers()
  }
)

const initialState = {
  status: null,
  error: null,
  activeBurgerId: 0,
  data: [],

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
  extraReducers: {
    [fetchBurgersArray.pending]: (state,action) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchBurgersArray.fulfilled]: (state,action)=>{
      state.status = 'resolved';
      state.error = null;
      state.data = action.payload;
    },
    [fetchBurgersArray.rejected]: (state,action)=>{
      state.error = 'error';
    },
  }
});

export const { setActiveBurgerId, increaseBurgerValue, decreaseBurgerValue, deleteBurger } =
  burgersSlice.actions;
export default burgersSlice.reducer;
