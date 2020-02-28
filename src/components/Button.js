import React from 'react'


export default ({ text, type="submit", disabled, onClick=f=>f, sm=false, style='default' }) =>
  <button type={type} disabled={disabled} onClick={onClick} className={`btn ${(sm && 'btn-sm')} btn-${style}`}>
    {text}
  </button>
