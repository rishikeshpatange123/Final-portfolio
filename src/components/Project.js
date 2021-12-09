import React from 'react';
import "./Project.css";
import { motion } from 'framer-motion';

function Project() {
    
    return (
        <div className="Project-container">
            <div className="project">
                <motion.img initial={{scale:0}} animate={{scale:1}} exit={{scale:0}} transition={{duration:0.5}} src="./Images/PROJECT3.png" alt="#" />
                <div className="project1">
                    <motion.img initial={{scale:0}} animate={{scale:1}} exit={{scale:0}} transition={{duration:0.5}} src="./Images/project 1.png" alt="#" />
                    <h1>More project coming soon...</h1>
                </div>
            </div>
        </div>
    )
}

export default Project
