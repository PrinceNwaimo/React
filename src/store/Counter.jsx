import {createSlice} from "@reduxjs/toolkit";

const initialValue = {
    count:0
}
export const CountSlice = createSlice({
    name: "counter",
    initialState: initialValue,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrementByOne: (state) => {
            state.count -= 1
        },
        incrementByValue: (state, action) => {
            state.count += action.payload
        },
        decrementByValue: (state, action) => {
            state.count -= action.payload
        }
    },
})
export const {incrementByOne, decrementByOne, incrementByValue,decrementByValue} = CountSlice.actions
export default CountSlice.reducer