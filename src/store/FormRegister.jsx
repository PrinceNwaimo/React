import {createSlice} from "@reduxjs/toolkit";

const initialDetails = {
    firstName:" ",
    lastName :" ",
    userName:" ",
    email:" ",
    password:" "
}
export const UserSlice = createSlice({
    name: "form",
    initialState: initialDetails,
    reducers: {

        firstName: (state, action) => {
            state.firstName = action.payload;
        },
        lastName: (state, action) => {
            state.lastName = action.payload;
        },
        userName: (state, action) => {
            state.userName = action.payload;
        },
        email: (state, action) => {
            state.email = action.payload;
        },
        password: (state, action) => {
            state.password = action.payload;
        },
    },
})
export const {firstName,lastName, userName,email,password} = UserSlice.actions
export  default UserSlice.reducer