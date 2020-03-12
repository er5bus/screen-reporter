import React from 'react'


export default ({ onBlur, label, type="text", icon, error=null, ...input }) => (
  <div className="form-group">
    <div className="form-control-select">
      {<p>{label}</p>}

      <div className={("input-group mb-0 ") + ( error ? " has-danger " : "")}>
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
  </div>
)
