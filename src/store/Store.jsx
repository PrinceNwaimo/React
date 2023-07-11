import {configureStore} from "@reduxjs/toolkit"
import CounterReducer from './Counter'
import UserDetailsReducer from './User'
import FormRegister from "./FormRegister";

const Store = configureStore({
    reducer:{
        counter:CounterReducer,
        userDetails: UserDetailsReducer,
        formDetails:FormRegister,
    }
})

export default Store;