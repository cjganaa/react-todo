import './HomeStyle.css'
import { FaPencilAlt, } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
export function Task(props){
    return(
    <div className="task">
        <div className="task-name">{props.name}</div>
        <div className="buttons">
            <a>
                <FaPencilAlt className='edit-icon'/> 
            </a>
            <a>
                <RiDeleteBinLine className='delete-icon'/>   
            </a>
        </div>
    </div>
    );
}