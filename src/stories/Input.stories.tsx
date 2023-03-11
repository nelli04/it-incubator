import React, {ChangeEvent, useRef, useState} from 'react';
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
    const inputHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }
    return <><input onChange={inputHandler}/> - {value}</>
}
export const GetTrackInputValue = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const inputHandler = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <><input ref={inputRef} id={'id'}/><button onClick={inputHandler}>save</button> actual value - {value}</>
}
