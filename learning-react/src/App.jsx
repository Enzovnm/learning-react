import React from "react";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid'
import "./App.css"
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Header from "./components/Header";

const App = () => {


  const [task, setTask] = useState([
    {
      id: 1,
      title: 'Estudar programação',
      completed : false
    },    
    {
      id: 2,
      title: 'Ler livros',
      completed : true
    },
  ])

  const handleTaskClick = (taskId) => {
    const newTasks = task.map(task => {
      if(task.id === taskId) return {...task, completed: !task.completed}
      return task
    })
    setTask(newTasks)
  }

  const handleTaskAddition= (taskTitle) =>{
    const newTasks = [...task, {
      title: taskTitle,
      id : uuidv4(),
      completed: false

    }]

    setTask(newTasks)
  }

  const handletTaskDeletion = (taskId) => {
    const newTasks = task.filter(task => task.id !== taskId)

    setTask(newTasks)
  }

  return (
    <>
      <div className="container">
        <Header/>
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks = {task} handleTaskClick={handleTaskClick} handletTaskDeletion={handletTaskDeletion}/>
      </div>
    </>
    
  )
}

export default App;