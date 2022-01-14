import React from "react";
import { AppUI } from './appUI';
import './app.css';
import { TodoProvider } from './TodoContext/TodoContext'

function App() {
  return (
      <TodoProvider> 
        <AppUI/>
      </TodoProvider>
  );
}

export default App;
