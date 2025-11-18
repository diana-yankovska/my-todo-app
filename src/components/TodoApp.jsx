import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, toggleTodo, deleteTodo, updateTodo } from '../store/todosSlice'
import './TodoApp.css'

function TodoApp() {
  const todos = useSelector((state) => state.todos.todos)
  const dispatch = useDispatch()
  const [inputText, setInputText] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState('')

  const handleAdd = () => {
    if (inputText.trim()) {
      dispatch(addTodo(inputText))
      setInputText('')
    }
  }

  const handleToggle = (id) => {
    dispatch(toggleTodo(id))
  }

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }

  const handleEdit = (todo) => {
    setEditingId(todo.id)
    setEditText(todo.text)
  }

  const handleUpdate = (id) => {
    if (editText.trim()) {
      dispatch(updateTodo({ id, text: editText }))
      setEditingId(null)
      setEditText('')
    }
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setEditText('')
  }

  return (
    <div className="todo-app">
      <div className="todo-input-section">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
          placeholder="Add a new todo..."
          className="todo-input"
        />
        <button onClick={handleAdd} className="add-button">
          Add Todo
        </button>
      </div>

      <div className="todo-list">
        {todos.length === 0 ? (
          <div className="empty-state">
            <p>No todos yet. Start adding tasks!</p>
          </div>
        ) : (
          todos.map((todo) => (
            <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              {editingId === todo.id ? (
                <div className="edit-mode">
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') handleUpdate(todo.id)
                      if (e.key === 'Escape') handleCancelEdit()
                    }}
                    className="edit-input"
                    autoFocus
                  />
                  <div className="edit-buttons">
                    <button onClick={() => handleUpdate(todo.id)} className="save-button">
                      Save
                    </button>
                    <button onClick={handleCancelEdit} className="cancel-button">
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="todo-content">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => handleToggle(todo.id)}
                      className="todo-checkbox"
                    />
                    <span className="todo-text">{todo.text}</span>
                  </div>
                  <div className="todo-actions">
                    <button onClick={() => handleEdit(todo)} className="edit-button">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(todo.id)} className="delete-button">
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>

      {todos.length > 0 && (
        <div className="todo-stats">
          <p>
            Total: {todos.length} | Completed: {todos.filter((t) => t.completed).length} | 
            Pending: {todos.filter((t) => !t.completed).length}
          </p>
        </div>
      )}
    </div>
  )
}

export default TodoApp

