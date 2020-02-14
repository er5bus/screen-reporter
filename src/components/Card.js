import React from 'react'


export default ({ children, mt=400, px=0, py=0 }) =>
  <div className={`card card-profile shadow mt--${mt}`}>
    <div className={`card-body px-lg-${px} py-lg-${py}`}>
      { children }
    </div>
  </div>

