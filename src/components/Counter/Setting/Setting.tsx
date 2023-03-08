import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Setting.module.css'
import {Arrow} from "../Arrow/Arrow";
import {Button} from "../Button";

export type SetType = {
    click: number
}

export const Setting = (p: SetType) => {
    debugger;
    return (
        <div className={s.cntnr}>
            <div className={s.count}>
                <Arrow/>
                <NavLink to={'/set'}></NavLink>
                <div className={s.ipt}>
                    <div className={s.input}>
                        <input type='number' className={s.up}/>
                        <input type='number' className={s.down}/>
                    </div>
                </div>
                <div className={s.inpt}>
                    <div className={s.save}>
                        <Button
                            click={p.click}
                            title='save'
                            class={'set'}
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