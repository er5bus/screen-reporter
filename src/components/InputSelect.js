import React from 'react'
import Select , { components } from 'react-select'


const ControlComponent = props => (
  <div className="form-control-select">
    {<p>{props.selectProps.label}</p>}
    <components.Control {...props} />
  </div>
)


export default props => {
  const { onBlur=f=>f, onChange=f=>f, error=null, ...input } = props
  return (
      <div className={("form-group mb-3 ") + ( error ? " has-danger " : "")}>
        <Select
          className={ (error ? " is-invalid ": "")}
          blur={() => console.log('jjj')}
          onChange={(choice) => {
            onBlur.apply(null, [choice.value])
            if (onChange){
              onChange.apply(null, [choice])
            }
          }}
          components={{ Control: ControlComponent }}
          {...input}
        />
      </div>
  )
}

