export const pageAnimation = {
   hidden: {
      opacity: 0,
      y: 300
   },
   visible: {
      opacity: 1,
      y: 0,
      transition: {
         duration: 1,
         when: 'beforeChildren',
         staggerChildren: 0.25
      }
   },
   exit: {
      opacity: 0,
      transition: {
         duration: 0.5
      }
   }
};

export const titleAnim = {
   hidden: {y: 200},
   visible: {
      y: 0,
      transition: {duration: 0.75, ease: 'easeOut'}
   }
}

export const fade = {
   hidden: {opacity: 0},
   visible: {
      opacity: 1,
      transition: {ease: 'easeOut', duration: 0.75},
   }
}
export const photoAnim = {
   hidden: {scale:1.5, opacity: 0},
   visible: {
      scale: 1,
      opacity: 1,
      transition: {
         ease: 'easeOut',
         duration: 0.75
      }
   }
}
export const lineAnim = {
   hidden: {width: '0%'},
   visible: {
      width: '100%',
      transition: {duration: 1,}
   }
}
export const slider = {
   hidden: {x: '-130%', skew: '45deg'},
   visible: {
      x: '100%',
      skew: '0deg',
      transition: {
         ease:'easeOut',
         duration: 1
      }
   }
}
export const sliderContainer = {
   hidden: {opacity: 1},
   visible: {opacity: 1, transition: {staggerChildren: 0.15, ease: 'easeOut'}},
}