import React from 'react';
import './App.css';

function App() {
  return (
    <div>
    <Star />
    <Star />
    <Star />
    <Star />
    <Star />
    <Accordion/>
    <Star />
    <Star />
    <Star />
    <Star />
    <Star />
    </div>
  );
}

function Star() {
  console.log('Star rendering')
  return (
    <div>star</div>
  );
}

function Accordion() {
  console.log('Accordion rendering')
  return (
    <div>
  <AccordionTitle />
  <AccordionBody />
  </div>
  )
}

function AccordionTitle() {
  console.log('AccordionTitle rendering')
  return (
    <h3>Меню</h3>
  )
}

function AccordionBody() {
  console.log('AccordionBody rendering')
  return (
    <>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    </>
  )
}

export default App;
