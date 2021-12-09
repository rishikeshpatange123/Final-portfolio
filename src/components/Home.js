import React, {} from 'react';
import "./Home.css";
import { motion } from 'framer-motion';


function Home() {
    
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="Home-container" >

            <div className="Home" >
                <motion.div className="content">
                    <motion.h1 initial={{ translateX: -70, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} exit={{ translateX: -70 }} transition={{ duration: 1 }} >Hello, I’m  Rishikesh</motion.h1>

                    <motion.h2 initial={{ translateX: 180, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} exit={{ translateX: 180 }} transition={{ duration: 1 }}>React Developer.</motion.h2>

                    <motion.h3 initial={{ opacity: 0, translateY: -50 }} animate={{ opacity: 1, translateY: 0 }} exit={{ translateY: -50 }} transition={{ duration: 1 }} >UI UX Designer</motion.h3>
                    <button>Contact me</button>
                    <a href="#Discription" className="arrow" ><h1>&#8595;</h1></a>
                </motion.div>
                <div className="Hero">
                    <img src="Images/Hero.png" alt="" />
                    <div className="hero-bg"></div>
                </div>
            </div>
            <div className="Discription" id="Discription">
                <div className="content2">

                    <div className="col-1">
                        <h1 >Designer.</h1>
                        <h2>UI UX Designer with a passion for
                            Designing beautiful and functional
                            user experiences. Minamalist who
                            belives that less is more</h2>
                    </div>
                    <div className="col-2">
                        <h1> &#60; Coder &#62; </h1>
                        <h2>React Developer Who Has Habbit
                            Of Writing clean and efficent code
                            Love HTML5 , Jsx , Css , JavaScript and little
                            Touch of Bootstrap and Nodejs</h2>
                    </div>
                    <div className="glass-box"></div>

                </div>




            </div >
        </motion.div>
    )
}

export default Home
