import React from 'react'
import './Card.css'
const Card = () => {
  return (
    <div className='Card'>

      <figure className='Img-Container'>
        <img className='Pokemon-Img' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'/>
        <figcaption>This is image</figcaption>
      </figure>

      <div className='Pokemon-Info'>
           <div className='Height'>
             <h3>Height</h3>
             <p>90cm</p>
           </div>

           <div className='Weight'>
             <h3>Weight</h3>
             <p>70kg</p>
           </div>
      </div>
      
    </div>
  )
}

export default Card
