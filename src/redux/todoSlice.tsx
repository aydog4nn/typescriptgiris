import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TodoInitialState, TodoType } from "./types/Types";

const initialState: TodoInitialState = {
    todos: [],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        createTodo: (
            state: TodoInitialState,
            action: PayloadAction<TodoType>
        ) => {
            state.todos = [...state.todos, action.payload];
        },
        removeToById: (state:TodoInitialState,action:PayloadAction<number>) => {
            state.todos = [...state.todos.filter((todo:TodoType) => todo.id!==action.payload)]
        },
        updateTodo: (state:TodoInitialState,action:PayloadAction<TodoType>) => {
            state.todos = [...state.todos.map((todo:TodoType) => todo.id !== action.payload.id ? todo : action.payload)]
        }
    },
});

export const { createTodo,removeToById,updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
