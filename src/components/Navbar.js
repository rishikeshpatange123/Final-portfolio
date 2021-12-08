import React from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';


function Navbar() {
    return (
        <div className="nav-container">
          <div className="navbar">
            <nav>
                <ul id="menuList"> 
                <li><NavLink className="active" to="/Home" >Home</NavLink></li>
                <li><NavLink to="/About">About</NavLink></li>
                </ul>
            </nav>
        </div>

            
        </div>
    )
}

export default Navbar
