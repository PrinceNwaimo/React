import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import {firstName, lastName, phoneNumber, emailAddress, id} from "../../../store/User";
// import '../styles/UserComponent.css'


function UserComponent(){
    const firstName = useSelector((state) => state.userDetails.firstName)
    const lastName = useSelector((state)=>state.userDetails.lastName)
    const phoneNumber = useSelector((state)=> state.userDetails.phoneNumber)
    const emailAddress = useSelector((state)=> state.userDetails.emailAddress)
    const dispatch = useDispatch()
    return(

            <div className="mainContainer">
                <div className="container">
                    <label htmlFor= "firstName">
                        FirstName: <input type="text" name="firstName" onClick={()=> dispatch(firstName("Prince"))} value={firstName}/>
                    </label>
                    <br/>
                    <label htmlFor= "lastName">
                        LastName: <input type="text" name="lastName" onClick={()=> dispatch(lastName("Nwaimo"))} value={lastName}/>
                    </label>
                    <label htmlFor= "phoneNumber">
                        PhoneNumber: <input type="text" name="phoneNumber" onClick={()=> dispatch(phoneNumber("07037178521"))} value={phoneNumber}/>
                    </label>
                    <br/>
                    <label htmlFor= "emailAddress">
                        LastName: <input type="text" name="emailAddress" onClick={()=> dispatch(emailAddress("Prince@gmail.com"))} value={emailAddress}/>
                    </label>
                </div>

        </div>


    )
}
export default UserComponent
