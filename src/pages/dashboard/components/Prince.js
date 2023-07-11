import React,{useState} from 'react';
//Using the functional component of react.
function Prince() {
    let initialState = {
        institute: "",
        cohort: "",
        admissionYear: "",
        admissionMonth: ""
    }
    const [data, setData] = useState(initialState)

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(0);

    function handleChange(event) {
        //conditional rendering
        if (event.target.name === "firstName") {
            setFirstName(event.target.value)
        } else if (event.target.name === "lastName") {
            setLastName(event.target.value)
        } else if (event.target.name === "age") {
            setAge(event.target.value)
        } else if (event.target.name === "email") {
            setEmail(event.target.value)
        } else {
            setData({
                ...data,
                [event.target.name]: event.target.value
            })
        }
    }

        return (
            <React.Fragment>
                <div className="ptags">
                    <p className="One">First Name: {firstName}</p>
                    <p className="Two">Last Name: {lastName}</p>
                    <p className="Three">Email: {email}</p>
                    <p className="Four">Age: {age}</p>
                    <p className="Five">Institution: {data.institute}</p>
                    <p className="Six">Cohort: {data.cohort}</p>
                    <p className="Seven">Admission Year: {data.admissionYear}</p>
                    <p className="Eight">Admission Month: {data.admissionMonth}</p>

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
                    Institution Name: <input type = "text" name="institute" id="iName" value={data.institute}
                onChange={handleChange}/>
                </label> <br/><br/>

                <label htmlFor="cohot">
                    Cohort: <input type = "text" name="cohort" id="cohot" value ={data.cohort}
                onChange={handleChange}/>
                </label> <br/><br/>

                <label htmlFor="aYear">
                    Admission Year: <input type = "text" name="admissionYear" id="aYear" value = {data.admissionYear}
                onChange={handleChange}/>
                </label> <br/><br/>

                <label htmlFor="aMonth">
                    Admission Month: <input type = "text" name="admissionMonth" id="aMonth" value = {data.admissionMonth}
                onChange={handleChange}/>
                </label> <br/><br/>

            </React.Fragment>
        );

}

export default Prince;
