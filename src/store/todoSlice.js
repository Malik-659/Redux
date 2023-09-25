import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos:[]
    },
    reducers: {
        addTodo: (state, action)=>{
            state.todos.push(action.payload)
        },
        changeTodoStatus: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload)
            todo.status = !todo.status
        },
    },
});
export function postUser() {
    axios.post('http://localhost:8000/todo')
}
export const {addTodo, changeTodoStatus} = todoSlice.actions
export default todoSlice.reducer;