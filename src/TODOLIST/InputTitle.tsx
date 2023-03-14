import React, {ChangeEvent, FC, useState} from 'react';
import {TextField} from "@mui/material";

type InputTitleType = {
    newTitles: string
    spanClasses?: string
    inputClasses?: string
    changeTitle: (title: string) => void
}

export const InputTitle: FC<InputTitleType> = (
    {
        newTitles,
        spanClasses,
        changeTitle
    }) => {

    const [editMode, setEditMode] = useState<boolean>(false);
    const [title, setTitle] = useState<string>(newTitles);

    const changeLocalTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onEditMode = () => {
        setEditMode(true)
    }

    const offEditMode = () => {
        setEditMode(false)
        changeTitle(title)
    }

    return (
        editMode
            ? <TextField
                value={title}
                     onChange={changeLocalTitle}
                     onBlur={offEditMode}
                     autoFocus/>
            : <span className={spanClasses}
                    onDoubleClick={onEditMode}
            >{title}</span>
    );
};

