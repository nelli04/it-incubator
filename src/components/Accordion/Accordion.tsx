import React from 'react';

type AccordionPropsType = {
  title: string;
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return (
      <div>
    <AccordionTitle title = {props.title}/>
    <AccordionBody />
    </div>
    )
  }

  type AccordionTitlePropsType = {
    title: string;
  }
  
  function AccordionTitle(props: AccordionTitlePropsType) {
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