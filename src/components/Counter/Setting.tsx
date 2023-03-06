import React from 'react';
import {Button} from "./Button";
import { Navigate, NavLink, Route, Routes} from "react-router-dom";
import styles from './Setting.module.css'

export type SetType = {
    click: number
}

export const Setting = (p: SetType) => {
    debugger;
    return (
        <div>
            <div>
                <NavLink to={'/set'}>{<Button click={p.click} title='set' class={'set'}/>}</NavLink>
            </div>
            <div>

            </div>

        </div>
    );
};




// <Routes>
//     <Route path={'/'} element={<Navigate to={'/*'}/>}/>
//     {/*<Route path={'/set'} element={'hello'}/>*/}
// </Routes>