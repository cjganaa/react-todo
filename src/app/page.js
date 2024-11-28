"use client"
import './HomeStyle.css'
import {Card} from './card.js'
import {Form} from './form.js'
import { useState } from 'react';



export default function Home() {
  const [tasks, setTasks] = useState([])
  const [addFormVisible, setSeen] = useState(false);
  function handleAddForm(){
    setSeen(!addFormVisible);
  }
  function addTask(taskName,taskStatus){
    setTasks([...tasks, {name:taskName, status:taskStatus}]);
  }
  return (
    <div>
      {addFormVisible ?  <Form name="Add task" closeFunction = {handleAddForm} submitFunction = {addTask}/> : null}
      <div className='header'>
        <button className="addButton" onClick={handleAddForm}>Add task</button>
      </div>
      <div className='cards'>
        <Card name="Todo" dotColor="white" tasks={tasks}/>
        <Card name="In progress" dotColor="yellow" tasks={tasks}/>
        <Card name="Done" dotColor="green" tasks={tasks}/>
        <Card name="Blocked" dotColor="red" tasks={tasks}/>
      </div>
    </div>
  );
}
