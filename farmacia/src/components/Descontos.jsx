import React from 'react'

function Descontos() {
  return (
    <div>
      <h1 className='titulo'>Não perca essas promos maravilhosas!</h1>
      <div className='imagens'>
        <div className='img1'>
            <img src="./public/Imagens/Camiseta_Farmarcia.png" alt="camiseta" className='umaCamiseta'/>
            <p className='textinho'>Em comemoração da nossa Grande <br /> Inauguração, na compra de valor de R$100,00 <br /> leve uma camiseta Grátis!</p>
        </div>
        <div className='img2'>
            <img src="./public/Imagens/Farmarcia_Camisetas.png" alt="camisetas" className='duasCamisetas'/>
            <p className='textinho'>Já na em compras a cima de R$250,00, <br /> você leva não Uma, mas Duas camisetas Grátis!</p>
        </div>
      </div>
    </div>
  )
}

export default Descontos
