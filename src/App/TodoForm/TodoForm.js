import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import './TodoForm.css';

function TodoForm(){

    const [newTodoValue, setNewTodoValue] = React.useState('');
    
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    
    return (
            <form onSubmit={onSubmit}>
                <label></label>
                <textarea
                    value={newTodoValue}
                    onChange={onChange}
                    placeholder="Cortar la cebolla para el almuerzo"
                />
                <div className="TodoForm-buttonContainer">
                    <button 
                        className="TodoForm-button TodoForm-button-cancel"
                        type="button"
                        onClick={onCancel}
                    >Cancelar</button>
                    <button 
                        className="TodoForm-button TodoForm-button-add"
                        type="submit"
                    >Añadir</button>
                </div>
            </form>  
    );
}
export {
    TodoForm
};