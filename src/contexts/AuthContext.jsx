import React, { createContext, useState, useContext } from 'react'

const AuthContext = createContext()

// Hook para acessar o contexto de autenticação
export function useAuth() {
    return useContext(AuthContext)
}

// Provider para gerenciar e fornecer o estado de autenticação
export function AuthProvider({ children }) {

    const [user, setUser] = useState(null)

    const login = (userData) => {
        setUser(userData)
        localStorage.setItem('user', JSON.stringify(userData))
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('user')
    }

    // Função para verificar a autenticação ao carregar a aplicação
    const checkAuth = () => {
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, checkAuth }}>
            {children}
        </AuthContext.Provider>
    )
}