import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <h1>Welcome to Crewmate</h1>
      <h1>Here you can create your own</h1>

      <div className="main-content">
        <div className="card-container">
          {/* Card content will go here */}
        </div>

        <div className="list-container">
          {/* List content will go here */}
        </div>
      </div>

      <div className="navigation-panel">
        <div className="header">
          <h1>Tempo</h1>
        </div>
        <div className="sidebar">
          {/* Sidebar content will go here */}
        </div>
      </div>
    </div>
  )
}

export default App
