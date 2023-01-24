import React from 'react';

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

  export default Rating;