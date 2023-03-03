import React, {useState} from 'react';


type BossType = {
    class: string
    title: string
    click: number
    onClick: () => void
}

export const Button = (p: BossType) => {

    return (
        <div>
            <button onClick={p.onClick}>{p.title}</button>
        </div>
    );
};

/* <button className='set' onClick={()=> {}}>set</button>
                <button className={p.click >= 1 ? 'reset' : 'true_false'} /*onClick={p.buttonReset}>reset</button>*/

//buttonInc: () => void
//buttonReset: () => void