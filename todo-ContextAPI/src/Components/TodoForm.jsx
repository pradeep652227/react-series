import { useState } from "react";
import { useTodoContext } from "../contexts";

export default function TodoForm() {
  const [listItem, setListItem] = useState("");
  const { addTodo } = useTodoContext();//used one of the values given by the provider

  function handleSubmit(e) {
    e.preventDefault();
    let todo = listItem;
    console.log("Add button with todo=" + todo);
    addTodo(todo);
    setListItem("");//after adding an item, clear the input field
  }
  return (
    <div className="todo_form flex bg-gray-400 border border-1 border-gray-400 rounded">
      <input
        type="text"
        className="list_item grow p-1 bg-inherit text-white"
        placeholder="item-name"
        value={listItem}
        onChange={(e) => setListItem(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-tr rounded-br p-2 bg-emerald-600"
        onClick={handleSubmit}
      >
        Add
      </button>
    </div>
  );
}
