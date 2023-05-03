import React from 'react'
import "./UserCard.css"

export const UserCard = ({persona}) => {
    const {nombre, apellido} = persona
    return (
    <div className='userCard'>
        <p>{nombre}</p>
        <p>{apellido}</p>
    </div>
  )
}
