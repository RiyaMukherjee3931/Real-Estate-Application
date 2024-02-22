import React from 'react'
import "./Extra.css"
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup';
import {motion} from 'framer-motion';

function Extra() {
  return (
      <section className="extra-wrapper">
        <div className="paddings innerwidth flexCenter extra-container">
        <div className="flexColStart extra-left">
        <div className="extra-title">
            <div className="blueCircle"></div>
            <motion.h1
            initial={{x:"2rem", opacity:0}}
            animate={{x:0, opacity:1}}
            transistion={{
              duration: 5,
              type:"ease-in",
            }}
            >Discover<br/>Most Perfect<br/> Property
            </motion.h1>
         </div>
         <div className="flexColStart extra-des">
            <span className="secondaryText">Find beautiful property that suite you the best</span>
            <span className="secondaryText">You will not face any difficulties in finding the best residence for you</span> 
         </div>
         <div className="flexCenter search-bar">
            <HiLocationMarker color="blue" size={25}>   
            </HiLocationMarker>
            <input type="text" />
            <button className="button">Search</button>
         </div>
         <div className="flexCenter stats">
            <div className="flexColCenter stat">
                <span>
                <CountUp start={8000} end={9000} duration={4}/>
                <span>+</span>
                </span>
                <span className="secondaryText">Premium Properties</span>
            </div>
            <div className="flexColCenter stat">
                <span>
                <CountUp start={50} end={90} duration={4}/>
                <span>+</span>
                </span>
                <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
                <span>
                <CountUp start={10} end={25} duration={4}/>
                <span>+</span>
                </span>
                <span className="secondaryText">Award Winning</span>
            </div>
         </div>
        </div>
        <div className="extra-right flexCenter">    
        <motion.div initial={{x:"7rem", opacity:0}}
                    animate={{x:0, opacity:1}}
                    transistion={{
                    duration: 5,
                    type:"ease-in",
        }} className="image-container">
          <img src="./mainimage.png" alt="main image"/>
          </motion.div>
        </div>
    </div>
      </section>
  )
}

export default Extra
