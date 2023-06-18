import { useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";

import "./styles.css";

export default function App() {
 
  const [todos, setTodos] = useState([])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false},
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed} //creating new state
        }
        return todo  //so it will show the list
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    // IN JSX use fragment, it is an empty tag
    // and use className, not class
    // here putting props inside:
  <> <NewTodoForm onSubmit={addTodo}/>   

     <h1 className="header">shopping list</h1>
     <TodoList todos={todos}/>
  </>
  )
}