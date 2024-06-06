import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleAddTodo(event) {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  }

  function handleResetTodo() {
    setTodos([]);
  }

  function handleDeleteTodo(indexToRemove) {
    setTodos(
      todos.filter((_, index) => {
        return index !== indexToRemove;
      })
    );
  }
  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>Aggiungi</button>
      <button onClick={handleResetTodo}>Reset</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button onClick={() => handleDeleteTodo(index)}>Elimina</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
