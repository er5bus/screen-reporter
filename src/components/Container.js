import React from 'react'


export default ( { fullWidth = true, children, mt=400}) =>
  <main>
    <section className="section-profile-cover section-shaped my-0">
      <div className="shape shape-style-1 shape-primary alpha-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="separator separator-bottom separator-skew">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon className="fill-white" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </section>
    <section className="section">
      <div className={(fullWidth ? 'container-fluid' : 'container') + (` mt--${mt}`) }>
        { children }
      </div>
    </section>
  </main>

