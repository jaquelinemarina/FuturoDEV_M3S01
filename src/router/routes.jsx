import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

import Login from '../pages/login'
import HomePage from '../pages/home'

function PrivateRoute({ element }) {
    const { user } = useAuth()
    console.log('User in PrivateRoute:', user)
    return user ? element : <Navigate to='/' />
}

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/home',
        element: <PrivateRoute element={<HomePage />} />
    },
    {
        path: '*', // Rota para erros 404
        element: <h1>Error 404</h1>
    }
])

export default routes