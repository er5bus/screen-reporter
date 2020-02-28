import React from 'react'


const List = ({children, type="unstyled"}) => (
  <ul className={`list-${type}`}>
    {children}
  </ul>
)


List.Item = ({children, py=2}) => (
  <li className={`py-${py}`}>
    {children}
  </li>
)


export default List
