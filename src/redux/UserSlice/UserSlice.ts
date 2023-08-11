import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    userAuth: false,
    userVip: false,
    balance: 0,
}
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserAuth: (state,action) => {
           state.userAuth = action.payload;
        },

    },
});
export const { setUserAuth } = userSlice.actions;
export default userSlice.reducer;