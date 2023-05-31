import React from 'react';
import styled from 'styled-components';
import {About} from '../styles.js';
import {Toggle} from "./Toggle.jsx";
import {LayoutGroup} from "framer-motion";
import useScroll from "./useScroll.jsx";
import {scrollReveal} from "../animation.js";

const FaqSection = () => {
   const [element,controls] = useScroll();
   return (
      <Faq variants={scrollReveal} ref={element} animate={controls} initial="hidden">
         <h2>Any Question <span>FAQ</span></h2>
         <LayoutGroup>
            <Toggle layoutId='faq1' title="How do I Start?">
               <div className="answer">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Aliquam, asperiores commodi cumque distinctio eius error
                     illum nam nostrum, perspiciatis quas quos recusandae unde?
                     Itaque labore laudantium, nesciunt quos repellat
                     veniam?</p>
               </div>

            </Toggle>
            <Toggle layoutId='faq2' title="Daily Schedule">
               <div className="answer">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Alias aliquid assumenda consequuntur cumque expedita, illo
                     molestias officiis perspiciatis placeat quam quasi similique
                     soluta veritatis! Animi, aspernatur odio? Aliquid, eligendi,
                     quibusdam.</p>
               </div>
            </Toggle>
            <Toggle layoutId='faq3' title="Different Payments">
               <div className="answer">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Aliquam consectetur earum error, et excepturi fuga id iusto
                     mollitia nemo neque obcaecati officiis placeat quo repellat
                     saepe sed unde veniam, vero?</p>
               </div>
            </Toggle>
            <Toggle layoutId='faq4' title="What Products do you offer?">
               <div className="answer">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                     alias, animi architecto aspernatur, deleniti dolorum error in
                     inventore iste iure, magni nesciunt nostrum odit possimus
                     quaerat rerum soluta ut veritatis?</p>
               </div>
            </Toggle>
         </LayoutGroup>
      </Faq>
   );
};
const Faq = styled(About)`
  display: block;

  span { 
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 2rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: .3rem 0rem;

    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
