import '../App.css'
import NavBar from '../components/NavBar'

function Login() {
  return (
    <div className='login'>
      <div className='loginMenor'>
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
      </div>
      <div className='divImg'>
        <img src="./public/Imagens/LogoMaior.png" alt="" />
      </div>
    </div>
  )
}

export default Login
