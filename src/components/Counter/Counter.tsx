import React from 'react';
import {Button} from "./Button";


type BossType = {
    buttonInc: () => void
    buttonReset: () => void
    click: number
}


export const Counter = (p: BossType) => {

    return (
        <div className='count'>
            <div className={p.click === 5 ? 'red' : 'num'}>{p.click}</div>
            <div  className='btn'>
              <div >
                  <Button
                      click={p.click}
                      onClick={p.buttonInc}
                      title='inc'
                      class={p.click >= 5 ? 'ic' : 'inc'}
                  />
              </div>

                <Button
                    click={p.click}
                    onClick={p.buttonReset}
                    title='set'
                    class={p.click >= 1 ? 'reset' : 'true_false'}
                />
                <Button
                    click={p.click}
                    onClick={p.buttonReset}
                    title='reset'
                    class={p.click >= 1 ? 'reset' : 'true_false'}
                />
            </div>
        </div>

    );
}


/*buttonInc={p.buttonInc}*/ /*buttonReset={p.buttonReset}*/
/*buttonInc={p.buttonInc}*/ /*buttonReset={p.buttonReset}*/


/*
let [click, setClick] = useState(0)
const maxInc = 5;

const buttonInc = () => {
    if (click === maxInc) {
        return
    } else {
        setClick(click + 1)
    }
}
const buttonReset = () => {
    setClick(0)
}

return (
    <div className='count'>
        <div className={click === 5 ? 'red' : 'num'}>{click}</div>
        <div className='btn'>
            <button className='inc' onClick={buttonInc}>inc</button>
            <button className={click >= 1 ? 'reset' : 'true_false'} onClick={buttonReset}>reset</button>
        </div>
        {/!*<Button inc={buttonInc} reset={buttonReset}/>*!/}
    </div>

);*/
