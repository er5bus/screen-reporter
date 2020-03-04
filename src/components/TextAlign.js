import React from 'react'


export default ({ children, align='center', mb=0, mt=0, mr=0 }) =>
  <div className={`text-${align} mb-${mb} mt-${mt} mr-${mr}`}>
    {children}
  </div>

