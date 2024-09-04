import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import './login.css'

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
        <div className='container--login'>
            <h1 class="display-4">Timer365</h1>
            <h3 class="display-7">Conecte-se à sua conta</h3>
            <form onSubmit={handleSubmit}>
                <div class="mb-4">
                    <input class="form-control"
                        type="email"
                        id="email"
                        placeholder='Digite seu email:'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div class="mb-4">
                    <input class="form-control"
                        type="password"
                        id="password"
                        placeholder='Digite sua senha:'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div class="d-grid gap-2">
                    <button type="submit" class="btn btn-primary btn-lg">Entrar</button>
                </div>
            </form>
        </div>
    )
}

export default Login