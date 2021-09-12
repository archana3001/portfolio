import React from 'react';
import './About.css';
import Pic from '../assets/pic.jpg';

import Certi from './Certi';
import Work from './Work';

export default function About(){
  return(
    <>
    <div className="row">
    <div className="column">
    <img src={Pic} alt="profile pic"/>
    <br/><br/>
      Archana Kumari
      <br/>
    </div>
    <div class="column">
    <br/>
    <br/>
    <h2>A positive, enthusiastic and competent Web Developer.</h2>
    <br/>
    “I am Computer Science Student at National Institute of Technology Patna, Bihar. I have experience in Web Development. 
    Also interested in Problem solving.”
    </div>
    </div>
    <br/>
    <br/>
   <Certi/>

  </>
)
}
