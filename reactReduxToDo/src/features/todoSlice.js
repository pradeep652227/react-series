import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: nanoid(), text: "Hello World", isEditable: false }],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      const todo = {
        id: nanoid(),
        text: action.payload,
        isEditable: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleEdit: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isEditable: !todo.isEditable }
          : todo
      );
    },
    updateItem: (state, action) => {
      //update the text of todo item
      const {id,text}=action.payload;
      console.log("id= "+id+" text="+text);
      state.todos = state.todos.map((todo) =>
        todo.id === id
          ? { ...todo, text:text }
          : todo
      );
    },
  },
});

export const { addTodo, removeTodo, toggleEdit,updateItem } = todoSlice.actions;

export default todoSlice.reducer;
