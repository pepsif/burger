import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    burgers: true,
    coffee: false,
    drinks: false,
}

export const SortSlice = createSlice({
    name:"sort",
    initialState,
    reducers: {
     setOnOff: ( state, action ) => {
      
     }
    }
  })

  export const { setOnOff } = SortSlice.actions
  export default SortSlice.reducer