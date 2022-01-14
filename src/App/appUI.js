import React from 'react';
import { TodoMessage } from "./TodoMessage/TodoMessage"; 
import { TodoCounter } from "./TodoCounter/TodoCounter";
import { TodoList } from "./TodoList/TodoList";
import { TodoItem } from "./TodoItem/TodoItem";
import { TodoSearch } from "./TodoSearch/TodoSearch"; 
import { CreateTodoButton } from "./CreateTodoButton/CreateTodoButton"; 
import { TodoContext } from "./TodoContext/TodoContext"
import { Modal } from "./Modal/Modal";
import { TodoForm } from "./TodoForm/TodoForm";

function AppUI(){

    const {
        msg,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <div className="main">
        <div className="container">
            <TodoCounter/>
            <TodoSearch/>
                <TodoList>
                    <TodoMessage
                        msg={msg}
                    /> 
                        
                    {searchedTodos.map(todo => ( 
                        <TodoItem 
                            id = {todo.id}
                            key = {todo.text}
                            onComplete = {() => {completeTodo(todo.id)}}
                            onDelete = {() => {deleteTodo(todo.id)}}
                            text = {todo.text}
                            completed = { todo.completed }
                        />))}
                </TodoList>

                {
                    !!openModal && (
                        <Modal>
                            <TodoForm/>
                        </Modal>
                    )
                }
            <CreateTodoButton
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
        </div>
        </div>
    );
}
export { AppUI };