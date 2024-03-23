import { createSlice } from "@reduxjs/toolkit";
const sliceFilter = createSlice({
    name: 'filter',
    initialState: "",
    reducers: {
        filterTodo: (state, action) => {
            return action.payload;
        }
    }
})

export default sliceFilter.reducer;
export const { filterTodo } = sliceFilter.actions;