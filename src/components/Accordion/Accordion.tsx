import React from 'react';

function Accordion(props: any) {
    console.log('Accordion rendering')
    return (
      <div>
    <AccordionTitle title = {props.title}/>
    <AccordionBody />
    </div>
    )
  }
  
  function AccordionTitle(props: any) {
    console.log('AccordionTitle rendering')
    return (
      <h3>{props.title}</h3>
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

  export default Accordion;