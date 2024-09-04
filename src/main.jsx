import React from "react"
import App from "./App.jsx"
import { AuthProvider } from "./contexts/AuthContext.jsx"
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import routers from "./router/routes"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles/globals.css"

createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <RouterProvider router={routers}>
            <App />
        </RouterProvider>
    </AuthProvider>
)