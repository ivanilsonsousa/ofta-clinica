import React from 'react'

import './styles.css'

function Button(props) {

  return (
    <button 
      className={`button-default ${props.cancel ? 'cancel' : 'confirm'}  ${props.className}`} 
      onClick={() => props.onClick ? props.onClick() : {}}
    >
      {props.text ? props.text : 'Ok'}
    </button>
  )
}

export default Button;