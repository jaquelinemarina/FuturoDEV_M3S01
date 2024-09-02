import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Login from '../pages/login'
import HomePage from '../pages/home'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/home',
        element: <HomePage />
    }
])

export default routes