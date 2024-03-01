import React, { useState } from "react";

const LoginForm = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };
  const addNewTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };
  return (
    <>
      {todos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      <input type="text" value={newTodo} onChange={handleInputChange}></input>
      <button type="submit" onClick={addNewTodo}>
        Add New Todo
      </button>
    </>
  );
};

export default LoginForm;
