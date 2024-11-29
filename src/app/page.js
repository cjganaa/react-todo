"use client"
import './HomeStyle.css'
import {Card} from './card.js'
import {Form} from './form.js'
import { useState } from 'react';



export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [addFormVisible, setAddFormState] = useState(false);
  const [editFormVisible, setEditFormState] = useState(false);
  const [task, setTask] = useState([]);
  const [id,setId] = useState(0);
  function handleEditForm(i){
    setEditFormState(!editFormVisible);
    setTask(tasks[i]);
  }
  function handleAddForm(){
    setAddFormState(!addFormVisible);
  }
  function addTask(taskId,taskName,taskStatus){
    setTasks([...tasks, {id:id, name:taskName, status:taskStatus}]);
    setId(id+1);
  }
  function editTask(taskId,taskName,taskStatus){
    setTasks([...tasks.filter((task) => task.id != taskId), {id:taskId, name:taskName, status:taskStatus}]);
  }
  function deleteTask(taskId){
    setTasks(tasks.filter((task) => task.id != taskId));
  }
  return (
    <div>
      {addFormVisible ?  <Form name="Add task" closeFunction = {handleAddForm} submitFunction = {addTask}/> : null}
      {editFormVisible ? <Form name="Edit task" closeFunction = {handleEditForm} submitFunction = {editTask} task={task}/> : null }
      <div className='header'>
        <button className="addButton" onClick={handleAddForm}>Add task</button>
      </div>
      <div className='cards'>
        <Card name="Todo" dotColor="white" editFunction={handleEditForm} deleteFunction={deleteTask} tasks={tasks.filter(task => task.status == "todo")}/>
        <Card name="In progress" dotColor="yellow" editFunction={handleEditForm} deleteFunction={deleteTask} tasks={tasks.filter(task => task.status == "inprogress")}/>
        <Card name="Done" dotColor="green" editFunction={handleEditForm} deleteFunction={deleteTask} tasks={tasks.filter(task => task.status == "done")}/>
        <Card name="Blocked" dotColor="red" editFunction={handleEditForm} deleteFunction={deleteTask} tasks={tasks.filter(task => task.status == "blocked")}/>
      </div>
    </div>
  );
}
