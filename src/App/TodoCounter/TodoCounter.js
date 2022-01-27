import React from "react";
import './TodoCounter.css';

function TodoCounter({totalTodos,completedTodos}) {
    return (
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} todos</h2>
    );
}

export { TodoCounter };