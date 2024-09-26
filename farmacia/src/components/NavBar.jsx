import React from 'react'

function NavBar() {
  return (
    <div className='nav'>
      <div className='logo'>
        <img src="./public/Imagens/LogoMenor.png" alt="LogoMenor" />
      </div>
        <label htmlFor="">Início</label>
        <label htmlFor="">Medicamentos</label>
        <label htmlFor="">Sobre Nós</label>
        <div className='botoes'>
            <button className='botao'>Login</button>
            <button className='botao'>Cadastrar-se</button>
        </div>
    </div>
  )
}

export default NavBar
