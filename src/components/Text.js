import React from 'react'

export default ({align='left', mb=0, mt=0, object}) => {
  const renderElem = () => {
    if (typeof object === 'string' && !/<[a-z/][\s\S]*>/i.test(object)){
      return (<p key={0} className="m-0 p-0"><strong key={0}>Oops! </strong>{object}</p>)
    }
    if (typeof object === 'object' && Object.entries(object).length){
      return Object.entries(object).map(([key, value], i) =>
        (<p key={key} className="m-0 p-0"><strong key={key}>{key.toUpperCase()}: </strong>{Array.isArray(value) ? value.join(', ') : value}</p>)
      )
    }
    return (<p key={0} className="m-0 p-0"><strong key={0}>Oops! </strong>Something went wrong</p>)
  }

  return (
    <div className="text-center">
    {renderElem(object)}
    </div>
  )
}
