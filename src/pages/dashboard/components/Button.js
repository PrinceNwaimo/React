import React, { useState } from 'react';
    function Button ({number, initialState}) {
    const [value,setValue] = useState(0)

    function handleIncrease(){
        setValue (value+1)
    }
     function handleDecrease(){
        setValue (value - 1)
     }
            return (
                <React.Fragment>
                    <div>
                        <h3>Current value: {value}</h3>
                        <button id ="button1"onClick={handleIncrease}>Increase</button>
                        <button id = "button2"onClick={handleDecrease}>Decrease</button>
                    </div>

                </React.Fragment>
            )
        }
export default Button;