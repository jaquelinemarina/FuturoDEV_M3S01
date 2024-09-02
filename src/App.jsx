import React from 'react'
import { Router } from 'react-router-dom'
import Login from './pages/login'
import HomePage from './pages/home'

function App() {
    return (
        <Router>
            <Login />
            <HomePage />
        </Router>
    )
}

export default App