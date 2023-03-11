import React, {useEffect, useState} from 'react';
import s from './Setting.module.css'
import {Arrow} from "../Arrow/Arrow";
import {Button} from "../Button";
import {NavLink} from "react-router-dom";

export type SetType = {
    click: number
    //value: number
    //setValue: (newValue: any) => any
}

export const Setting = (p: SetType) => {
    const [value, setValue] = useState(0)

    useEffect(()=> {
        let values = localStorage.getItem('counter value')
        if(values) {
            let newValue = JSON.parse(values)
            setValue(newValue)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('counter value', JSON.stringify(value))
    }, [value])

    const saveValue = () => {
        setValue(value + 1)
    }

    return (
            <div className={s.cntnr}>
                <div className={s.count}>
                    <NavLink to={'/boss/count'}><Arrow/></NavLink>
                    <div className={s.ipt}>

                        <div className={s.input}>
                            <div>
                                <input type='number' className={s.up} value={value} onChange={saveValue}/>
                            </div>
                            <div>
                                <input type='number' className={s.down} onChange={saveValue}/>
                            </div>
                        </div>
                    </div>
                    <div className={s.inpt}>
                        <div className={s.save}>
                            <Button

                                click={p.click}
                                title='save'
                                class=''
                            />
                        </div>
                    </div>
                </div>
            </div>
    );
};


// <Routes>
//     <Route path={'/'} element={<Navigate to={'/*'}/>}/>
//     {/*<Route path={'/set'} element={'hello'}/>*/}
// </Routes>