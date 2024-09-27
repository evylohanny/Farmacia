import React from 'react'

function Corpo() {
  return (
    <div className='divMaior'>
      <div className='divLogo'>
        <img src="./public/Imagens/LogoMaior.png" alt="logomaior" className='logoMaior'/>
        <div className='textoInformativo'>
          <h1>Novidades na Área</h1>
          <p className='texto'>Aproveite nossa semana de inauguração,<br /> se casdastre no nosso site e concorra a descontos incríveis!</p>
          <button className='botaoo'>Cadastrar-se</button>
        </div>
      </div>
    </div>
  )
}

export default Corpo
