import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = () => {
    if (input.trim() === "") return;
    const newList = {
      id: todoList.length + 1,
      text: input,
      completed: false,
    };
    setTodoList((prev) => [...prev, newList]);
    setInput("");
  };

  const handleDelete = (id) => {
    const newItem = todoList.filter((item) => item.id != id);
    setTodoList(newItem);
  };

  const handleToggle = (id) => {
    const newTodo = todoList.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodoList(newTodo);
  };

  console.log(todoList.length);

  return (
    <div className="container">
      <div className="todo-actions">
        <input
          type="text"
           placeholder="Enter List"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button disabled={input === ""} onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />
            <span className={todo.completed ? "line-through" : ""}>
              {todo.text}
            </span>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
