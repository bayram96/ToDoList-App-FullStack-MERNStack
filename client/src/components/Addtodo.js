import React, { useContext, useState } from "react";
import { Context } from "../context";
const Addtodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useContext(Context);

  const addNewtodo = (e) => {
    e.preventDefault();
    if (newTodo !== "") {
      const todo = [...todos];
      console.log(todos.length);
      todo.push({ id: todo.length + 1, title: newTodo, complete: false });
      setTodos(todo);
      setNewTodo("");
    }
  };

  const updateNewTodo = (e) => {
    setNewTodo(e.target.value);
  };
  return (
    <form onSubmit={addNewtodo}>
      <input
        type="text"
        className="form-control rounded-0"
        placeholder="Write your todo here ..."
        value={newTodo}
        onChange={updateNewTodo}
      />
      <button type="submit" className="form-control rounded-0 btn-secondary">
        Add
      </button>
    </form>
  );
};

export default Addtodo;
