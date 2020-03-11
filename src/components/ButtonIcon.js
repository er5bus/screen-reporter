import React from 'react'


export default ({text, icon, loader, showLoader=false, onClick=f=>f}) =>
  <button disabled={showLoader} onClick={onClick} className="btn btn-neutral btn-icon">
    <img className="btn-img" src={icon} />
    <span className="btn-text">{text}</span>
    { showLoader && <img className="btn-img ml-3" src={loader} />}
  </button>

