import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Setting} from "./components/Counter/Setting/Setting";
import {NavLink, Route, Routes} from "react-router-dom";
import {Button} from "./components/Counter/Button";
import App1 from "./TODOLIST/App1";


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

    const numbers = [1, 2, 3, 4]

    numbers.forEach((num) => {
        const square = num * num
        console.log('Квадрат числа равен: ' + square)
    })


    return (
        <App1/>

        // <div>
        //     <div>
        //         <Routes>
        //             <Route path={'/boss'} element={<Button click={click} title={''} onClick={()=>{}} class={''}/>}/>
        //             <Route path={'/set'} element={<Setting click={click}/>}/>
        //         </Routes>
        //     </div>
        //     <div className='App1'>
        //         <div className='container'>
        //             <Counter click={click}
        //                      buttonReset={buttonReset}
        //                      buttonInc={buttonInc}
        //             />
        //         </div>
        //     </div>
        // </div>
    );
}

export default App;