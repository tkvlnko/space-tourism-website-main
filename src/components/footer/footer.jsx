import React from 'react'


const footer = () => {

  const paragraphStyles = {
    fontSize: '12px',
    lineHeight: '16px',
    color: '#ffffff50',
    margin: '0'
  };


  return (
    <footer style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', backgroundColor: '#0d0f1b', padding: '3rem'}}>
        <p style={paragraphStyles}>&copy; Made by Taya Kovalenko</p>
        <p style={paragraphStyles}>Design: Frontend Mentor</p>
    </footer>
    
  )
}

export default footer