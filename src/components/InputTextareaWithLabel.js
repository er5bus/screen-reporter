import React from 'react'


export default props => {
  const { onBlur, label, type="text", icon, error=null, ...input } = props
  return (
    <div className="form-group mb-3">
      <div className="form-control-select">
        {<p>{label}</p>}

        <div className={("input-group mb-0 ") + ( error ? " has-danger " : "")}>
          <textarea
            rows="9"
            className={("form-control form-control-alternative") + (error ? " is-invalid ": "")}
            onBlur={onBlur}
            {...input}
          />
        </div>
      </div>
    </div>
  )
}
