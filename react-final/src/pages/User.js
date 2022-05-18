import React from "react";

export default class User extends React.Component {

    constructor() {
        super();

        this.state = {
            name: 'Shubhangi',
            age: 23,
            Cmpy:'THBS',
            address: 'BELAGAVI'
        }
    }

    updateAddress() {
        this.setState({
            address: 'BANGALORE'
        })
    }

    render() {
        return (
            <div>
                <h4><u>User Details</u></h4>
                <br></br>
               <b> Name : </b>  {this.state.name} <br></br>
               <b> Age :  </b> {this.state.age} <br></br>
               <b> Cmpy: </b> {this.state.Cmpy}<br></br>
               <b> Address : </b> {this.state.address} <br></br>
            </div>
        )
    }

}