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
      y: 300
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