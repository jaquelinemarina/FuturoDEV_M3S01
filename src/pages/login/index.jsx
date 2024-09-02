function Login() {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}

export default Login