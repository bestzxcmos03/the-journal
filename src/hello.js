import React from 'react';
import './App.css';
import 'animate.css';
import logo from './logo.svg';
import {Link} from 'react-router-dom';
function Hello(){
    return (
        <div className="App">
          <header className="App-header">
            <h1 className="animate__animated animate__infinite animate__headShake " style={{marginBottom:"10%"}}>
              Super Journal
            </h1>
            <Link to = "/login">
              <img  src={logo} className="App-logo animate__animated animate__flip animate__infinite" alt="logo" />
            </Link>
            <p id="sequence" className="animate__animated animate__infinite animate__headShake" style={{marginTop:"10%"}}>
              
            </p>
            
          </header>
        </div>
    );
}

var example = ['Under developping.', 'Under developping..', 'Under developping...', 'Under developping....'];
textSequence(0);
function textSequence(i){
  if (example.length > i){
    setTimeout(function(){
      document.getElementById("sequence").innerHTML = example[i];
      textSequence(++i);
    }, 500); // 1 second (in milliseconds)
  } else if (example.length == i) { // Loop
    textSequence(0);}
}

export default Hello;