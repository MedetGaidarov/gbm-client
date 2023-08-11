

import React from 'react'
import './Button.css'
function Button({text, handleClick}) {
  return (
    <div>
        
        <button className = 'btn'onClick={handleClick}>{text}</button>
    </div>
  )
}

export default Button