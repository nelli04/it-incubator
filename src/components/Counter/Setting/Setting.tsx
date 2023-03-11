import React from 'react';
import s from './Setting.module.css'
import {Arrow} from "../Arrow/Arrow";
import {Button} from "../Button";
import {NavLink} from "react-router-dom";

export type SetType = {
    click: number
}

export const Setting = (p: SetType) => {
    return (
            <div className={s.cntnr}>
                <div className={s.count}>
                    <NavLink to={'/boss/count'}><Arrow/></NavLink>
                    <div className={s.ipt}>

                        <div className={s.input}>
                            <div>
                                <input type='number' className={s.up}/>
                            </div>
                            <div>
                                <input type='number' className={s.down}/>
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