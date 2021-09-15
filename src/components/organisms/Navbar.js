import React, { useState } from 'react'
import HamburguerMenu from '../molecules/HamburguerMenu'
import NavOptions from '../molecules/NavOptions'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    
    const handleToggle = () =>{
        setToggle(!toggle)
    }

    return (
        <>
        <nav >
            <h1 >CODING AT</h1>
            <HamburguerMenu toggle={toggle} handleToggle={handleToggle}/>
            <NavOptions toggle={toggle}/>
            
        </nav>
        {
            toggle?
            <div className='nav-toggle'>
                <NavOptions />
            </div>
            :null
        }
        </>
    )
}

export default Navbar
