import React from 'react';
import { useLocalStorage } from './useLocalStorage';


function useTodos(){

    const {
        item: todos,
        saveItem: saveTodos,
        syncronizeItem: syncronizeTodos,
        error,
        loading
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const totalTodos = todos.length;
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const [openModal, setOpenModal] = React.useState(false);
    
    let searchedTodos = [];

    if (!(searchValue.length >= 1)) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter((todo) => (
            todo.text.toLowerCase().includes(searchValue.toLowerCase())
        ));
    }
    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            id: newTodos.length,
            text: text,
            completed: false
        });
        saveTodos(newTodos);
    };

    const completeTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id == id);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    };

    const deleteTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id == id);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    return (
        {
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
            syncronizeTodos
        }
    )
}

export { useTodos };