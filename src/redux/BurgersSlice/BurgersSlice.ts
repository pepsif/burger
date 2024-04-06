
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {fetchBurgers} from "../../api/fetchBurgers.mjs"

export const fetchBurgersArray = createAsyncThunk(
  'burgers/fetchBurgers',
  async function () {
    return fetchBurgers()
  }
)

const initialState = {
  status: "pending",
  error: null,
  activeBurgerId: 0,
  data: [],

};

export const burgersSlice = createSlice({
  name: "burgers",
  initialState,
  reducers: {
    setActiveBurgerId: (state, action) => {
        localStorage.setItem('burgerId',action.payload)
      state.activeBurgerId = localStorage.getItem('burgerId');

    },
    increaseBurgerValue: (state, action) => {
     
      state.data[action.payload].value += 1;

    },
    decreaseBurgerValue: (state, action) => {
        state.data[action.payload].value <= 0 ? '' : state.data[action.payload].value -= 1

    },
    deleteBurger: ( state, action ) => {
      state.data[action.payload].value = 0;

    }
  },
  extraReducers: builder => {
    builder
     .addCase(fetchBurgersArray.pending, (state) => {
       state.status = 'loading';
       state.error = false;
     })
     .addCase(fetchBurgersArray.fulfilled, (state, action) => {
        state.status = 'succeeded';
        //state.data = action.payload
        localStorage.getItem('burgersArray') ? state.data = JSON.parse(localStorage.getItem('burgersArray')) : null;
        

      })
      .addCase(fetchBurgersArray.rejected, (state, action) => {
        state.status = 'failed';
        state.error = 'error';
      });
    }
});

export const { setActiveBurgerId, increaseBurgerValue, decreaseBurgerValue, deleteBurger } =
  burgersSlice.actions;
export default burgersSlice.reducer;
