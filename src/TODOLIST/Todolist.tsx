import React, {ChangeEvent, FC, RefObject, useRef, useState, KeyboardEvent} from 'react';
import TasksList from "./TasksList";
import {FilterValuesType} from "./App1";
import {InputTodolist} from "./InputTodolist";
import {InputTitle} from "./InputTitle";

type TodoListPropsType = {
    todoListId: string
    title: string
    filter: FilterValuesType
    tasks: TaskType[]

    removeTask: (taskId: string, todoListId: string) => void
    addTask: (title: string, todoListId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todoListId: string) => void
    changeTaskTitle: (taskId: string, todoListId: string, newTitle: string) => void
    changeTodolistTitle: (taskId: string, todoListId: string) => void

    changeTodoListFilter: (filter: FilterValuesType, todoListId: string) => void
    removeTodoList: (todoListId: string) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

const TodoList: FC<TodoListPropsType> = (props) => {

    const addTask = (title: string) => {
        props.addTask(title, props.todoListId)
    }

    const handlerCreator = (filter: FilterValuesType) => () => props.changeTodoListFilter(filter, props.todoListId)
    const removeTodoList = () => props.removeTodoList(props.todoListId)

    return (
        <div className={"todolist"}>
            <h3><InputTitle newTitles={props.title} changeTitle={()=>{}}/>
                <button onClick={removeTodoList}>x</button>
            </h3>
            <InputTodolist maxLengthUserMessages={15} addTasks={addTask}/>
            <TasksList
                todoListId={props.todoListId}
                tasks={props.tasks}
                removeTask={props.removeTask}
                changeTaskStatus={props.changeTaskStatus}
                changeTodolistTitle={props.changeTodolistTitle}
            />
            <div className="filter-btn-container">

                <button
                    className={props.filter === "all" ? "active-filter-btn" : "filter-btn"}
                    onClick={handlerCreator('all')}
                >All
                </button>

                <button
                    className={props.filter === "active" ? "active-filter-btn" : "filter-btn"}
                    onClick={handlerCreator("active")}
                >Active
                </button>

                <button
                    className={props.filter === "completed" ? "active-filter-btn" : "filter-btn"}
                    onClick={handlerCreator("completed")}
                >Completed
                </button>
            </div>
        </div>
    );
};

export default TodoList;