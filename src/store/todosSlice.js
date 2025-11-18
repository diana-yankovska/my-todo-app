import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
        createdAt: new Date().toISOString(),
      }
      state.todos.push(newTodo)
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload)
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload
      const todo = state.todos.find((t) => t.id === id)
      if (todo) {
        todo.text = text
      }
    },
  },
})

export const { addTodo, toggleTodo, deleteTodo, updateTodo } = todosSlice.actions
export default todosSlice.reducer

