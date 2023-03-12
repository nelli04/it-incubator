import React, {useState} from 'react';
import './App1.css';
import TodoList, {TaskType} from "./TodoList";
import {v1} from "uuid";
import {InputTodolist} from "./InputTodolist";
// CRUD
// R - filter, sort, search

export type FilterValuesType = "all" | "active" | "completed"

type TodoListType = {
    id: string
    title: string
    filter: FilterValuesType
}

type TasksStateType = {
    [todoListId: string]: Array<TaskType>
}

type TodoListsStateType = Array<TodoListType>

function App1(): JSX.Element {
    //BLL:
    const todoListId_1 = v1()
    const todoListId_2 = v1()
    const [todoLists, setTodoLists] = useState<TodoListsStateType>([
        {id: todoListId_1, title: "What to learn", filter: "all"},
        {id: todoListId_2, title: "What to buy", filter: "all"},
    ])
    const [tasks, setTasks] = useState<TasksStateType>({
        [todoListId_1]: [
            {id: v1(), title: "HTML & CSS", isDone: true},
            {id: v1(), title: "ES6 & TS", isDone: true},
            // {id: v1(), title: "REACT & REDUX", isDone: false},
        ],
        [todoListId_2]: [
            {id: v1(), title: "MILK", isDone: true},
            {id: v1(), title: "BREAD", isDone: true},
            {id: v1(), title: "MEAT", isDone: false},
        ]
    })
    const removeTask = (taskId: string, todoListId: string) => {
        const tasksForUpdate = tasks[todoListId]
        const updatedTasks = tasksForUpdate.filter(t => t.id !== taskId)
        const copyTasks = {...tasks}
        copyTasks[todoListId] = updatedTasks
        setTasks(copyTasks)
        //
        setTasks({...tasks, [todoListId]: tasks[todoListId].filter(t => t.id !== taskId)})

    }
    const addTask = (title: string, todoListId: string) => {
        const newTask: TaskType = {
            id: v1(),
            title: title,
            isDone: false
        }
        setTasks({...tasks, [todoListId]: [newTask, ...tasks[todoListId]]})
    }
    const changeTaskStatus = (taskId: string, newIsDone: boolean, todoListId: string) => {
        setTasks({...tasks, [todoListId]: tasks[todoListId].map(t => t.id === taskId ? {...t, isDone: newIsDone} : t)})
    }
    const changeTodoListFilter = (filter: FilterValuesType, todoListId: string) => {
        setTodoLists(todoLists.map(tl => tl.id === todoListId ? {...tl, filter: filter} : tl))
    }
    const removeTodoList = (todoListId: string) => {
        setTodoLists(todoLists.filter(tl => tl.id !== todoListId))  // 2 tl
        //delete tasks[todoListId]
        const copyTasks = {...tasks}
        delete copyTasks[todoListId]
        setTasks(copyTasks)
    }

    const getFilteredTasks = (tasks: Array<TaskType>, filter: FilterValuesType): Array<TaskType> => {
        switch (filter) {
            case "active":
                return tasks.filter(t => t.isDone === false)
            case "completed":
                return tasks.filter(t => t.isDone)
            default:
                return tasks
        }
    }
    const addTodolist = (title: string) => {
        const newTodolistId = v1();
        const newTodolist: TodoListType = {
            id: newTodolistId,
            title: title,
            filter: 'all'
        }
        setTodoLists([...todoLists, newTodolist])
        setTasks({...tasks, [newTodolistId]: []})
    }
    const changeTaskTitle = (taskId: string, todoListId: string, newTitle: string) => {
        setTasks({...tasks, [todoListId]: tasks[todoListId].map(t => t.id === taskId ? {...t, newTitle: newTitle} : t)})
    }
    const changeTodolistTitle = (title: string, todoListId: string) => {
        setTodoLists(todoLists.map(tl => tl.id === todoListId ? {...tl, title: title} : tl))
    }

    const todoListsComponents = todoLists.map(tl => {
        const filteredTasks: Array<TaskType> = getFilteredTasks(tasks[tl.id], tl
            .filter)
        return (
            <TodoList
                key={tl.id}
                todoListId={tl.id}
                title={tl.title}
                tasks={filteredTasks}
                filter={tl.filter}

                removeTask={removeTask}
                addTask={addTask}
                changeTaskStatus={changeTaskStatus}
                changeTaskTitle={changeTaskTitle}
                changeTodolistTitle={changeTodolistTitle}

                changeTodoListFilter={changeTodoListFilter}
                removeTodoList={removeTodoList}
            />
        )
    })
    //UI:
    return (
        <div className="App">
            <InputTodolist maxLengthUserMessages={15} addTasks={addTodolist}/>
            {todoListsComponents}
        </div>
    );
}

export default App1;
