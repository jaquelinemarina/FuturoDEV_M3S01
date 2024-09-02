import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const userData = { email, token: 'fake-jwt-token' }
        login(userData)
        navigate('/home')
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder='digite seu email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder='digite sua senha'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}

export default Login