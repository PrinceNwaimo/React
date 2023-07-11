import {createSlice} from "@reduxjs/toolkit";

const initialDetails = {
    id: 0,
    firstName:"Prince ",
    lastName :"Nwaimo ",
    phoneNumber:"07037178521",
    emailAddress:"princenwaimo@gmail.com "
}
export const UserSlice = createSlice({
    name: "user",
    initialState: initialDetails,
    reducers: {

        id: (state,action) => {
            state.id = action.payload;
        },
        firstName: (state,action) => {
            state.firstName = action.payload;
        },
        lastName: (state, action) => {
            state.lastName = action.payload;
        },
        phoneNumber: (state, action) => {
            state.phoneNumber = action.payload;
        },
        emailAddress: (state, action) => {
            state.emailAddress = action.payload;
        },
    },
})
export const {id,firstName,lastName,phoneNumber,emailAddress} = UserSlice.actions
export  default UserSlice.reducer