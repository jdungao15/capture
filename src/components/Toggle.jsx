import React, {useState} from 'react';
import {motion} from "framer-motion";
import {titleAnim} from "../animation.js";

export const Toggle = ({children, title, layoutId}) => {
   const [toggle, setToggle] = useState(false);
   // const paraAnim = {
   //    hidden: {
   //       opacity: 0,
   //    },
   //    visibility: {
   //       opacity: 1,
   //       transition: {
   //          duration: 1
   //
   //       }
   //    }
   // }
   const childrenContext = (
      <motion.div
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5 }}
      >{children}</motion.div>
   )
   return (
      <motion.div layout layoutId={layoutId} className="question" onClick={()=> setToggle(!toggle)}>
         <motion.h4 layout>{title}</motion.h4>
         {toggle ? childrenContext : ""}
         <div className="faq-line"></div>
      </motion.div>
   );
};