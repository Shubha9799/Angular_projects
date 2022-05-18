import React from "react";
import { Link } from "react-router-dom";

export default  class Header extends React.Component{
    render() {
        return (
            <>

            
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/"><b>Home &nbsp; &nbsp;</b></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user"><b>About&nbsp; &nbsp;</b></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/list"><b>Course-list&nbsp; &nbsp;</b></Link>
                        </li>

                    </ul>
                </div>
            </nav>
            </>
        )
    }
}