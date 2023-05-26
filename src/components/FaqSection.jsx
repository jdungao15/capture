import React from 'react';
import styled from 'styled-components'
import {About} from '../styles.js'

const FaqSection = () => {
   return (
      <Faq>
         <h2>Any Question <span>FAQ</span></h2>
         <div className="question">
            <h4>How Do I Start?</h4>
            <div className="answer">
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, asperiores commodi cumque distinctio eius error illum nam nostrum, perspiciatis quas quos recusandae unde? Itaque labore laudantium, nesciunt quos repellat veniam?</p>
            </div>
            <div className="faq-line"></div>
         </div>
         <div className="question">
            <h4>Daily Schedule</h4>
            <div className="answer">
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid assumenda consequuntur cumque expedita, illo molestias officiis perspiciatis placeat quam quasi similique soluta veritatis! Animi, aspernatur odio? Aliquid, eligendi, quibusdam.</p>
            </div>
            <div className="faq-line"></div>
         </div>
         <div className="question">
            <h4>Different Payments</h4>
            <div className="answer">
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consectetur earum error, et excepturi fuga id iusto mollitia nemo neque obcaecati officiis placeat quo repellat saepe sed unde veniam, vero?</p>
            </div>
            <div className="faq-line"></div>
         </div>
         <div className="question">
            <h4>What Products do you offer?</h4>
            <div className="answer">
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias, animi architecto aspernatur, deleniti dolorum error in inventore iste iure, magni nesciunt nostrum odit possimus quaerat rerum soluta ut veritatis?</p>
            </div>
         </div>
         <div className="faq-line"></div>
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
`

export default FaqSection;
