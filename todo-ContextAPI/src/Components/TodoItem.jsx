/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTodoContext } from "../contexts";

export default function TodoItem({ todo }) {
  const [editInputVal, setEditInputVal] = useState(todo.todoName);
  const [isEditable, setIsEditable] = useState(false);

  const { updateTodo, deleteTodo, toggleComplete } = useTodoContext();//used some values provided by the provider using useContext custom hook

  function handleClick(e) {
    let targetName = e.target.name;
    if (targetName === "edit") {//for edit button
      if (isEditable) {//if editing the item
        console.log("todo.id=" + todo.id);
        todo.todoName = editInputVal;
        updateTodo(todo, todo.id);
      }
      setIsEditable(!isEditable);
    } else {//for delete button
      deleteTodo(todo.id);
    }
  }
  function handleChange() {
    toggleComplete(todo.id);//line-through is managed conditionally in class of input
  }
  return (
    <div className="todo_item d-block bg-stone-400 rounded p-2 flex">
      <input
        type="checkbox"
        defaultChecked={todo.isCompleted}
        onChange={handleChange}
      />

      <input
        type="text"
        className={`bg-inherit p-1 ${
          todo.isCompleted ? "line-through" : ""
        } grow mx-[10px] ${
          isEditable ? "outline-none border-blue-500 border-b-2" : ""
        }`}
        value={editInputVal}
        readOnly={!isEditable}
        onChange={(e) => {
          setEditInputVal(e.target.value);
        }}
        ref={(input) => input && isEditable && input.focus()} // Focus input when isEditable is true
      />
      <div className="buttons inline-block">
        <button
          className="edit_list_item border border-1 p-1 rounded mr-1"
          name="edit"
          onClick={handleClick}
        >
          {isEditable ? "📁" : "✏"}
        </button>
        <button
          className="delete_list_item border border-1 p-1 rounded"
          name="delete"
          onClick={handleClick}
        >
          ❌
        </button>
      </div>
    </div>
  );
}
