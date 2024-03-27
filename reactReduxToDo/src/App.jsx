import "./App.css";
import TodoAdd from "./Components/TodoAdd";
import Todos from "./Components/Todos";
import { useState } from "react";

function App() {
  const [isEditable, setIsEditable] = useState(false);
  const [idTodoItem, setIdTodoItem] = useState(null);
  const [todoItemVal, setTodoItemVal] = useState('');
  return (
    <div className="min-h-screen">
      <h1 className="text-center text-3xl mt-2">Todo using React-Redux</h1>
      <div className=" mt-12 w-1/2 mx-auto p-2 border border-2">
        <TodoAdd 
          isEditable={isEditable}
          idTodoItem={idTodoItem}
          todoItemVal={todoItemVal}
          setIsEditable={setIsEditable}
          setTodoItemVal={setTodoItemVal}
        />
        <Todos
          setIsEditable={setIsEditable}
          setIdTodoItem={setIdTodoItem}
          setTodoItemVal={setTodoItemVal}
        />
      </div>
    </div>
  );
}

export default App;
