import React from 'react';
import {Button} from "../Button";
import {NavLink} from "react-router-dom";
import {Arrow} from "../Arrow/Arrow";

export type SetType = {
    click: number
}

export const Setting = (p: SetType) => {
    debugger;
    return (
        <div>
            <div>
                <NavLink to={'/set'}><Button
                    click={p.click}
                    title='set'
                    class={'set'}
                /></NavLink>

            </div>
        </div>
    );
};


// <Routes>
//     <Route path={'/'} element={<Navigate to={'/*'}/>}/>
//     {/*<Route path={'/set'} element={'hello'}/>*/}
// </Routes>