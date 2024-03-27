import { useState, useEffect } from "react";
import { TodoContextProvider } from "./contexts/index";

import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoItem from "./Components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  //getTodos
  useEffect(()=>{
    document.querySelector('html').classList.add('bg-violet-500');
    const todos=JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length>0)
      setTodos(todos);
  },[]);//on every render of App component

  //setTodos
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos]);//after every change in todos array

  const generateUniqueIdCustom = () => {
    const timestamp = Date.now().toString(16);
    const randomPart = Math.floor(Math.random() * 1000000)
      .toString(16)
      .padStart(6, "0");
    return timestamp + randomPart;
  };
/*Defining all the methods of the value prop given the provider */
  function addTodo(todo) {
    setTodos((prevTodos) => [
      { id: generateUniqueIdCustom(), todoName: todo, isCompleted: false },
      ...prevTodos,
    ]);
  }

  function updateTodo(todo, id) {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo.id !== id));
  }

  function toggleComplete(id) {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, isCompleted: !prevTodo.isCompleted }
          : prevTodo
      )
    );
  }


  return (
    <div className=" min-h-screen py-8">
      <TodoContextProvider
        value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
      >
        <div className="bg-rose-400 w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-col flex-wrap gap-y-3">
            {todos.map((todo) =>(<TodoItem todo={todo} key={todo.id} />))}
          </div>
        </div>
      </TodoContextProvider>
    </div>
  );
}

export default App;
