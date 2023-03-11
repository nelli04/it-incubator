import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import Accordion from "../components/Accordion/Accordion";



export default {
    title: 'input',
    //component: Accordion,
}

export const UncontrolledInput = () => <input/>
export const ControlledInput = () => <input value='It'/>
export const TrackInput = () => {
    const [value, setValue] = useState('')
    return <><input onChange={(e)=>{
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }}/> - {value}</>
}
