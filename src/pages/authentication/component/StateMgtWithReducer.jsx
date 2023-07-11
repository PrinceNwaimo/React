import React,{useReducer}from 'react'
function StateMgtWithReducer() {
    let initialValue = {
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        institute: "",
        cohort: "",
        admissionYear: "",
        admissionMonth: "",
        buttonColor:"yellow"
    }

    function reducer(state, action) {
        switch (action.type) {
            case'handleInput':
                return {
                    ...state,
                    [action.field]: action.payload
                }
            default:
                break;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialValue);

    function handleChange(event) {
        dispatch({
            type: "handleInput",
            field: event.target.name,
            payload: event.target.value
        })
    }
    function handleButtonChange(event){
        dispatch({
            type:"handleButton",
            field:event.target.name,
            payload:"green"
        })
    }

    return(
        <React.Fragment>
            <div className="ptags">
                <p className="One">First Name: {firstName}</p>
                <p className="Two">Last Name: {lastName}</p>
                <p className="Three">Email: {email}</p>
                <p className="Four">Age: {age}</p>
                <p className="Five">Institution: {state.institute}</p>
                <p className="Six">Cohort: {state.cohort}</p>
                <p className="Seven">Admission Year: {state.admissionYear}</p>
                <p className="Eight">Admission Month: {state.admissionMonth}</p>

            </div>
            <label htmlFor="fName">
                FirstName: <input type = "text" name="firstName" id="fName" value={firstName}
                                  onChange={handleChange}/>
            </label> <br /><br/>

            <label htmlFor="lName">
                LastName:  <input type = "text" name="lastName" id="lName" value={lastName}
                                  onChange={handleChange}/>
            </label> <br/><br/>

            <label htmlFor="Email">
                EmailAddress:  <input type = "text" name="email" id="Email" value={email}
                                      onChange={handleChange}/>
            </label> <br/><br/>

            <label htmlFor="Age">
                Age: <input type = "text" name="age" id="Age" value={age}
                            onChange={handleChange}/>
            </label> <br/><br/>

            <label htmlFor="Institution">
                Institution Name: <input type = "text" name="institute" id="iName" value={state.institute}
                                         onChange={handleChange}/>
            </label> <br/><br/>

            <label htmlFor="cohot">
                Cohort: <input type = "text" name="cohort" id="cohot" value ={state.cohort}
                               onChange={handleChange}/>
            </label> <br/><br/>

            <label htmlFor="aYear">
                Admission Year: <input type = "text" name="admissionYear" id="aYear" value = {state.admissionYear}
                                       onChange={handleChange}/>
            </label> <br/><br/>

            <label htmlFor="aMonth">
                Admission Month: <input type = "text" name="admissionMonth" id="aMonth" value = {state.admissionMonth}
                                        onChange={handleChange}/>
            </label> <br/><br/>
            <button type="submit" name='buttonColor' onClick={handleButtonChange} style={{backgroundColor: state.buttonColor}}>Button</button>
        </React.Fragment>
    )

}

export default stateMgtWithReducer