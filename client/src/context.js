import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
export const Context = createContext();

export const Provider = (props) => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get("/todos").then((res) => setTodos(res.data));
    console.log("mount it!");
  }, []);
  return (
    <Context.Provider value={[todos, setTodos]}>
      {props.children}
    </Context.Provider>
  );
};
