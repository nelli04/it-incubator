import React, {ChangeEvent, FC, KeyboardEvent, useState} from 'react';

type InputTodolistProps = {
    maxLengthUserMessages: number
    addTasks: (title: string) => void
}

export const InputTodolist: FC<InputTodolistProps> = ({

  addTasks,
}) => {
    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const maxLengthUserMessage: number = 15
    const isUserMessageToLong: boolean = title.length > maxLengthUserMessage
    const isAddBtnDisabled = !title.length || isUserMessageToLong || error
    const userMaxLengthMessage = isUserMessageToLong && <div style={{color: "hotpink"}}>Task title is to long!</div>

    const changeLocalTitle = (e: ChangeEvent<HTMLInputElement>) => {
        error && setError(false)
        setTitle(e.currentTarget.value)
    }
    const addTask = () => {
        if (title.trim()) {
            addTasks(title.trim())
        } else {
            setError(true)
        }
        setTitle("")
    }
    const onKeyDownAddItem = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && addTask()
    }
    const onKeyDownHandler = isAddBtnDisabled ? undefined : onKeyDownAddItem

    const inputErrorClasses = error || isUserMessageToLong ? "input-error" : ""
    const userErrorMessage = error && <div style={{color: "hotpink"}}>Title is required!</div>

    return (
        <div>
            <input
                value={title}
                placeholder="Please, enter title"
                onChange={changeLocalTitle}
                onKeyDown={onKeyDownHandler}
                className={inputErrorClasses}
            />

            <button disabled={isAddBtnDisabled} onClick={addTask}>+</button>
            {userMaxLengthMessage}
            {userErrorMessage}
        </div>
    );
};

