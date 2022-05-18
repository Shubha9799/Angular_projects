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
               <b>User Name : </b>  {this.state.name} <br></br>
               <b> User Age :  </b> {this.state.age} <br></br>
               <b> User Cmpy: </b> {this.state.Cmpy}<br></br>
               <b> User addr : </b> {this.state.address} <br></br>
            </div>
        )
    }

}