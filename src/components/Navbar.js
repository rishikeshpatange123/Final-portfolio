import React, { useState } from 'react'
import './Navbar.css'
import { FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { NavLink } from 'react-router-dom';


function Navbar() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    return (
        <>
            <nav className="main-nav">
                <div className="logo"><h1>RSP</h1></div>
                <div className="social-media">
                    <div>

                    <a href="https://www.instagram.com/rishikeshpatange/" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
                    <a href="https://www.linkedin.com/in/rishikesh-patange-1979251b6" target="_blank"rel="noopener noreferrer" ><FaLinkedinIn/></a>
                    <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer" ><FaEnvelope/></a>
                    </div>
                </div>
                <div className="nav-line">
                </div>
                
                <div className={
                    showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                }>

                    <ul>
                        <li><NavLink className="active" to="/Home" >Home</NavLink></li>
                        <li><NavLink to="/About">About</NavLink></li>
                        <li><NavLink to="/Contact">Contact</NavLink></li>
                        <li><NavLink to="/Project">Project</NavLink></li>
                    </ul>
                </div>
               
                <div className="hambuger-menu">
                    <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}><GiHamburgerMenu /></a>
                </div>
              

            </nav>

        </>
    )
    //  
}

export default Navbar
