import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';

function App() {
  return (
    <div>
    <Accordion/>
    <Rating />
    </div>
  );
}

function Star() {
  console.log('Star rendering')
  return (
    <div>star</div>
  );
}

function Rating() {
  return (
    <>
    <Star />
    <Star />
    <Star />
    <Star />
    <Star />
    </>
  )
  
}


export default App;
