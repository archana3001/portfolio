import React from 'react';
import './project.css';
import Proj from '../assets/project.jpeg';

export default function Projects(){
  return(
    <>
    <div className="row">
    <div className="column">
    <div class="card">
  <img  className="cardimage"src={Proj} />
  <div class="container">
    <h4><b><a  href="https://archanaknitp.web.app">Portfolio</a></b></h4>
    <p>UI<br/>Angular + Firebase</p>
  </div>
</div>
    </div>
    <br/>
    <br/>

    <div className="column">
    <div class="card">
  <img  className="cardimage"src={Proj} />
  <div class="container">
    <h4><b><a  href="https://scribe1-5e765.web.app">Scribe </a></b></h4>
    <p>UI<br/>Angular</p>
  </div>
</div>
    </div>
    <br/>
    <br/>

    <div className="column">
    <div class="card">
      <img  className="cardimage" src={Proj}   />
      <div class="container">
        <h4><b><a href="https://ez1e3.csb.app/login">Article Management</a></b></h4>
        <p>React Frontend & Api Integration</p>
      </div>
    </div>
    </div>
    <br/>
    <br/>
    </div>
    <br/>
    <br/>
  </>
)
}
