import React from 'react'


export default ({ children, xl=1, lg=1, md=1, sm=1 }) =>
  <div className={`col-xl-${xl} col-lg-${lg} col-md-${md} col-sm-${sm}`}>
    { children }
  </div>
