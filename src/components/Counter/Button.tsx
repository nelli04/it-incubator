import React, {useState} from 'react';




type BossType = {
    buttonInc: () => void
    buttonReset: () => void
    click: number
}

export const Button = (p: BossType) => {

    return (
        <div>

            <div className='btn'>
                <button className={p.click >= 5 ? 'ic' : 'inc'} onClick={p.buttonInc}>inc</button>
                <button className='set' onClick={()=> {}}>set</button>
                <button className={p.click >= 1 ? 'reset' : 'true_false'} onClick={p.buttonReset}>reset</button>
            </div>
        </div>
    );
};

