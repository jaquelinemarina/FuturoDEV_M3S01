import { useAuth } from '../../contexts/AuthContext'
import Timer from '../../components/timer'
import './home.css'

function HomePage() {
    const { logout } = useAuth()

    return (
        <div className='container--home'>
            <nav>
                <button onClick={logout}>Sair</button>
            </nav>
            <h1>Seja bem-vindo ao Timer365!</h1>
            <p>Defina seus minutos, inicie a contagem regressiva e aproveite a gestão do tempo de forma simples e eficiente.</p>
            < Timer />
        </div>
    )
}

export default HomePage