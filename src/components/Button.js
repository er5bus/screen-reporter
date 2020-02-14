import React from 'react'


export default ({ text, onClick=f=>f, type = 'default' }) =>
  <button onClick={onClick} className={`btn btn-${type}`}>
    {text}
  </button>
