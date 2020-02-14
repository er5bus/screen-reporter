import React from 'react'


export default React.forwardRef((props, ref) => (
  <div className="form-group">
    <input type="text" className="form-control form-control-alternative" ref={ref} placeholder={props.placeholder} />
  </div>
))
