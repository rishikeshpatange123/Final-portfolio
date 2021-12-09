import React, { Component } from 'react'
import "./Contact.css"
import { BiMobileAlt } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa";
// import Tilt from 'react-vanilla-tilt';
import {motion} from 'framer-motion';

export class Contact extends Component {
    render() {
        return (
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.4}} className="contact-container">
                <div className="tilt-container">

                {/* <Tilt className="Tilt"> */}
                    <div className="contact-box">
                        <div className="contact-content">
                            <img src="./Images/Contact-image.png" alt="" />
                            <h1>Rishikesh Patange</h1>
                            <div>
                                <li><BiMobileAlt className="contact-media1" /></li>
                                <li> <FaEnvelope className="contact-media2" /> </li>
                            </div>
                            <div className="details">
                                <p>RishikeshPatangesick @gmail.com</p>
                                <p>91+7823069861</p>
                            </div>
                            <div className="details1">
                                <p>GMAIL</p>
                                <p>MOBILE</p>
                            </div>
                        </div>

                    </div>
                {/* </Tilt> */}
                </div>


            </motion.div >
        )
    }
}

export default Contact
