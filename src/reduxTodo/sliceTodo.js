import { createSlice } from '@reduxjs/toolkit';
const sliceTodo = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    currentTodo: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    chooseTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
    editTodo: (state, action) => {
      state.items = state.items.map(item =>
        item.id === state.currentTodo.id
          ? { ...state.currentTodo, text: action.payload }
          : item,
      );

      state.currentTodo = null;
    },
  },
});

export default sliceTodo.reducer;
export const { addTodo, deleteTodo, chooseTodo, editTodo } = sliceTodo.actions;
