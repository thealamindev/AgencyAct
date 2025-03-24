import React from 'react'

const Heading = ({text,className}) => {
  
  return (
    <h3 className={`${className}`}>{text}</h3>
  )
}

export default Heading