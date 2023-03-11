import React from 'react';

type ItemType = {
  title: string
  value: any
}

type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
  onChange: () => void
  items: ItemType[]
  onClick: (value: any) => void
}

function Accordion(props: AccordionPropsType ) {
    console.log('Accordion rendering')
      return <div>
        <AccordionTitle title = {props.titleValue} onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
  }
 
  type AccordionTitlePropsType = {
    title: string;
    onChange: () => void
    //items: string[]
  }
  
  function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
      <h3 onClick={(e)=> props.onChange()}>{props.title}</h3>
    )
  }

  type AccordionBody = {
    items: ItemType[]
    onClick: (value: any) => void
  }
  
  function AccordionBody(p: AccordionBody) {
    console.log('AccordionBody rendering')
    return (
      <>
        { p.items.map((i, index) => <li key={index} onClick={()=> {p.onClick(i.value)}}>{i.title}</li>) }
      </>
    )
  }

  export default Accordion;





























