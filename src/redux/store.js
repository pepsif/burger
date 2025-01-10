import { configureStore} from "@reduxjs/toolkit"
import  BurgersSlice  from "./BurgersSlice/BurgersSlice"
import CartSlice from "./CartSlice/CartSlice"
import userSlice from "./UserSlice/UserSlice"
import menuOnOff from './MenuOnOffSlice/MenuOnOffSlice'
import sortSlice from './Sort/Sort'

export const store = configureStore({
    
 reducer: {
  burgers: BurgersSlice,
  cart: CartSlice,
  user: userSlice,
  menuOnOff,
  sort: sortSlice,

 },
 devTools: true,
 
})




