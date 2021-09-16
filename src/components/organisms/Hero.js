import React from 'react'
import HeroImage from '../../assets/chip.svg'

const Hero = () => {
    return (            
        <section className='hero'>
                <div>
                <section>
                <h1 className='h1'><strong> Nos enfocamos en generar la mejor <span>solucion</span> para tu negocio.</strong> </h1>
                <p> Generamos productos digitales acorde a sus nececidades </p>
                </section>
                <img src={HeroImage}/>
                </div>
                
                <button className='btn-dark'><a href="#">Contactenos </a></button>
        </section>
    )
}

export default Hero
