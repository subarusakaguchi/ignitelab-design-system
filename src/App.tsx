import './styles/global.css';

export function App() {
  return (
    <>
      <header>
        <h1>Ignite Lab</h1>
        <p>Faça login e comece a usar!</p>
      </header>


      <section>
        <form action="">
          <label htmlFor="email">Endereço de email</label>
          <input type="email" name='email' id='email' />
          <label htmlFor="password">Senha</label>
          <input type="password" name='password' id='password' />
          <input type="submit" value="Entrar na plataforma" />
        </form>
      </section>

      <footer>
        <p>Esqueceu sua senha?</p>
        <p>Não possui conta? Crie uma agora!</p>
      </footer>
    </>
  )
}
