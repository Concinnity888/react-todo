import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: uuid(),
        title: action.payload.title,
        completed: false,
      };
      state.push(todo);
    },
    toggleComplete: (state, action) => {
      const idx = state.findIndex((todo) => todo.id === action.payload.id);
      state[idx].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    deleteTodoAll: (state) => {
      return state = []
    }
  }
});

export const { addTodo, toggleComplete, deleteTodo, deleteTodoAll } = todoSlice.actions;

export default todoSlice.reducer;
