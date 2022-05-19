import React from "react";

export default class User extends React.Component {
    constructor() {
        super();
        this.state = {
            fname: ''
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('You clicked submit.');
        console.log(event)
    }

    handleChange(evt) {
        console.log(evt);


        this.setState({
            fname: evt.target.value
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label>
                        Name:
                        <input type="text" value={this.state.fname} onChange={(ev) => this.handleChange(ev)} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

}