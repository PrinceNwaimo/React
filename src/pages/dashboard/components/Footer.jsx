//Functional component

import React from "react";
class  Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: " ",
            lastName: " ",
            age: 0,
            height:0.0
        }
    }
    handleFirstName=(event)=>{
        this.setState({
            firstName:event.target.value
        })
    }
    handleLastName =(event)=>{
        this.setState({
            lastName:event.target.value
        })
    }
    handleAge =(event)=>{
        this.setState({
            age:event.target.value
        })
    }
    handleHeight =(event)=>{
        this.setState({
            height:event.target.value
        })
    }

    render() {
        return(
            <div>

                <p>First name:  {this.state.firstName}</p>
                <p>Last name: {this.state.lastName}</p>
                <p> Age: {this.state.age}</p>
                <p> Height: {this.state.height}</p>

            <label htmlFor="firstName">
                FirstName: <input type="text" name="firstName" id="firstName"   value = {this.state.firstName} onChange={this.handleFirstName}/>
            </label><br/><br/>

            <label htmlFor="lastName">
                LastName: <input type="text" name="lastName" id ="lastName" value={this.state.lastName} onChange={this.handleLastName}/>
            </label><br/><br/>

            <label htmlFor="age">
                Age:   <input type="text" name="age" id="age" value ={this.state.age}onChange={this.handleAge}/>
            </label><br/><br/>

             <label htmlFor="height">
                 Height:  <input type ="text" name="height" id="height" value = {this.state.height} onChange={this.handleHeight}/>
             </label><br/><br/>
            </div>
        )
        {
        }
    }
}
export default Footer

