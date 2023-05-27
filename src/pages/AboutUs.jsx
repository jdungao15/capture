import React from 'react';
//Page Components
import AboutSection from "../components/AboutSection.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import FaqSection from "../components/FaqSection.jsx";
// Animation
import {motion} from "framer-motion";
import {pageAnimation} from "../animation.js";

const AboutUs = () => {
   return (
      <motion.div exit="exit" variants={pageAnimation} initial='hidden'  animate='visible'>
         <AboutSection/>
         <ServicesSection/>
         <FaqSection/>
      </motion.div>
   );
};

export default AboutUs;
