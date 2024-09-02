import React from "react"
import App from "./App.jsx"
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import routers from "./router/routes"
import "./styles/globals.css"

createRoot(document.getElementById('root')).render(
    <RouterProvider router={routers}>
        <App />
    </RouterProvider>
)