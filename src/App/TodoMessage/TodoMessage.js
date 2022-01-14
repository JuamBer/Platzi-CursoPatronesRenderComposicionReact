import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import './TodoMessage.css';

function TodoMessage(){

    const {
        msg
    } = React.useContext(TodoContext);

    return ( 
        <div className="TodoMessage">
            <p>{msg}</p>
        </div>
    );
}

export {
    TodoMessage
};