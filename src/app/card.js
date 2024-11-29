import './HomeStyle.css'
import { Task } from './task.js';
export function Card(props){
    // console.log(props.tasks);
    return(
        <div className="card">
            <div className="card-head">
                <div className="status">
                    <div className="status-dot" style={{backgroundColor:props.dotColor}}></div>
                    <h2>{props.name}</h2>
                </div>
                <div className="counter">{props.tasks.length}</div>
            </div>
            <div className="tasks">
                {props.tasks.map((task,index)=> <Task key={index} editFunction={props.editFunction}  deleteFunction={props.deleteFunction} name={task.name} taskId = {task.id}/>)}
            </div>
        </div>
    );
}