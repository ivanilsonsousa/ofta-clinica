import React from 'react'


import './styles.css'

function ContainerOption(props) {

  return (
    <ul className={`ks-cboxtags ${props.className}`}>
      {props.children}
    </ul>
  )
}

function Option(props) {
  const { active } = props

  return (
    <li>
      <input 
        type="checkbox" 
        id={props.value} 
        value={props.value} 
        onClick={(e) => console.log("sss")} 
        onChange={(e) => active ? active(!e.target.checked) : {}} 
      />
      <label htmlFor={props.value}>{props.text}</label>
    </li>
  )
}

export default Option;

export { ContainerOption };