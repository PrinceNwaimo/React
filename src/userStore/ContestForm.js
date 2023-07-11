import React,{useState} from "react";
import './ContestForm.css'
function ContestForm() {
    let initialState = {
        email: "",
        password: ""
    }
    const [data, setData] = useState(initialState)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleChange(event) {

         if (event.target.name === "email") {
            setEmail(event.target.value)
        } else if (event.target.name === "password") {
            setPassword(event.target.value)
        } else {
            setData({
                ...data,
                [event.target.name]: event.target.value
            })
        }
    }

    return (
        <React.Fragment>
            <div className="FirstContainer">
                <h2>Create an account</h2>
                <label htmlFor="Email">
                   Email  <input type = "text" name="email" placeholder="Enter your email" onChange={handleChange}/>
                </label> <br /><br/>

                <label htmlFor="Password">
                  Password  <input type = "text" name="password"  placeholder="Enter your password" onChange={handleChange}/>
                </label> <br/><br/>
                <button type = "Submit" onChange={handleChange}>create account</button>
                <br/><br/>
                <button type = "Submit" onChange={handleChange}>continue with Google</button>
                <h6>Already have an account? Log in</h6>
                <div className="SecondContainer">
                    <h2>Login to your account</h2>
                    <label htmlFor="Email">
                        Email <input type = "text" name="email" placeholder="Enter your email" onChange={handleChange}/>
                    </label> <br /><br/>

                    <label htmlFor="Password">
                       Password <input type = "text" name="password"  placeholder="enter your password" onChange={handleChange}/>
                    </label> <br/><br/>
                    <button type = "Submit" onChange={handleChange}>login now</button>
                    <h6>Don't have an account? sign up</h6>

                </div>
            </div>
        </React.Fragment>
    );
}
export default ContestForm