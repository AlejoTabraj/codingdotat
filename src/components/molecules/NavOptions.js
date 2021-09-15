import React from 'react'
import ListItem from '../atoms/ListItem'
import UnordedList from '../atoms/UnordedList'

let options = ['servicios', 'soluciones', 'contacto']

const NavOptions = ({toggle}) => {
    
    return (
        <UnordedList def={toggle}>
            {options && options.map( element => <ListItem>{element}</ListItem>)}
        </UnordedList>
    )
}

export default NavOptions
