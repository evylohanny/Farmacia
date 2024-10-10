import React from 'react'
import { Link } from 'react-router-dom'


function NavBar() {
  
  return (
    <div className='nav'>
      <div className='logo'>
        <img src="./public/Imagens/LogoMenor.png" alt="LogoMenor" className='img' />
      </div>
        <Link to = '/' className='link'>Início</Link>
        <label className='labelNav'>Medicamentos</label>
        <label className='labelNav'>Sobre Nós</label>
        <div>
            <Link to = '/login' className='botaoLink'>Login</Link>
        </div>
    </div>
  )
}

export default NavBar
