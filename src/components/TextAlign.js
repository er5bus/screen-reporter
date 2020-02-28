import React from 'react'


export default ({ children, align='center', mb=0, mt=0 }) =>
  <div className={`text-${align} mb-${mb} mt-${mt}`}>
    {children}
  </div>

