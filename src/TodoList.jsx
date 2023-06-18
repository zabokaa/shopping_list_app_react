import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className="list">    
        {todos.length === 0 && "fridge is full"} 
      {/* loops in react/jsx with .map*/}
        {todos.map(todo => {
          return (
            <TodoItem {...todo}
                // id={todo.id}
                // completed={todo.completed} 
                // title={todo.title}
                key={todo.id} 
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
          )
       })}         
     </ul>
    )
}