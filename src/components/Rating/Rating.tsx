import React from 'react';

function Star(props: any) {
  console.log('Star rendering')
  if (props.selected === true) {
    return <span><b>star-</b></span>
  } else {
    return <span>star-</span>
  }
}

function Rating() {
  return (
    <div>
    <Star selected = {true}/>
    <Star selected = {false}/>
    <Star selected = {true}/>
    <Star selected = {false}/>
    <Star selected = {true}/>
    </div>
  )
  
}

  export default Rating;