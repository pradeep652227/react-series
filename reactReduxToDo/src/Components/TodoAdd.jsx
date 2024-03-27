/* eslint-disable react/prop-types */
import { addTodo, updateItem, toggleEdit } from "../features/todoSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function TodoAdd(props) {
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    if (props.isEditable) {
      const id = props.idTodoItem;
      const text = props.todoItemVal;
      dispatch(updateItem({ id, text }));//update the item
      props.setIsEditable((prevVal) => !prevVal);//toggle the edit mode
      dispatch(toggleEdit(id));//toggle edit property of todo item
    } else dispatch(addTodo(inputVal));

    setInputVal(""); //clearing the input field
  }

  return (
    <div id="todo_item_add" className="border flex">
      {!props.isEditable ? (
        //add an item
        <input
          type="text"
          className="p-2 grow"
          name="todo-item-input"
          placeholder="New Item"
          value={inputVal}
          onChange={(e) => {
            let val = e.target.value;
            setInputVal(val);
          }}
        />
      ) : (
        //edit an item
        <input
          type="text"
          className="p-2 grow"
          name="todo-item-input"
          placeholder="New Item"
          value={props.todoItemVal}
          onChange={(e) => {
            let val = e.target.value;
            props.setTodoItemVal(val);
          }}
        />
      )}

      <button
        type="submit"
        className="bg-gray-400 p-2 border border-1 rounded-md"
        onClick={handleClick}
      >
        {`${props.isEditable ? "Save" : "Add"}`}
      </button>
    </div>
  );
}
