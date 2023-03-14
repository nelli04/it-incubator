import React, { FC} from 'react';
import TasksList from "./TasksList";
import {FilterValuesType} from "./App1";
import {InputTodolist} from "./InputTodolist";
import {InputTitle} from "./InputTitle";
import {Button, IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

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
    debugger
    return (
        <div className={"todolist"}>
            <h3>
                <InputTitle newTitles={props.title} changeTitle={()=>{}}/>
                <IconButton onClick={removeTodoList}>
                    <DeleteIcon />
                </IconButton>
            </h3>
            <InputTodolist maxLengthUserMessages={15} addTasks={addTask}/>

            <TasksList
                todoListId={props.todoListId}
                tasks={props.tasks}
                removeTask={props.removeTask}
                changeTaskStatus={props.changeTaskStatus}

                changeTaskTitle={props.changeTaskTitle}
            />
            <div className="filter-btn-container">

                <Button
                    onClick={handlerCreator('all')}
                    variant={props.filter === "all" ? "contained" : "text"}
                >All
                </Button>

                <Button
                    variant={props.filter === "active" ? "contained" : "text"}
                    onClick={handlerCreator("active")}
                    color={"primary"}
                >Active
                </Button>

                <Button
                    variant={props.filter === "completed" ? "contained" : "text"}
                    onClick={handlerCreator("completed")}
                    color={"inherit"}
                >Completed
                </Button>
            </div>
        </div>
    );
};

export default TodoList;