import React from 'react';
import {FaStar, FaRegStar} from "react-icons/fa";
import './certi.css';

export default function Home(){
  return(
    <>

    <h2>SOFT SKILLS:</h2>    <br/>
    <div className="row">
    <div className="column">
     Adaptability
    </div>
    <div className="column">
     Creativity
    </div>
    <div className="column">
     Teamwork
    </div>
    <div className="column">
     Work Ethic
    </div>
    </div>

    <br/><br/>
    <h2>TECHNICAL SKILLS:</h2>    <br/>
<div className="row">
<div className="column">
 Web Development
<br/><p>
 Angular<br/>
 React<br/>
 Express<br/>
 NodeJs<br/>
 MongoDB<br/>
</p>
</div>
<br/>
<br/>

<div className="column">
 Languages
<p>C/C++: <FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/><br/>
Python:<FaStar/><FaStar/><FaStar/><FaRegStar/><FaRegStar/><br/>
JavaScript: <FaStar/><FaStar/><FaStar/><FaRegStar/><FaRegStar/><br/></p>
</div>
<br/>
<br/>

<div className="column">
Data Structers & Algorithms
<p></p>
</div>
<br/>
<br/>

</div>



</>
)}
