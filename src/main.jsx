import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import routers from "./router/routes"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles/globals.css"

createRoot(document.getElementById('root')).render(
    <App />
)