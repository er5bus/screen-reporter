import React from 'react'
import Select , { components } from 'react-select'


const ControlComponent = props => (
  <div className="form-control-select">
    {<p>{props.selectProps.label}</p>}
    <components.Control {...props} />
  </div>
)


export default props => {
  const { onBlur, onChange, error=null, ...input } = props
  return (
      <div className={("form-group mb-3 ") + ( error ? " has-danger " : "")}>
        <Select
          className={ (error ? " is-invalid ": "")}
          onChange={onBlur}
          components={{ Control: ControlComponent }}
          {...input}
        />
      </div>
  )
}

