import { useState } from "react";
import "./styles.css";

export default function App() {
  // states are inmutable !!
  const [newItem, setNewItem] = useState("")
  // setNewItem("xyyy") --> would loop foreva

  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false},
      ]
    })
    // to clear the put-in-value
    setNewItem("")
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed} 
        }

      })
    })
  }

  return (
    // IN JSX use fragment, it is an empty tag
    // className
  <><form onSubmit = {handleSubmit} className="new-item-form">   
      <div className="form-row">
        <label htmlFor="item">new item</label>
        <input 
          value={newItem} 
          // changing state: 
          onChange = {e => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">add to list</button>
    </form>
     <h1 className="header">shopping list</h1>
     <ul className="list">     
      {/* loops in react/jsx with .map*/}
        {todos.map(todo => {
          return (
            <li key={todo.it}>           {/* individual key prop is needed*/}
              <label>
                <input 
                  type="checkbox" 
                  checked = {todo.completed}
                  onChange = {e => toggleTodo(todo.id, e.target.checked)} />
                {todo.title}
              </label>
              <button className="btn btn-danger">already bought</button>
          </li>
          )
       })}         
     </ul>
  </>
  )
}