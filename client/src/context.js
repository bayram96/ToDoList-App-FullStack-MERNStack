import React, { useState, createContext } from "react";

export const Context = createContext();

export const Provider = (props) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "check emails",
      complete: true,
    },
    {
      id: 2,
      title: "check voicemail",
      complete: false,
    },
    {
      id: 3,
      title: "check calls",
      complete: false,
    },
  ]);

  return (
    <Context.Provider value={[todos, setTodos]}>
      {props.children}
    </Context.Provider>
  );
};
