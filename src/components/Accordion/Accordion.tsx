import React from 'react';

type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
}

function Accordion(props: AccordionPropsType ) {
  debugger;
    console.log('Accordion rendering')
    if (props.collapsed) {
      return <div>
        <AccordionTitle title = {props.titleValue}/>
        </div>
      
    }  else return <div>
      <AccordionTitle title = {props.titleValue}/>
      <AccordionBody />
      </div>
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