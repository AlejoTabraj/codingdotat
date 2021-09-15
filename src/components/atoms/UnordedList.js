import React from 'react'

const UnordedList = ({ children, toggle }) => {
    return (
        <ul className={`${toggle ? 'toggle': ''}`}>
            {children}
        </ul>
    )
}

export default UnordedList
