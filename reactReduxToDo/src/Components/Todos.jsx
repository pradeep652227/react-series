/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import { removeTodo,toggleEdit } from "../features/todoSlice";

export default function Todos(props) {

  const todos = useSelector((state) => state.todos);//accessing the todos array
  const dispatch = useDispatch();

  function handleClick(text,id) {
    dispatch(toggleEdit(id));
    console.log("Todo Text= "+text);
    props.setIsEditable(prevVal=>!prevVal);//toggle the edit mode
    props.setIdTodoItem(id);
    props.setTodoItemVal(text);
  }
  return (
    <div id="todo_lists">
      <ul className="p-0 flex flex-col space-y-4 mt-4">
        {todos.map((todo) => (
          <div key={todo.id} className="flex">
            <li className="inline-block w-10/12">{todo.text}</li>

            {todo.isEditable ? (
              ""
            ) : (
              <button className="mr-2" onClick={() => handleClick(todo.text,todo.id)}>
                ✏
              </button>
            )}

            <button onClick={() => dispatch(removeTodo(todo.id))}>❌</button>
          </div>
        ))}
      </ul>
    </div>
  );
}