import React from 'react'


export default ({children, pt=0, pb=0}) =>
  <div className={`row pt-${pt} pb-${pb} justify-content-center`}>
    { children }
  </div>
