import React from 'react'


export default props => {
  const { onBlur, type="text", icon, error=null, ...input } = props
  return (
    <div className="form-group">
      <div className={("input-group input-group-alternative mb-3 ") + ( error ? " has-danger " : "")}>
        <textarea 
          rows="3"
          className={("form-control form-control-alternative") + (error ? " is-invalid ": "")}
          onBlur={onBlur}
          {...input}
        />
      </div>
    </div>
  )
}
