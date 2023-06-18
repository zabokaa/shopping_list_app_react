export function TodoList(todos) {
    return (
        <ul className="list">    
        {todos.length === 0 && "fridge is full"} 
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
              <button 
                onClick={() => deleteTodo(todo.id)}  //passing a func!!
                className="btn btn-danger">already bought</button>
          </li>
          )
       })}         
     </ul>
    )
}