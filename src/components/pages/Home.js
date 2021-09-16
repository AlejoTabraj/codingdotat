import React from 'react'
import Hero from '../organisms/Hero'
import Services from '../organisms/Services'
import HomeTempleate from '../templates/HomeTempleate'

const Home = () => {
    return (
        <div>
            <HomeTempleate />
            <Hero />
            <Services />
        </div>
    )
}

export default Home