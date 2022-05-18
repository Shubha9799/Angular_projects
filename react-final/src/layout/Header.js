import React from "react";
import { Link } from "react-router-dom";

export default  class Header extends React.Component{
    render() {
        return (
            <>
                <ul>
                    <li>
                        <Link to="/">Home </Link>
                        <br></br>
                        <Link to="/user">About</Link>
                        <br></br>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </>
        )
    }
}