import React from "react";
import './TodoList.css';

function TodoList(props) {
    return (
        <section className="TodoList"> 
            {props.children} 
        </section>
    );
}

export { TodoList };