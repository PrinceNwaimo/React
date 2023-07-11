import React from 'react'
import {useSelector,useDispatch} from "react-redux";


function Form(){
    const firstName = useSelector((state) => state.formDetails.firstName)
    const lastName = useSelector((state) => state.formDetails.lastName)
    const userName = useSelector((state) => state.formDetails.userName)
    const email = useSelector((state) => state.formDetails.email)
    const password = useSelector((state) => state.formDetails.password)
    const submit = useSelector((state) => state.formDetails.submit)
    const dispatch = useDispatch()

    return(

        <div className="mainContainer">
            <div className="container">
                <label htmlFor= "firstName">
                    FirstName: <input type="text" name="firstName" onInput={() => dispatch(firstName)}value={firstName}/>
                </label>
                <br/>

                <label htmlFor= "lastName">
                    LastName: <input type="text" name="lastName" onInput={() => dispatch(lastName)}value={lastName}/>
                </label>

                <label htmlFor= "userName">
                    UserName: <input type="text" name="userName" onInput={() => dispatch(userName)}value={userName}/>
                </label>

                <label htmlFor= "email">
                    Email: <input type="text" name="email" onInput={() => dispatch(email)}value={email}/>
                </label>

                <label htmlFor= "password">
                    Password: <input type="text" name="password" onInput={() => dispatch(password)}value={password}/>
                </label>

                <label htmlFor= "password">
                    Confirm Password: <input type="text" name="password" onInput={() => dispatch(password)}value={password}/>
                </label>
                    <button onClick={submit}> Submit</button>

            </div>
        </div>
    )
}
export default Form
