import { createSelector } from "@reduxjs/toolkit";

export const selectTodos = state => state.todos.items;

export const selectFilter = state => state.filter;

export const visibleTodos = createSelector([selectTodos, selectFilter], ((items, filter) => {
    return items.filter(({ text }) => text.toLowerCase().includes(filter.toLowerCase().trim()));
}))