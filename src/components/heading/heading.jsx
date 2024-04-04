import React from 'react'
import "../../App.css";

const heading = ({ number, text}) => {
  return (
    <h5 style={{color: 'var(--color-white)'}}><span>{number}</span>{text}</h5>
  )
}

export default heading