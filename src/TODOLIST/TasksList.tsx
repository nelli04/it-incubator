import React, {ChangeEvent, FC} from 'react';
import {TaskType} from "./TodoList";
import {InputTitle} from "./InputTitle";
import {Checkbox, IconButton, TextField} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

type TasksListPropsType = {
    todoListId: string
    tasks: TaskType[]
    removeTask: (taskId: string, todoListId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todoListId: string) => void
    changeTaskTitle: (taskId: string, todoListId: string, newTitle: string) => void
}

const TasksList: FC<TasksListPropsType> = (props): JSX.Element => {

    const tasksItems: JSX.Element[] | JSX.Element =
        props.tasks.length
        ? props.tasks.map((task) => {
            const taskClasses = task.isDone ? "task task-done" : "task"
            const removeTaskHandler = () => props.removeTask(task.id, props.todoListId)
            const changeTaskStatusHandler =
                (e: ChangeEvent<HTMLInputElement>) => props.changeTaskStatus(task.id, e.currentTarget.checked, props.todoListId)

            const changeTaskTitleHandler = (title: string) => {
                props.changeTaskTitle(task.id, props.todoListId, title)
            }
            return (
                <li key={task.id}>
                    <Checkbox

                        checked={task.isDone}
                        onChange={changeTaskStatusHandler}
                    />
                    <span className={taskClasses}></span>
                    <InputTitle newTitles={task.title} spanClasses={taskClasses}
                                changeTitle={changeTaskTitleHandler}/>
                    <IconButton onClick={removeTaskHandler}>
                        <DeleteIcon />
                    </IconButton>
                </li>
            )
        })
        : <span>Your taskslist is empty</span>
    return (
        <ul>
            {tasksItems}
        </ul>
    );
};

export default TasksList;