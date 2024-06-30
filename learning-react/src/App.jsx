import React, { useEffect } from "react";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid'
import "./App.css"
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import TaskDetails from "./components/TaskDetails";



const App = () => {


  const [task, setTask] = useState([])

  useEffect(() =>{
    const fetchTasks = async () => {
      const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10')
      setTask(data)
    }

    fetchTasks()
  }, [] )


  const handleTaskClick = (taskId) => {
    const newTasks = task.map(task => {
      if(task.id === taskId) return {...task, completed: !task.completed}
      return task
    })
    setTask(newTasks)
  }

  const handleTaskAddition= (taskTitle) =>{
    if(!taskTitle) return

    const newTasks = [...task, {
      title: taskTitle,
      id : uuidv4(),
      completed: false

    }]

    setTask(newTasks)
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = task.filter(task => task.id !== taskId)

    setTask(newTasks)
  }

  return (
    <Router basename="/learning-react">
      <div className="container">
        <Header/>
        <Route path="/" exact render={() => (
          <>
            <AddTask handleTaskAddition={handleTaskAddition}/>
            <Tasks tasks = {task} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
          </>
        )}
        />
        <Route path="learning/:taskTitle" exact component={TaskDetails} />
      </div>
    </Router>
    
  )
}

export default App;