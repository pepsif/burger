import { configureStore} from "@reduxjs/toolkit";
import  BurgersSlice  from "./BurgersSlice/BurgersSlice";

export const store = configureStore({
 reducer: {
  burgers: BurgersSlice,
 }
})


