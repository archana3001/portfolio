import React from 'react';
import './NavMenu.css'
import {NavLink} from 'react-router-dom';

import { IoIosHome,IoIosAppstore } from 'react-icons/io';
import {IoLogoGithub, IoLogoLinkedin} from 'react-icons/io';
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare,FaHackerrank } from "react-icons/fa";


export default function NavMenu(){
  return(
    <>
    <br/><br/>
    <div className="navcreate">
    <ul >
    <li><NavLink to="/about"><IoIosHome/></NavLink></li>
    <li><NavLink to="/projects"><IoIosAppstore/></NavLink></li>
    <li>  <a href="https://github.com/archana3001">  <IoLogoGithub/></a></li>
<li><a href="https://www.linkedin.com/in/archana-kumari-284091193/">   <IoLogoLinkedin/></a></li>
    <li>    <a href="https://www.instagram.com/archana_3001/"> <FaInstagramSquare/> </a></li>
    <li>    <a href="mailto:archana7160092@gmail.com"> <MdEmail/> </a></li>
    <li><a href="https://www.hackerrank.com/archana7160092"><FaHackerrank/></a></li>
    </ul>
    <div>
    </div>
    </div>
    <br/>
    <br/>
    </>
  )}
