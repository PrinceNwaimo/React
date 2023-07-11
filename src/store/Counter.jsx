import {createSlice} from "@reduxjs/toolkit";

const initialValue = {
    count:0,
    value:0
}
export const CountSlice = createSlice({
    name: "counter",
    initialState: initialValue,
    reducers: {
        incrementByOne: (state) => {
            state.count += 1
        },
        decrementByOne: (state) => {
            state.count -= 1
        },
        incrementByValue: (state, action) => {
            state.count += state.value
        },
        decrementByValue: (state, action) => {
            state.count -= state.value
        },
        setValue:(state, action) =>{
            state.value = action.payload;
        },
    },
})
export const {incrementByOne, decrementByOne, incrementByValue,decrementByValue,setValue} = CountSlice.actions
export default CountSlice.reducer