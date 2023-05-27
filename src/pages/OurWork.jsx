import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import athlete from '../img/athlete-small.png';
import theRacer from '../img/theracer-small.png';
import goodTimes from '../img/goodtimes-small.png';
//Animation
import {motion} from "framer-motion";
import {pageAnimation} from "../animation.js";

const OurWork = () => {
   return (
      <Work
         exit="exit"
         variants={pageAnimation}
         initial='hidden'
         animate='visible'
         style={{background: "#fff"}}
      >
         <Movie>
            <h2>The Athlete</h2>
            <div className="line"></div>
            <Link to="the-athlete">
               <img src={athlete} alt="the-athlete"/>
            </Link>
         </Movie>
         <Movie>
            <h2>The Racer</h2>
            <div className="line"></div>
            <Link to="the-racer">
               <img src={theRacer} alt="the racer"/>
            </Link>
         </Movie>
         <Movie>
            <h2>Good Times</h2>
            <div className="line"></div>
            <Link to="good-times">
               <img src={goodTimes} alt="good times"/>
            </Link>
         </Movie>
      </Work>
   );
};
const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
 
`;
const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    border-radius: 55px;
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
