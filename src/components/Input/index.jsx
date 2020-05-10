import React from 'react'
import InputMask from 'react-input-mask';

import './styles.css'

function Input(props) {
  const { tam, className, mask, maskChar, placeholder, label, onChange } = props

  return (
    <div className={`col-md-${tam ? tam : '12'} mb-3 ${className}`} hidden={props.hidden} >
      <label className="field a-field a-field_a2">
        {mask ? 
          <InputMask 
            className="field__input a-field__input" 
            mask={mask} 
            maskChar={maskChar ? maskChar : ' '} 
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder} 
            required 
          />
          :
          <input className="field__input a-field__input" type={props.type ? props.type : 'text'} onChange={e => onChange(e.target.value)} placeholder={placeholder} required />}
          {props.info && <i className="fas fa-question-circle" onClick={() => alert(label)} /> }
        <span className="a-field__label-wrap">
        <span className="a-field__label">{label}</span>
        </span>
      </label>  
    </div>
  )
}

export default Input;