import { createContext, useContext } from "react";

const todoContext = createContext({
  todos: [{ id: 1, todoName: "Demo1", isCompleted: false }],
  addTodo:(todo)=>{},
  updateTodo:(id, todo)=>{},
  deleteTodo:(id)=> {},
  toggleComplete:(id)=>{}
});

export const TodoContextProvider = todoContext.Provider;

export const useTodoContext = () => {
  return useContext(todoContext);
};
