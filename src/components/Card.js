import React from 'react'


const Card = ({ children, bg=null, overflow=false }) => (
  <div className={`card box shadow bg-${bg} ` + (overflow && "card-overflow")}>
    {children}
  </div>
)


Card.Body = ({children, px=0, py=0}) => (
  <div className={`card-body px-lg-${px} py-lg-${py}`}>{ children }</div>
)


Card.Header = ({children, pb=0, align="left" }) => (
  <div className={`card-header pb-${pb} text-${align}`}>
    {children}
  </div>
)


Card.Title = ({text}) => (
  <h4 className="card-title">{text}</h4> 
)


export default Card
