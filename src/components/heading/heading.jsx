import React from 'react'
import "../../App.css";
import "./heading.css"

const heading = ({ number, text}) => {
  return (
    <h5 className='heading'><span>{number}</span>{text}</h5>
  )
}

export default heading


    
