import React, { useState } from 'react';

export default class Hooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],       //initialization of state
            error: null,
            isLoaded: false
        }
    }
    // sending api call 
    componentDidMount() {

        fetch('https://reqres.in/api/users?page=1')
            .then(res => res.json())
            .then(
                (success) => {
                    this.setState({
                        isLoaded: true,
                        users: success.data
                    });
                },
                (error) => {
                    this.setState({
                        error: error

                    });
                }
            )

    }

    render() {
        const { users, isLoaded, error } = this.state;

        return (
            <ul>
                <b>Fetching API data inside class based component</b>
                <br></br>
                <br></br>
                <u><b>Names of users</b></u>
                <br></br>
                <br></br>
                {users.map(item => (
                   
                    <li>
                        {item.first_name} {item.last_name}
                    </li>
                ))}
            </ul>
        )
    }
}