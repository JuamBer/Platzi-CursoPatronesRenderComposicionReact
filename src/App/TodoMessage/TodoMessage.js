import React from "react";
import { TodoContext } from "../CustomHooks/useTodos";
import './TodoMessage.css';

function TodoMessage({msg}){


    return ( 
        <div className="TodoMessage">
            <p>{msg}</p>
        </div>
    );
}

export {
    TodoMessage
};