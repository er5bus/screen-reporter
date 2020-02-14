import React from 'react'


export default ({title, onClick=f=>f}) =>
  <li className="nav-item">
    <a href="#" onClick={onClick} className="nav-link">
      {title}
    </a>
  </li>
