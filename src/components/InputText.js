import React from 'react'


export default props => {
  const { onBlur, type="text", icon, error=null, ...input } = props
  return (
    <div className="form-group">
      <div className={("input-group input-group-alternative mb-3 ") + ( error ? " has-danger " : "")}>
        {
          icon &&
          <div className="input-group-prepend">
            <span className="input-group-text"><i className={`ni ${icon}`}></i></span>
          </div>
        }
        <input
          className={("form-control ") + (error ? " is-invalid ": "")}
          type={type}
          onBlur={onBlur}
          {...input}
        />
      </div>
    </div>
  )
}
