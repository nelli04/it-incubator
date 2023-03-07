import React, {ChangeEvent, FC, KeyboardEvent, useState} from 'react';

type InputTodolistProps = {
    maxLengthUserMessages: number
    addTasks: (title: string) => void
}

export const InputTodolist: FC<InputTodolistProps> = ({
  maxLengthUserMessages,
  addTasks,
}) => {
    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const isAddBtnDisabled = !title.length
    const maxLengthUserMessage: number = 15
    const isUserMessageToLong: boolean = title.length > maxLengthUserMessage
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

    const onKeyDownHandler = () => {
    }
    const onKeyDownAddTask = (e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && addTask()
    const inputErrorClasses = error || isUserMessageToLong ? "input-error" : ""
    const userErrorMessage = error && <div style={{color: "hotpink"}}>Title is required!</div>

    return (
        <div>
            <input
                value={title}
                placeholder="Please, enter title"
                onChange={changeLocalTitle}
                onKeyDown={onKeyDownAddTask}
                className={inputErrorClasses}
            />

            <button disabled={isAddBtnDisabled} onClick={addTask}>+</button>
            {userMaxLengthMessage}
            {userErrorMessage}
        </div>
    );
};

