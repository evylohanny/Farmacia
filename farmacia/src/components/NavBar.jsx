import React from 'react'
import { useState } from 'react'
import Login from './Login'

function NavBar() {
  const [login, setLogin] = useState()
  return (
    <div className='nav'>
      <div className='logo'>
        <img src="./public/Imagens/LogoMenor.png" alt="LogoMenor" />
      </div>
        <label htmlFor="">Início</label>
        <label htmlFor="">Medicamentos</label>
        <label htmlFor="">Sobre Nós</label>
        <div>
            <button className='botao'>Login</button>
        </div>
    </div>
  )
}

export default NavBar
