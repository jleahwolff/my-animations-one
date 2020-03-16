import React, {useRef, useEffect} from 'react';
import logo from './logo.svg';
import footprint from './footprint.png';
import './App.css';

import {TweenMax, Power3} from 'gsap';

function App() {
  let logoItem = useRef(null)
  let textItem = useRef(null)
  let fp1 = useRef(null)
  let fp2 = useRef(null)
  let fp3 = useRef(null)
console.log(logoItem)

// useEffect happens AFTER the page loads, so you wont see these changes happen until after the CSS file loads, and the page content is read. 
// useEffect(() => {
//   console.log(logoItem);
//   // logoItem.style.display = "none"
//   TweenMax.to(
//     logoItem,
//     8,
//     {
//       opacity: .75,
//       y: -60,
//     }
//   )
// }, [])

// MARKETINGZILLA
useEffect(() => {
  console.log(textItem);
  TweenMax.to(
    textItem,
    2,
    {
      opacity: 1,
      y:-20,
      ease: Power3.easeOut, 
      delay: .45
    }
  )
}, [])

useEffect(() => {
  console.log(fp1);
  // fp1.style.display = "none"
  TweenMax.to(
    fp1,
    1,
    {
      y:2,
      ease: Power3.easeOut,
      delay:1.2
    }
  )
}, [])

useEffect(() => {
  console.log(fp2);
  // fp1.style.display = "none"
  TweenMax.to(
    fp2,
    1,
    {
      y:2,
      ease: Power3.easeOut,
      delay:1.65
    }
  )
}, [])

useEffect(() => {
  console.log(fp3);
  // fp1.style.display = "none"
  TweenMax.to(
    fp3,
    1,
    {
      y:2,
      ease: Power3.easeOut,
      delay:2
    }
  )
}, [])


  return (
    <div className="App">
      <header className="App-header">
        {/* <img 
        ref={e => {logoItem = e}}
        src={logo} className="App-logo" alt="logo" /> */}
        <div className="footprints">
        <img 
        ref={e => {fp1 = e}}
        src={footprint} id="footprint1" alt="footprint" /> 
        <img src={footprint} 
        ref={e => {fp2 = e}}
        id="footprint2" alt="footprint" /> 
        <img src={footprint} 
        ref={e => {fp3 = e}}
        id="footprint3" alt="footprint" /> 
        </div>
        <p
        ref={e => {textItem = e}}>
        <code>marketingzilla</code>
        </p>
      </header>
    </div>
  );
}

export default App;
