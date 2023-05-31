import React, {useEffect} from 'react';
import {useInView} from 'react-intersection-observer'
import {useAnimation} from "framer-motion";

const useScroll = () => {
   const controls = useAnimation();
   const [element,view] = useInView({threshold: 0.5})
   console.log(view );
   useEffect(() => {
      view ? controls.start('visible'): controls.start('hidden')
   })
   return [element, controls]
};

export default useScroll;
