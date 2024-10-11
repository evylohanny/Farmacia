import '../App.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
      <Link to = '/'><img className='seta' src="./public/Imagens/seta.png"/></Link>
      <div className='login'>
        <div className='loginMenor'>
          <h1>Log In</h1>
          <div className='menorLogin'>
            <label htmlFor="">Email:</label>
            <input type="email" />
          </div>
          <br />
          <div className='menorLogin'>
            <label htmlFor="">Senha:</label>
            <input type="password"/>
          </div>
          <div className='botaooLogin'>
            <button className='botaoLogin'>Login</button>
          </div>
          <div className='cadastro'>
            <Link className='escrita'>Já possui cadastro?</Link>
          </div>
        </div>
        <div className='divImg'>
          <img src="./public/Imagens/LogoMaior.png"/>
        </div>
      </div>
    </div>
  )
}

export default Login
