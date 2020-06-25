import React from "react"
import "./from.styles.scss"

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='group'>
    <input type='text' onChange={handleChange} {...otherProps} className='input' />
    {label ? <label className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}>{label}</label> : null}
  </div>
)

export default FormInput
