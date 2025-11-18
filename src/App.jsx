import React from 'react'
import TodoApp from './components/TodoApp'
import CosmicFlight from './components/CosmicFlight'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <div className="app-header">
        <h1>🚀 My Todo App - Cosmic Flight to Mars</h1>
      </div>
      <div className="app-content">
        <div className="todo-section">
          <TodoApp />
        </div>
        <div className="visualization-section">
          <CosmicFlight />
        </div>
      </div>
    </div>
  )
}

export default App

