import  React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {incrementByOne,decrementByOne} from "../../../store/Counter";

function CounterComponent(){
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch()
    return(
        <div>
            <p> Count: {count}</p>
            <button onClick={() => dispatch(incrementByOne())}>Increment By One</button>

            <button onClick={() => dispatch(decrementByOne())}>Decrement By One</button>
        </div>
    )


}

export default CounterComponent
