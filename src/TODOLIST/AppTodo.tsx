import React from "react";




























/*
import React, {useState} from 'react';
import './App1.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
export type TodolistsType = {}

function App1() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<TodolistsType[]>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    function removeTask(id: string, taskID: string) {
        const removeTasks = tasks[taskID]
        let filteredTasks = removeTasks.filter(t => t.id != id);
        setTasks(filteredTasks);
    }

    function addTask(title: string, taskID: string) {
        let task = {id: v1(), title: title, isDone: false};
        let newTasks = [task, ...tasks];
        setTasks(newTasks);
    }

    function changeStatus(taskId: string, isDone: boolean, taskID: string) {
        let task = tasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
        }

        setTasks([...tasks]);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }


    return (
        <div className="App1">
            {todolists.map((el) => {

                    let tasksForTodolist = tasks[el.id];

                    if (filter === "active") {
                        tasksForTodolist = tasks.filter(t => t.isDone === false);
                    }
                    if (filter === "completed") {
                        tasksForTodolist = tasks.filter(t => t.isDone === true);
                    }

                        return (
                            <Todolist title="What to learn"
                                      tasks={tasksForTodolist}
                                      removeTask={removeTask}
                                      changeFilter={changeFilter}
                                      addTask={addTask}
                                      changeTaskStatus={changeStatus}
                                      filter={filter}
                            />
                        )
                    }
                )
            }
        </div>
    );
}

export default App1;
*/
