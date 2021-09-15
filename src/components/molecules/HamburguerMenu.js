import React from 'react'
import Line from '../atoms/Line'

const HamburguerMenu = ({toggle, handleToggle}) => {
    return (
        <label className={`${toggle?'move': ''}`} onClick={ _ => handleToggle()}>
            <Line clase={'uno'}/>
            <Line clase={'dos'}/>
            <Line clase={'tres'}/>
        </label>
    )
}

export default HamburguerMenu
