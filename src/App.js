import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import './App.css';
import NavMenuExample from './components/NavMenuExample';
import Home from './components/Home';
import  About from './components/About';
import Projects from './components/Projects';
import Edu from './components/Edu';
import Work from './components/Work';

function App() {
  return (
<>
  <div className="App">
    <Router>
    
    <NavMenuExample/>
    <Home/>
    <Route path="/about">
     <About/>
      <Edu/>
       <Work/>
        </Route>

        <Route path="/projects">
        <Projects/>
            </Route>
    </Router>
    <br/><br/>
    <div>&copy; arc3001</div>
    </div>

</>

  );
}

export default App;
