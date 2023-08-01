import { createSlice } from "@reduxjs/toolkit";

import Parse from "parse/dist/parse.min.js";

// Your Parse BACK4APP initialization configuration goes here
const PARSE_APPLICATION_ID = "hDCY92g5erfZ51XIvlXxdgiwDXfzBrc8gnlYJVpW";
const PARSE_HOST_URL = "https://parseapi.back4app.com/";
const PARSE_JAVASCRIPT_KEY = "6GtVNOpRPOX2uqeq0v1FNuKZnUko6pHGqQnvec5b";
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

const fetchBurgers = new Parse.Query("Burgers");
const response = await fetchBurgers.first();
const fetchBurgersArray = await response.get("data");


  //  --INITIAL-STATE--
const initialState = {
  activeBurgerId: 0,
  data: fetchBurgersArray,
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

    },
    decreaseBurgerValue: (state, action) => {
      
      if (state.data[action.payload].value === 0) return;
      state.data[action.payload].value -= 1;
    },
    deleteBurger: ( state, action ) => {
     
     state.data[action.payload].value = 0;
     }
  },
});

export const { setActiveBurgerId, increaseBurgerValue, decreaseBurgerValue, deleteBurger } =
  burgersSlice.actions;
export default burgersSlice.reducer;
