import { createSlice } from '@reduxjs/toolkit';
const sliceTodo = createSlice({
  name: 'todos',
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export default sliceTodo.reducer;
export const { addTodo, deleteTodo } = sliceTodo.actions;
