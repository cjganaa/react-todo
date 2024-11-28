"use client"
import { formatDynamicAPIAccesses } from 'next/dist/server/app-render/dynamic-rendering';
import './HomeStyle.css'
import { useState } from 'react';

export function Form(props){
    function Submit(formData){
        const name = formData.get("name");
        const status = formData.get("status");
        props.submitFunction(name,status);
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
            <input type="text" placeholder="Enter name" name='name'/>
            <select name="status">
                <option value="none" selected disabled hidden>Select status</option>
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
