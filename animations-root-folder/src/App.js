import React, {useRef, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import {TweenMax, Power3} from 'gsap';

function App() {
  let logoItem = useRef(null)
  let textItem = useRef(null)
console.log(logoItem)


useEffect(() => {
  console.log(logoItem);
  // logoItem.style.display = "none"
  TweenMax.to(
    logoItem,
    .8,
    {
      opacity: .75,
      y:-20,
      ease: Power3.easeInOut
    }
  )
}, [])

useEffect(() => {
  console.log(textItem);
  // logoItem.style.display = "none"
  TweenMax.to(
    textItem,
    .8,
    {
      opacity: .5,
      y:-20,
      ease: Power3.easeOut, 
      delay: .5
    }
  )
}, [])


  return (
    <div className="App">
      <header className="App-header">
        <img 
        ref={e => {logoItem = e}}
        src={logo} className="App-logo" alt="logo" />
        <p
        ref={e => {textItem = e}}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
