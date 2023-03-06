import React, {ChangeEvent, useState} from 'react';

type EditType = {
    title: string //oldTitle
    editTask: (newTask: string) => void
}

export const EditableSpan = (props: EditType) => {

    let [newTitle, setNewTitle] = useState(props.title)
    const [edit, setEdit] = useState(false)

    const EditOnDoubleClickHandler = () => {
        setEdit(!edit)
        props.editTask(newTitle)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    return (
        edit
            ? <input value={newTitle} onChange={onChangeHandler} onBlur={EditOnDoubleClickHandler} autoFocus/>
            : <span onDoubleClick={EditOnDoubleClickHandler}>{props.title}</span>

    );
};