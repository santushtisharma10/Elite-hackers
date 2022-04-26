import React,{Component} from "react";
import {NavLink } from "react-router-dom";
//import "..../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import ".../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./Navbar.css";
const Navbar = () =>{
  return(
    <>
    <div className="container-fluid nav_bg">
      <div className='row'>
        <div className="col-10 mx-auto">

    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" id="navbarbrand" to="#">Elite Hackers</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav" id="navbarnav">
        <li className="nav-item" id="nav-item">
          <NavLink className="nav-link active" id="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item" id="nav-item">
          <NavLink className="nav-link" id="nav-link" to="/puzzles">Puzzles</NavLink>
        </li>
        <li className="nav-item" id="nav-item">
          <NavLink className="nav-link" id="nav-link" to="/about">About Us</NavLink>
        </li>
        <li className="nav-item" id="nav-item">
          <NavLink className="nav-link" id="nav-link" to="/contact">Contact Us</NavLink>
        </li>
               
      </ul>
    </div>
  </div>
</nav>
</div>
</div>
</div>
</>
  );
};
export default Navbar;