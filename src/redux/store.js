import { configureStore} from "@reduxjs/toolkit";
import  BurgersSlice  from "./BurgersSlice/BurgersSlice";
import CartSlice from "./CartSlice/CartSlice";

export const store = configureStore({
 reducer: {
  burgers: BurgersSlice,
  cart: CartSlice
 }
})


