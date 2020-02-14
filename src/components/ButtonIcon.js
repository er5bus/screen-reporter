import React from 'react'


export default ({text, icon, onClick=f=>f}) =>
  <button onClick={onClick} className="btn btn-neutral btn-icon">
      <img className="btn-img" src={icon} />
  </button>

