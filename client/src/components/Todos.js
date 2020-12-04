import React, { useContext } from "react";
import Todo from "./Todo";
import { Context } from "../context";
import axios from "axios";

const Todos = () => {
  const [todos, setTodos] = useContext(Context);

  const completeTask = (index) => (e) => {
    const todo = [...todos];
    todo[index].complete = todo[index].complete ? false : true;
    axios
      .put(`/todos/${todo[index]._id}`, { complete: todo[index].complete })
      .then(() => setTodos(todo));
  };

  const deleteTask = (index) => (e) => {
    let todo = [...todos];
    todo = todo.filter((t, i) => i !== index);
    axios.delete(`/todos/${todos[index]._id}`).then(() => setTodos(todo));
  };
  const checkTask = (index) => (e) => {
    const todo = [...todos];
    todo[index].complete = todo[index].complete ? false : true;
    axios
      .put(`/todos/${todo[index]._id}`, { complete: todo[index].complete })
      .then(() => setTodos(todo));
  };
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo
          todo={todo}
          key={index}
          onClick={completeTask(index)}
          onDelete={deleteTask(index)}
          onCheck={checkTask(index)}
          completed={todo.complete}
        />
      ))}
    </div>
  );
};

export default Todos;
