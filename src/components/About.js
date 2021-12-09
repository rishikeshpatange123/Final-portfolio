import React from 'react'
import "./About.css";
import {motion} from 'framer-motion';

function About() {
    return (
        <motion.div className="About-container" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.4}}>
            <div className="About">
                <div className="About-content">
                    <h1  >ABOUT</h1>
                    <div className="about-box"></div >
                    <img className="About-img" src="/Images/About.png" alt="" />
                    <motion.p initial={{translateX:-400,opacity:0}} animate={{translateX:0 , opacity:1}} transition={{duration:2}}  >  I Am Currently purusing Enginnering  from Pune ,india
                        I Enjoy taking Complex problems and Turing them into
                        Efficent code
                        weather it be JSX , HTML5 , CSS And JavaScript
                    </motion.p>
                </div>

            </div>

        </motion.div>
    )
}

export default About
