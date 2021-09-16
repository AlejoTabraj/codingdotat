import React from 'react'
import Card from '../molecules/Card'
import WebDesign from '../../assets/web-design.png'
import SEO from '../../assets/seo.png'
import Marketing from '../../assets/marketing.png'
import GraphicDesign from '../../assets/graphics-design.png'

const Services = () => {
    return (
        <div className='services'>
            <section className='cards-container'>
            <div className='description'>
                <h2>Explore los servicios que le ofrecemos</h2>
                <p>Buscamos que nuestros clientes puedan despegar y romperla junto a nosotros

Planeamos cuidadosamente el caso de estudio y cada paso de la implementación para ir midiendo que el resultado se adecue a nuestros estandares de calidad.</p>
                <button className='btn btn-dark'><a>Hablemos</a></button>
            </div>
            <section>
            <Card imagen={WebDesign} titulo={'Web Design'} texto={'Evaluamos su rubro y buscamos el mejor diseño que se adapte a sus necesidades.'} />
            <Card imagen={SEO} titulo={'SEO'} texto={'Implementamos o mejoramos el SEO de su página par que su negocio pueda llegar a mayor publico.'} />
            <Card imagen={Marketing} titulo={'Marketing'} texto={'El email marketing tiene un exito de 40% sobre las redes sociales unicamente nos enfocamos en hacerlo crecer.'} />
            <Card imagen={GraphicDesign} titulo={'Marketing'} texto={'Nos enfocamos en destacar su marca sobre el resto.'} />
            </section>
            </section>
            <svg id="bg-services"
                     width="100%"
                     viewBox="0 0 1000 800">
                    <defs>
                        <linearGradient id="PSgrad_02" x1="44.279%" x2="0%" y1="76.604%" y2="0%">
                            <stop offset="0%" stop-color="#80ED99" stop-opacity="1"/>
                            <stop offset="100%" stop-color="#2A0944" stop-opacity="1"/>
                        </linearGradient>
                    </defs>
                    <path fill-rule="evenodd" opacity="1" fill="url(#PSgrad_02)"
                          d="M801.878,3.146 L116.381,128.537 C26.052,145.060 -21.235,229.535 9.856,312.073 L159.806,710.157 C184.515,775.753 264.901,810.334 338.020,792.380 L907.021,652.668 C972.912,636.489 1019.383,573.766 1011.301,510.470 L962.013,124.412 C951.950,45.594 881.254,-11.373 801.878,3.146 Z"/>
            </svg>                
        </div>
    )
}

export default Services
