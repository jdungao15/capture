import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
const Nav = () => {
   const tap = {
      scale: 1.1,
      transition: {duration: 1},
   }

   return (
      <StyledNav>
         <h1><a id="logo" href="#">Capture</a></h1>
         <ul>
            <motion.li whileHover={tap}>
               <Link to="/"> 1. About Us </Link>
            </motion.li>
            <motion.li whileHover={tap}>
               <Link to="work">2. Our Work</Link>
            </motion.li>
            <motion.li whileHover={tap}>
               <Link to="contact">3. Contact Us</Link>
            </motion.li>
         </ul>
      </StyledNav>
   );
};
const StyledNav = styled.nav`
   min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style:none;
  }
  #logo{
    font-size: 2rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`


export default Nav;
