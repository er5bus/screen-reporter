import React from 'react'


export default ({ children, mb=0, mt=0 }) =>
  <div className={`text-center mb-${mb} mt-${mt}`}>
    {children}
  </div>

