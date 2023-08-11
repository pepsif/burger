import { configureStore} from "@reduxjs/toolkit";
import  BurgersSlice  from "./BurgersSlice/BurgersSlice";
import CartSlice from "./CartSlice/CartSlice";
import userSlice from "./UserSlice/UserSlice"

export const store = configureStore({
 reducer: {
  burgers: BurgersSlice,
  cart: CartSlice,
  user: userSlice,
 },
 devTools: true,
})




