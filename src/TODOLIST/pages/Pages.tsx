import React from 'react';
import {PagesType} from "../data/dataState";
import {useParams} from "react-router-dom";

export type PagesTypeProps = {
    pages: PagesType[]
}

export const Pages = (props: PagesTypeProps) => {

    const params = useParams()
    console.log(Number(params.id))
    return (
        <div>
            <div>
                {props.pages[Number(params.id)].heading}
            </div>
            <div>
                {props.pages[Number(params.id)].about}
            </div>
        </div>
    );
};
