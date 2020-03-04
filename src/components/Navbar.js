import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'


import logo from '../assets/img/logo.png'


const Navbar = ({ children }) => (
  <header className="header-global">
    <nav id="navbar-main" className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom headroom--top headroom--not-bottom">
      <div className="container">
        <a className="navbar-brand" href="https://latech.io">
          <img src={logo} />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbar_global">
          <div className="navbar-collapse-header">
            <div className="row">
              <div className="col-6 collapse-brand">
                <a href="https://latech.io">
                  <img src={logo} />
                </a>
              </div>
              <div className="col-6 collapse-close">
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
          <ul className="navbar-nav ml-lg-auto">
            {children}
          </ul>
        </div>
      </div>
    </nav>
  </header>
)


Navbar.Item = ({text, disabled=false, onClick=f=>f}) => (
  <li className="nav-item">
    <a href={window.location.href} onClick={!disabled ? onClick : undefined} className="nav-link">
      {text}
    </a>
  </li>
)


Navbar.Link = ({text, ...props}) => (
  <li className="nav-item">
    <NavLink className="nav-link" {...props}>
      {text}
    </NavLink>
  </li>
)


Navbar.Dropdown = ({text, children}) =>  {

  const [showMenu, setShowMenu] = React.useState(false)

  return (
    <li onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)} className="nav-item dropdown">
      <a className="nav-link" role="button">
        <i className="ni ni-settings"></i>
        <span className="nav-link-inner--text">{text}</span>
      </a>
      <div className={"dropdown-menu " + (showMenu && "show")}>
        { children }
      </div>
    </li>
  )
}


Navbar.DropdownLinkItem = ({text, ...props}) => (
  <NavLink className="dropdown-item" {...props}>{text}</NavLink>
)

Navbar.DropdownItem = ({text, ...props}) => (
  <a className="dropdown-item" {...props}>{text}</a>
)


export default Navbar
