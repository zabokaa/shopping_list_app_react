import { useState } from "react";

export function NewTodoForm({onSubmit}) {
    // states are inmutable !!
  const [newItem, setNewItem] = useState("")
  // setNewItem("xyyy") --> would loop foreva

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return
    onSubmit(newItem)
    // to clear the put-in-value
    setNewItem("")
  }

  return (
    <form onSubmit = {handleSubmit} className="new-item-form">   
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
  )
}
  