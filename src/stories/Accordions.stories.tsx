import React, {ChangeEvent, useRef, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import Accordion from "../components/Accordion/Accordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'input',
    component: Accordion,
}

const callback = action('accordion change')
const callback1 = action('accordion click change')

export const Accordions = () => <Accordion titleValue={'Menu'}
                                           collapsed={true}
                                           onChange={callback}
                                           items={[]}
                                           onClick={callback}
/>
export const Accordions2 = () => <Accordion titleValue={'Users'}
                                            collapsed={false}
                                            onChange={callback}
                                            items={[{title: 'A', value: 1}, {title: 'B', value: 2}, {title: "C", value: 3}]}
                                            onClick={callback1}
/>

export const Accordions3 = () => {
    const [value, setValue] = useState(true)
    return <Accordion titleValue={'Users'} collapsed={value}
                      onChange={()=>setValue(!value)}
                      items={[{title: 'A', value: 1}, {title: 'B', value: 2}, {title: "C", value: 3}]}
                      onClick={callback1}
    />
}


























//-----------------------------------------------------------------------------
/*export const UncontrolledInput = () => <input/>
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
}*/
/*export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const currentTargetInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const inputs = e.currentTarget.value
        setParentValue(inputs)
    }
    return <input value={parentValue} onChange={currentTargetInputHandler}/>
}
export const ControlledInputSelect = () => {
    const [select, setSelect] = useState<string | undefined>(undefined)
    const onChangeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelect(e.currentTarget.value)
    }

    return (
        <select value={select} onChange={onChangeSelectHandler}>
            <option>none</option>
            <option value={'1'}>Msk</option>
            <option value={'2'}>none</option>
            <option value={'3'}>Msk</option>
        </select>
    )
}
export const ControlledCheckboxInput = () => {
    const [checkbox, setCheckbox] = useState(true)
    const checkboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckbox(e.currentTarget.checked)
    }
    return <input type='checkbox' checked={checkbox} onChange={checkboxHandler}/>
}*/