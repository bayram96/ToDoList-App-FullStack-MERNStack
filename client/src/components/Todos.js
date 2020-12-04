import React, { useContext } from "react";
import Todo from "./Todo";
import { Context } from "../context";

const Todos = () => {
  const [todos, setTodos] = useContext(Context);

  const completeTask = (index) => (e) => {
    const todo = [...todos];
    todo[index].complete = todo[index].complete ? false : true;

    setTodos(todo);
  };

  const deleteTask = (index) => (e) => {
    let todo = [...todos];
    todo = todo.filter((t, i) => i !== index);
    setTodos(todo);
  };
  const checkTask = (index) => (e) => {
    const todo = [...todos];
    todo[index].complete = todo[index].complete ? false : true;

    setTodos(todo);
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
