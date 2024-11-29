import './HomeStyle.css'
import { FaPencilAlt, } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
export function Task(props){
    return(
    <div className="task">
        <div className="task-name">{props.name}</div>
        <div className="buttons">
            <a onClick={() => props.editFunction(props.taskId)}>
                <FaPencilAlt className='edit-icon'/> 
            </a>
            <a onClick={() => props.deleteFunction(props.taskId)}>
                <RiDeleteBinLine className='delete-icon'/>   
            </a>
        </div>
    </div>
    );
}