import React from "react";
import './app.css';

import { TodoMessage } from "./TodoMessage/TodoMessage"; 
import { TodoCounter } from "./TodoCounter/TodoCounter";
import { TodoList } from "./TodoList/TodoList";
import { TodosError } from "./TodosError/TodosError";
import { TodosLoading } from "./TodosLoading/TodosLoading";
import { EmptyTodos } from "./EmptyTodos/EmptyTodos";
import { EmptySearchResults } from "./EmptySearchResults/EmptySearchResults";
import { TodoItem } from "./TodoItem/TodoItem";
import { TodoSearch } from "./TodoSearch/TodoSearch"; 
import { CreateTodoButton } from "./CreateTodoButton/CreateTodoButton"; 
import { useTodos } from "./CustomHooks/useTodos"
import { Modal } from "./Modal/Modal";
import { TodoForm } from "./TodoForm/TodoForm";
import { TodoHeader } from "./TodoHeader/TodoHeader";

function App() {
  const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        totalTodos,
        completedTodos, 
        searchValue,
        setSearchValue,
        addTodo
    } = useTodos();

    return (
        <div className="main">
            <div className="container">
                <TodoHeader> 
                    <TodoCounter
                        totalTodos={totalTodos}
                        completedTodos={completedTodos}/>
                    <TodoSearch
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}/>
                </TodoHeader>

                    <TodoList
                        error={error}        
                        loading={loading}
                        totalTodos={totalTodos}
                        searchedTodos={searchedTodos}
                        onError={()=> <TodosError/>}
                        onLoading={()=> <TodosLoading/>}
                        onEmptyTodos={()=> <EmptyTodos/>}
                        onEmptySearchResults={()=> <EmptySearchResults searchText={searchValue}/>}
                        render={(todo)=>(
                            <TodoItem 
                                id = {todo.id}
                                key = {todo.text}
                                onComplete = {() => {completeTodo(todo.id)}}
                                onDelete = {() => {deleteTodo(todo.id)}}
                                text = {todo.text}
                                completed = { todo.completed }/>
                        )}
                    />
                            
                    {!!openModal && (
                        <Modal>
                            <TodoForm
                                addTodo={addTodo}
                                setOpenModal={setOpenModal}/>
                        </Modal>
                    )}
                    
                <CreateTodoButton
                    openModal={openModal}
                    setOpenModal={setOpenModal}/>
            </div>
        </div>
    );
}

export default App;
