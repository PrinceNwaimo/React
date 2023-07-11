import React,{useState} from "react";
import '../styles/Form.css'
function Form() {
    let initialState = {
        name: "",
        userName: "",
        email: "",
        password: ""
    }
    const [data, setData] = useState(initialState)

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleChange(event) {
        //conditional rendering
        if (event.target.name === "firstName") {
            setFirstName(event.target.value)
        } else if (event.target.name === "lastName") {
            setLastName(event.target.value)
        } else if (event.target.name === "userName") {
            setUserName(event.target.value)
        } else if (event.target.name === "email") {
            setEmail(event.target.value)
        } else if (event.target.name === "password") {
            setPassword(event.target.value)
        }else {
            setData({
                ...data,
                [event.target.name]: event.target.value
            })
        }
    }
    return (
        <React.Fragment>
            <div className="MainContainer">
                <h3>Registration form</h3>
            <div className="InnerContainer">
            <label htmlFor="fName">
                <input type = "text" name="firstName" placeholder="First Name" onChange={handleChange}/>
            </label> <br /><br/>

            <label htmlFor="lName">
                <input type = "text" name="lastName"  placeholder="Last Name" onChange={handleChange}/>
            </label> <br/><br/>
            <label htmlFor="UserName">
                <input type = "text" name="userName" placeholder="User Name" onChange={handleChange}/>
            </label> <br/><br/>

            <label htmlFor="Email">
                 <input type = "text" name="email" placeholder="Email Address" onChange={handleChange}/>
            </label> <br/><br/>

            <label htmlFor="Password">
              <input type = "text" name="password" id="Password" placeholder="password" onChange={handleChange}/>
            </label> <br/><br/>
            <label htmlFor="Password">
               <input type = "text" name="password" placeholder=" Confirm password" onChange={handleChange}/>
            </label> <br/><br/>
            <button type = "Submit" onChange={handleChange}>Submit</button>
            <br/><br/>
            <button type = "Submit" onChange={handleChange}>Continue with Google</button>
            </div>
                </div>
        </React.Fragment>
    );

}
export default Form