import { useAuth } from '../../contexts/AuthContext'
import Timer from '../../components/timer'
import './home.css'

function HomePage() {
    const { logout } = useAuth()

    return (
        <div className='container--home'>
            <nav>
                <button class="btn btn-outline-primary btn-lg" onClick={logout}>Sair</button>
            </nav>
            <h1 class="display-5">Seja bem-vindo ao Timer365!</h1>
            <span className='container--home-subcription'>Defina seus minutos, inicie a contagem regressiva e aproveite a gestão do tempo de forma simples e eficiente.</span>
            < Timer />
        </div>
    )
}

export default HomePage