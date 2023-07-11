import {useDispatch, useSelector} from "react-redux";
import {decrementByValue, incrementByValue, setValue} from "../../../store/Counter";
import  React from 'react';

function ValueComponent(){
    const value = useSelector((state) =>state.counter.value )
    const dispatch = useDispatch()
    return (
        <div>

             <input value={value}onChange={(e) => dispatch(setValue(Number(e.target.value)))}/>
            <br/>

            <button onClick={() => dispatch(incrementByValue())}>Increment By Value</button>

            <br/>
            <button onClick={() => dispatch(decrementByValue())}>Decrement By Value</button>

        </div>
    )
}
export default ValueComponent