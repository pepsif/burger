import {createSlice} from "@reduxjs/toolkit";

const initialState = {
burgersCount: 0,

}

export const CartSLice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
   burgersCountIncrease: ( state ) => {
state.burgersCount += 1;
   },
   burgersCountDecrease: ( state ) => {
    if( state.burgersCount === 0 ) return
    state.burgersCount -= 1;
       }
    }
})

export const { burgersCountIncrease, burgersCountDecrease } = CartSLice.actions
export default CartSLice.reducer