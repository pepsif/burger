import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menuOn: false,
  
  };

  export const MenuOnOffSlice = createSlice({
    name:"menuOnOff",
    initialState,
    reducers: {
     setOnOff: ( state, action ) => {
      state.menuOn = action.payload
     }
    }
  })

  export const { setOnOff } = MenuOnOffSlice.actions
  export default MenuOnOffSlice.reducer