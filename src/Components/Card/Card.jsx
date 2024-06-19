import React from 'react'
import './Card.css'
import { Link } from 'react-scroll'
const Card = ({emoji, heading, detail}) => {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <Link spy={true} to='Contact' smooth={true}>

        <button className="c-button">LEARN MORE</button>
        </Link>
    </div>
  )
}

export default Card