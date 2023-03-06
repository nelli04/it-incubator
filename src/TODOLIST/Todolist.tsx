import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App1';
import {Input} from "./Input";
import {EditableSpan} from "./EditableSpan";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (id: string) => void
    filter: FilterValuesType
    editTask: (todolistId: string, taskId: string, newTask: string) => void
    editTodolist: (todolistId: string, newTask: string) => void
}

export function Todolist(props: PropsType) {

    const onAllClickHandler = () => props.changeFilter("all", props.id);
    const onActiveClickHandler = () => props.changeFilter("active", props.id);
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id);
    const removeTodolist = () => props.removeTodolist(props.id)
    const addTaskHandler = (title: string) => {
        props.addTask(props.id, title)
    }
    const editTask = (newTask: string, taskId: string) => {
        props.editTask(props.id, taskId, newTask)
    }
    const editTodolistHandler = (newTask: string) => {
        props.editTodolist(props.id, newTask)
    }

    return <div>
        <h3>
            <EditableSpan title={props.title} editTask={editTodolistHandler}/>
            <button onClick={removeTodolist}>X</button>

        </h3>
        <Input addTask={addTaskHandler}/>
        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id, props.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.id, newIsDoneValue, props.id);
                    }

                    return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>
                        <EditableSpan title={t.title} editTask={(newTask)=>editTask(t.id, newTask)}/>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter === 'all' ? "active-filter" : ""}
                    onClick={onAllClickHandler}>All
            </button>
            <button className={props.filter === 'active' ? "active-filter" : ""}
                    onClick={onActiveClickHandler}>Active
            </button>
            <button className={props.filter === 'completed' ? "active-filter" : ""}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
}

