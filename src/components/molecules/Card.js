import React from 'react'

const Card = ({imagen, titulo, texto}) => {
    return (
        <article className='card'>
            <img src={imagen} alt='logo azul'/>
            <h2>{titulo}</h2>
            <p>{texto}</p>
        </article>
    )
}

export default Card
