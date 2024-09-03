import React, { createContext, useState, useContext, useEffect } from 'react'

const AuthContext = createContext()

// Hook para acessar o contexto de autenticação
export function useAuth() {
    return useContext(AuthContext)
}

// Provider para gerenciar e fornecer o estado de autenticação
export function AuthProvider({ children }) {

    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user')
        return storedUser ? JSON.parse(storedUser) : null
    })

    const login = (userData) => {
        setUser(userData)
        localStorage.setItem('user', JSON.stringify(userData))
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('user')
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}