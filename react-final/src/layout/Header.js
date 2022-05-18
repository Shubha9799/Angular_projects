import React from "react";
import { Link } from "react-router-dom";

export default  class Header extends React.Component{
    render() {
        return (
            <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
     <a class="navbar-brand" href="#">
      <img src="https://www.datocms-assets.com/45470/1631110818-logo-react-js.png" alt="" width="90" height="60" class="d-inline-block align-text-top"/>
      
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link className="nav-link active" aria-current="page"  to="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link active" aria-current="page"  to="/user">About</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link active" aria-current="page"  to="/list">Courses</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link active" aria-current="page"  to="/hooks">Hooks</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
            </>
        )
    }
}