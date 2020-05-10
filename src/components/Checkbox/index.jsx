import React from 'react'
import 'pretty-checkbox'

import './styles.css'

function GroupBox(props) {
  const elements = React.Children.toArray(props.children)
  const { name,tam, className, setValue } = props

  return(
    <div className={`col-md-${tam ? tam : '12'} mb-3 pt-2 ${className}`} >
      <div className="field a-field a-field_a2">
        <span className="mr-2">{props.label} </span>
        {elements.map(element => React.cloneElement(element, { name, setValue }))}
      </div>  
    </div>
  )
}

function Checkbox(props) {
  const { label, value, setValue } = props

  return (
    <div className="pretty p-default p-curve">
      <input type="radio" name={props.name} value={value} onClick={() => setValue(value)} onChange={(e) => {}} />
      <div className="state p-primary-o">
      <label> {label ? label : value}</label>  
      </div>
    </div>
  )
}

export default Checkbox;

export { GroupBox };