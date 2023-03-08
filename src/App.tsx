import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import App1 from "./TODOLIST/App1";
import App2 from "./TODOLIST/src/App2";

function App() {

  let [click, setClick] = useState(0)
  const maxInc = 5;

  const buttonInc = () => {
    if (click === maxInc) {
      return
    } else {
      setClick((count) => count + 1)
    }
  }
  const buttonReset = () => {
    setClick(0)
  }

  return (
      <App2/>

      // <div className='App1'>
      //   <div className='container'>
      //       <Counter click={click}
      //                buttonReset={buttonReset}
      //                buttonInc={buttonInc}
      //       />
      //   </div>
      // </div>
  );
};

export default App;