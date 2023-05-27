import React from 'react';
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {pageAnimation} from "../animation.js";

const ContactUs = () => {
   return (
      <motion.div
         exit="exit"
         variants={pageAnimation}
         initial="hidden"
         animate="visible"
         style={{background: "#fff"}}>
         <h1>OurContact</h1>
      </motion.div>
   );
};

export default ContactUs;
