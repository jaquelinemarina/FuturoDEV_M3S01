import { useAuth } from '../../contexts/AuthContext'
import './home.css'

function HomePage() {
    const { logout } = useAuth()

    return (
        <div className='container--home'>
            <nav>
                <button onClick={logout}>Sair</button>
            </nav>
            <h1>Temporizador Lab365</h1>
            <p>Bem-vindo à página principal da aplicação!</p>
        </div>
    )
}

export default HomePage