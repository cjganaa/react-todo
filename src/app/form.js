"use client"
import './HomeStyle.css'

export function Form(props){
    function Submit(formData){
        const name = formData.get("name");
        const status = formData.get("status");
        props.submitFunction(props.task != undefined ? props.task.id : null ,name,status);
        props.closeFunction();
    }
    return(
    <form action={Submit}>
        <div className="black-background">
        <div className="form">
            <div className="form-head">
                <h2 id="form-title">{props.name}</h2>
                <button onClick={props.closeFunction} className="close-button">&times;</button>
            </div>
            <input type="text" placeholder="Enter name" name='name' defaultValue = {props.task != undefined ? props.task.name : null }/>
            <select name="status" defaultValue = {props.task != undefined ? props.task.status : null }>
                {/* <option value="none" selected disabled hidden>Select status</option> */}
                <option value="todo">To do</option>
                <option value="inprogress">In progress</option>
                <option value="done">Done</option>
                <option value="blocked">Blocked</option>
            </select>
            <div>
                <button className="submit-button" type='submit'>Submit</button>
            </div>
        </div>
    </div>
    </form>
    
    );
}
