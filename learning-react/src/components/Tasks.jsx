import React from "react";

import Task from "./Task"


const Tasks = ({tasks, handleTaskClick, handletTaskDeletion}) =>{
    return (
        <>
            {tasks.map((task) => <Task task={task} handleTaskClick={handleTaskClick} handletTaskDeletion={handletTaskDeletion}/>)}
        </>
    )
}

export default Tasks