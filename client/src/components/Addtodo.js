import Axios from "axios";
import React, { useContext, useState } from "react";
import { Context } from "../context";
import axios from "axios";
const Addtodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useContext(Context);

  const addNewtodo = (e) => {
    e.preventDefault();
    if (newTodo !== "") {
      const todo = [...todos];
      const newTodoObj = {
        id: todo.length + 1,
        title: newTodo,
        complete: false,
      };
      //todo.push(newTodoObj);
      axios.post("/todos", newTodoObj).then((res) => {
        console.log("data ", res.data);
        todo.push(res.data);
        setTodos(todo);
        setNewTodo("");
      });
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
