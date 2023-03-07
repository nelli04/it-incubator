import React, {useState} from 'react';
import './App1.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';
import {Input} from "./Input";

export type FilterValuesType = "all" | "active" | "completed";
type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

type TasksStateType = {
    [key: string]: Array<TaskType>
}

function App1() {

    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, setTodolists] = useState<TodolistType[]>([
        {id: todolistId1, title: "What to learn", filter: 'all'},
        {id: todolistId2, title: "What to buy", filter: 'all'}
    ])

    let [tasks, setTasks] = useState<TasksStateType>({
        [todolistId1]: [
            {id: v1(), title: "HTML&CSS1111", isDone: true},
            {id: v1(), title: "JS1111", isDone: true}
        ],
        [todolistId2]: [
            {id: v1(), title: "HTML&CSS22222", isDone: true},
            {id: v1(), title: "JS2222", isDone: true}
        ]
    });

    const editTask = (todolistId: string, taskId: string, newTask: string) => {
        const editValue = {...tasks, [todolistId]: tasks[todolistId].map(el => el.id === taskId ? {...el, title: newTask} : el)}
        setTasks(editValue)
    }

    const editTodolist = (todolistId: string, newTask: string) => {
        setTodolists(todolists.map(el => el.id === todolistId ? {...el, title: newTask} : el))
    }

    const removeTodolist = (todolistId: string) => {
        setTodolists(todolists.filter(el => el.id !== todolistId))
        delete tasks[todolistId]
    }

    function removeTask(id: string, todolistId: string) {
        let todolistTasks = tasks[todolistId];
        tasks[todolistId] = todolistTasks.filter(t => t.id !== id);
        setTasks({...tasks});

        /*setTasks({
            ...tasks,
            [todolistId]: {...tasks[todolistId], data: tasks[todolistId].data.filter(el => el.id !== taskId)}
        })*/
    }

    function addTask(todolistId: string, title: string) {
        let task = {id: v1(), title: title, isDone: false};
        //достанем нужный массив по todolistId:
        let todolistTasks = tasks[todolistId];
        // перезапишем в этом объекте массив для нужного тудулиста копией, добавив в начало новую таску:
        tasks[todolistId] = [task, ...todolistTasks];
        // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
        setTasks({...tasks});
    }

    function changeStatus(id: string, isDone: boolean, todolistId: string) {
        //достанем нужный массив по todolistId:
        let todolistTasks = tasks[todolistId];
        // найдём нужную таску:
        let task = todolistTasks.find(t => t.id === id);
        //изменим таску, если она нашлась
        if (task) {
            task.isDone = isDone;
            // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
            setTasks({...tasks});
        }
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        let todolist = todolists.find(tl => tl.id === todolistId);
        if (todolist) {
            todolist.filter = value;
            setTodolists([...todolists])
        }
    }

    const addTodolist = (newTitle: string) => {
        const newTodoID = v1();
        const addNewTodolist: TodolistType = {id: newTodoID, title: newTitle, filter: 'all'}
        setTodolists([...todolists, addNewTodolist])
        setTasks({[newTodoID]: [{id: v1(), title: "HTML&CSS1111", isDone: true},
                {id: v1(), title: "JS1111", isDone: true}], ...tasks })
    }

    return (
        <div className="App">
            <Input addTask={addTodolist}/>
            {todolists.map(tl => {
                let allTodolistTasks = tasks[tl.id];
                let tasksForTodolist = allTodolistTasks;

                if (tl.filter === "active") {
                    tasksForTodolist = allTodolistTasks.filter(t => t.isDone === false);
                }
                if (tl.filter === "completed") {
                    tasksForTodolist = allTodolistTasks.filter(t => t.isDone === true);
                }
                return <Todolist
                    key={tl.id}
                    id={tl.id}
                    title={tl.title}
                    tasks={tasksForTodolist}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    changeTaskStatus={changeStatus}
                    filter={tl.filter}
                    removeTodolist={removeTodolist}
                    editTask={editTask}
                    editTodolist={editTodolist}
                />
            })}
        </div>
    );
}

export default App1;




